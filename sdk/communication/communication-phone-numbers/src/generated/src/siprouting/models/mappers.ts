/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SipConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipConfiguration",
    modelProperties: {
      domains: {
        serializedName: "domains",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "Domain" } }
        }
      },
      trunks: {
        serializedName: "trunks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "SipTrunk" } }
        }
      },
      routes: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "routes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipTrunkRoute"
            }
          }
        }
      }
    }
  }
};

export const Domain: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Domain",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        required: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SipTrunk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipTrunk",
    modelProperties: {
      sipSignalingPort: {
        serializedName: "sipSignalingPort",
        required: true,
        type: {
          name: "Number"
        }
      },
      enabled: {
        serializedName: "enabled",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      health: {
        serializedName: "health",
        type: {
          name: "Composite",
          className: "Health"
        }
      }
    }
  }
};

export const Health: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Health",
    modelProperties: {
      tls: {
        serializedName: "tls",
        type: {
          name: "Composite",
          className: "Tls"
        }
      },
      ping: {
        serializedName: "ping",
        type: {
          name: "Composite",
          className: "Ping"
        }
      },
      overall: {
        serializedName: "overall",
        type: {
          name: "Composite",
          className: "OverallHealth"
        }
      }
    }
  }
};

export const Tls: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tls",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Ping: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Ping",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OverallHealth: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OverallHealth",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SipTrunkRoute: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipTrunkRoute",
    modelProperties: {
      description: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 256
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      numberPattern: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "numberPattern",
        required: true,
        type: {
          name: "String"
        }
      },
      trunks: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "trunks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "SipRoutingError"
        }
      }
    }
  }
};

export const SipRoutingError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipRoutingError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "SipRoutingError"
        }
      }
    }
  }
};

export const SipConfigurationPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipConfigurationPatch",
    modelProperties: {
      domains: {
        serializedName: "domains",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "DomainPatch" } }
        }
      },
      trunks: {
        serializedName: "trunks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "TrunkPatch" } }
        }
      },
      routes: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "routes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipTrunkRoute"
            }
          }
        }
      }
    }
  }
};

export const DomainPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainPatch",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const TrunkPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrunkPatch",
    modelProperties: {
      sipSignalingPort: {
        serializedName: "sipSignalingPort",
        type: {
          name: "Number"
        }
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RoutesForNumber: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoutesForNumber",
    modelProperties: {
      matchingRoutes: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "matchingRoutes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipTrunkRoute"
            }
          }
        }
      }
    }
  }
};

export const SipRoutingGetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingGetExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SipRoutingPatchExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingPatchExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};
