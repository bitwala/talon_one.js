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
    root.TalonOne.UpdateCouponBatch = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateCouponBatch model module.
   * @module model/UpdateCouponBatch
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>UpdateCouponBatch</code>.
   * 
   * @alias module:model/UpdateCouponBatch
   * @class
   * @param batchID {String} The id of the batch the coupon belongs to.
   */
  var exports = function(batchID) {
    var _this = this;





    _this['batchID'] = batchID;
  };

  /**
   * Constructs a <code>UpdateCouponBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCouponBatch} obj Optional instance to populate.
   * @return {module:model/UpdateCouponBatch} The populated <code>UpdateCouponBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usageLimit')) {
        obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('batchID')) {
        obj['batchID'] = ApiClient.convertToType(data['batchID'], 'String');
      }
    }
    return obj;
  }

  /**
   * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @member {Number} usageLimit
   */
  exports.prototype['usageLimit'] = undefined;
  /**
   * Timestamp at which point the coupon becomes valid.
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * Arbitrary properties associated with this item
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * The id of the batch the coupon belongs to.
   * @member {String} batchID
   */
  exports.prototype['batchID'] = undefined;



  return exports;
}));


