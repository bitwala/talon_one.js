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
    root.TalonOne.FuncArgDef = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FuncArgDef model module.
   * @module model/FuncArgDef
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FuncArgDef</code>.
   * @alias module:model/FuncArgDef
   * @class
   * @param type {module:model/FuncArgDef.TypeEnum} The type of value this argument expects.
   * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   */
  var exports = function(type, description) {
    var _this = this;

    _this['type'] = type;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>FuncArgDef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuncArgDef} obj Optional instance to populate.
   * @return {module:model/FuncArgDef} The populated <code>FuncArgDef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of value this argument expects.
   * @member {module:model/FuncArgDef.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "time"
     * @const
     */
    "time": "time"  };


  return exports;
}));


