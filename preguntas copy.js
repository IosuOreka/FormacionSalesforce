const questions = [
    {
      "question": "66- A developer needs to prevent the creaton of Request_c records when certain conditions exist inthe system. A RequestLogic class exists that checks the conditions.",
      "tipo": "única",
      "options": [
        "A)",
        "B)",
        "C)",
        "D)"
      ],
      "correctAnswer": [3],
       "image": "public/66.png"
    },
    {
      "question": "67- A custom picklist field, Food Preterent__c, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated.",
      "tipo": "única",
      "options": [
        "A) Mark the field as Required on the field definition.",
        "B) Mark the field as Required on the objects page layout.",
        "C) Write an apex Trigger to ensure a value is selected.",
        "D) Set 'use the first value in the list as de default value' to true."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "68- A developer must implement a Check Payment Processor class that provides check processing payment capabilities that adhere to what is defined for payments in the Fayment Processor interface.",
      "tipo": "única",
      "options": [
        "A)",
        "B)",
        "C)",
        "D)"
      ],
      "correctAnswer": [0],
      "image": "public/68.png"
    },
    {
      "question": "69- A Salesforce administrator used Flow Builder to create a flow named 'accountOnboarding'. The flow must be used inside an Aura component. Which tag should a developer use to display the flow in the component?",
      "tipo": "única",
      "options": [
        "A) aura-flow",
        "B) lightning-flow",
        "C) aura-flow",
        "D) lightning-flow"
      ],
      "correctAnswer": [1]
    },
    {
      "question": "70- A team of many developers work in their own individual orgs that have the same configuration as the production org. Which type of org is best suited for this scenario?",
      "tipo": "única",
      "options": [
        "A) Developer Sandbox",
        "B) Full Sandbox",
        "C) Developer Edition",
        "D) Partner Developer Edition"
      ],
      "correctAnswer": [0]
    },
    {
      "question": "71- Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
      "tipo": "única",
      "options": [
        "A) registerEvent()",
        "B) fire()",
        "C) fireEvent()",
        "D) emit()"
      ],
      "correctAnswer": [1]
    },
    {
      "question": "72- A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary_c?",
      "tipo": "única",
      "options": [
        "A) <lightning-input-currency value='Salary__c'> </lightning-input-currency>",
        "B) <lightning-input type='number' value='Salary__c' formatter='currency'> </lightning-input>",
        "C) <lightning-input-field field='Salary__c'> </lightning-input-field>",
        "D) <lightning-formatted-number value='Salary__c' format-style='currency'> </lightning-formatted-number>"
      ],
      "correctAnswer": [2]
    },    
    {
      "question": "73- For which three items can a trace flag be configured?",
      "tipo": "múltiple",
      "options": [
        "A) User",
        "B) Visualforce",
        "C) Apex Class",
        "D) Apex Trigger",
        "E) Flow"
      ],
      "correctAnswer": [0, 2, 3]
    },
    {
      "question": "74- Which two settings must be defined in order to update a record of a junction object?",
      "tipo": "múltiple",
      "options": [
        "A) Read access on the primary relationship",
        "B) Read/Write access on the primary relationship",
        "C) Read/Write access on the secondary relationship",
        "D) Read/Write access on the junction object"
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "75- Which exception type cannot be caught?",
      "tipo": "única",
      "options": [
        "A) CalloutException",
        "B) A custom exception",
        "C) NoAccessException",
        "D) LimitException"
      ],
      "correctAnswer": [3]
    },
    {
      "question": "76- A developer must perform a complex SOQL query that joins two objects in a Lightning component. How can the Lightning component execute the query?",
      "tipo": "única",
      "options": [
        "A) Use the Salesforce Streaming API to perform SOQL query.",
        "B) Write the query in a custom Lightning web component wrapper and invoke from the Lightning component.",
        "C) Invoke an Apex class with the method annotated as @AuraEnable to perform Query.",
        "D) Create a flow to execute the query and invoke from the Lightning component."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "77- What are three capabilities of the <ltng:require> tag when loading JavaScript resources in Aura components?",
      "tipo": "múltiple",
      "options": [
        "A) Specifying loading order",
        "B) Loading Scripts in Parallel",
        "C) Loading externally hosted scripts",
        "D) One-time loading for duplicate scripts",
        "E) Loading files from Documents"
      ],
      "correctAnswer": [0, 2, 3]
    },
    {
      "question": "78- Which code statement includes an Apex method named updateAccounts in the class AccountController for use in a Lightning web component?",
      "tipo": "única",
      "options": [
        "A) import updateAccounts from '@salesforce/apex/AccountController';",
        "B) import updateAccounts from 'AccountController.updateAccounts';",
        "C) import updateAccounts from 'AccountController';",
        "D) import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';"
      ],
      "correctAnswer": [3]
    },
    {
      "question": "79- Given the following Apex statement: Account myAccount = [SELECT ID, Name FROM Account]; What occurs when more than one Account is returned by the SOQL query?",
      "tipo": "única",
      "options": [
        "A) The query fails and an error is written to the debug log.",
        "B) The first Account returned is assigned to myAccount.",
        "C) The variable, myAccount, is automatically cast to the List data type.",
        "D) An unhandled exception is thrown and the code terminates."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "80- Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement, a Salesforce developer adds 'Decommissioned' as a picklist value for the Status__c custom field within the Container__c object. Which two approaches could a developer use to enforce that only Container records with a status of 'Decommissioned' can be deleted?",
      "tipo": "múltiple",
      "options": [
        "A) After record-triggered flow",
        "B) Validation rule",
        "C) Before record-triggered flow",
        "D) Apex trigger"
      ],
      "correctAnswer": [2, 3]
    },
    {
      "question": "81- A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      "tipo": "única",
      "options": [
        "A) Schema.sObjectType.Account.isDeletable()",
        "B) accountRec.sObjectType.isDeletable()",
        "C) Account.isDeletable()",
        "D) accountRec.isDeletable()"
      ],
      "correctAnswer": [0]
    },
    {
      "question": "82- A developer at All Computing is tasked to create the supporting test class for a programmatic customization that leverages records stored with the custom object, Pricing Structure. AW Computing has a complex pricing structure for each item in the store, spanning more than 500 records. Which two approaches can the developer use to ensure pricing structure records are available when the test class is executed?",
      "tipo": "múltiple",
      "options": [
        "A) Use a Test Data Factory class",
        "B) Use the @IsTest (SeeAllData=true) annotation",
        "C) Use the Test.loadTest() method",
        "D) Use without sharing on the class declaration"
      ],
      "correctAnswer": [0, 1]
    },
    {
      "question": "83- A developer wants to get access to the standard price book in the org while writing a test class that covers an Opportunity Line Item trigger. Which method allows access to the price book?",
      "tipo": "única",
      "options": [
        "A) Use Test.loadData and a static resource to load a standard price book",
        "B) Use @IsTest (SeeAllData=true) and delete the existing standard price book",
        "C) Use Test.getStandardPricebookId() to get the standard price book ID",
        "D) Use @TestVisible to allow the test method to see the standard price book"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "84- A developer is alerted to an issue with a custom Apex trigger that is causing records to be duplicated. What is the most appropriate debugging approach to troubleshoot the issue?",
      "tipo": "única",
      "options": [
        "A) Review the Historical Event logs to identify the source of the issue.",
        "B) Add system.debug statements to the code to track the execution flow and identify the issue.",
        "C) Use the Apex Interactive Debugger to step through the code and identify the issue.",
        "D) Disable the trigger in production and test to see if the issue still occurs."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "85- What should a developer do to check the code coverage of a class after running all tests?",
      "tipo": "única",
      "options": [
        "A) Select and view the class on the Apex Test Execution page in the Developer Console.",
        "B) View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
        "C) View the Code Coverage column in the list view on the Apex Classes page.",
        "D) View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "86- If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statements are true regarding governor limits?",
      "tipo": "múltiple",
      "options": [
        "A) The Apex governor limits are reset for each iteration of the execute() method.",
        "B) The Apex governor limit cannot be exceeded due to the asynchronous nature of the transaction.",
        "C) The Apex governor limits are omitted while calling the constructor of the Apex class.",
        "D) The Apex governor limits will use the asynchronous limit levels."
      ],
      "correctAnswer": [0, 3]
    },
    {
      "question": "87- A custom Visualforce controller calls the ApexPages.addMessage() method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
      "tipo": "única",
      "options": [
        "A) <apex:pagemessage severity='info' />",
        "B) <apex:pageMessages />",
        "C) <apex:facet name='messages' />",
        "D) <apex:message for='info' />"
      ],
      "correctAnswer": [1]
    },
    {
      "question": "88- A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class. Change Set deployment to production fails with the test coverage warning: 'Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.' What should the developer do to successfully deploy the new Apex trigger and helper class?",
      "tipo": "única",
      "options": [
        "A) Remove the failing test methods from the test class.",
        "B) Increase the test class coverage on the helper class.",
        "C) Create a test class and method to cover the Apex trigger.",
        "D) Run the test using the 'Run All Test' method."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "89- A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three steps should the developer do to satisfy these requirements?",
      "tipo": "múltiple",
      "options": [
        "A) Create a Lightning web component.",
        "B) Create a Dynamic Form.",
        "C) Create a Custom Permission for the users.",
        "D) Add a Dynamic Action to the Account Record Page.",
        "E) Add a Dynamic Action to the Users' assigned Page Layouts."
      ],
      "correctAnswer": [0, 1, 2]
    },
    {
      "question": "90- A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively. Which design framework should the developer consider to ensure scalability and maintainability?",
      "tipo": "única",
      "options": [
        "A) Agile Development.",
        "B) Flux (view, action, dispatcher, and store).",
        "C) Model-View-Controller (MVC).",
        "D) Waterfall model."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "91- How is a controller and extension specified for a custom object named 'Notice' on a Visualforce page?",
      "tipo": "única",
      "options": [
        "A) apex:page controllers='Notice__c, myControllerExtension'",
        "B) apex:page = Notice extends ='myControllerExtension'",
        "C) apex:page standardController='Notice__c' extensions='myControllerExtension'",
        "D) apex:page controller='Notice__c' extensions='myControllerExtension'"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "92- What are two characteristics related to formulas?",
      "tipo": "múltiple",
      "options": [
        "A) Fields that are used in a formula field can be deleted or edited without editing the formula.",
        "B) Formulas can reference values in related objects.",
        "C) Formulas are calculated at runtime and are not stored in the database.",
        "D) Formulas can reference themselves."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "93- Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation. What would be the best solution for this requirement?",
      "tipo": "única",
      "options": [
        "A) Use an approval process to enforce the completion of a valid email address using an outbound message action.",
        "B) Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid.",
        "C) Use a custom lightning web component to make a callout to validate the fields on a third-party system.",
        "D) Submit a REST API Callout with a JSON payload and validate the fields on a third-party system."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "94- A lead developer creates an Apex interface called Laptop. Consider the following code snippet:\n\npublic class Silverlaptop {\n    //code implementation\n}\n\nHow can a developer use the Laptop interface within the Silver Laptop class?",
      "tipo": "única",
      "options": [
        "A) @Extends(class='Laptop') public class SilverLaptop",
        "B) public class SilverLaptop implements Laptop",
        "C) @Interface(class='Laptop') public class SilverLaptop",
        "D) public class SilverLaptop extends Laptop"
      ],
      "correctAnswer": [1]
    },
    {
      "question": "95- A developer is tasked to perform a security review of the contactSearch Apex class that exists in the system. Within the class, the developer identifies the following method as a security threat:\n\nList<Contact> performSearch (String lastName) {\n    return Database.query('SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like \'%' + lastName + '%\'');\n}\n\nWhat are two ways the developer can update the method to prevent a SOQL injection attack? Choose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Use the @ReadOnly annotation and with sharing keyword on the class.",
        "B) Use a regular expression on the parameter to remove special characters.",
        "C) Use the escapeSingleQuotes method to sanitize the parameter before its use.",
        "D) Use variable binding and replace the dynamic query with static SOQL."
      ],
      "correctAnswer": [2, 3],
      "image": "public/95.png"
    },
    {
      "question": "96- What does the Lightning Component framework provide to developers?",
      "tipo": "única",
      "options": [
        "A) Extended governor limits for applications",
        "B) Support for Classic and Lightning UIs",
        "C) Prebuilt components that can be reused.",
        "D) Templates to create custom components."
      ],
      "correctAnswer": [2]
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    

    
  ]
  
  
  export default questions;