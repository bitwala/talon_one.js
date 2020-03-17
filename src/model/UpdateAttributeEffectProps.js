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
    root.TalonOne.UpdateAttributeEffectProps = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateAttributeEffectProps model module.
   * @module model/UpdateAttributeEffectProps
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>UpdateAttributeEffectProps</code>.
   * The properties specific to the \&quot;updateAttribute\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;update an attribute\&quot; effect.
   * @alias module:model/UpdateAttributeEffectProps
   * @class
   * @param path {String} The exact path of the attribute that was updated
   * @param value {Object} The new value of this attribute. Value can be any of the following types (time, string, number, location, boolean) or a list of any of those types
   */
  var exports = function(path, value) {
    var _this = this;

    _this['path'] = path;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>UpdateAttributeEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAttributeEffectProps} obj Optional instance to populate.
   * @return {module:model/UpdateAttributeEffectProps} The populated <code>UpdateAttributeEffectProps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * The exact path of the attribute that was updated
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * The new value of this attribute. Value can be any of the following types (time, string, number, location, boolean) or a list of any of those types
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

