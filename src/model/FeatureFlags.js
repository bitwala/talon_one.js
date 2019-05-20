/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.FeatureFlags = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FeatureFlags model module.
   * @module model/FeatureFlags
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FeatureFlags</code>.
   * 
   * @alias module:model/FeatureFlags
   * @class
   * @param accountId {Number} The ID of the account that owns this entity.
   */
  var exports = function(accountId) {
    var _this = this;

    _this['accountId'] = accountId;



  };

  /**
   * Constructs a <code>FeatureFlags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlags} obj Optional instance to populate.
   * @return {module:model/FeatureFlags} The populated <code>FeatureFlags</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('loyalty')) {
        obj['loyalty'] = ApiClient.convertToType(data['loyalty'], 'Boolean');
      }
      if (data.hasOwnProperty('coupons_without_count')) {
        obj['coupons_without_count'] = ApiClient.convertToType(data['coupons_without_count'], 'Boolean');
      }
      if (data.hasOwnProperty('betaEffects')) {
        obj['betaEffects'] = ApiClient.convertToType(data['betaEffects'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The ID of the account that owns this entity.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Whether the account has access to the loyalty features or not
   * @member {Boolean} loyalty
   */
  exports.prototype['loyalty'] = undefined;
  /**
   * Whether the account queries coupons with or without total result size
   * @member {Boolean} coupons_without_count
   */
  exports.prototype['coupons_without_count'] = undefined;
  /**
   * Whether the account can test beta effects or not
   * @member {Boolean} betaEffects
   */
  exports.prototype['betaEffects'] = undefined;



  return exports;
}));


