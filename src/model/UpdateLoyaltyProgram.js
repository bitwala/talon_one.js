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
    root.TalononeApi.UpdateLoyaltyProgram = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateLoyaltyProgram model module.
   * @module model/UpdateLoyaltyProgram
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateLoyaltyProgram</code>.
   * Update Loyalty Program
   * @alias module:model/UpdateLoyaltyProgram
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UpdateLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateLoyaltyProgram} obj Optional instance to populate.
   * @return {module:model/UpdateLoyaltyProgram} The populated <code>UpdateLoyaltyProgram</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('subscribedApplications')) {
        obj['subscribedApplications'] = ApiClient.convertToType(data['subscribedApplications'], ['Number']);
      }
      if (data.hasOwnProperty('defaultValidity')) {
        obj['defaultValidity'] = ApiClient.convertToType(data['defaultValidity'], 'String');
      }
    }
    return obj;
  }

  /**
   * The display title for the Loyalty Program.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Description of our Loyalty Program.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
   * @member {Array.<Number>} subscribedApplications
   */
  exports.prototype['subscribedApplications'] = undefined;
  /**
   * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
   * @member {String} defaultValidity
   */
  exports.prototype['defaultValidity'] = undefined;



  return exports;
}));

