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
 * The CampaignCopy model module.
 * @module model/CampaignCopy
 * @version 4.1.1
 */
class CampaignCopy {
    /**
     * Constructs a new <code>CampaignCopy</code>.
     * @alias module:model/CampaignCopy
     * @param applicationIds {Array.<String>} Application IDs of the applications to which a campaign should be copied to
     */
    constructor(applicationIds) { 
        
        CampaignCopy.initialize(this, applicationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationIds) { 
        obj['applicationIds'] = applicationIds;
    }

    /**
     * Constructs a <code>CampaignCopy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignCopy} obj Optional instance to populate.
     * @return {module:model/CampaignCopy} The populated <code>CampaignCopy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignCopy();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Name of the copied campaign (Defaults to \"Copy of original campaign name\")
 * @member {String} name
 */
CampaignCopy.prototype['name'] = undefined;

/**
 * Application IDs of the applications to which a campaign should be copied to
 * @member {Array.<String>} applicationIds
 */
CampaignCopy.prototype['applicationIds'] = undefined;

/**
 * A detailed description of the campaign.
 * @member {String} description
 */
CampaignCopy.prototype['description'] = undefined;

/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */
CampaignCopy.prototype['startTime'] = undefined;

/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */
CampaignCopy.prototype['endTime'] = undefined;

/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */
CampaignCopy.prototype['tags'] = undefined;






export default CampaignCopy;

