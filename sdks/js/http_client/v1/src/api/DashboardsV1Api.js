// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.72
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RuntimeError', 'model/V1Dashboard', 'model/V1ListDashboardsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RuntimeError'), require('../model/V1Dashboard'), require('../model/V1ListDashboardsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.DashboardsV1Api = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.RuntimeError, root.PolyaxonSdk.V1Dashboard, root.PolyaxonSdk.V1ListDashboardsResponse);
  }
}(this, function(ApiClient, RuntimeError, V1Dashboard, V1ListDashboardsResponse) {
  'use strict';

  /**
   * DashboardsV1 service.
   * @module api/DashboardsV1Api
   * @version 1.0.72
   */

  /**
   * Constructs a new DashboardsV1Api. 
   * @alias module:api/DashboardsV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dashboardsV1CreateDashboard operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1CreateDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~dashboardsV1CreateDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    this.dashboardsV1CreateDashboard = function(owner, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1CreateDashboard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardsV1CreateDashboard");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Dashboard;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1DeleteDashboard operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1DeleteDashboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/DashboardsV1Api~dashboardsV1DeleteDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.dashboardsV1DeleteDashboard = function(owner, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1DeleteDashboard");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling dashboardsV1DeleteDashboard");
      }


      var pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1GetDashboard operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1GetDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/DashboardsV1Api~dashboardsV1GetDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    this.dashboardsV1GetDashboard = function(owner, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1GetDashboard");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling dashboardsV1GetDashboard");
      }


      var pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Dashboard;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1ListDashboardNames operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1ListDashboardNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/DashboardsV1Api~dashboardsV1ListDashboardNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    this.dashboardsV1ListDashboardNames = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1ListDashboardNames");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListDashboardsResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/names', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1ListDashboards operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1ListDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/DashboardsV1Api~dashboardsV1ListDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    this.dashboardsV1ListDashboards = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1ListDashboards");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListDashboardsResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1PatchDashboard operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1PatchDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~dashboardsV1PatchDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    this.dashboardsV1PatchDashboard = function(owner, dashboard_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1PatchDashboard");
      }

      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling dashboardsV1PatchDashboard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardsV1PatchDashboard");
      }


      var pathParams = {
        'owner': owner,
        'dashboard.uuid': dashboard_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Dashboard;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{dashboard.uuid}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardsV1UpdateDashboard operation.
     * @callback module:api/DashboardsV1Api~dashboardsV1UpdateDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner Owner of the namespace
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~dashboardsV1UpdateDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    this.dashboardsV1UpdateDashboard = function(owner, dashboard_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling dashboardsV1UpdateDashboard");
      }

      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling dashboardsV1UpdateDashboard");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardsV1UpdateDashboard");
      }


      var pathParams = {
        'owner': owner,
        'dashboard.uuid': dashboard_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Dashboard;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{dashboard.uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));