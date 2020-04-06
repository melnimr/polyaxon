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

// Code generated by go-swagger; DO NOT EDIT.

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new organizations v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for organizations v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientService is the interface for Client methods
type ClientService interface {
	OrganizationsV1CreateOrganization(params *OrganizationsV1CreateOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1CreateOrganizationOK, *OrganizationsV1CreateOrganizationNoContent, error)

	OrganizationsV1CreateOrganizationMember(params *OrganizationsV1CreateOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1CreateOrganizationMemberOK, *OrganizationsV1CreateOrganizationMemberNoContent, error)

	OrganizationsV1DeleteOrganization(params *OrganizationsV1DeleteOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1DeleteOrganizationOK, *OrganizationsV1DeleteOrganizationNoContent, error)

	OrganizationsV1DeleteOrganizationMember(params *OrganizationsV1DeleteOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1DeleteOrganizationMemberOK, *OrganizationsV1DeleteOrganizationMemberNoContent, error)

	OrganizationsV1GetOrganization(params *OrganizationsV1GetOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1GetOrganizationOK, *OrganizationsV1GetOrganizationNoContent, error)

	OrganizationsV1GetOrganizationMember(params *OrganizationsV1GetOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1GetOrganizationMemberOK, *OrganizationsV1GetOrganizationMemberNoContent, error)

	OrganizationsV1ListOrganizationMembers(params *OrganizationsV1ListOrganizationMembersParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationMembersOK, *OrganizationsV1ListOrganizationMembersNoContent, error)

	OrganizationsV1ListOrganizationNames(params *OrganizationsV1ListOrganizationNamesParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationNamesOK, *OrganizationsV1ListOrganizationNamesNoContent, error)

	OrganizationsV1ListOrganizations(params *OrganizationsV1ListOrganizationsParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationsOK, *OrganizationsV1ListOrganizationsNoContent, error)

	OrganizationsV1PatchOrganization(params *OrganizationsV1PatchOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1PatchOrganizationOK, *OrganizationsV1PatchOrganizationNoContent, error)

	OrganizationsV1PatchOrganizationMember(params *OrganizationsV1PatchOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1PatchOrganizationMemberOK, *OrganizationsV1PatchOrganizationMemberNoContent, error)

	OrganizationsV1UpdateOrganization(params *OrganizationsV1UpdateOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1UpdateOrganizationOK, *OrganizationsV1UpdateOrganizationNoContent, error)

	OrganizationsV1UpdateOrganizationMember(params *OrganizationsV1UpdateOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1UpdateOrganizationMemberOK, *OrganizationsV1UpdateOrganizationMemberNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  OrganizationsV1CreateOrganization organizations v1 create organization API
*/
func (a *Client) OrganizationsV1CreateOrganization(params *OrganizationsV1CreateOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1CreateOrganizationOK, *OrganizationsV1CreateOrganizationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1CreateOrganizationParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_CreateOrganization",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/create",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1CreateOrganizationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1CreateOrganizationOK:
		return value, nil, nil
	case *OrganizationsV1CreateOrganizationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1CreateOrganizationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1CreateOrganizationMember organizations v1 create organization member API
*/
func (a *Client) OrganizationsV1CreateOrganizationMember(params *OrganizationsV1CreateOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1CreateOrganizationMemberOK, *OrganizationsV1CreateOrganizationMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1CreateOrganizationMemberParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_CreateOrganizationMember",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/members",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1CreateOrganizationMemberReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1CreateOrganizationMemberOK:
		return value, nil, nil
	case *OrganizationsV1CreateOrganizationMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1CreateOrganizationMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1DeleteOrganization organizations v1 delete organization API
*/
func (a *Client) OrganizationsV1DeleteOrganization(params *OrganizationsV1DeleteOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1DeleteOrganizationOK, *OrganizationsV1DeleteOrganizationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1DeleteOrganizationParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_DeleteOrganization",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1DeleteOrganizationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1DeleteOrganizationOK:
		return value, nil, nil
	case *OrganizationsV1DeleteOrganizationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1DeleteOrganizationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1DeleteOrganizationMember organizations v1 delete organization member API
*/
func (a *Client) OrganizationsV1DeleteOrganizationMember(params *OrganizationsV1DeleteOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1DeleteOrganizationMemberOK, *OrganizationsV1DeleteOrganizationMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1DeleteOrganizationMemberParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_DeleteOrganizationMember",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/members/{user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1DeleteOrganizationMemberReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1DeleteOrganizationMemberOK:
		return value, nil, nil
	case *OrganizationsV1DeleteOrganizationMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1DeleteOrganizationMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1GetOrganization organizations v1 get organization API
*/
func (a *Client) OrganizationsV1GetOrganization(params *OrganizationsV1GetOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1GetOrganizationOK, *OrganizationsV1GetOrganizationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1GetOrganizationParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_GetOrganization",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1GetOrganizationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1GetOrganizationOK:
		return value, nil, nil
	case *OrganizationsV1GetOrganizationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1GetOrganizationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1GetOrganizationMember organizations v1 get organization member API
*/
func (a *Client) OrganizationsV1GetOrganizationMember(params *OrganizationsV1GetOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1GetOrganizationMemberOK, *OrganizationsV1GetOrganizationMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1GetOrganizationMemberParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_GetOrganizationMember",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/members/{user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1GetOrganizationMemberReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1GetOrganizationMemberOK:
		return value, nil, nil
	case *OrganizationsV1GetOrganizationMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1GetOrganizationMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1ListOrganizationMembers organizations v1 list organization members API
*/
func (a *Client) OrganizationsV1ListOrganizationMembers(params *OrganizationsV1ListOrganizationMembersParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationMembersOK, *OrganizationsV1ListOrganizationMembersNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1ListOrganizationMembersParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_ListOrganizationMembers",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/members",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1ListOrganizationMembersReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1ListOrganizationMembersOK:
		return value, nil, nil
	case *OrganizationsV1ListOrganizationMembersNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1ListOrganizationMembersDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1ListOrganizationNames gets versions
*/
func (a *Client) OrganizationsV1ListOrganizationNames(params *OrganizationsV1ListOrganizationNamesParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationNamesOK, *OrganizationsV1ListOrganizationNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1ListOrganizationNamesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_ListOrganizationNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1ListOrganizationNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1ListOrganizationNamesOK:
		return value, nil, nil
	case *OrganizationsV1ListOrganizationNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1ListOrganizationNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1ListOrganizations gets log handler
*/
func (a *Client) OrganizationsV1ListOrganizations(params *OrganizationsV1ListOrganizationsParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1ListOrganizationsOK, *OrganizationsV1ListOrganizationsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1ListOrganizationsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_ListOrganizations",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/list",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1ListOrganizationsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1ListOrganizationsOK:
		return value, nil, nil
	case *OrganizationsV1ListOrganizationsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1ListOrganizationsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1PatchOrganization organizations v1 patch organization API
*/
func (a *Client) OrganizationsV1PatchOrganization(params *OrganizationsV1PatchOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1PatchOrganizationOK, *OrganizationsV1PatchOrganizationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1PatchOrganizationParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_PatchOrganization",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1PatchOrganizationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1PatchOrganizationOK:
		return value, nil, nil
	case *OrganizationsV1PatchOrganizationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1PatchOrganizationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1PatchOrganizationMember organizations v1 patch organization member API
*/
func (a *Client) OrganizationsV1PatchOrganizationMember(params *OrganizationsV1PatchOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1PatchOrganizationMemberOK, *OrganizationsV1PatchOrganizationMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1PatchOrganizationMemberParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_PatchOrganizationMember",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/members/{member.user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1PatchOrganizationMemberReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1PatchOrganizationMemberOK:
		return value, nil, nil
	case *OrganizationsV1PatchOrganizationMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1PatchOrganizationMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1UpdateOrganization organizations v1 update organization API
*/
func (a *Client) OrganizationsV1UpdateOrganization(params *OrganizationsV1UpdateOrganizationParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1UpdateOrganizationOK, *OrganizationsV1UpdateOrganizationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1UpdateOrganizationParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_UpdateOrganization",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1UpdateOrganizationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1UpdateOrganizationOK:
		return value, nil, nil
	case *OrganizationsV1UpdateOrganizationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1UpdateOrganizationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  OrganizationsV1UpdateOrganizationMember organizations v1 update organization member API
*/
func (a *Client) OrganizationsV1UpdateOrganizationMember(params *OrganizationsV1UpdateOrganizationMemberParams, authInfo runtime.ClientAuthInfoWriter) (*OrganizationsV1UpdateOrganizationMemberOK, *OrganizationsV1UpdateOrganizationMemberNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOrganizationsV1UpdateOrganizationMemberParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "OrganizationsV1_UpdateOrganizationMember",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/members/{member.user}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &OrganizationsV1UpdateOrganizationMemberReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *OrganizationsV1UpdateOrganizationMemberOK:
		return value, nil, nil
	case *OrganizationsV1UpdateOrganizationMemberNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*OrganizationsV1UpdateOrganizationMemberDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}