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
    root.TalonOne.AccountAnalytics = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountAnalytics model module.
   * @module model/AccountAnalytics
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AccountAnalytics</code>.
   * @alias module:model/AccountAnalytics
   * @class
   * @param applications {Number} Total Number of Applications inside the account
   * @param activeCampaigns {Number} Total Number of Active Applications inside the account
   * @param campaigns {Number} Total Number of campaigns inside the account
   * @param coupons {Number} Total Number of coupons inside the account
   * @param activeCoupons {Number} Total Number of active coupons inside the account
   * @param expiredCoupons {Number} Total Number of expired coupons inside the account
   * @param customAttributes {Number} Total Number of custom attributes inside the account
   * @param referralCodes {Number} Total Number of referral codes inside the account
   * @param activeReferralCodes {Number} Total Number of active referral codes inside the account
   * @param expiredReferralCodes {Number} Total Number of expired referral codes inside the account
   * @param users {Number} Total Number of users inside the account
   * @param roles {Number} Total Number of roles inside the account
   * @param webhooks {Number} Total Number of webhooks inside the account
   * @param loyaltyPrograms {Number} Total Number of loyalty programs inside the account
   * @param activeRules {Number} Total Number of active rules in the account
   */
  var exports = function(applications, activeCampaigns, campaigns, coupons, activeCoupons, expiredCoupons, customAttributes, referralCodes, activeReferralCodes, expiredReferralCodes, users, roles, webhooks, loyaltyPrograms, activeRules) {
    var _this = this;

    _this['applications'] = applications;
    _this['activeCampaigns'] = activeCampaigns;
    _this['campaigns'] = campaigns;
    _this['coupons'] = coupons;
    _this['activeCoupons'] = activeCoupons;
    _this['expiredCoupons'] = expiredCoupons;
    _this['customAttributes'] = customAttributes;
    _this['referralCodes'] = referralCodes;
    _this['activeReferralCodes'] = activeReferralCodes;
    _this['expiredReferralCodes'] = expiredReferralCodes;
    _this['users'] = users;
    _this['roles'] = roles;
    _this['webhooks'] = webhooks;
    _this['loyaltyPrograms'] = loyaltyPrograms;
    _this['activeRules'] = activeRules;
  };

  /**
   * Constructs a <code>AccountAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountAnalytics} obj Optional instance to populate.
   * @return {module:model/AccountAnalytics} The populated <code>AccountAnalytics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applications')) {
        obj['applications'] = ApiClient.convertToType(data['applications'], 'Number');
      }
      if (data.hasOwnProperty('activeCampaigns')) {
        obj['activeCampaigns'] = ApiClient.convertToType(data['activeCampaigns'], 'Number');
      }
      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ApiClient.convertToType(data['campaigns'], 'Number');
      }
      if (data.hasOwnProperty('coupons')) {
        obj['coupons'] = ApiClient.convertToType(data['coupons'], 'Number');
      }
      if (data.hasOwnProperty('activeCoupons')) {
        obj['activeCoupons'] = ApiClient.convertToType(data['activeCoupons'], 'Number');
      }
      if (data.hasOwnProperty('expiredCoupons')) {
        obj['expiredCoupons'] = ApiClient.convertToType(data['expiredCoupons'], 'Number');
      }
      if (data.hasOwnProperty('customAttributes')) {
        obj['customAttributes'] = ApiClient.convertToType(data['customAttributes'], 'Number');
      }
      if (data.hasOwnProperty('referralCodes')) {
        obj['referralCodes'] = ApiClient.convertToType(data['referralCodes'], 'Number');
      }
      if (data.hasOwnProperty('activeReferralCodes')) {
        obj['activeReferralCodes'] = ApiClient.convertToType(data['activeReferralCodes'], 'Number');
      }
      if (data.hasOwnProperty('expiredReferralCodes')) {
        obj['expiredReferralCodes'] = ApiClient.convertToType(data['expiredReferralCodes'], 'Number');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], 'Number');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], 'Number');
      }
      if (data.hasOwnProperty('webhooks')) {
        obj['webhooks'] = ApiClient.convertToType(data['webhooks'], 'Number');
      }
      if (data.hasOwnProperty('loyaltyPrograms')) {
        obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], 'Number');
      }
      if (data.hasOwnProperty('activeRules')) {
        obj['activeRules'] = ApiClient.convertToType(data['activeRules'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Total Number of Applications inside the account
   * @member {Number} applications
   */
  exports.prototype['applications'] = undefined;
  /**
   * Total Number of Active Applications inside the account
   * @member {Number} activeCampaigns
   */
  exports.prototype['activeCampaigns'] = undefined;
  /**
   * Total Number of campaigns inside the account
   * @member {Number} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * Total Number of coupons inside the account
   * @member {Number} coupons
   */
  exports.prototype['coupons'] = undefined;
  /**
   * Total Number of active coupons inside the account
   * @member {Number} activeCoupons
   */
  exports.prototype['activeCoupons'] = undefined;
  /**
   * Total Number of expired coupons inside the account
   * @member {Number} expiredCoupons
   */
  exports.prototype['expiredCoupons'] = undefined;
  /**
   * Total Number of custom attributes inside the account
   * @member {Number} customAttributes
   */
  exports.prototype['customAttributes'] = undefined;
  /**
   * Total Number of referral codes inside the account
   * @member {Number} referralCodes
   */
  exports.prototype['referralCodes'] = undefined;
  /**
   * Total Number of active referral codes inside the account
   * @member {Number} activeReferralCodes
   */
  exports.prototype['activeReferralCodes'] = undefined;
  /**
   * Total Number of expired referral codes inside the account
   * @member {Number} expiredReferralCodes
   */
  exports.prototype['expiredReferralCodes'] = undefined;
  /**
   * Total Number of users inside the account
   * @member {Number} users
   */
  exports.prototype['users'] = undefined;
  /**
   * Total Number of roles inside the account
   * @member {Number} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * Total Number of webhooks inside the account
   * @member {Number} webhooks
   */
  exports.prototype['webhooks'] = undefined;
  /**
   * Total Number of loyalty programs inside the account
   * @member {Number} loyaltyPrograms
   */
  exports.prototype['loyaltyPrograms'] = undefined;
  /**
   * Total Number of active rules in the account
   * @member {Number} activeRules
   */
  exports.prototype['activeRules'] = undefined;



  return exports;
}));


