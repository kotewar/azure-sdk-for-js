// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import sinon from "sinon";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { RouterClient } from "../../src";
import { baseUri, generateToken } from "../public/utils/connection";

describe("[Mocked] RouterClient", async () => {
  afterEach(() => {
    sinon.restore();
  });

  it("can instantiate", async () => {
    new RouterClient(baseUri, new AzureCommunicationTokenCredential(generateToken()));
  });
});
