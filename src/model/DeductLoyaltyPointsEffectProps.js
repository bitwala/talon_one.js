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
    root.TalonOne.DeductLoyaltyPointsEffectProps = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeductLoyaltyPointsEffectProps model module.
   * @module model/DeductLoyaltyPointsEffectProps
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>DeductLoyaltyPointsEffectProps</code>.
   * The properties specific to the \&quot;deductLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.
   * @alias module:model/DeductLoyaltyPointsEffectProps
   * @class
   * @param ruleTitle {String} The title of the rule that contained triggered this points deduction
   * @param programId {Number} The ID of the loyalty program where these points were added
   * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
   * @param value {Number} The amount of points that were deducted
   */
  var exports = function(ruleTitle, programId, subLedgerId, value) {
    var _this = this;

    _this['ruleTitle'] = ruleTitle;
    _this['programId'] = programId;
    _this['subLedgerId'] = subLedgerId;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>DeductLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeductLoyaltyPointsEffectProps} obj Optional instance to populate.
   * @return {module:model/DeductLoyaltyPointsEffectProps} The populated <code>DeductLoyaltyPointsEffectProps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ruleTitle')) {
        obj['ruleTitle'] = ApiClient.convertToType(data['ruleTitle'], 'String');
      }
      if (data.hasOwnProperty('programId')) {
        obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
      }
      if (data.hasOwnProperty('subLedgerId')) {
        obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The title of the rule that contained triggered this points deduction
   * @member {String} ruleTitle
   */
  exports.prototype['ruleTitle'] = undefined;
  /**
   * The ID of the loyalty program where these points were added
   * @member {Number} programId
   */
  exports.prototype['programId'] = undefined;
  /**
   * The ID of the subledger within the loyalty program where these points were added
   * @member {String} subLedgerId
   */
  exports.prototype['subLedgerId'] = undefined;
  /**
   * The amount of points that were deducted
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

