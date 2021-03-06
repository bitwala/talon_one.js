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
 * The NewAttribute model module.
 * @module model/NewAttribute
 * @version 4.1.1
 */
class NewAttribute {
    /**
     * Constructs a new <code>NewAttribute</code>.
     * 
     * @alias module:model/NewAttribute
     * @param entity {module:model/NewAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
     * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload.
     * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param type {module:model/NewAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
     * @param description {String} A description of this attribute.
     * @param suggestions {Array.<String>} A list of suggestions for the attribute.
     * @param editable {Boolean} Whether or not this attribute can be edited.
     */
    constructor(entity, name, title, type, description, suggestions, editable) { 
        
        NewAttribute.initialize(this, entity, name, title, type, description, suggestions, editable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entity, name, title, type, description, suggestions, editable) { 
        obj['entity'] = entity;
        obj['name'] = name;
        obj['title'] = title;
        obj['type'] = type;
        obj['description'] = description;
        obj['suggestions'] = suggestions;
        obj['editable'] = editable;
    }

    /**
     * Constructs a <code>NewAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAttribute} obj Optional instance to populate.
     * @return {module:model/NewAttribute} The populated <code>NewAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAttribute();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('suggestions')) {
                obj['suggestions'] = ApiClient.convertToType(data['suggestions'], ['String']);
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
 * @member {module:model/NewAttribute.EntityEnum} entity
 */
NewAttribute.prototype['entity'] = undefined;

/**
 * @member {String} eventType
 */
NewAttribute.prototype['eventType'] = undefined;

/**
 * The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload.
 * @member {String} name
 */
NewAttribute.prototype['name'] = undefined;

/**
 * The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */
NewAttribute.prototype['title'] = undefined;

/**
 * The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
 * @member {module:model/NewAttribute.TypeEnum} type
 */
NewAttribute.prototype['type'] = undefined;

/**
 * A description of this attribute.
 * @member {String} description
 */
NewAttribute.prototype['description'] = undefined;

/**
 * A list of suggestions for the attribute.
 * @member {Array.<String>} suggestions
 */
NewAttribute.prototype['suggestions'] = undefined;

/**
 * Whether or not this attribute can be edited.
 * @member {Boolean} editable
 */
NewAttribute.prototype['editable'] = undefined;

/**
 * A list of the IDs of the applications that are subscribed to this attribute
 * @member {Array.<Number>} subscribedApplicationsIds
 */
NewAttribute.prototype['subscribedApplicationsIds'] = undefined;





/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */
NewAttribute['EntityEnum'] = {

    /**
     * value: "Account"
     * @const
     */
    "Account": "Account",

    /**
     * value: "Application"
     * @const
     */
    "Application": "Application",

    /**
     * value: "Campaign"
     * @const
     */
    "Campaign": "Campaign",

    /**
     * value: "CustomerProfile"
     * @const
     */
    "CustomerProfile": "CustomerProfile",

    /**
     * value: "CustomerSession"
     * @const
     */
    "CustomerSession": "CustomerSession",

    /**
     * value: "CartItem"
     * @const
     */
    "CartItem": "CartItem",

    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",

    /**
     * value: "Event"
     * @const
     */
    "Event": "Event"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
NewAttribute['TypeEnum'] = {

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "time"
     * @const
     */
    "time": "time",

    /**
     * value: "(list string)"
     * @const
     */
    "(list string)": "(list string)",

    /**
     * value: "(list number)"
     * @const
     */
    "(list number)": "(list number)",

    /**
     * value: "(list time)"
     * @const
     */
    "(list time)": "(list time)",

    /**
     * value: "location"
     * @const
     */
    "location": "location",

    /**
     * value: "(list location)"
     * @const
     */
    "(list location)": "(list location)"
};



export default NewAttribute;

