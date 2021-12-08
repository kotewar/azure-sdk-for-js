/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DirectLine } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";
import {
  SiteInfo,
  RegenerateKeysChannelName,
  DirectLineRegenerateKeysOptionalParams,
  DirectLineRegenerateKeysResponse
} from "../models";

/** Class containing DirectLine operations. */
export class DirectLineImpl implements DirectLine {
  private readonly client: AzureBotServiceContext;

  /**
   * Initialize a new instance of the class DirectLine class.
   * @param client Reference to the service client
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService
   * resource
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Channel resource for which keys are to be regenerated.
   * @param parameters The parameters to provide for the created bot.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    resourceName: string,
    channelName: RegenerateKeysChannelName,
    parameters: SiteInfo,
    options?: DirectLineRegenerateKeysOptionalParams
  ): Promise<DirectLineRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, parameters, options },
      regenerateKeysOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}/regeneratekeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BotChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName2
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
