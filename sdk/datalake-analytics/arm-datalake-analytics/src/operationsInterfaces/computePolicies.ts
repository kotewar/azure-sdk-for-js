/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ComputePolicy,
  ComputePoliciesListByAccountOptionalParams,
  CreateOrUpdateComputePolicyParameters,
  ComputePoliciesCreateOrUpdateOptionalParams,
  ComputePoliciesCreateOrUpdateResponse,
  ComputePoliciesGetOptionalParams,
  ComputePoliciesGetResponse,
  ComputePoliciesUpdateOptionalParams,
  ComputePoliciesUpdateResponse,
  ComputePoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ComputePolicies. */
export interface ComputePolicies {
  /**
   * Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An
   * account supports, at most, 50 policies
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: ComputePoliciesListByAccountOptionalParams
  ): PagedAsyncIterableIterator<ComputePolicy>;
  /**
   * Creates or updates the specified compute policy. During update, the compute policy with the
   * specified name will be replaced with this new compute policy. An account supports, at most, 50
   * policies
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param computePolicyName The name of the compute policy to create or update.
   * @param parameters Parameters supplied to create or update the compute policy. The max degree of
   *                   parallelism per job property, min priority per job property, or both must be present.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    computePolicyName: string,
    parameters: CreateOrUpdateComputePolicyParameters,
    options?: ComputePoliciesCreateOrUpdateOptionalParams
  ): Promise<ComputePoliciesCreateOrUpdateResponse>;
  /**
   * Gets the specified Data Lake Analytics compute policy.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param computePolicyName The name of the compute policy to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    computePolicyName: string,
    options?: ComputePoliciesGetOptionalParams
  ): Promise<ComputePoliciesGetResponse>;
  /**
   * Updates the specified compute policy.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param computePolicyName The name of the compute policy to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    computePolicyName: string,
    options?: ComputePoliciesUpdateOptionalParams
  ): Promise<ComputePoliciesUpdateResponse>;
  /**
   * Deletes the specified compute policy from the specified Data Lake Analytics account
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param computePolicyName The name of the compute policy to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    computePolicyName: string,
    options?: ComputePoliciesDeleteOptionalParams
  ): Promise<void>;
}
