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
 * The NewAccountSignUp model module.
 * @module model/NewAccountSignUp
 * @version 4.1.1
 */
class NewAccountSignUp {
    /**
     * Constructs a new <code>NewAccountSignUp</code>.
     * 
     * @alias module:model/NewAccountSignUp
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     * @param companyName {String} 
     */
    constructor(email, password, companyName) { 
        
        NewAccountSignUp.initialize(this, email, password, companyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, companyName) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['companyName'] = companyName;
    }

    /**
     * Constructs a <code>NewAccountSignUp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccountSignUp} obj Optional instance to populate.
     * @return {module:model/NewAccountSignUp} The populated <code>NewAccountSignUp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAccountSignUp();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The email address associated with your account.
 * @member {String} email
 */
NewAccountSignUp.prototype['email'] = undefined;

/**
 * The password for your account.
 * @member {String} password
 */
NewAccountSignUp.prototype['password'] = undefined;

/**
 * @member {String} companyName
 */
NewAccountSignUp.prototype['companyName'] = undefined;






export default NewAccountSignUp;

