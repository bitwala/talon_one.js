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
 * The AccountLimits model module.
 * @module model/AccountLimits
 * @version 4.1.1
 */
class AccountLimits {
    /**
     * Constructs a new <code>AccountLimits</code>.
     * @alias module:model/AccountLimits
     * @param liveApplications {Number} Total Number of allowed live applications in the account
     * @param sandboxApplications {Number} Total Number of allowed sandbox applications in the account
     * @param activeCampaigns {Number} Total Number of allowed active campaigns in the account
     * @param coupons {Number} Total Number of allowed coupons in the account
     * @param referralCodes {Number} Total Number of allowed referral codes in the account
     * @param liveLoyaltyPrograms {Number} Total Number of allowed live loyalty programs in the account
     * @param sandboxLoyaltyPrograms {Number} Total Number of allowed sandbox loyalty programs in the account
     * @param webhooks {Number} Total Number of allowed webhooks in the account
     * @param users {Number} Total Number of allowed users in the account
     * @param apiVolume {Number} Total allowed api volume
     * @param promotionTypes {Array.<String>} array of rulesets where webhook is used
     */
    constructor(liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) { 
        
        AccountLimits.initialize(this, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) { 
        obj['liveApplications'] = liveApplications;
        obj['sandboxApplications'] = sandboxApplications;
        obj['activeCampaigns'] = activeCampaigns;
        obj['coupons'] = coupons;
        obj['referralCodes'] = referralCodes;
        obj['liveLoyaltyPrograms'] = liveLoyaltyPrograms;
        obj['sandboxLoyaltyPrograms'] = sandboxLoyaltyPrograms;
        obj['webhooks'] = webhooks;
        obj['users'] = users;
        obj['apiVolume'] = apiVolume;
        obj['promotionTypes'] = promotionTypes;
    }

    /**
     * Constructs a <code>AccountLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountLimits} obj Optional instance to populate.
     * @return {module:model/AccountLimits} The populated <code>AccountLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountLimits();

            if (data.hasOwnProperty('liveApplications')) {
                obj['liveApplications'] = ApiClient.convertToType(data['liveApplications'], 'Number');
            }
            if (data.hasOwnProperty('sandboxApplications')) {
                obj['sandboxApplications'] = ApiClient.convertToType(data['sandboxApplications'], 'Number');
            }
            if (data.hasOwnProperty('activeCampaigns')) {
                obj['activeCampaigns'] = ApiClient.convertToType(data['activeCampaigns'], 'Number');
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], 'Number');
            }
            if (data.hasOwnProperty('referralCodes')) {
                obj['referralCodes'] = ApiClient.convertToType(data['referralCodes'], 'Number');
            }
            if (data.hasOwnProperty('liveLoyaltyPrograms')) {
                obj['liveLoyaltyPrograms'] = ApiClient.convertToType(data['liveLoyaltyPrograms'], 'Number');
            }
            if (data.hasOwnProperty('sandboxLoyaltyPrograms')) {
                obj['sandboxLoyaltyPrograms'] = ApiClient.convertToType(data['sandboxLoyaltyPrograms'], 'Number');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], 'Number');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], 'Number');
            }
            if (data.hasOwnProperty('apiVolume')) {
                obj['apiVolume'] = ApiClient.convertToType(data['apiVolume'], 'Number');
            }
            if (data.hasOwnProperty('activeRules')) {
                obj['activeRules'] = ApiClient.convertToType(data['activeRules'], 'Number');
            }
            if (data.hasOwnProperty('promotionTypes')) {
                obj['promotionTypes'] = ApiClient.convertToType(data['promotionTypes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Total Number of allowed live applications in the account
 * @member {Number} liveApplications
 */
AccountLimits.prototype['liveApplications'] = undefined;

/**
 * Total Number of allowed sandbox applications in the account
 * @member {Number} sandboxApplications
 */
AccountLimits.prototype['sandboxApplications'] = undefined;

/**
 * Total Number of allowed active campaigns in the account
 * @member {Number} activeCampaigns
 */
AccountLimits.prototype['activeCampaigns'] = undefined;

/**
 * Total Number of allowed coupons in the account
 * @member {Number} coupons
 */
AccountLimits.prototype['coupons'] = undefined;

/**
 * Total Number of allowed referral codes in the account
 * @member {Number} referralCodes
 */
AccountLimits.prototype['referralCodes'] = undefined;

/**
 * Total Number of allowed live loyalty programs in the account
 * @member {Number} liveLoyaltyPrograms
 */
AccountLimits.prototype['liveLoyaltyPrograms'] = undefined;

/**
 * Total Number of allowed sandbox loyalty programs in the account
 * @member {Number} sandboxLoyaltyPrograms
 */
AccountLimits.prototype['sandboxLoyaltyPrograms'] = undefined;

/**
 * Total Number of allowed webhooks in the account
 * @member {Number} webhooks
 */
AccountLimits.prototype['webhooks'] = undefined;

/**
 * Total Number of allowed users in the account
 * @member {Number} users
 */
AccountLimits.prototype['users'] = undefined;

/**
 * Total allowed api volume
 * @member {Number} apiVolume
 */
AccountLimits.prototype['apiVolume'] = undefined;

/**
 * Total allowed active rulesets
 * @member {Number} activeRules
 */
AccountLimits.prototype['activeRules'] = undefined;

/**
 * array of rulesets where webhook is used
 * @member {Array.<String>} promotionTypes
 */
AccountLimits.prototype['promotionTypes'] = undefined;






export default AccountLimits;

