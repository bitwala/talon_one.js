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
    root.TalonOne.ShowBundleMetadataEffectProps = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShowBundleMetadataEffectProps model module.
   * @module model/ShowBundleMetadataEffectProps
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>ShowBundleMetadataEffectProps</code>.
   * The properties specific to the \&quot;ShowBundleMetadata\&quot; effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \&quot;normal\&quot; discounts that were not the result of a product bundle.
   * @alias module:model/ShowBundleMetadataEffectProps
   * @class
   * @param description {String} Description of the product bundle
   * @param bundleAttributes {Array.<String>} The cart item attributes that determined which items are being bundled together
   * @param itemsIndices {Array.<Number>} The indices in the cart items array of the bundled items
   */
  var exports = function(description, bundleAttributes, itemsIndices) {
    var _this = this;

    _this['description'] = description;
    _this['bundleAttributes'] = bundleAttributes;
    _this['itemsIndices'] = itemsIndices;
  };

  /**
   * Constructs a <code>ShowBundleMetadataEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShowBundleMetadataEffectProps} obj Optional instance to populate.
   * @return {module:model/ShowBundleMetadataEffectProps} The populated <code>ShowBundleMetadataEffectProps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('bundleAttributes')) {
        obj['bundleAttributes'] = ApiClient.convertToType(data['bundleAttributes'], ['String']);
      }
      if (data.hasOwnProperty('itemsIndices')) {
        obj['itemsIndices'] = ApiClient.convertToType(data['itemsIndices'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Description of the product bundle
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The cart item attributes that determined which items are being bundled together
   * @member {Array.<String>} bundleAttributes
   */
  exports.prototype['bundleAttributes'] = undefined;
  /**
   * The indices in the cart items array of the bundled items
   * @member {Array.<Number>} itemsIndices
   */
  exports.prototype['itemsIndices'] = undefined;



  return exports;
}));

