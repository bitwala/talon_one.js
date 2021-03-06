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
 * The WebhookActivationLogEntry model module.
 * @module model/WebhookActivationLogEntry
 * @version 4.1.1
 */
class WebhookActivationLogEntry {
    /**
     * Constructs a new <code>WebhookActivationLogEntry</code>.
     * Log of activated webhooks
     * @alias module:model/WebhookActivationLogEntry
     * @param integrationRequestUuid {String} UUID reference of the integration request that triggered the effect with the webhook
     * @param webhookId {Number} ID of the webhook that triggered the request
     * @param applicationId {Number} ID of the application that triggered the webhook
     * @param campaignId {Number} ID of the campaign that triggered the webhook
     * @param created {Date} Timestamp of request
     */
    constructor(integrationRequestUuid, webhookId, applicationId, campaignId, created) { 
        
        WebhookActivationLogEntry.initialize(this, integrationRequestUuid, webhookId, applicationId, campaignId, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationRequestUuid, webhookId, applicationId, campaignId, created) { 
        obj['integrationRequestUuid'] = integrationRequestUuid;
        obj['webhookId'] = webhookId;
        obj['applicationId'] = applicationId;
        obj['campaignId'] = campaignId;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>WebhookActivationLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookActivationLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookActivationLogEntry} The populated <code>WebhookActivationLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookActivationLogEntry();

            if (data.hasOwnProperty('integrationRequestUuid')) {
                obj['integrationRequestUuid'] = ApiClient.convertToType(data['integrationRequestUuid'], 'String');
            }
            if (data.hasOwnProperty('webhookId')) {
                obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * UUID reference of the integration request that triggered the effect with the webhook
 * @member {String} integrationRequestUuid
 */
WebhookActivationLogEntry.prototype['integrationRequestUuid'] = undefined;

/**
 * ID of the webhook that triggered the request
 * @member {Number} webhookId
 */
WebhookActivationLogEntry.prototype['webhookId'] = undefined;

/**
 * ID of the application that triggered the webhook
 * @member {Number} applicationId
 */
WebhookActivationLogEntry.prototype['applicationId'] = undefined;

/**
 * ID of the campaign that triggered the webhook
 * @member {Number} campaignId
 */
WebhookActivationLogEntry.prototype['campaignId'] = undefined;

/**
 * Timestamp of request
 * @member {Date} created
 */
WebhookActivationLogEntry.prototype['created'] = undefined;






export default WebhookActivationLogEntry;

