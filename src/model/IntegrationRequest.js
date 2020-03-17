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
    define(['ApiClient', 'model/NewCustomerSessionV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NewCustomerSessionV2'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.IntegrationRequest = factory(root.TalonOne.ApiClient, root.TalonOne.NewCustomerSessionV2);
  }
}(this, function(ApiClient, NewCustomerSessionV2) {
  'use strict';




  /**
   * The IntegrationRequest model module.
   * @module model/IntegrationRequest
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>IntegrationRequest</code>.
   * The body of a V2 integration API request (customer session update). Next to the customer session details, this contains an optional listing of extra properties that should be returned in the response.
   * @alias module:model/IntegrationRequest
   * @class
   * @param customerSession {module:model/NewCustomerSessionV2} The customer session update details
   */
  var exports = function(customerSession) {
    var _this = this;

    _this['customerSession'] = customerSession;

  };

  /**
   * Constructs a <code>IntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationRequest} obj Optional instance to populate.
   * @return {module:model/IntegrationRequest} The populated <code>IntegrationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerSession')) {
        obj['customerSession'] = NewCustomerSessionV2.constructFromObject(data['customerSession']);
      }
      if (data.hasOwnProperty('responseContent')) {
        obj['responseContent'] = ApiClient.convertToType(data['responseContent'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The customer session update details
   * @member {module:model/NewCustomerSessionV2} customerSession
   */
  exports.prototype['customerSession'] = undefined;
  /**
   * Optional list of requested information to be present on the response related to the customer session update. Currently supported: \"customerSession\", \"customerProfile\", \"coupons\", \"triggeredCampaigns\", \"referral\", \"loyalty\" and \"event\". 
   * @member {Array.<module:model/IntegrationRequest.ResponseContentEnum>} responseContent
   */
  exports.prototype['responseContent'] = undefined;


  /**
   * Allowed values for the <code>responseContent</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResponseContentEnum = {
    /**
     * value: "customerSession"
     * @const
     */
    "customerSession": "customerSession",
    /**
     * value: "customerProfile"
     * @const
     */
    "customerProfile": "customerProfile",
    /**
     * value: "coupons"
     * @const
     */
    "coupons": "coupons",
    /**
     * value: "triggeredCampaigns"
     * @const
     */
    "triggeredCampaigns": "triggeredCampaigns",
    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",
    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",
    /**
     * value: "event"
     * @const
     */
    "event": "event"  };


  return exports;
}));

