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
    define(['ApiClient', 'model/AdditionalCost', 'model/CartItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdditionalCost'), require('./CartItem'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.CustomerSessionV2 = factory(root.TalonOne.ApiClient, root.TalonOne.AdditionalCost, root.TalonOne.CartItem);
  }
}(this, function(ApiClient, AdditionalCost, CartItem) {
  'use strict';




  /**
   * The CustomerSessionV2 model module.
   * @module model/CustomerSessionV2
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>CustomerSessionV2</code>.
   * 
   * @alias module:model/CustomerSessionV2
   * @class
   * @param integrationId {String} The ID used for this entity in the application system.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @param state {module:model/CustomerSessionV2.StateEnum} Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
   * @param cartItems {Array.<module:model/CartItem>} All items the customer will be purchasing in this session
   * @param attributes {Object} A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
   * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
   * @param total {Number} The total sum of cart-items, as well as additional costs, before any discounts applied
   * @param cartItemTotal {Number} The total sum of cart-items before any discounts applied
   * @param additionalCostTotal {Number} The total sum of additional costs before any discounts applied
   */
  var exports = function(integrationId, created, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal) {
    var _this = this;

    _this['integrationId'] = integrationId;
    _this['created'] = created;
    _this['applicationId'] = applicationId;
    _this['profileId'] = profileId;


    _this['state'] = state;
    _this['cartItems'] = cartItems;


    _this['attributes'] = attributes;
    _this['firstSession'] = firstSession;
    _this['total'] = total;
    _this['cartItemTotal'] = cartItemTotal;
    _this['additionalCostTotal'] = additionalCostTotal;
  };

  /**
   * Constructs a <code>CustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerSessionV2} obj Optional instance to populate.
   * @return {module:model/CustomerSessionV2} The populated <code>CustomerSessionV2</code> instance.
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
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('couponCodes')) {
        obj['couponCodes'] = ApiClient.convertToType(data['couponCodes'], ['String']);
      }
      if (data.hasOwnProperty('referralCode')) {
        obj['referralCode'] = ApiClient.convertToType(data['referralCode'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('cartItems')) {
        obj['cartItems'] = ApiClient.convertToType(data['cartItems'], [CartItem]);
      }
      if (data.hasOwnProperty('additionalCosts')) {
        obj['additionalCosts'] = ApiClient.convertToType(data['additionalCosts'], {'String': AdditionalCost});
      }
      if (data.hasOwnProperty('identifiers')) {
        obj['identifiers'] = ApiClient.convertToType(data['identifiers'], ['String']);
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('firstSession')) {
        obj['firstSession'] = ApiClient.convertToType(data['firstSession'], 'Boolean');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('cartItemTotal')) {
        obj['cartItemTotal'] = ApiClient.convertToType(data['cartItemTotal'], 'Number');
      }
      if (data.hasOwnProperty('additionalCostTotal')) {
        obj['additionalCostTotal'] = ApiClient.convertToType(data['additionalCostTotal'], 'Number');
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
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * Any coupon codes entered.
   * @member {Array.<String>} couponCodes
   */
  exports.prototype['couponCodes'] = undefined;
  /**
   * Any referral code entered.
   * @member {String} referralCode
   */
  exports.prototype['referralCode'] = undefined;
  /**
   * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
   * @member {module:model/CustomerSessionV2.StateEnum} state
   * @default 'open'
   */
  exports.prototype['state'] = 'open';
  /**
   * All items the customer will be purchasing in this session
   * @member {Array.<module:model/CartItem>} cartItems
   */
  exports.prototype['cartItems'] = undefined;
  /**
   * Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees.
   * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
   */
  exports.prototype['additionalCosts'] = undefined;
  /**
   * Identifiers for the customer, this can be used for limits on values such as device ID.
   * @member {Array.<String>} identifiers
   */
  exports.prototype['identifiers'] = undefined;
  /**
   * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
   * @member {Boolean} firstSession
   */
  exports.prototype['firstSession'] = undefined;
  /**
   * The total sum of cart-items, as well as additional costs, before any discounts applied
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * The total sum of cart-items before any discounts applied
   * @member {Number} cartItemTotal
   */
  exports.prototype['cartItemTotal'] = undefined;
  /**
   * The total sum of additional costs before any discounts applied
   * @member {Number} additionalCostTotal
   */
  exports.prototype['additionalCostTotal'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"  };


  return exports;
}));


