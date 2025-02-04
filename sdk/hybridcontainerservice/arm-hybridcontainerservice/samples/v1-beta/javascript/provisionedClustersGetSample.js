/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridContainerServiceClient } = require("@azure/arm-hybridcontainerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the Hybrid AKS provisioned cluster
 *
 * @summary Gets the Hybrid AKS provisioned cluster
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/GetProvisionedCluster.json
 */
async function getProvisionedCluster() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const provisionedClustersName = "test-hybridakscluster";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.provisionedClustersOperations.get(
    resourceGroupName,
    provisionedClustersName
  );
  console.log(result);
}

getProvisionedCluster().catch(console.error);
