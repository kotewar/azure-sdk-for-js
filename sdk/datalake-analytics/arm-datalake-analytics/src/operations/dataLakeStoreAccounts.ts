/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataLakeStoreAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataLakeAnalyticsAccountManagementClientContext } from "../dataLakeAnalyticsAccountManagementClientContext";
import {
  DataLakeStoreAccountInformation,
  DataLakeStoreAccountsListByAccountNextOptionalParams,
  DataLakeStoreAccountsListByAccountOptionalParams,
  DataLakeStoreAccountsListByAccountResponse,
  DataLakeStoreAccountsAddOptionalParams,
  DataLakeStoreAccountsGetOptionalParams,
  DataLakeStoreAccountsGetResponse,
  DataLakeStoreAccountsDeleteOptionalParams,
  DataLakeStoreAccountsListByAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataLakeStoreAccounts operations. */
export class DataLakeStoreAccountsImpl implements DataLakeStoreAccounts {
  private readonly client: DataLakeAnalyticsAccountManagementClientContext;

  /**
   * Initialize a new instance of the class DataLakeStoreAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: DataLakeAnalyticsAccountManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account.
   * The response includes a link to the next page, if any.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  public listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: DataLakeStoreAccountsListByAccountOptionalParams
  ): PagedAsyncIterableIterator<DataLakeStoreAccountInformation> {
    const iter = this.listByAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: DataLakeStoreAccountsListByAccountOptionalParams
  ): AsyncIterableIterator<DataLakeStoreAccountInformation[]> {
    let result = await this._listByAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: DataLakeStoreAccountsListByAccountOptionalParams
  ): AsyncIterableIterator<DataLakeStoreAccountInformation> {
    for await (const page of this.listByAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account.
   * The response includes a link to the next page, if any.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  private _listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: DataLakeStoreAccountsListByAccountOptionalParams
  ): Promise<DataLakeStoreAccountsListByAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByAccountOperationSpec
    );
  }

  /**
   * Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param dataLakeStoreAccountName The name of the Data Lake Store account to add.
   * @param options The options parameters.
   */
  add(
    resourceGroupName: string,
    accountName: string,
    dataLakeStoreAccountName: string,
    options?: DataLakeStoreAccountsAddOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, dataLakeStoreAccountName, options },
      addOperationSpec
    );
  }

  /**
   * Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param dataLakeStoreAccountName The name of the Data Lake Store account to retrieve
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    dataLakeStoreAccountName: string,
    options?: DataLakeStoreAccountsGetOptionalParams
  ): Promise<DataLakeStoreAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, dataLakeStoreAccountName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param dataLakeStoreAccountName The name of the Data Lake Store account to remove
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    dataLakeStoreAccountName: string,
    options?: DataLakeStoreAccountsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, dataLakeStoreAccountName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByAccountNext
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param nextLink The nextLink from the previous successful call to the ListByAccount method.
   * @param options The options parameters.
   */
  private _listByAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: DataLakeStoreAccountsListByAccountNextOptionalParams
  ): Promise<DataLakeStoreAccountsListByAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataLakeStoreAccountInformationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.select,
    Parameters.orderby,
    Parameters.count,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.dataLakeStoreAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataLakeStoreAccountInformation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.dataLakeStoreAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.dataLakeStoreAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataLakeStoreAccountInformationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.select,
    Parameters.orderby,
    Parameters.count,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
