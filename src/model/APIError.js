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
import ErrorSource from './ErrorSource';

/**
 * The APIError model module.
 * @module model/APIError
 * @version 4.1.1
 */
class APIError {
    /**
     * Constructs a new <code>APIError</code>.
     * @alias module:model/APIError
     * @param title {String} Short description of the problem.
     * @param source {module:model/ErrorSource} 
     */
    constructor(title, source) { 
        
        APIError.initialize(this, title, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, source) { 
        obj['title'] = title;
        obj['source'] = source;
    }

    /**
     * Constructs a <code>APIError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIError} obj Optional instance to populate.
     * @return {module:model/APIError} The populated <code>APIError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIError();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ErrorSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }


}

/**
 * Short description of the problem.
 * @member {String} title
 */
APIError.prototype['title'] = undefined;

/**
 * Longer description of this specific instance of the problem.
 * @member {String} details
 */
APIError.prototype['details'] = undefined;

/**
 * @member {module:model/ErrorSource} source
 */
APIError.prototype['source'] = undefined;






export default APIError;

