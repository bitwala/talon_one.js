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
    root.TalonOne.AddFreeItemEffectProps = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddFreeItemEffectProps model module.
   * @module model/AddFreeItemEffectProps
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AddFreeItemEffectProps</code>.
   * The properties specific to the \&quot;addFreeItem\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add free item\&quot; effect.
   * @alias module:model/AddFreeItemEffectProps
   * @class
   * @param sku {String} SKU of the item that needs to be added
   * @param name {String} The name/description of the effect
   */
  var exports = function(sku, name) {
    var _this = this;

    _this['sku'] = sku;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>AddFreeItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddFreeItemEffectProps} obj Optional instance to populate.
   * @return {module:model/AddFreeItemEffectProps} The populated <code>AddFreeItemEffectProps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * SKU of the item that needs to be added
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * The name/description of the effect
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

