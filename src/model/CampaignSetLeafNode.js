/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.CampaignSetLeafNode = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignSetLeafNode model module.
   * @module model/CampaignSetLeafNode
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>CampaignSetLeafNode</code>.
   * @alias module:model/CampaignSetLeafNode
   * @class
   * @param type {module:model/CampaignSetLeafNode.TypeEnum} Indicates the node type
   * @param campaignId {Number} ID of the campaign
   */
  var exports = function(type, campaignId) {
    var _this = this;

    _this['type'] = type;
    _this['campaignId'] = campaignId;
  };

  /**
   * Constructs a <code>CampaignSetLeafNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSetLeafNode} obj Optional instance to populate.
   * @return {module:model/CampaignSetLeafNode} The populated <code>CampaignSetLeafNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Indicates the node type
   * @member {module:model/CampaignSetLeafNode.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * ID of the campaign
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CAMPAIGN"
     * @const
     */
    "CAMPAIGN": "CAMPAIGN"  };


  return exports;
}));


