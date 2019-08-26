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
    root.TalonOne.CustomerActivityReport = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerActivityReport model module.
   * @module model/CustomerActivityReport
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CustomerActivityReport</code>.
   * 
   * @alias module:model/CustomerActivityReport
   * @class
   * @param integrationId {String} The ID used for this entity in the application system.
   * @param created {Date} The exact moment this entity was created.
   * @param name {String} The name for this customer profile.
   * @param customerId {Number} The internal Talon.One ID of the customer.
   * @param couponRedemptions {Number} Number of coupon redemptions in all customer campaigns.
   * @param couponUseAttempts {Number} Number of coupon use attempts in all customer campaigns.
   * @param couponFailedAttempts {Number} Number of failed coupon use attempts in all customer campaigns.
   * @param accruedDiscounts {Number} Number of accrued discounts in all customer campaigns.
   * @param accruedRevenue {Number} Amount of accrued revenue in all customer campaigns.
   * @param totalOrders {Number} Number of orders in all customer campaigns.
   * @param totalOrdersNoCoupon {Number} Number of orders without coupon used in all customer campaigns.
   * @param campaignName {String} The name of the campaign this customer belongs to.
   */
  var exports = function(integrationId, created, name, customerId, couponRedemptions, couponUseAttempts, couponFailedAttempts, accruedDiscounts, accruedRevenue, totalOrders, totalOrdersNoCoupon, campaignName) {
    var _this = this;

    _this['integrationId'] = integrationId;
    _this['created'] = created;
    _this['name'] = name;
    _this['customerId'] = customerId;

    _this['couponRedemptions'] = couponRedemptions;
    _this['couponUseAttempts'] = couponUseAttempts;
    _this['couponFailedAttempts'] = couponFailedAttempts;
    _this['accruedDiscounts'] = accruedDiscounts;
    _this['accruedRevenue'] = accruedRevenue;
    _this['totalOrders'] = totalOrders;
    _this['totalOrdersNoCoupon'] = totalOrdersNoCoupon;
    _this['campaignName'] = campaignName;
  };

  /**
   * Constructs a <code>CustomerActivityReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerActivityReport} obj Optional instance to populate.
   * @return {module:model/CustomerActivityReport} The populated <code>CustomerActivityReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('integrationId')) {
        obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'Number');
      }
      if (data.hasOwnProperty('lastActivity')) {
        obj['lastActivity'] = ApiClient.convertToType(data['lastActivity'], 'Date');
      }
      if (data.hasOwnProperty('couponRedemptions')) {
        obj['couponRedemptions'] = ApiClient.convertToType(data['couponRedemptions'], 'Number');
      }
      if (data.hasOwnProperty('couponUseAttempts')) {
        obj['couponUseAttempts'] = ApiClient.convertToType(data['couponUseAttempts'], 'Number');
      }
      if (data.hasOwnProperty('couponFailedAttempts')) {
        obj['couponFailedAttempts'] = ApiClient.convertToType(data['couponFailedAttempts'], 'Number');
      }
      if (data.hasOwnProperty('accruedDiscounts')) {
        obj['accruedDiscounts'] = ApiClient.convertToType(data['accruedDiscounts'], 'Number');
      }
      if (data.hasOwnProperty('accruedRevenue')) {
        obj['accruedRevenue'] = ApiClient.convertToType(data['accruedRevenue'], 'Number');
      }
      if (data.hasOwnProperty('totalOrders')) {
        obj['totalOrders'] = ApiClient.convertToType(data['totalOrders'], 'Number');
      }
      if (data.hasOwnProperty('totalOrdersNoCoupon')) {
        obj['totalOrdersNoCoupon'] = ApiClient.convertToType(data['totalOrdersNoCoupon'], 'Number');
      }
      if (data.hasOwnProperty('campaignName')) {
        obj['campaignName'] = ApiClient.convertToType(data['campaignName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID used for this entity in the application system.
   * @member {String} integrationId
   */
  exports.prototype['integrationId'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The name for this customer profile.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The internal Talon.One ID of the customer.
   * @member {Number} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * The last activity of the customer.
   * @member {Date} lastActivity
   */
  exports.prototype['lastActivity'] = undefined;
  /**
   * Number of coupon redemptions in all customer campaigns.
   * @member {Number} couponRedemptions
   */
  exports.prototype['couponRedemptions'] = undefined;
  /**
   * Number of coupon use attempts in all customer campaigns.
   * @member {Number} couponUseAttempts
   */
  exports.prototype['couponUseAttempts'] = undefined;
  /**
   * Number of failed coupon use attempts in all customer campaigns.
   * @member {Number} couponFailedAttempts
   */
  exports.prototype['couponFailedAttempts'] = undefined;
  /**
   * Number of accrued discounts in all customer campaigns.
   * @member {Number} accruedDiscounts
   */
  exports.prototype['accruedDiscounts'] = undefined;
  /**
   * Amount of accrued revenue in all customer campaigns.
   * @member {Number} accruedRevenue
   */
  exports.prototype['accruedRevenue'] = undefined;
  /**
   * Number of orders in all customer campaigns.
   * @member {Number} totalOrders
   */
  exports.prototype['totalOrders'] = undefined;
  /**
   * Number of orders without coupon used in all customer campaigns.
   * @member {Number} totalOrdersNoCoupon
   */
  exports.prototype['totalOrdersNoCoupon'] = undefined;
  /**
   * The name of the campaign this customer belongs to.
   * @member {String} campaignName
   */
  exports.prototype['campaignName'] = undefined;



  return exports;
}));


