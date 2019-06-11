/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.ApplicationStorage = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationStorage model module.
   * @module model/ApplicationStorage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ApplicationStorage</code>.
   * 
   * @alias module:model/ApplicationStorage
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param name {String} Identifier for the information to be saved, e.g. \"Loyalty points for SKU\".
   * @param datatype {Object} A JSON Schema describing the information to be saved in the storage
   * @param usedAt {Array.<String>} array of rulesets where the application storage is used
   */
  var exports = function(id, created, modified, applicationId, name, datatype, usedAt) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['applicationId'] = applicationId;
    _this['name'] = name;
    _this['datatype'] = datatype;

    _this['usedAt'] = usedAt;
  };

  /**
   * Constructs a <code>ApplicationStorage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationStorage} obj Optional instance to populate.
   * @return {module:model/ApplicationStorage} The populated <code>ApplicationStorage</code> instance.
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
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('datatype')) {
        obj['datatype'] = ApiClient.convertToType(data['datatype'], Object);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('usedAt')) {
        obj['usedAt'] = ApiClient.convertToType(data['usedAt'], ['String']);
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
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * Identifier for the information to be saved, e.g. \"Loyalty points for SKU\".
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A JSON Schema describing the information to be saved in the storage
   * @member {Object} datatype
   */
  exports.prototype['datatype'] = undefined;
  /**
   * Description of the application store
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * array of rulesets where the application storage is used
   * @member {Array.<String>} usedAt
   */
  exports.prototype['usedAt'] = undefined;



  return exports;
}));

