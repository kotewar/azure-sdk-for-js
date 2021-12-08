/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RestorableMongodbCollections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  RestorableMongodbCollectionGetResult,
  RestorableMongodbCollectionsListOptionalParams,
  RestorableMongodbCollectionsListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RestorableMongodbCollections operations. */
export class RestorableMongodbCollectionsImpl
  implements RestorableMongodbCollections {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class RestorableMongodbCollections class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB MongoDB collections under a
   * specific database.  This helps in scenario where container was accidentally deleted.  This API
   * requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  public list(
    location: string,
    instanceId: string,
    options?: RestorableMongodbCollectionsListOptionalParams
  ): PagedAsyncIterableIterator<RestorableMongodbCollectionGetResult> {
    const iter = this.listPagingAll(location, instanceId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, instanceId, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    instanceId: string,
    options?: RestorableMongodbCollectionsListOptionalParams
  ): AsyncIterableIterator<RestorableMongodbCollectionGetResult[]> {
    let result = await this._list(location, instanceId, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    location: string,
    instanceId: string,
    options?: RestorableMongodbCollectionsListOptionalParams
  ): AsyncIterableIterator<RestorableMongodbCollectionGetResult> {
    for await (const page of this.listPagingPage(
      location,
      instanceId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB MongoDB collections under a
   * specific database.  This helps in scenario where container was accidentally deleted.  This API
   * requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    instanceId: string,
    options?: RestorableMongodbCollectionsListOptionalParams
  ): Promise<RestorableMongodbCollectionsListResponse> {
    return this.client.sendOperationRequest(
      { location, instanceId, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableMongodbCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableMongodbCollectionsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.restorableMongodbDatabaseRid
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
