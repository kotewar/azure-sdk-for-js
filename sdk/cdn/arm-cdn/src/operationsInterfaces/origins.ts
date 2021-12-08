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
  Origin,
  OriginsListByEndpointOptionalParams,
  OriginsGetOptionalParams,
  OriginsGetResponse,
  OriginsCreateOptionalParams,
  OriginsCreateResponse,
  OriginUpdateParameters,
  OriginsUpdateOptionalParams,
  OriginsUpdateResponse,
  OriginsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Origins. */
export interface Origins {
  /**
   * Lists all of the existing origins within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginsListByEndpointOptionalParams
  ): PagedAsyncIterableIterator<Origin>;
  /**
   * Gets an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsGetOptionalParams
  ): Promise<OriginsGetResponse>;
  /**
   * Creates a new origin within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin that is unique within the endpoint.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    origin: Origin,
    options?: OriginsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<OriginsCreateResponse>, OriginsCreateResponse>
  >;
  /**
   * Creates a new origin within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin that is unique within the endpoint.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    origin: Origin,
    options?: OriginsCreateOptionalParams
  ): Promise<OriginsCreateResponse>;
  /**
   * Updates an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    originUpdateProperties: OriginUpdateParameters,
    options?: OriginsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<OriginsUpdateResponse>, OriginsUpdateResponse>
  >;
  /**
   * Updates an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    originUpdateProperties: OriginUpdateParameters,
    options?: OriginsUpdateOptionalParams
  ): Promise<OriginsUpdateResponse>;
  /**
   * Deletes an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsDeleteOptionalParams
  ): Promise<void>;
}
