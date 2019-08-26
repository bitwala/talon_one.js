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
    root.TalonOne.ApplicationStorageTuple = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationStorageTuple model module.
   * @module model/ApplicationStorageTuple
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ApplicationStorageTuple</code>.
   * 
   * @alias module:model/ApplicationStorageTuple
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param key {String} Key information that will map to a value, e.g. SKU number \"LEV-JN-SL-36-GN\".
   * @param value {Object} 
   * @param storageId {Number} ID of the storage in which the data resides
   */
  var exports = function(id, created, modified, key, value, storageId) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['key'] = key;
    _this['value'] = value;
    _this['storageId'] = storageId;
  };

  /**
   * Constructs a <code>ApplicationStorageTuple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationStorageTuple} obj Optional instance to populate.
   * @return {module:model/ApplicationStorageTuple} The populated <code>ApplicationStorageTuple</code> instance.
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
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
      if (data.hasOwnProperty('storageId')) {
        obj['storageId'] = ApiClient.convertToType(data['storageId'], 'Number');
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
   * The exact moment this entity was last modified.
   * @member {Date} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * Key information that will map to a value, e.g. SKU number \"LEV-JN-SL-36-GN\".
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;
  /**
   * ID of the storage in which the data resides
   * @member {Number} storageId
   */
  exports.prototype['storageId'] = undefined;



  return exports;
}));


