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
    root.TalonOne.SetDiscountPerItemEffectProps = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetDiscountPerItemEffectProps model module.
   * @module model/SetDiscountPerItemEffectProps
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>SetDiscountPerItemEffectProps</code>.
   * The properties specific to the \&quot;setDiscountPerItem\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set per item discount\&quot; effect. This is a discount that should be applied on a specific item.
   * @alias module:model/SetDiscountPerItemEffectProps
   * @class
   * @param name {String} The name/description of this discount
   * @param value {Number} The total monetary value of the discount
   * @param position {Number} The index of the item in the cart items list on which this discount should be applied
   */
  var exports = function(name, value, position) {
    var _this = this;

    _this['name'] = name;
    _this['value'] = value;
    _this['position'] = position;
  };

  /**
   * Constructs a <code>SetDiscountPerItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetDiscountPerItemEffectProps} obj Optional instance to populate.
   * @return {module:model/SetDiscountPerItemEffectProps} The populated <code>SetDiscountPerItemEffectProps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name/description of this discount
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The total monetary value of the discount
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The index of the item in the cart items list on which this discount should be applied
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));


