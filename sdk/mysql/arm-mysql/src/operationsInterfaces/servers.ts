/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Server,
  ServersListByResourceGroupOptionalParams,
  ServersListOptionalParams,
  ServerForCreate,
  ServersCreateOptionalParams,
  ServersCreateResponse,
  ServerUpdateParameters,
  ServersUpdateOptionalParams,
  ServersUpdateResponse,
  ServersDeleteOptionalParams,
  ServersGetOptionalParams,
  ServersGetResponse,
  ServersRestartOptionalParams,
  ServersStartOptionalParams,
  ServersStopOptionalParams,
  ServerUpgradeParameters,
  ServersUpgradeOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Servers. */
export interface Servers {
  /**
   * List all the servers in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Server>;
  /**
   * List all the servers in a given subscription.
   * @param options The options parameters.
   */
  list(options?: ServersListOptionalParams): PagedAsyncIterableIterator<Server>;
  /**
   * Creates a new server or updates an existing server. The update action will overwrite the existing
   * server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for creating or updating a server.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerForCreate,
    options?: ServersCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ServersCreateResponse>, ServersCreateResponse>
  >;
  /**
   * Creates a new server or updates an existing server. The update action will overwrite the existing
   * server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for creating or updating a server.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerForCreate,
    options?: ServersCreateOptionalParams
  ): Promise<ServersCreateResponse>;
  /**
   * Updates an existing server. The request body can contain one to many of the properties present in
   * the normal server definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for updating a server.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpdateParameters,
    options?: ServersUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ServersUpdateResponse>, ServersUpdateResponse>
  >;
  /**
   * Updates an existing server. The request body can contain one to many of the properties present in
   * the normal server definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for updating a server.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpdateParameters,
    options?: ServersUpdateOptionalParams
  ): Promise<ServersUpdateResponse>;
  /**
   * Deletes a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    options?: ServersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: ServersGetOptionalParams
  ): Promise<ServersGetResponse>;
  /**
   * Restarts a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    serverName: string,
    options?: ServersRestartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Restarts a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServersRestartOptionalParams
  ): Promise<void>;
  /**
   * Starts a stopped server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    serverName: string,
    options?: ServersStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a stopped server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServersStartOptionalParams
  ): Promise<void>;
  /**
   * Stops a running server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    serverName: string,
    options?: ServersStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stops a running server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServersStopOptionalParams
  ): Promise<void>;
  /**
   * Upgrade server version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for updating a server.
   * @param options The options parameters.
   */
  beginUpgrade(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpgradeParameters,
    options?: ServersUpgradeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Upgrade server version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for updating a server.
   * @param options The options parameters.
   */
  beginUpgradeAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpgradeParameters,
    options?: ServersUpgradeOptionalParams
  ): Promise<void>;
}
