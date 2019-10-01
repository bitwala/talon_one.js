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
    root.TalonOne.LedgerEntry = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LedgerEntry model module.
   * @module model/LedgerEntry
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>LedgerEntry</code>.
   * 
   * @alias module:model/LedgerEntry
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @param accountId {Number} The ID of the Talon.One account that owns this profile.
   * @param loyaltyProgramId {Number} ID of the ledger
   * @param eventId {Number} ID of the related event
   * @param amount {Number} Amount of loyalty points
   * @param reason {String} reason for awarding/deducting points
   * @param expiryDate {Date} Expiry date of the points
   */
  var exports = function(id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['profileId'] = profileId;
    _this['accountId'] = accountId;
    _this['loyaltyProgramId'] = loyaltyProgramId;
    _this['eventId'] = eventId;
    _this['amount'] = amount;
    _this['reason'] = reason;
    _this['expiryDate'] = expiryDate;

  };

  /**
   * Constructs a <code>LedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LedgerEntry} obj Optional instance to populate.
   * @return {module:model/LedgerEntry} The populated <code>LedgerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('loyaltyProgramId')) {
        obj['loyaltyProgramId'] = ApiClient.convertToType(data['loyaltyProgramId'], 'Number');
      }
      if (data.hasOwnProperty('eventId')) {
        obj['eventId'] = ApiClient.convertToType(data['eventId'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * The ID of the Talon.One account that owns this profile.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * ID of the ledger
   * @member {Number} loyaltyProgramId
   */
  exports.prototype['loyaltyProgramId'] = undefined;
  /**
   * ID of the related event
   * @member {Number} eventId
   */
  exports.prototype['eventId'] = undefined;
  /**
   * Amount of loyalty points
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * reason for awarding/deducting points
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Expiry date of the points
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * The ID of the balancing ledgerEntry
   * @member {Number} referenceId
   */
  exports.prototype['referenceId'] = undefined;



  return exports;
}));


