import * as _ from 'lodash';
import * as moment from 'moment';
import * as Plotly from 'plotly.js';
import * as React from 'react';

import { CHARTS_COLORS } from '../../constants/charts';
import { Trace } from '../../interfaces/dateTrace';
import { ChartModel, ChartTypes, TraceModes, TraceTypes } from '../../models/chart';
import { ChartViewModel } from '../../models/chartView';
import { MetricModel } from '../../models/metric';
import Chart from '../charts/chart';
import { Empty } from '../empty/empty';

import './chart.less';

interface Props {
  view: ChartViewModel;
  metrics: MetricModel[];
  params: { [id: number]: { [key: string]: any } };
  resource: string;
  className: string;
  onRemoveChart: (chartIdx: number) => void;
}

export default class ChartView extends React.Component<Props, {}> {

  public render() {
    const convertTimeFormat = (d: string) => {
      return moment(d).format('YYYY-MM-DD HH:mm:ss');
    };

    const getTraceMode = (chartType: ChartTypes): TraceModes => {
      if (chartType === 'line') {
        return 'lines';
      } else if (chartType === 'bar') {
        return 'none';
      } else if (chartType === 'scatter') {
        return 'markers';
      }
      return 'lines';
    };

    const getTraceType = (chartType: ChartTypes): TraceTypes => {
      if (chartType === 'line') {
        return 'scatter';
      } else if (chartType === 'bar') {
        return 'bar';
      } else if (chartType === 'scatter') {
        return 'scatter';
      }
      return 'scatter';
    };

    const ensureChartType = (chartType: ChartTypes,
                             yData: { [key: string]: Plotly.Datum[] }): ChartTypes => {
      // If chart type is not line or scatter, we don't need to do anything else.
      if (chartType !== 'line') {
        return chartType;
      }

      // Check if we need to convert to bar chart
      let isLine = false;
      for (const traceName of Object.keys(yData)) {
        if (yData[traceName].length > 1) {
          isLine = true;
          break;
        }
      }

      return isLine ? chartType : 'bar';
    };

    const getTracePrefix = (metric: MetricModel) => {
      return this.props.resource === 'groups' ?
        `${metric.experiment}` :
        '';
    };

    const getParamValue = (metric: MetricModel, param: string) => {
      return metric.experiment in this.props.params && param in this.props.params[metric.experiment]
        ? this.props.params[metric.experiment][param]
        : null;
    };

    const getTraceName = (metricName: string | number, prefix?: string | number) => {
      return prefix ? `${prefix}` : metricName as string;
    };

    const getTraceNamesByMetrics = (chart: ChartModel) => {
      const traceNamesByMetrics: { [key: string]: string[] } = {};
      for (const metric of this.props.metrics) {
        if (chart.experiments &&
          chart.experiments.length > 0 &&
          chart.experiments.indexOf(`${metric.experiment}`) === -1) {
          continue;
        }

        const prefix = getTracePrefix(metric);
        chart.metricNames.forEach((metricName, idx) => {
          const traceName = getTraceName(metricName, prefix);
          if (metricName in traceNamesByMetrics) {
            traceNamesByMetrics[metricName].push(traceName);
          } else {
            traceNamesByMetrics[metricName] = [traceName];
          }
        });
      }

      return traceNamesByMetrics;
    };

    const getChartYData = (chart: ChartModel, useTraceName: boolean = true) => {
      const dataTraces: { [key: string]: Plotly.Datum[] } = {};
      for (const metric of this.props.metrics) {
        if (chart.experiments &&
          chart.experiments.length > 0 &&
          chart.experiments.indexOf(`${metric.experiment}`) === -1) {
          continue;
        }

        const prefix = getTracePrefix(metric);
        chart.metricNames.forEach((metricName, idx) => {
          const traceName = useTraceName ? getTraceName(metricName, prefix) : metricName;
          if (traceName in dataTraces) {
            dataTraces[traceName].push(metric.values[metricName]);
          } else {
            dataTraces[traceName] = [metric.values[metricName]];
          }
        });
      }

      return dataTraces;
    };

    const getChartXData = (chart: ChartModel, useTraceName: boolean = true) => {
      const dataTraces: { [key: string]: Plotly.Datum[] } = {};
      for (const metric of this.props.metrics) {
        if (chart.experiments &&
          chart.experiments.length > 0 &&
          chart.experiments.indexOf(`${metric.experiment}`) === -1) {
          continue;
        }

        let xValue: number | string;
        if (!_.isNil(chart.paramNames) && chart.paramNames.length > 0) {
          xValue = getParamValue(metric, chart.paramNames[0]);
        } else if (this.props.view.meta.xAxis === 'step' && 'step' in metric.values) {
          xValue = metric.values.step;
        } else {
          xValue = convertTimeFormat(metric.created_at);
        }
        const prefix = getTracePrefix(metric);
        chart.metricNames.forEach((metricName, idx) => {
          const traceName = useTraceName ? getTraceName(metricName, prefix) : metricName;
          if (traceName in dataTraces) {
            dataTraces[traceName].push(xValue);
          } else {
            dataTraces[traceName] = [xValue];
          }
        });
      }

      return dataTraces;
    };

    const getBarTraces = (chart: ChartModel,
                          xData: { [key: string]: Plotly.Datum[] },
                          yData: { [key: string]: Plotly.Datum[] },
                          traceNamesByMetrics: { [key: string]: string[] },
                          traceMode: TraceModes,
                          traceType: TraceTypes) => {
      const traces: { [key: string]: Trace } = {};

      chart.metricNames.forEach((metricName) => {
        if (metricName in traceNamesByMetrics) {
          traceNamesByMetrics[metricName].forEach((traceName, idx) => {
            const data = yData[traceName];

            let y = data.length > 0 ? data[0] : null;
            for (let i = data.length; i--;) {
              if (data[i]) {
                y = data[i];
                break;
              }
            }
            traces[traceName] = {
              x: [traceName],
              y: [y],
              name: traceName,
              mode: traceMode,
              type: traceType,
            };
          });
        }
      });

      // Add colors
      return Object.keys(traces)
        .map((traceName, idx) => {
          const trace = traces[traceName];
          trace.marker = {color: CHARTS_COLORS[idx % CHARTS_COLORS.length]};
          return trace;
        }) as Plotly.PlotData[];
    };

    const getLineTraces = (chart: ChartModel,
                           xData: { [key: string]: Plotly.Datum[] },
                           yData: { [key: string]: Plotly.Datum[] },
                           traceNamesByMetrics: { [key: string]: string[] },
                           traceMode: TraceModes,
                           traceType: TraceTypes) => {
      const traces: { [key: string]: Trace } = {};

      chart.metricNames.forEach((metricName) => {
        if (metricName in traceNamesByMetrics) {
          traceNamesByMetrics[metricName].forEach((traceName, idx) => {
            traces[traceName] = {
              x: xData[traceName],
              y: yData[traceName],
              name: traceName,
              mode: traceMode,
              type: traceType,
            };
          });
        }
      });

      // Add colors
      return Object.keys(traces)
        .map((traceName, idx) => {
          const trace = traces[traceName];
          trace.line = {
            width: 1.7,
            shape: 'spline',
            smoothing: this.props.view.meta.smoothing,
            color: CHARTS_COLORS[idx % CHARTS_COLORS.length],
          } as Partial<Plotly.ScatterLine>;
          return trace;
        }) as Plotly.PlotData[];
    };

    const getBasicTraces = (chart: ChartModel) => {
      const xData = getChartXData(chart);
      const yData = getChartYData(chart);
      const traceNamesByMetrics = getTraceNamesByMetrics(chart);
      const chartType = ensureChartType(chart.type, yData);
      const traceMode = getTraceMode(chartType);
      const traceType = getTraceType(chartType);

      return (traceType === 'bar')
        ? getBarTraces(chart, xData, yData, traceNamesByMetrics, traceMode, traceType)
        : getLineTraces(chart, xData, yData, traceNamesByMetrics, traceMode, traceType);
    };

    const getScatterTraces = (chart: ChartModel) => {
      const xData = getChartXData(chart, false);
      const yData = getChartYData(chart, false);
      const traces: Plotly.PlotData[] = [];
      const traceMode = getTraceMode(chart.type);
      const traceType = getTraceType(chart.type);
      chart.metricNames.forEach((metricName, idx) => {
        traces.push({
          x: xData[metricName],
          y: yData[metricName],
          name: metricName,
          mode: traceMode,
          type: traceType,
          marker: {color: CHARTS_COLORS[idx % CHARTS_COLORS.length]},
        } as Plotly.PlotData);
      });
      return traces;
    };

    const getHistogramTraces = (chart: ChartModel) => {
      const xData: Plotly.Datum[] = [];
      const yData: Plotly.Datum[] = [];
      const metricName = chart.metricNames[0];  // We should only authorize one metric
      const paramName = chart.paramNames[0];  // We should only authorize one param
      for (const metric of this.props.metrics) {
        const paramValue = getParamValue(metric, paramName);
        if (paramValue) {
          xData.push(paramValue);
          yData.push(metric.values[metricName]);
        }
      }

      return [
        {
          name: 'max',
          histfunc: 'max',
          y: yData,
          x: xData,
          type: 'histogram',
          marker: {color: CHARTS_COLORS[0]} as Plotly.PlotMarker,
        }, {
          name: 'avg',
          histfunc: 'avg',
          y: yData,
          x: xData,
          type: 'histogram',
          marker: {color: CHARTS_COLORS[1]} as Plotly.PlotMarker,
        }, {
          name: 'min',
          histfunc: 'min',
          y: yData,
          x: xData,
          type: 'histogram',
          marker: {color: CHARTS_COLORS[2]} as Plotly.PlotMarker,
        },
      ] as Plotly.PlotData[];
    };

    const getParallelTraces = (chart: ChartModel) => {
      const dataTraces: { [key: string]: Plotly.Datum[] } = {};
      for (const metric of this.props.metrics) {
        chart.metricNames.forEach((metricName) => {
          const metricValue = metric.values[metricName];
          if (metricName in dataTraces) {
            dataTraces[metricName].push(metricValue);
          } else {
            dataTraces[metricName] = [metricValue];
          }
        });
        chart.paramNames.forEach((paramName) => {
          const paramValue = this.props.params[metric.experiment][paramName];
          if (paramName in dataTraces) {
            dataTraces[paramName].push(paramValue);
          } else {
            dataTraces[paramName] = [paramValue];
          }
        });
      }
    };

    const getTraces = (chart: ChartModel) => {
      if (chart.type === 'parallel') {
        return getBasicTraces(chart);
      } else if (chart.type === 'histogram') {
        return getHistogramTraces(chart);
      } else if (chart.type === 'scatter') {
        return getScatterTraces(chart);
      }
      return getBasicTraces(chart);
    };

    const getLayout = (chart: ChartModel) => {
      const layout = {
        autosize: true,
        titlefont: {size: 13},
        margin: {
          l: 50,
          r: 20,
          b: 50,
          t: 20,
        },
        showlegend: true,
        legend: {orientation: 'h'},
      } as Plotly.Layout;

      if (chart.type === 'histogram') {
        layout.barmode = 'overlay';
        layout.xaxis = {title: chart.paramNames[0]};
        layout.bargap = 0.05;
        layout.bargroupgap = 0.2;
      } else if (chart.type === 'scatter') {
        layout.hovermode = 'closest';
      }
      return layout;
    };

    const getConfig = (chart: ChartModel) => {
      return {displayModeBar: false} as Plotly.Config;
    };

    const getChart = (chart: ChartModel, idx: number) => {
      return (
        <div className={this.props.className + ' chart-item'} key={chart.name + idx}>
          <div className="chart">
            <h5 className="chart-header">{chart.name}
              <button
                className="btn btn-sm btn-default pull-right"
                onClick={() => this.props.onRemoveChart(idx)}
              >Remove
              </button>
            </h5>
            {<Chart
              data={getTraces(chart)}
              layout={getLayout(chart)}
              config={getConfig(chart)}
              chartType={chart.type}
            />}
          </div>
        </div>
      );
    };

    return (
      <div className="row">
        {this.props.view.charts.length > 0
          ? this.props.view.charts.map((chart, idx) => getChart(chart, idx))
          : Empty(
            'chart',
            'Please add new charts or select a view.')
        }
      </div>
    );
  }
}
