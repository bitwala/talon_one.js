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
import LoyaltyLedgerEntry from './LoyaltyLedgerEntry';

/**
 * The LoyaltySubLedger model module.
 * @module model/LoyaltySubLedger
 * @version 4.1.1
 */
class LoyaltySubLedger {
    /**
     * Constructs a new <code>LoyaltySubLedger</code>.
     * Ledger of Balance in Loyalty Program for a Customer
     * @alias module:model/LoyaltySubLedger
     * @param total {Number} 
     */
    constructor(total) { 
        
        LoyaltySubLedger.initialize(this, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total) { 
        obj['total'] = total;
    }

    /**
     * Constructs a <code>LoyaltySubLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltySubLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltySubLedger} The populated <code>LoyaltySubLedger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltySubLedger();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [LoyaltyLedgerEntry]);
            }
            if (data.hasOwnProperty('expiringPoints')) {
                obj['expiringPoints'] = ApiClient.convertToType(data['expiringPoints'], [LoyaltyLedgerEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
LoyaltySubLedger.prototype['total'] = undefined;

/**
 * Transactions contains a list of all events that have happened such as additions, subtractions and expiries
 * @member {Array.<module:model/LoyaltyLedgerEntry>} transactions
 */
LoyaltySubLedger.prototype['transactions'] = undefined;

/**
 * ExpiringPoints contains a list of all points that will expiry and when
 * @member {Array.<module:model/LoyaltyLedgerEntry>} expiringPoints
 */
LoyaltySubLedger.prototype['expiringPoints'] = undefined;






export default LoyaltySubLedger;

