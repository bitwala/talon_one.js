/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ShowBundleMetadataEffectProps model module.
 * @module model/ShowBundleMetadataEffectProps
 * @version 4.1.1
 */
class ShowBundleMetadataEffectProps {
    /**
     * Constructs a new <code>ShowBundleMetadataEffectProps</code>.
     * The properties specific to the \&quot;ShowBundleMetadata\&quot; effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \&quot;normal\&quot; discounts that were not the result of a product bundle.
     * @alias module:model/ShowBundleMetadataEffectProps
     * @param description {String} Description of the product bundle
     * @param bundleAttributes {Array.<String>} The cart item attributes that determined which items are being bundled together
     * @param itemsIndices {Array.<Number>} The indices in the cart items array of the bundled items
     */
    constructor(description, bundleAttributes, itemsIndices) { 
        
        ShowBundleMetadataEffectProps.initialize(this, description, bundleAttributes, itemsIndices);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, bundleAttributes, itemsIndices) { 
        obj['description'] = description;
        obj['bundleAttributes'] = bundleAttributes;
        obj['itemsIndices'] = itemsIndices;
    }

    /**
     * Constructs a <code>ShowBundleMetadataEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowBundleMetadataEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowBundleMetadataEffectProps} The populated <code>ShowBundleMetadataEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShowBundleMetadataEffectProps();

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


}

/**
 * Description of the product bundle
 * @member {String} description
 */
ShowBundleMetadataEffectProps.prototype['description'] = undefined;

/**
 * The cart item attributes that determined which items are being bundled together
 * @member {Array.<String>} bundleAttributes
 */
ShowBundleMetadataEffectProps.prototype['bundleAttributes'] = undefined;

/**
 * The indices in the cart items array of the bundled items
 * @member {Array.<Number>} itemsIndices
 */
ShowBundleMetadataEffectProps.prototype['itemsIndices'] = undefined;






export default ShowBundleMetadataEffectProps;

