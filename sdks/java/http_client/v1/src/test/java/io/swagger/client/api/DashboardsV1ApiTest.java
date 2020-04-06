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
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.RuntimeError;
import io.swagger.client.model.V1Dashboard;
import io.swagger.client.model.V1ListDashboardsResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DashboardsV1Api
 */
@Ignore
public class DashboardsV1ApiTest {

    private final DashboardsV1Api api = new DashboardsV1Api();

    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1CreateDashboardTest() throws ApiException {
        String owner = null;
        V1Dashboard body = null;
        V1Dashboard response = api.dashboardsV1CreateDashboard(owner, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1DeleteDashboardTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.dashboardsV1DeleteDashboard(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1GetDashboardTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1Dashboard response = api.dashboardsV1GetDashboard(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1ListDashboardNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListDashboardsResponse response = api.dashboardsV1ListDashboardNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1ListDashboardsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListDashboardsResponse response = api.dashboardsV1ListDashboards(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1PatchDashboardTest() throws ApiException {
        String owner = null;
        String dashboardUuid = null;
        V1Dashboard body = null;
        V1Dashboard response = api.dashboardsV1PatchDashboard(owner, dashboardUuid, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void dashboardsV1UpdateDashboardTest() throws ApiException {
        String owner = null;
        String dashboardUuid = null;
        V1Dashboard body = null;
        V1Dashboard response = api.dashboardsV1UpdateDashboard(owner, dashboardUuid, body);

        // TODO: test validations
    }
    
}