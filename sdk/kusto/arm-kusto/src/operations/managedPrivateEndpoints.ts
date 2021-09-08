/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedPrivateEndpointsMappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClientContext } from "../kustoManagementClientContext";

/** Class representing a ManagedPrivateEndpoints. */
export class ManagedPrivateEndpoints {
  private readonly client: KustoManagementClientContext;

  /**
   * Create a ManagedPrivateEndpoints.
   * @param {KustoManagementClientContext} client Reference to the service client.
   */
  constructor(client: KustoManagementClientContext) {
    this.client = client;
  }

  /**
   * Checks that the managed private endpoints resource name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param resourceName The name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedPrivateEndpointsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(resourceGroupName: string, clusterName: string, resourceName: Models.ManagedPrivateEndpointsCheckNameRequest, options?: msRest.RequestOptionsBase): Promise<Models.ManagedPrivateEndpointsCheckNameAvailabilityResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param resourceName The name of the resource.
   * @param callback The callback
   */
  checkNameAvailability(resourceGroupName: string, clusterName: string, resourceName: Models.ManagedPrivateEndpointsCheckNameRequest, callback: msRest.ServiceCallback<Models.CheckNameResult>): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param resourceName The name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(resourceGroupName: string, clusterName: string, resourceName: Models.ManagedPrivateEndpointsCheckNameRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameResult>): void;
  checkNameAvailability(resourceGroupName: string, clusterName: string, resourceName: Models.ManagedPrivateEndpointsCheckNameRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameResult>, callback?: msRest.ServiceCallback<Models.CheckNameResult>): Promise<Models.ManagedPrivateEndpointsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        resourceName,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.ManagedPrivateEndpointsCheckNameAvailabilityResponse>;
  }

  /**
   * Returns the list of managed private endpoints.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedPrivateEndpointsListResponse>
   */
  list(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedPrivateEndpointsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.ManagedPrivateEndpointListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedPrivateEndpointListResult>): void;
  list(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedPrivateEndpointListResult>, callback?: msRest.ServiceCallback<Models.ManagedPrivateEndpointListResult>): Promise<Models.ManagedPrivateEndpointsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ManagedPrivateEndpointsListResponse>;
  }

  /**
   * Gets a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedPrivateEndpointsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedPrivateEndpointsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, callback: msRest.ServiceCallback<Models.ManagedPrivateEndpoint>): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedPrivateEndpoint>): void;
  get(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedPrivateEndpoint>, callback?: msRest.ServiceCallback<Models.ManagedPrivateEndpoint>): Promise<Models.ManagedPrivateEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        managedPrivateEndpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedPrivateEndpointsGetResponse>;
  }

  /**
   * Creates a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param parameters The managed private endpoint parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedPrivateEndpointsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, parameters: Models.ManagedPrivateEndpoint, options?: msRest.RequestOptionsBase): Promise<Models.ManagedPrivateEndpointsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,clusterName,managedPrivateEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedPrivateEndpointsCreateOrUpdateResponse>;
  }

  /**
   * Updates a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param parameters The managed private endpoint parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedPrivateEndpointsUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, parameters: Models.ManagedPrivateEndpoint, options?: msRest.RequestOptionsBase): Promise<Models.ManagedPrivateEndpointsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,managedPrivateEndpointName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedPrivateEndpointsUpdateResponse>;
  }

  /**
   * Deletes a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,managedPrivateEndpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param parameters The managed private endpoint parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, parameters: Models.ManagedPrivateEndpoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        managedPrivateEndpointName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param parameters The managed private endpoint parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, parameters: Models.ManagedPrivateEndpoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        managedPrivateEndpointName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a managed private endpoint.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param managedPrivateEndpointName The name of the managed private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, managedPrivateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        managedPrivateEndpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpointsCheckNameAvailability",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "resourceName",
    mapper: {
      ...Mappers.ManagedPrivateEndpointsCheckNameRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.managedPrivateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.managedPrivateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedPrivateEndpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    201: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    202: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.managedPrivateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedPrivateEndpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    202: {
      bodyMapper: Mappers.ManagedPrivateEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.managedPrivateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
