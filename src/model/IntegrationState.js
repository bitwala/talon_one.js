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
    define(['ApiClient', 'model/CustomerProfile', 'model/CustomerSession', 'model/Event', 'model/Loyalty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerProfile'), require('./CustomerSession'), require('./Event'), require('./Loyalty'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.IntegrationState = factory(root.TalononeApi.ApiClient, root.TalononeApi.CustomerProfile, root.TalononeApi.CustomerSession, root.TalononeApi.Event, root.TalononeApi.Loyalty);
  }
}(this, function(ApiClient, CustomerProfile, CustomerSession, Event, Loyalty) {
  'use strict';




  /**
   * The IntegrationState model module.
   * @module model/IntegrationState
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IntegrationState</code>.
   * Contains all state that might interest application integration plugins. This is the response type returned by all of the Integration API operations. 
   * @alias module:model/IntegrationState
   * @class
   * @param session {module:model/CustomerSession} 
   * @param profile {module:model/CustomerProfile} 
   * @param event {module:model/Event} 
   */
  var exports = function(session, profile, event) {
    var _this = this;

    _this['session'] = session;
    _this['profile'] = profile;
    _this['event'] = event;

  };

  /**
   * Constructs a <code>IntegrationState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationState} obj Optional instance to populate.
   * @return {module:model/IntegrationState} The populated <code>IntegrationState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('session')) {
        obj['session'] = CustomerSession.constructFromObject(data['session']);
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = CustomerProfile.constructFromObject(data['profile']);
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = Event.constructFromObject(data['event']);
      }
      if (data.hasOwnProperty('loyalty')) {
        obj['loyalty'] = Loyalty.constructFromObject(data['loyalty']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerSession} session
   */
  exports.prototype['session'] = undefined;
  /**
   * @member {module:model/CustomerProfile} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {module:model/Event} event
   */
  exports.prototype['event'] = undefined;
  /**
   * @member {module:model/Loyalty} loyalty
   */
  exports.prototype['loyalty'] = undefined;



  return exports;
}));


