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
    root.TalonOne.AccessLogEntry = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccessLogEntry model module.
   * @module model/AccessLogEntry
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AccessLogEntry</code>.
   * Log of application accesses
   * @alias module:model/AccessLogEntry
   * @class
   * @param uuid {String} UUID reference of request
   * @param status {Number} HTTP status code of response
   * @param method {String} HTTP method of request
   * @param requestUri {String} target URI of request
   * @param time {Date} timestamp of request
   * @param requestPayload {String} payload of request
   * @param responsePayload {String} payload of response
   */
  var exports = function(uuid, status, method, requestUri, time, requestPayload, responsePayload) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['status'] = status;
    _this['method'] = method;
    _this['requestUri'] = requestUri;
    _this['time'] = time;
    _this['requestPayload'] = requestPayload;
    _this['responsePayload'] = responsePayload;
  };

  /**
   * Constructs a <code>AccessLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessLogEntry} obj Optional instance to populate.
   * @return {module:model/AccessLogEntry} The populated <code>AccessLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('requestUri')) {
        obj['requestUri'] = ApiClient.convertToType(data['requestUri'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('requestPayload')) {
        obj['requestPayload'] = ApiClient.convertToType(data['requestPayload'], 'String');
      }
      if (data.hasOwnProperty('responsePayload')) {
        obj['responsePayload'] = ApiClient.convertToType(data['responsePayload'], 'String');
      }
    }
    return obj;
  }

  /**
   * UUID reference of request
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * HTTP status code of response
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * HTTP method of request
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * target URI of request
   * @member {String} requestUri
   */
  exports.prototype['requestUri'] = undefined;
  /**
   * timestamp of request
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * payload of request
   * @member {String} requestPayload
   */
  exports.prototype['requestPayload'] = undefined;
  /**
   * payload of response
   * @member {String} responsePayload
   */
  exports.prototype['responsePayload'] = undefined;



  return exports;
}));


