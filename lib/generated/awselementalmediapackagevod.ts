import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediapackage-vod](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackagevod.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class MediapackageVod extends PolicyStatement {
  public servicePrefix = 'mediapackage-vod';
  protected actionList: Actions = {
    "CreateAsset": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetspost",
      "description": "Grants permission to create an asset in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePackagingConfiguration": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationspost",
      "description": "Grants permission to create a packaging configuration in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePackagingGroup": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupspost",
      "description": "Grants permission to create a packaging group in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAsset": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-iddelete",
      "description": "Grants permission to delete an asset in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "DeletePackagingConfiguration": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-iddelete",
      "description": "Grants permission to delete a packaging configuration in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "resourceTypes": {
        "packaging-configurations": {
          "required": true
        }
      }
    },
    "DeletePackagingGroup": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-iddelete",
      "description": "Grants permission to delete a packaging group in AWS Elemental MediaPackage",
      "accessLevel": "Write",
      "resourceTypes": {
        "packaging-groups": {
          "required": true
        }
      }
    },
    "DescribeAsset": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-idget",
      "description": "Grants permission to view the details of an asset in AWS Elemental MediaPackage",
      "accessLevel": "Read",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "DescribePackagingConfiguration": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-idget",
      "description": "Grants permission to view the details of a packaging configuration in AWS Elemental MediaPackage",
      "accessLevel": "Read",
      "resourceTypes": {
        "packaging-configurations": {
          "required": true
        }
      }
    },
    "DescribePackagingGroup": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idget",
      "description": "Grants permission to view the details of a packaging group in AWS Elemental MediaPackage",
      "accessLevel": "Read",
      "resourceTypes": {
        "packaging-groups": {
          "required": true
        }
      }
    },
    "ListAssets": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetsget",
      "description": "Grants permission to view a list of assets in AWS Elemental MediaPackage",
      "accessLevel": "List"
    },
    "ListPackagingConfigurations": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationsget",
      "description": "Grants permission to view a list of packaging configurations in AWS Elemental MediaPackage",
      "accessLevel": "List"
    },
    "ListPackagingGroups": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupsget",
      "description": "Grants permission to view a list of packaging groups in AWS Elemental MediaPackage",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnget",
      "description": "Grants permission to list the tags assigned to a PackagingGroup, PackagingConfiguration, or Asset.",
      "accessLevel": "Read",
      "resourceTypes": {
        "assets": {
          "required": false
        },
        "packaging-configurations": {
          "required": false
        },
        "packaging-groups": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnpost",
      "description": "Grants permission to assign tags to a PackagingGroup, PackagingConfiguration, or Asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": false
        },
        "packaging-configurations": {
          "required": false
        },
        "packaging-groups": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arndelete",
      "description": "Grants permission to delete tags from a PackagingGroup, PackagingConfiguration, or Asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": false
        },
        "packaging-configurations": {
          "required": false
        },
        "packaging-groups": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "assets": {
      "name": "assets",
      "url": "https://docs.aws.amazon.com/mediapackage/latest/ug/asset.html",
      "arn": "arn:${Partition}:mediapackage-vod:${Region}:${Account}:assets/${AssetIdentifier}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "packaging-configurations": {
      "name": "packaging-configurations",
      "url": "https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-cfig.html",
      "arn": "arn:${Partition}:mediapackage-vod:${Region}:${Account}:packaging-configurations/${PackagingConfigurationIdentifier}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "packaging-groups": {
      "name": "packaging-groups",
      "url": "https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-group.html",
      "arn": "arn:${Partition}:mediapackage-vod:${Region}:${Account}:packaging-groups/${PackagingGroupIdentifier}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [mediapackage-vod](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackagevod.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an asset in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetspost
   */
  public createAsset() {
    this.add('mediapackage-vod:CreateAsset');
    return this;
  }

  /**
   * Grants permission to create a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationspost
   */
  public createPackagingConfiguration() {
    this.add('mediapackage-vod:CreatePackagingConfiguration');
    return this;
  }

  /**
   * Grants permission to create a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupspost
   */
  public createPackagingGroup() {
    this.add('mediapackage-vod:CreatePackagingGroup');
    return this;
  }

  /**
   * Grants permission to delete an asset in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-iddelete
   */
  public deleteAsset() {
    this.add('mediapackage-vod:DeleteAsset');
    return this;
  }

  /**
   * Grants permission to delete a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-iddelete
   */
  public deletePackagingConfiguration() {
    this.add('mediapackage-vod:DeletePackagingConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-iddelete
   */
  public deletePackagingGroup() {
    this.add('mediapackage-vod:DeletePackagingGroup');
    return this;
  }

  /**
   * Grants permission to view the details of an asset in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-idget
   */
  public describeAsset() {
    this.add('mediapackage-vod:DescribeAsset');
    return this;
  }

  /**
   * Grants permission to view the details of a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-idget
   */
  public describePackagingConfiguration() {
    this.add('mediapackage-vod:DescribePackagingConfiguration');
    return this;
  }

  /**
   * Grants permission to view the details of a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idget
   */
  public describePackagingGroup() {
    this.add('mediapackage-vod:DescribePackagingGroup');
    return this;
  }

  /**
   * Grants permission to view a list of assets in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetsget
   */
  public listAssets() {
    this.add('mediapackage-vod:ListAssets');
    return this;
  }

  /**
   * Grants permission to view a list of packaging configurations in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationsget
   */
  public listPackagingConfigurations() {
    this.add('mediapackage-vod:ListPackagingConfigurations');
    return this;
  }

  /**
   * Grants permission to view a list of packaging groups in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupsget
   */
  public listPackagingGroups() {
    this.add('mediapackage-vod:ListPackagingGroups');
    return this;
  }

  /**
   * Grants permission to list the tags assigned to a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   */
  public listTagsForResource() {
    this.add('mediapackage-vod:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to assign tags to a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnpost
   */
  public tagResource() {
    this.add('mediapackage-vod:TagResource');
    return this;
  }

  /**
   * Grants permission to delete tags from a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   */
  public untagResource() {
    this.add('mediapackage-vod:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type assets to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/asset.html
   *
   * @param assetIdentifier - Identifier for the assetIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onAssets(assetIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage-vod:${Region}:${Account}:assets/${AssetIdentifier}';
    arn = arn.replace('${AssetIdentifier}', assetIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type packaging-configurations to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-cfig.html
   *
   * @param packagingConfigurationIdentifier - Identifier for the packagingConfigurationIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onPackagingConfigurations(packagingConfigurationIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage-vod:${Region}:${Account}:packaging-configurations/${PackagingConfigurationIdentifier}';
    arn = arn.replace('${PackagingConfigurationIdentifier}', packagingConfigurationIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type packaging-groups to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-group.html
   *
   * @param packagingGroupIdentifier - Identifier for the packagingGroupIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onPackagingGroups(packagingGroupIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage-vod:${Region}:${Account}:packaging-groups/${PackagingGroupIdentifier}';
    arn = arn.replace('${PackagingGroupIdentifier}', packagingGroupIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
