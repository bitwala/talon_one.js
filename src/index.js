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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APIError', 'model/AccessLogEntry', 'model/Account', 'model/AccountAnalytics', 'model/AccountEntity', 'model/AccountLimits', 'model/Application', 'model/ApplicationAPIKey', 'model/ApplicationApiHealth', 'model/ApplicationCustomer', 'model/ApplicationCustomerEntity', 'model/ApplicationCustomerSearch', 'model/ApplicationEntity', 'model/ApplicationEvent', 'model/ApplicationSession', 'model/ApplicationSessionEntity', 'model/Attribute', 'model/AttributeQuery', 'model/Binding', 'model/Campaign', 'model/CampaignAnalytics', 'model/CampaignCopy', 'model/CampaignEntity', 'model/CampaignSearch', 'model/CampaignSet', 'model/CampaignSetBranchNode', 'model/CampaignSetLeafNode', 'model/CampaignSetNode', 'model/CartItem', 'model/CartItemAdjustment', 'model/Change', 'model/CodeGeneratorSettings', 'model/Coupon', 'model/CouponConstraints', 'model/CouponRejectionReason', 'model/CouponReservations', 'model/CouponSearch', 'model/CouponValue', 'model/CreateApplicationAPIKey', 'model/CustomerActivityReport', 'model/CustomerAnalytics', 'model/CustomerProfile', 'model/CustomerProfileSearchQuery', 'model/CustomerSession', 'model/EmailEntity', 'model/Entity', 'model/Environment', 'model/ErrorResponse', 'model/ErrorSource', 'model/Event', 'model/EventType', 'model/FeatureFlag', 'model/FeatureFlags', 'model/FeaturesFeed', 'model/FuncArgDef', 'model/FunctionDef', 'model/ImportCoupons', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse20010', 'model/InlineResponse20011', 'model/InlineResponse20012', 'model/InlineResponse20013', 'model/InlineResponse20014', 'model/InlineResponse20015', 'model/InlineResponse20016', 'model/InlineResponse20017', 'model/InlineResponse20018', 'model/InlineResponse20019', 'model/InlineResponse2002', 'model/InlineResponse20020', 'model/InlineResponse20021', 'model/InlineResponse20022', 'model/InlineResponse20023', 'model/InlineResponse20024', 'model/InlineResponse20025', 'model/InlineResponse20026', 'model/InlineResponse20027', 'model/InlineResponse20028', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/IntegrationEntity', 'model/IntegrationEvent', 'model/IntegrationProfileEntity', 'model/IntegrationState', 'model/LedgerEntry', 'model/LibraryAttribute', 'model/LimitConfig', 'model/LoginParams', 'model/Loyalty', 'model/LoyaltyLedger', 'model/LoyaltyLedgerEntry', 'model/LoyaltyMembership', 'model/LoyaltyPoints', 'model/LoyaltyProgram', 'model/LoyaltyProgramBalance', 'model/LoyaltyProgramLedgers', 'model/LoyaltySubLedger', 'model/ManagerConfig', 'model/Meta', 'model/MiscUpdateUserLatestFeature', 'model/ModelExport', 'model/ModelImport', 'model/MultiApplicationEntity', 'model/MutableEntity', 'model/NewAccount', 'model/NewAccountSignUp', 'model/NewApplication', 'model/NewApplicationAPIKey', 'model/NewAttribute', 'model/NewCampaign', 'model/NewCampaignSet', 'model/NewCoupons', 'model/NewCustomerProfile', 'model/NewCustomerSession', 'model/NewEvent', 'model/NewEventType', 'model/NewFeatureFlags', 'model/NewImport', 'model/NewInvitation', 'model/NewInviteEmail', 'model/NewLoyaltyProgram', 'model/NewPassword', 'model/NewPasswordEmail', 'model/NewReferral', 'model/NewRole', 'model/NewRuleset', 'model/NewTemplateDef', 'model/NewUser', 'model/NewWebhook', 'model/Notification', 'model/Notifications', 'model/Referral', 'model/ReferralRejectionReason', 'model/Role', 'model/RoleAssign', 'model/RoleMembership', 'model/Rule', 'model/Ruleset', 'model/Session', 'model/SlotDef', 'model/TemplateArgDef', 'model/TemplateDef', 'model/UpdateAccount', 'model/UpdateCampaign', 'model/UpdateCoupon', 'model/UpdateCouponBatch', 'model/UpdateLoyaltyProgram', 'model/UpdateRole', 'model/UpdateUser', 'model/User', 'model/UserEntity', 'model/Webhook', 'model/WebhookActivationLogEntry', 'model/WebhookLogEntry', 'api/IntegrationApi', 'api/ManagementApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/APIError'), require('./model/AccessLogEntry'), require('./model/Account'), require('./model/AccountAnalytics'), require('./model/AccountEntity'), require('./model/AccountLimits'), require('./model/Application'), require('./model/ApplicationAPIKey'), require('./model/ApplicationApiHealth'), require('./model/ApplicationCustomer'), require('./model/ApplicationCustomerEntity'), require('./model/ApplicationCustomerSearch'), require('./model/ApplicationEntity'), require('./model/ApplicationEvent'), require('./model/ApplicationSession'), require('./model/ApplicationSessionEntity'), require('./model/Attribute'), require('./model/AttributeQuery'), require('./model/Binding'), require('./model/Campaign'), require('./model/CampaignAnalytics'), require('./model/CampaignCopy'), require('./model/CampaignEntity'), require('./model/CampaignSearch'), require('./model/CampaignSet'), require('./model/CampaignSetBranchNode'), require('./model/CampaignSetLeafNode'), require('./model/CampaignSetNode'), require('./model/CartItem'), require('./model/CartItemAdjustment'), require('./model/Change'), require('./model/CodeGeneratorSettings'), require('./model/Coupon'), require('./model/CouponConstraints'), require('./model/CouponRejectionReason'), require('./model/CouponReservations'), require('./model/CouponSearch'), require('./model/CouponValue'), require('./model/CreateApplicationAPIKey'), require('./model/CustomerActivityReport'), require('./model/CustomerAnalytics'), require('./model/CustomerProfile'), require('./model/CustomerProfileSearchQuery'), require('./model/CustomerSession'), require('./model/EmailEntity'), require('./model/Entity'), require('./model/Environment'), require('./model/ErrorResponse'), require('./model/ErrorSource'), require('./model/Event'), require('./model/EventType'), require('./model/FeatureFlag'), require('./model/FeatureFlags'), require('./model/FeaturesFeed'), require('./model/FuncArgDef'), require('./model/FunctionDef'), require('./model/ImportCoupons'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse20010'), require('./model/InlineResponse20011'), require('./model/InlineResponse20012'), require('./model/InlineResponse20013'), require('./model/InlineResponse20014'), require('./model/InlineResponse20015'), require('./model/InlineResponse20016'), require('./model/InlineResponse20017'), require('./model/InlineResponse20018'), require('./model/InlineResponse20019'), require('./model/InlineResponse2002'), require('./model/InlineResponse20020'), require('./model/InlineResponse20021'), require('./model/InlineResponse20022'), require('./model/InlineResponse20023'), require('./model/InlineResponse20024'), require('./model/InlineResponse20025'), require('./model/InlineResponse20026'), require('./model/InlineResponse20027'), require('./model/InlineResponse20028'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/InlineResponse2009'), require('./model/IntegrationEntity'), require('./model/IntegrationEvent'), require('./model/IntegrationProfileEntity'), require('./model/IntegrationState'), require('./model/LedgerEntry'), require('./model/LibraryAttribute'), require('./model/LimitConfig'), require('./model/LoginParams'), require('./model/Loyalty'), require('./model/LoyaltyLedger'), require('./model/LoyaltyLedgerEntry'), require('./model/LoyaltyMembership'), require('./model/LoyaltyPoints'), require('./model/LoyaltyProgram'), require('./model/LoyaltyProgramBalance'), require('./model/LoyaltyProgramLedgers'), require('./model/LoyaltySubLedger'), require('./model/ManagerConfig'), require('./model/Meta'), require('./model/MiscUpdateUserLatestFeature'), require('./model/ModelExport'), require('./model/ModelImport'), require('./model/MultiApplicationEntity'), require('./model/MutableEntity'), require('./model/NewAccount'), require('./model/NewAccountSignUp'), require('./model/NewApplication'), require('./model/NewApplicationAPIKey'), require('./model/NewAttribute'), require('./model/NewCampaign'), require('./model/NewCampaignSet'), require('./model/NewCoupons'), require('./model/NewCustomerProfile'), require('./model/NewCustomerSession'), require('./model/NewEvent'), require('./model/NewEventType'), require('./model/NewFeatureFlags'), require('./model/NewImport'), require('./model/NewInvitation'), require('./model/NewInviteEmail'), require('./model/NewLoyaltyProgram'), require('./model/NewPassword'), require('./model/NewPasswordEmail'), require('./model/NewReferral'), require('./model/NewRole'), require('./model/NewRuleset'), require('./model/NewTemplateDef'), require('./model/NewUser'), require('./model/NewWebhook'), require('./model/Notification'), require('./model/Notifications'), require('./model/Referral'), require('./model/ReferralRejectionReason'), require('./model/Role'), require('./model/RoleAssign'), require('./model/RoleMembership'), require('./model/Rule'), require('./model/Ruleset'), require('./model/Session'), require('./model/SlotDef'), require('./model/TemplateArgDef'), require('./model/TemplateDef'), require('./model/UpdateAccount'), require('./model/UpdateCampaign'), require('./model/UpdateCoupon'), require('./model/UpdateCouponBatch'), require('./model/UpdateLoyaltyProgram'), require('./model/UpdateRole'), require('./model/UpdateUser'), require('./model/User'), require('./model/UserEntity'), require('./model/Webhook'), require('./model/WebhookActivationLogEntry'), require('./model/WebhookLogEntry'), require('./api/IntegrationApi'), require('./api/ManagementApi'));
  }
}(function(ApiClient, APIError, AccessLogEntry, Account, AccountAnalytics, AccountEntity, AccountLimits, Application, ApplicationAPIKey, ApplicationApiHealth, ApplicationCustomer, ApplicationCustomerEntity, ApplicationCustomerSearch, ApplicationEntity, ApplicationEvent, ApplicationSession, ApplicationSessionEntity, Attribute, AttributeQuery, Binding, Campaign, CampaignAnalytics, CampaignCopy, CampaignEntity, CampaignSearch, CampaignSet, CampaignSetBranchNode, CampaignSetLeafNode, CampaignSetNode, CartItem, CartItemAdjustment, Change, CodeGeneratorSettings, Coupon, CouponConstraints, CouponRejectionReason, CouponReservations, CouponSearch, CouponValue, CreateApplicationAPIKey, CustomerActivityReport, CustomerAnalytics, CustomerProfile, CustomerProfileSearchQuery, CustomerSession, EmailEntity, Entity, Environment, ErrorResponse, ErrorSource, Event, EventType, FeatureFlag, FeatureFlags, FeaturesFeed, FuncArgDef, FunctionDef, ImportCoupons, InlineResponse200, InlineResponse2001, InlineResponse20010, InlineResponse20011, InlineResponse20012, InlineResponse20013, InlineResponse20014, InlineResponse20015, InlineResponse20016, InlineResponse20017, InlineResponse20018, InlineResponse20019, InlineResponse2002, InlineResponse20020, InlineResponse20021, InlineResponse20022, InlineResponse20023, InlineResponse20024, InlineResponse20025, InlineResponse20026, InlineResponse20027, InlineResponse20028, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, IntegrationEntity, IntegrationEvent, IntegrationProfileEntity, IntegrationState, LedgerEntry, LibraryAttribute, LimitConfig, LoginParams, Loyalty, LoyaltyLedger, LoyaltyLedgerEntry, LoyaltyMembership, LoyaltyPoints, LoyaltyProgram, LoyaltyProgramBalance, LoyaltyProgramLedgers, LoyaltySubLedger, ManagerConfig, Meta, MiscUpdateUserLatestFeature, ModelExport, ModelImport, MultiApplicationEntity, MutableEntity, NewAccount, NewAccountSignUp, NewApplication, NewApplicationAPIKey, NewAttribute, NewCampaign, NewCampaignSet, NewCoupons, NewCustomerProfile, NewCustomerSession, NewEvent, NewEventType, NewFeatureFlags, NewImport, NewInvitation, NewInviteEmail, NewLoyaltyProgram, NewPassword, NewPasswordEmail, NewReferral, NewRole, NewRuleset, NewTemplateDef, NewUser, NewWebhook, Notification, Notifications, Referral, ReferralRejectionReason, Role, RoleAssign, RoleMembership, Rule, Ruleset, Session, SlotDef, TemplateArgDef, TemplateDef, UpdateAccount, UpdateCampaign, UpdateCoupon, UpdateCouponBatch, UpdateLoyaltyProgram, UpdateRole, UpdateUser, User, UserEntity, Webhook, WebhookActivationLogEntry, WebhookLogEntry, IntegrationApi, ManagementApi) {
  'use strict';

  /**
   * Talon.One API SDK for Javascript.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TalonOne = require('index'); // See note below*.
   * var xxxSvc = new TalonOne.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TalonOne.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TalonOne.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TalonOne.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APIError model constructor.
     * @property {module:model/APIError}
     */
    APIError: APIError,
    /**
     * The AccessLogEntry model constructor.
     * @property {module:model/AccessLogEntry}
     */
    AccessLogEntry: AccessLogEntry,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountAnalytics model constructor.
     * @property {module:model/AccountAnalytics}
     */
    AccountAnalytics: AccountAnalytics,
    /**
     * The AccountEntity model constructor.
     * @property {module:model/AccountEntity}
     */
    AccountEntity: AccountEntity,
    /**
     * The AccountLimits model constructor.
     * @property {module:model/AccountLimits}
     */
    AccountLimits: AccountLimits,
    /**
     * The Application model constructor.
     * @property {module:model/Application}
     */
    Application: Application,
    /**
     * The ApplicationAPIKey model constructor.
     * @property {module:model/ApplicationAPIKey}
     */
    ApplicationAPIKey: ApplicationAPIKey,
    /**
     * The ApplicationApiHealth model constructor.
     * @property {module:model/ApplicationApiHealth}
     */
    ApplicationApiHealth: ApplicationApiHealth,
    /**
     * The ApplicationCustomer model constructor.
     * @property {module:model/ApplicationCustomer}
     */
    ApplicationCustomer: ApplicationCustomer,
    /**
     * The ApplicationCustomerEntity model constructor.
     * @property {module:model/ApplicationCustomerEntity}
     */
    ApplicationCustomerEntity: ApplicationCustomerEntity,
    /**
     * The ApplicationCustomerSearch model constructor.
     * @property {module:model/ApplicationCustomerSearch}
     */
    ApplicationCustomerSearch: ApplicationCustomerSearch,
    /**
     * The ApplicationEntity model constructor.
     * @property {module:model/ApplicationEntity}
     */
    ApplicationEntity: ApplicationEntity,
    /**
     * The ApplicationEvent model constructor.
     * @property {module:model/ApplicationEvent}
     */
    ApplicationEvent: ApplicationEvent,
    /**
     * The ApplicationSession model constructor.
     * @property {module:model/ApplicationSession}
     */
    ApplicationSession: ApplicationSession,
    /**
     * The ApplicationSessionEntity model constructor.
     * @property {module:model/ApplicationSessionEntity}
     */
    ApplicationSessionEntity: ApplicationSessionEntity,
    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute: Attribute,
    /**
     * The AttributeQuery model constructor.
     * @property {module:model/AttributeQuery}
     */
    AttributeQuery: AttributeQuery,
    /**
     * The Binding model constructor.
     * @property {module:model/Binding}
     */
    Binding: Binding,
    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign: Campaign,
    /**
     * The CampaignAnalytics model constructor.
     * @property {module:model/CampaignAnalytics}
     */
    CampaignAnalytics: CampaignAnalytics,
    /**
     * The CampaignCopy model constructor.
     * @property {module:model/CampaignCopy}
     */
    CampaignCopy: CampaignCopy,
    /**
     * The CampaignEntity model constructor.
     * @property {module:model/CampaignEntity}
     */
    CampaignEntity: CampaignEntity,
    /**
     * The CampaignSearch model constructor.
     * @property {module:model/CampaignSearch}
     */
    CampaignSearch: CampaignSearch,
    /**
     * The CampaignSet model constructor.
     * @property {module:model/CampaignSet}
     */
    CampaignSet: CampaignSet,
    /**
     * The CampaignSetBranchNode model constructor.
     * @property {module:model/CampaignSetBranchNode}
     */
    CampaignSetBranchNode: CampaignSetBranchNode,
    /**
     * The CampaignSetLeafNode model constructor.
     * @property {module:model/CampaignSetLeafNode}
     */
    CampaignSetLeafNode: CampaignSetLeafNode,
    /**
     * The CampaignSetNode model constructor.
     * @property {module:model/CampaignSetNode}
     */
    CampaignSetNode: CampaignSetNode,
    /**
     * The CartItem model constructor.
     * @property {module:model/CartItem}
     */
    CartItem: CartItem,
    /**
     * The CartItemAdjustment model constructor.
     * @property {module:model/CartItemAdjustment}
     */
    CartItemAdjustment: CartItemAdjustment,
    /**
     * The Change model constructor.
     * @property {module:model/Change}
     */
    Change: Change,
    /**
     * The CodeGeneratorSettings model constructor.
     * @property {module:model/CodeGeneratorSettings}
     */
    CodeGeneratorSettings: CodeGeneratorSettings,
    /**
     * The Coupon model constructor.
     * @property {module:model/Coupon}
     */
    Coupon: Coupon,
    /**
     * The CouponConstraints model constructor.
     * @property {module:model/CouponConstraints}
     */
    CouponConstraints: CouponConstraints,
    /**
     * The CouponRejectionReason model constructor.
     * @property {module:model/CouponRejectionReason}
     */
    CouponRejectionReason: CouponRejectionReason,
    /**
     * The CouponReservations model constructor.
     * @property {module:model/CouponReservations}
     */
    CouponReservations: CouponReservations,
    /**
     * The CouponSearch model constructor.
     * @property {module:model/CouponSearch}
     */
    CouponSearch: CouponSearch,
    /**
     * The CouponValue model constructor.
     * @property {module:model/CouponValue}
     */
    CouponValue: CouponValue,
    /**
     * The CreateApplicationAPIKey model constructor.
     * @property {module:model/CreateApplicationAPIKey}
     */
    CreateApplicationAPIKey: CreateApplicationAPIKey,
    /**
     * The CustomerActivityReport model constructor.
     * @property {module:model/CustomerActivityReport}
     */
    CustomerActivityReport: CustomerActivityReport,
    /**
     * The CustomerAnalytics model constructor.
     * @property {module:model/CustomerAnalytics}
     */
    CustomerAnalytics: CustomerAnalytics,
    /**
     * The CustomerProfile model constructor.
     * @property {module:model/CustomerProfile}
     */
    CustomerProfile: CustomerProfile,
    /**
     * The CustomerProfileSearchQuery model constructor.
     * @property {module:model/CustomerProfileSearchQuery}
     */
    CustomerProfileSearchQuery: CustomerProfileSearchQuery,
    /**
     * The CustomerSession model constructor.
     * @property {module:model/CustomerSession}
     */
    CustomerSession: CustomerSession,
    /**
     * The EmailEntity model constructor.
     * @property {module:model/EmailEntity}
     */
    EmailEntity: EmailEntity,
    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity: Entity,
    /**
     * The Environment model constructor.
     * @property {module:model/Environment}
     */
    Environment: Environment,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The ErrorSource model constructor.
     * @property {module:model/ErrorSource}
     */
    ErrorSource: ErrorSource,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventType model constructor.
     * @property {module:model/EventType}
     */
    EventType: EventType,
    /**
     * The FeatureFlag model constructor.
     * @property {module:model/FeatureFlag}
     */
    FeatureFlag: FeatureFlag,
    /**
     * The FeatureFlags model constructor.
     * @property {module:model/FeatureFlags}
     */
    FeatureFlags: FeatureFlags,
    /**
     * The FeaturesFeed model constructor.
     * @property {module:model/FeaturesFeed}
     */
    FeaturesFeed: FeaturesFeed,
    /**
     * The FuncArgDef model constructor.
     * @property {module:model/FuncArgDef}
     */
    FuncArgDef: FuncArgDef,
    /**
     * The FunctionDef model constructor.
     * @property {module:model/FunctionDef}
     */
    FunctionDef: FunctionDef,
    /**
     * The ImportCoupons model constructor.
     * @property {module:model/ImportCoupons}
     */
    ImportCoupons: ImportCoupons,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010: InlineResponse20010,
    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011: InlineResponse20011,
    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012: InlineResponse20012,
    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013: InlineResponse20013,
    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014: InlineResponse20014,
    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015: InlineResponse20015,
    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016: InlineResponse20016,
    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017: InlineResponse20017,
    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018: InlineResponse20018,
    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019: InlineResponse20019,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020: InlineResponse20020,
    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021: InlineResponse20021,
    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022: InlineResponse20022,
    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023: InlineResponse20023,
    /**
     * The InlineResponse20024 model constructor.
     * @property {module:model/InlineResponse20024}
     */
    InlineResponse20024: InlineResponse20024,
    /**
     * The InlineResponse20025 model constructor.
     * @property {module:model/InlineResponse20025}
     */
    InlineResponse20025: InlineResponse20025,
    /**
     * The InlineResponse20026 model constructor.
     * @property {module:model/InlineResponse20026}
     */
    InlineResponse20026: InlineResponse20026,
    /**
     * The InlineResponse20027 model constructor.
     * @property {module:model/InlineResponse20027}
     */
    InlineResponse20027: InlineResponse20027,
    /**
     * The InlineResponse20028 model constructor.
     * @property {module:model/InlineResponse20028}
     */
    InlineResponse20028: InlineResponse20028,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The IntegrationEntity model constructor.
     * @property {module:model/IntegrationEntity}
     */
    IntegrationEntity: IntegrationEntity,
    /**
     * The IntegrationEvent model constructor.
     * @property {module:model/IntegrationEvent}
     */
    IntegrationEvent: IntegrationEvent,
    /**
     * The IntegrationProfileEntity model constructor.
     * @property {module:model/IntegrationProfileEntity}
     */
    IntegrationProfileEntity: IntegrationProfileEntity,
    /**
     * The IntegrationState model constructor.
     * @property {module:model/IntegrationState}
     */
    IntegrationState: IntegrationState,
    /**
     * The LedgerEntry model constructor.
     * @property {module:model/LedgerEntry}
     */
    LedgerEntry: LedgerEntry,
    /**
     * The LibraryAttribute model constructor.
     * @property {module:model/LibraryAttribute}
     */
    LibraryAttribute: LibraryAttribute,
    /**
     * The LimitConfig model constructor.
     * @property {module:model/LimitConfig}
     */
    LimitConfig: LimitConfig,
    /**
     * The LoginParams model constructor.
     * @property {module:model/LoginParams}
     */
    LoginParams: LoginParams,
    /**
     * The Loyalty model constructor.
     * @property {module:model/Loyalty}
     */
    Loyalty: Loyalty,
    /**
     * The LoyaltyLedger model constructor.
     * @property {module:model/LoyaltyLedger}
     */
    LoyaltyLedger: LoyaltyLedger,
    /**
     * The LoyaltyLedgerEntry model constructor.
     * @property {module:model/LoyaltyLedgerEntry}
     */
    LoyaltyLedgerEntry: LoyaltyLedgerEntry,
    /**
     * The LoyaltyMembership model constructor.
     * @property {module:model/LoyaltyMembership}
     */
    LoyaltyMembership: LoyaltyMembership,
    /**
     * The LoyaltyPoints model constructor.
     * @property {module:model/LoyaltyPoints}
     */
    LoyaltyPoints: LoyaltyPoints,
    /**
     * The LoyaltyProgram model constructor.
     * @property {module:model/LoyaltyProgram}
     */
    LoyaltyProgram: LoyaltyProgram,
    /**
     * The LoyaltyProgramBalance model constructor.
     * @property {module:model/LoyaltyProgramBalance}
     */
    LoyaltyProgramBalance: LoyaltyProgramBalance,
    /**
     * The LoyaltyProgramLedgers model constructor.
     * @property {module:model/LoyaltyProgramLedgers}
     */
    LoyaltyProgramLedgers: LoyaltyProgramLedgers,
    /**
     * The LoyaltySubLedger model constructor.
     * @property {module:model/LoyaltySubLedger}
     */
    LoyaltySubLedger: LoyaltySubLedger,
    /**
     * The ManagerConfig model constructor.
     * @property {module:model/ManagerConfig}
     */
    ManagerConfig: ManagerConfig,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The MiscUpdateUserLatestFeature model constructor.
     * @property {module:model/MiscUpdateUserLatestFeature}
     */
    MiscUpdateUserLatestFeature: MiscUpdateUserLatestFeature,
    /**
     * The ModelExport model constructor.
     * @property {module:model/ModelExport}
     */
    ModelExport: ModelExport,
    /**
     * The ModelImport model constructor.
     * @property {module:model/ModelImport}
     */
    ModelImport: ModelImport,
    /**
     * The MultiApplicationEntity model constructor.
     * @property {module:model/MultiApplicationEntity}
     */
    MultiApplicationEntity: MultiApplicationEntity,
    /**
     * The MutableEntity model constructor.
     * @property {module:model/MutableEntity}
     */
    MutableEntity: MutableEntity,
    /**
     * The NewAccount model constructor.
     * @property {module:model/NewAccount}
     */
    NewAccount: NewAccount,
    /**
     * The NewAccountSignUp model constructor.
     * @property {module:model/NewAccountSignUp}
     */
    NewAccountSignUp: NewAccountSignUp,
    /**
     * The NewApplication model constructor.
     * @property {module:model/NewApplication}
     */
    NewApplication: NewApplication,
    /**
     * The NewApplicationAPIKey model constructor.
     * @property {module:model/NewApplicationAPIKey}
     */
    NewApplicationAPIKey: NewApplicationAPIKey,
    /**
     * The NewAttribute model constructor.
     * @property {module:model/NewAttribute}
     */
    NewAttribute: NewAttribute,
    /**
     * The NewCampaign model constructor.
     * @property {module:model/NewCampaign}
     */
    NewCampaign: NewCampaign,
    /**
     * The NewCampaignSet model constructor.
     * @property {module:model/NewCampaignSet}
     */
    NewCampaignSet: NewCampaignSet,
    /**
     * The NewCoupons model constructor.
     * @property {module:model/NewCoupons}
     */
    NewCoupons: NewCoupons,
    /**
     * The NewCustomerProfile model constructor.
     * @property {module:model/NewCustomerProfile}
     */
    NewCustomerProfile: NewCustomerProfile,
    /**
     * The NewCustomerSession model constructor.
     * @property {module:model/NewCustomerSession}
     */
    NewCustomerSession: NewCustomerSession,
    /**
     * The NewEvent model constructor.
     * @property {module:model/NewEvent}
     */
    NewEvent: NewEvent,
    /**
     * The NewEventType model constructor.
     * @property {module:model/NewEventType}
     */
    NewEventType: NewEventType,
    /**
     * The NewFeatureFlags model constructor.
     * @property {module:model/NewFeatureFlags}
     */
    NewFeatureFlags: NewFeatureFlags,
    /**
     * The NewImport model constructor.
     * @property {module:model/NewImport}
     */
    NewImport: NewImport,
    /**
     * The NewInvitation model constructor.
     * @property {module:model/NewInvitation}
     */
    NewInvitation: NewInvitation,
    /**
     * The NewInviteEmail model constructor.
     * @property {module:model/NewInviteEmail}
     */
    NewInviteEmail: NewInviteEmail,
    /**
     * The NewLoyaltyProgram model constructor.
     * @property {module:model/NewLoyaltyProgram}
     */
    NewLoyaltyProgram: NewLoyaltyProgram,
    /**
     * The NewPassword model constructor.
     * @property {module:model/NewPassword}
     */
    NewPassword: NewPassword,
    /**
     * The NewPasswordEmail model constructor.
     * @property {module:model/NewPasswordEmail}
     */
    NewPasswordEmail: NewPasswordEmail,
    /**
     * The NewReferral model constructor.
     * @property {module:model/NewReferral}
     */
    NewReferral: NewReferral,
    /**
     * The NewRole model constructor.
     * @property {module:model/NewRole}
     */
    NewRole: NewRole,
    /**
     * The NewRuleset model constructor.
     * @property {module:model/NewRuleset}
     */
    NewRuleset: NewRuleset,
    /**
     * The NewTemplateDef model constructor.
     * @property {module:model/NewTemplateDef}
     */
    NewTemplateDef: NewTemplateDef,
    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser: NewUser,
    /**
     * The NewWebhook model constructor.
     * @property {module:model/NewWebhook}
     */
    NewWebhook: NewWebhook,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The Notifications model constructor.
     * @property {module:model/Notifications}
     */
    Notifications: Notifications,
    /**
     * The Referral model constructor.
     * @property {module:model/Referral}
     */
    Referral: Referral,
    /**
     * The ReferralRejectionReason model constructor.
     * @property {module:model/ReferralRejectionReason}
     */
    ReferralRejectionReason: ReferralRejectionReason,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The RoleAssign model constructor.
     * @property {module:model/RoleAssign}
     */
    RoleAssign: RoleAssign,
    /**
     * The RoleMembership model constructor.
     * @property {module:model/RoleMembership}
     */
    RoleMembership: RoleMembership,
    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule: Rule,
    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset: Ruleset,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SlotDef model constructor.
     * @property {module:model/SlotDef}
     */
    SlotDef: SlotDef,
    /**
     * The TemplateArgDef model constructor.
     * @property {module:model/TemplateArgDef}
     */
    TemplateArgDef: TemplateArgDef,
    /**
     * The TemplateDef model constructor.
     * @property {module:model/TemplateDef}
     */
    TemplateDef: TemplateDef,
    /**
     * The UpdateAccount model constructor.
     * @property {module:model/UpdateAccount}
     */
    UpdateAccount: UpdateAccount,
    /**
     * The UpdateCampaign model constructor.
     * @property {module:model/UpdateCampaign}
     */
    UpdateCampaign: UpdateCampaign,
    /**
     * The UpdateCoupon model constructor.
     * @property {module:model/UpdateCoupon}
     */
    UpdateCoupon: UpdateCoupon,
    /**
     * The UpdateCouponBatch model constructor.
     * @property {module:model/UpdateCouponBatch}
     */
    UpdateCouponBatch: UpdateCouponBatch,
    /**
     * The UpdateLoyaltyProgram model constructor.
     * @property {module:model/UpdateLoyaltyProgram}
     */
    UpdateLoyaltyProgram: UpdateLoyaltyProgram,
    /**
     * The UpdateRole model constructor.
     * @property {module:model/UpdateRole}
     */
    UpdateRole: UpdateRole,
    /**
     * The UpdateUser model constructor.
     * @property {module:model/UpdateUser}
     */
    UpdateUser: UpdateUser,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserEntity model constructor.
     * @property {module:model/UserEntity}
     */
    UserEntity: UserEntity,
    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook: Webhook,
    /**
     * The WebhookActivationLogEntry model constructor.
     * @property {module:model/WebhookActivationLogEntry}
     */
    WebhookActivationLogEntry: WebhookActivationLogEntry,
    /**
     * The WebhookLogEntry model constructor.
     * @property {module:model/WebhookLogEntry}
     */
    WebhookLogEntry: WebhookLogEntry,
    /**
     * The IntegrationApi service constructor.
     * @property {module:api/IntegrationApi}
     */
    IntegrationApi: IntegrationApi,
    /**
     * The ManagementApi service constructor.
     * @property {module:api/ManagementApi}
     */
    ManagementApi: ManagementApi
  };

  return exports;
}));
