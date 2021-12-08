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
  EncryptionProtector,
  EncryptionProtectorsListByServerOptionalParams,
  EncryptionProtectorName,
  EncryptionProtectorsGetOptionalParams,
  EncryptionProtectorsGetResponse,
  EncryptionProtectorsCreateOrUpdateOptionalParams,
  EncryptionProtectorsCreateOrUpdateResponse,
  EncryptionProtectorsRevalidateOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EncryptionProtectors. */
export interface EncryptionProtectors {
  /**
   * Gets a list of server encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: EncryptionProtectorsListByServerOptionalParams
  ): PagedAsyncIterableIterator<EncryptionProtector>;
  /**
   * Gets a server encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: EncryptionProtectorsGetOptionalParams
  ): Promise<EncryptionProtectorsGetResponse>;
  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: EncryptionProtector,
    options?: EncryptionProtectorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EncryptionProtectorsCreateOrUpdateResponse>,
      EncryptionProtectorsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: EncryptionProtector,
    options?: EncryptionProtectorsCreateOrUpdateOptionalParams
  ): Promise<EncryptionProtectorsCreateOrUpdateResponse>;
  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  beginRevalidate(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: EncryptionProtectorsRevalidateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  beginRevalidateAndWait(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: EncryptionProtectorsRevalidateOptionalParams
  ): Promise<void>;
}
