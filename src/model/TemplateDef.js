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
    define(['ApiClient', 'model/TemplateArgDef'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateArgDef'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.TemplateDef = factory(root.TalononeApi.ApiClient, root.TalononeApi.TemplateArgDef);
  }
}(this, function(ApiClient, TemplateArgDef) {
  'use strict';




  /**
   * The TemplateDef model module.
   * @module model/TemplateDef
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TemplateDef</code>.
   * 
   * @alias module:model/TemplateDef
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
   * @param description {String} A short description of the template that will be shown in the rule editor.
   * @param help {String} Extended help text for the template.
   * @param category {String} Used for grouping templates in the rule editor sidebar.
   * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
   * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
   * @param name {String} The template name used in Talang.
   */
  var exports = function(id, created, applicationId, title, description, help, category, expr, args, name) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['applicationId'] = applicationId;
    _this['title'] = title;
    _this['description'] = description;
    _this['help'] = help;
    _this['category'] = category;
    _this['expr'] = expr;
    _this['args'] = args;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>TemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateDef} obj Optional instance to populate.
   * @return {module:model/TemplateDef} The populated <code>TemplateDef</code> instance.
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
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('help')) {
        obj['help'] = ApiClient.convertToType(data['help'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('expr')) {
        obj['expr'] = ApiClient.convertToType(data['expr'], [Object]);
      }
      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], [TemplateArgDef]);
      }
      if (data.hasOwnProperty('expose')) {
        obj['expose'] = ApiClient.convertToType(data['expose'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * Campaigner-friendly name for the template that will be shown in the rule editor.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A short description of the template that will be shown in the rule editor.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Extended help text for the template.
   * @member {String} help
   */
  exports.prototype['help'] = undefined;
  /**
   * Used for grouping templates in the rule editor sidebar.
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * A Talang expression that contains variable bindings referring to args.
   * @member {Array.<Object>} expr
   */
  exports.prototype['expr'] = undefined;
  /**
   * An array of argument definitions.
   * @member {Array.<module:model/TemplateArgDef>} args
   */
  exports.prototype['args'] = undefined;
  /**
   * A flag to control exposure in Rule Builder.
   * @member {Boolean} expose
   * @default false
   */
  exports.prototype['expose'] = false;
  /**
   * The template name used in Talang.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


