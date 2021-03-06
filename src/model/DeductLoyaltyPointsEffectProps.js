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
 * The DeductLoyaltyPointsEffectProps model module.
 * @module model/DeductLoyaltyPointsEffectProps
 * @version 4.1.1
 */
class DeductLoyaltyPointsEffectProps {
    /**
     * Constructs a new <code>DeductLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;deductLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.
     * @alias module:model/DeductLoyaltyPointsEffectProps
     * @param ruleTitle {String} The title of the rule that contained triggered this points deduction
     * @param programId {Number} The ID of the loyalty program where these points were added
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
     * @param value {Number} The amount of points that were deducted
     */
    constructor(ruleTitle, programId, subLedgerId, value) { 
        
        DeductLoyaltyPointsEffectProps.initialize(this, ruleTitle, programId, subLedgerId, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ruleTitle, programId, subLedgerId, value) { 
        obj['ruleTitle'] = ruleTitle;
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>DeductLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeductLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/DeductLoyaltyPointsEffectProps} The populated <code>DeductLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeductLoyaltyPointsEffectProps();

            if (data.hasOwnProperty('ruleTitle')) {
                obj['ruleTitle'] = ApiClient.convertToType(data['ruleTitle'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('subLedgerId')) {
                obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The title of the rule that contained triggered this points deduction
 * @member {String} ruleTitle
 */
DeductLoyaltyPointsEffectProps.prototype['ruleTitle'] = undefined;

/**
 * The ID of the loyalty program where these points were added
 * @member {Number} programId
 */
DeductLoyaltyPointsEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were added
 * @member {String} subLedgerId
 */
DeductLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The amount of points that were deducted
 * @member {Number} value
 */
DeductLoyaltyPointsEffectProps.prototype['value'] = undefined;






export default DeductLoyaltyPointsEffectProps;

