import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisvideo extends PolicyStatement {
  public servicePrefix = 'kinesisvideo';
  protected actionList: Actions = {
    "ConnectAsMaster": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html",
      "description": "Grants permission to connect as a master to the signaling channel specified by the endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "ConnectAsViewer": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html",
      "description": "Grants permission to connect as a viewer to the signaling channel specified by the endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "CreateSignalingChannel": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html",
      "description": "Grants permission to create a signaling channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html",
      "description": "Grants permission to create a Kinesis video stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteSignalingChannel": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html",
      "description": "Grants permission to delete an existing signaling channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DeleteStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html",
      "description": "Grants permission to delete an existing Kinesis video stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DescribeSignalingChannel": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html",
      "description": "Grants permission to describe the specified signaling channel",
      "accessLevel": "List",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DescribeStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html",
      "description": "Grants permission to describe the specified Kinesis video stream",
      "accessLevel": "List",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetClip": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetClip.html",
      "description": "Grants permission to get a media clip from a video stream",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetDASHStreamingSessionURL": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDASHStreamingSessionURL.html",
      "description": "Grants permission to create a URL for MPEG-DASH video streaming",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetDataEndpoint": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html",
      "description": "Grants permission to get an endpoint for a specified stream for either reading or writing media data to Kinesis Video Streams",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetHLSStreamingSessionURL": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetHLSStreamingSessionURL.html",
      "description": "Grants permission to create a URL for HLS video streaming",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetIceServerConfig": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetIceServerConfig.html",
      "description": "Grants permission to get the ICE server configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "GetMedia": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMedia.html",
      "description": "Grants permission to return media content of a Kinesis video stream",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetMediaForFragmentList": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMediaForFragmentList.html",
      "description": "Grants permission to read and return media data only from persisted storage",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetSignalingChannelEndpoint": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html",
      "description": "Grants permission to get endpoints for a specified combination of protocol and role for a signaling channel",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "ListFragments": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListFragments.html",
      "description": "Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified",
      "accessLevel": "List",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "ListSignalingChannels": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html",
      "description": "Grants permission to list your signaling channels",
      "accessLevel": "List"
    },
    "ListStreams": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html",
      "description": "Grants permission to list your Kinesis video streams",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html",
      "description": "Grants permission to fetch the tags associated with your resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "stream": {
          "required": false
        }
      }
    },
    "ListTagsForStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html",
      "description": "Grants permission to fetch the tags associated with Kinesis video stream",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "PutMedia": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_PutMedia.html",
      "description": "Grants permission to send media data to a Kinesis video stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "SendAlexaOfferToMaster": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_SendAlexaOfferToMaster.html",
      "description": "Grants permission to send the Alexa SDP offer to the master",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html",
      "description": "Grants permission to attach set of tags to your resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "stream": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TagStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html",
      "description": "Grants permission to attach set of tags to your Kinesis video streams",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html",
      "description": "Grants permission to remove one or more tags from your resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "stream": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UntagStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html",
      "description": "Grants permission to remove one or more tags from your Kinesis video streams",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDataRetention": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html",
      "description": "Grants permission to update the data retention period of your Kinesis video stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "UpdateSignalingChannel": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html",
      "description": "Grants permission to update an existing signaling channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "UpdateStream": {
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html",
      "description": "Grants permission to update an existing Kinesis video stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "stream": {
      "name": "stream",
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html",
      "arn": "arn:${Partition}:kinesisvideo:${Region}:${Account}:stream/${StreamName}/${CreationTime}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "channel": {
      "name": "channel",
      "url": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html",
      "arn": "arn:${Partition}:kinesisvideo:${Region}:${Account}:channel/${ChannelName}/${CreationTime}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to connect as a master to the signaling channel specified by the endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html
   */
  public connectAsMaster() {
    this.add('kinesisvideo:ConnectAsMaster');
    return this;
  }

  /**
   * Grants permission to connect as a viewer to the signaling channel specified by the endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html
   */
  public connectAsViewer() {
    this.add('kinesisvideo:ConnectAsViewer');
    return this;
  }

  /**
   * Grants permission to create a signaling channel
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html
   */
  public createSignalingChannel() {
    this.add('kinesisvideo:CreateSignalingChannel');
    return this;
  }

  /**
   * Grants permission to create a Kinesis video stream
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html
   */
  public createStream() {
    this.add('kinesisvideo:CreateStream');
    return this;
  }

  /**
   * Grants permission to delete an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html
   */
  public deleteSignalingChannel() {
    this.add('kinesisvideo:DeleteSignalingChannel');
    return this;
  }

  /**
   * Grants permission to delete an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html
   */
  public deleteStream() {
    this.add('kinesisvideo:DeleteStream');
    return this;
  }

  /**
   * Grants permission to describe the specified signaling channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html
   */
  public describeSignalingChannel() {
    this.add('kinesisvideo:DescribeSignalingChannel');
    return this;
  }

  /**
   * Grants permission to describe the specified Kinesis video stream
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html
   */
  public describeStream() {
    this.add('kinesisvideo:DescribeStream');
    return this;
  }

  /**
   * Grants permission to get a media clip from a video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetClip.html
   */
  public getClip() {
    this.add('kinesisvideo:GetClip');
    return this;
  }

  /**
   * Grants permission to create a URL for MPEG-DASH video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDASHStreamingSessionURL.html
   */
  public getDASHStreamingSessionURL() {
    this.add('kinesisvideo:GetDASHStreamingSessionURL');
    return this;
  }

  /**
   * Grants permission to get an endpoint for a specified stream for either reading or writing media data to Kinesis Video Streams
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html
   */
  public getDataEndpoint() {
    this.add('kinesisvideo:GetDataEndpoint');
    return this;
  }

  /**
   * Grants permission to create a URL for HLS video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetHLSStreamingSessionURL.html
   */
  public getHLSStreamingSessionURL() {
    this.add('kinesisvideo:GetHLSStreamingSessionURL');
    return this;
  }

  /**
   * Grants permission to get the ICE server configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetIceServerConfig.html
   */
  public getIceServerConfig() {
    this.add('kinesisvideo:GetIceServerConfig');
    return this;
  }

  /**
   * Grants permission to return media content of a Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMedia.html
   */
  public getMedia() {
    this.add('kinesisvideo:GetMedia');
    return this;
  }

  /**
   * Grants permission to read and return media data only from persisted storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMediaForFragmentList.html
   */
  public getMediaForFragmentList() {
    this.add('kinesisvideo:GetMediaForFragmentList');
    return this;
  }

  /**
   * Grants permission to get endpoints for a specified combination of protocol and role for a signaling channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html
   */
  public getSignalingChannelEndpoint() {
    this.add('kinesisvideo:GetSignalingChannelEndpoint');
    return this;
  }

  /**
   * Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListFragments.html
   */
  public listFragments() {
    this.add('kinesisvideo:ListFragments');
    return this;
  }

  /**
   * Grants permission to list your signaling channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html
   */
  public listSignalingChannels() {
    this.add('kinesisvideo:ListSignalingChannels');
    return this;
  }

  /**
   * Grants permission to list your Kinesis video streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html
   */
  public listStreams() {
    this.add('kinesisvideo:ListStreams');
    return this;
  }

  /**
   * Grants permission to fetch the tags associated with your resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('kinesisvideo:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to fetch the tags associated with Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html
   */
  public listTagsForStream() {
    this.add('kinesisvideo:ListTagsForStream');
    return this;
  }

  /**
   * Grants permission to send media data to a Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_PutMedia.html
   */
  public putMedia() {
    this.add('kinesisvideo:PutMedia');
    return this;
  }

  /**
   * Grants permission to send the Alexa SDP offer to the master
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_SendAlexaOfferToMaster.html
   */
  public sendAlexaOfferToMaster() {
    this.add('kinesisvideo:SendAlexaOfferToMaster');
    return this;
  }

  /**
   * Grants permission to attach set of tags to your resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html
   */
  public tagResource() {
    this.add('kinesisvideo:TagResource');
    return this;
  }

  /**
   * Grants permission to attach set of tags to your Kinesis video streams
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html
   */
  public tagStream() {
    this.add('kinesisvideo:TagStream');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from your resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html
   */
  public untagResource() {
    this.add('kinesisvideo:UntagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from your Kinesis video streams
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html
   */
  public untagStream() {
    this.add('kinesisvideo:UntagStream');
    return this;
  }

  /**
   * Grants permission to update the data retention period of your Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html
   */
  public updateDataRetention() {
    this.add('kinesisvideo:UpdateDataRetention');
    return this;
  }

  /**
   * Grants permission to update an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html
   */
  public updateSignalingChannel() {
    this.add('kinesisvideo:UpdateSignalingChannel');
    return this;
  }

  /**
   * Grants permission to update an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html
   */
  public updateStream() {
    this.add('kinesisvideo:UpdateStream');
    return this;
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html
   *
   * @param streamName - Identifier for the streamName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onStream(streamName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisvideo:${Region}:${Account}:stream/${StreamName}/${CreationTime}';
    arn = arn.replace('${StreamName}', streamName);
    arn = arn.replace('${CreationTime}', creationTime);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html
   *
   * @param channelName - Identifier for the channelName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onChannel(channelName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisvideo:${Region}:${Account}:channel/${ChannelName}/${CreationTime}';
    arn = arn.replace('${ChannelName}', channelName);
    arn = arn.replace('${CreationTime}', creationTime);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
