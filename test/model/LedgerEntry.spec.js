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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalonOne);
  }
}(this, function(expect, TalonOne) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalonOne.LedgerEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LedgerEntry', function() {
    it('should create an instance of LedgerEntry', function() {
      // uncomment below and update the code to test LedgerEntry
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be.a(TalonOne.LedgerEntry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property profileId (base name: "profileId")', function() {
      // uncomment below and update the code to test the property profileId
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property loyaltyProgramId (base name: "loyaltyProgramId")', function() {
      // uncomment below and update the code to test the property loyaltyProgramId
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property eventId (base name: "eventId")', function() {
      // uncomment below and update the code to test the property eventId
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiryDate")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new TalonOne.LedgerEntry();
      //expect(instance).to.be();
    });

  });

}));
