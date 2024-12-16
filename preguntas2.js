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
      "question": "68- A developer must implement a Check Payment Processor class that provides check processing payment capabilities that adhere to what is defined for payments in the ayment Processor interface.",
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
        "C) aura:flow",
        "D) lightning:flow"
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
        "A) &lt;lightning-input-currency value='Salary__c'&gt; &lt;/lightning-input-currency&gt;",
        "B) &lt;lightning-input type='number' value='Salary__c' formatter='currency'&gt; &lt;/lightning-input&gt;",
        "C) &lt;lightning-input-field field='Salary__c'&gt; &lt;/lightning-input-field&gt;",
        "D) &lt;lightning-formatted-number value='Salary__c' format-style='currency'&gt; &lt;/lightning-formatted-number&gt;"
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
      "correctAnswer": [1, 3]
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
        "A) &lt;apex:pagemessage severity='info' /&gt;",
        "B) &lt;apex:pageMessages /&gt;",
        "C) &lt;apex:facet name='messages' /&gt;",
        "D) &lt;apex:message for='info' /&gt;"
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
    },
    {
      "question": "97- What is the result of the following code?",
      "tipo": "única",
      "options": [
        "A) The record will be created and no error will be reported.",
        "B) The record will not be created and no error will be reported.",
        "C) The record will be created and a message will be in the debug log.",
        "D) The record will not be created and an exception will be thrown."
      ],
      "correctAnswer": [1],
      "image": "public/97.png"
    },
    {
      "question": "98- The Account object in an organization has a master-detail relationship to a child object called branch. The following automations exist:\n\nRoll up summary fields.\nCustom validation rules.\nDuplicate rules.\n\nA developer created a trigger on the Account object.\n\nWhich two things should the developer consider while testing the trigger code?\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) The validation rules will cause the trigger to fire again.",
        "B) Rollup summary fields can cause the parent record to go through Save.",
        "C) The trigger may fire multiple times during the transaction.",
        "D) Duplicate rules are executed once all DML operations commit to the database."
      ],
      "correctAnswer": [2, 3]
    },
    {
      "question": "99- A developer edition org has five existing accounts. A developer wants to add 10 more accounts for testing purposes.\n\nThe following code is executed in the developer console using the Execute Anonymous window:\nHow many total accounts will be in the org after this code is executed?",
      "tipo": "única",
      "options": [
        "A) 5",
        "B) 6",
        "C) 10",
        "D) 15"
      ],
      "correctAnswer": [1],
      "image": "public/99.png"
    },
    {
      "question": "100- How does the Lightning Component framework help developers implement solutions faster?",
      "tipo": "única",
      "options": [
        "A) By providing code review standards and processes.",
        "B) By providing change history and version control.",
        "C) By providing device-awareness for mobile and desktops.",
        "D) By providing an Agile process with default steps."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "101- What are two considerations for running a flow in debug mode?\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Input variables of type record cannot be passed into the flow.",
        "B) Callouts to external systems are not executed when debugging a flow.",
        "C) Clicking Pause or executing a Pause element closes the flow and ends debugging.",
        "D) DML operations will be rolled back when the debugging ends."
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "102- A developer has a single custom controller class that works with a Visual Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.\n\nWhich three statements are useful inside the unit test to effectively test the custom controller?\nChoose 3 answers:",
      "tipo": "múltiple",
      "options": [
        "A) ApexPages.currentPage().getParameters().put('input', 'TestValue');",
        "B) String nextPage = controller.save().getUrl();",
        "C) public ExtendedController(ApexPages.StandardController cntrl){}",
        "D) Test.setCurrentPage(pageRef);",
        "E) insert pageRef;"
      ],
      "correctAnswer": [0, 1, 3]
    },
    {
      "question": "103- What are three considerations when using the @InvocableMethod annotation in Apex?",
      "tipo": "múltiple",
      "options": [
        "A) A method using the @InvocableMethod annotation can have multiple input parameters.",
        "B) A method using the @InvocableMethod annotation can be declared as Public or Global.",
        "C) A method using the @InvocableMethod annotation must be declared as static.",
        "D) Only one method using the @InvocableMethod annotation can be defined per Apex Class.",
        "E) A method using the @InvocableMethod annotation must define a return value."
      ],
      "correctAnswer": [1, 2, 3]
    },
    {
      "question": "104- What are two benefits of using External Ids?\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) An External ID can be a formula field to help create a unique key from two fields in Salesforce.",
        "B) An External ID is indexed and can improve the performance of SOQL queries.",
        "C) An External ID can be used with Salesforce Mobile to make external data visible.",
        "D) An External ID field can be used to reference an ID from another external system."
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "105- What is the result of the following code snippet?\n\npublic void doWork(Account acct) {\n    for(Integer i = 0; i <= 200; i++) {\n        insert acct;\n    }\n}",
      "tipo": "única",
      "options": [
        "A) 0 Accounts are inserted.",
        "B) 1 Account is inserted.",
        "C) 200 Accounts are inserted.",
        "D) 201 Accounts are inserted."
      ],
      "correctAnswer": [1],
      "image": "public/105.png"
    },
    {
      "question": "106- Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. They have created a custom field on the Case object to store the support representative name.\n\nWhat is the best solution to assign the case to the appropriate support representative?",
      "tipo": "única",
      "options": [
        "A) Use a trigger on the Case object.",
        "B) Use a validation rule on the Case object.",
        "C) Use an assignment flow element.",
        "D) Use a formula field on the Case object."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "107- Which two are best practices when it comes to Aura component and application event handling?\n\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Handle low-level events in the event handler and re-fire them as higher-level events.",
        "B) Use component events to communicate actions that should be handled at the application level.",
        "C) Reuse the event logic in a component bundle, by putting the logic in the helper.",
        "D) Try to use application events as opposed to component events."
      ],
      "correctAnswer": [0, 2]
    },
    {
      "question": "108- An org has an existing flow that edits an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity.\n\nWhich update must the developer make in the flow?",
      "tipo": "única",
      "options": [
        "A) Add a new Roll Back Records element.",
        "B) Add a new Create Records element.",
        "C) Add a new Update Records element.",
        "D) Add a new Get Records element."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "109- Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records.\n\nWhich Visualforce feature supports this requirement?",
      "tipo": "única",
      "options": [
        "A) Custom List Controller with recordSetVar page attribute.",
        "B) Controller Extension and <apex:listButton> tag.",
        "C) Standard controller and the recordSetVar page attribute.",
        "D) Standard controller and Custom List Controller Extension."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "110- An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship.\n\nHow can this be achieved?",
      "tipo": "única",
      "options": [
        "A) Use the metadata API to create real-time roll-up summaries.",
        "B) Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
        "C) Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
        "D) Use the Streaming API to create real-time roll-up summaries."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "111- What are three ways for a developer to execute tests in an org?\n\nChoose 3 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Metadata API.",
        "B) Tooling API.",
        "C) Setup Menu.",
        "D) Salesforce DX.",
        "E) Bulk API."
      ],
      "correctAnswer": [1, 2, 3]
    },
    {
      "question": "112- A lead developer creates a virtual class called 'OrderRequest'. Consider the following code snippet:\n\npublic class CustomOrder{\n//code implementation\n}\n\nHow can a developer use the OrderRequest class within the CustomerOrder class?",
      "tipo": "única",
      "options": [
        "A) @Implements(class='OrderRequest') public class CustomerOrder",
        "B) public class CustomerOrder implements Order",
        "C) public class CustomerOrder extends OrderRequest",
        "D) @Extends(class='OrderRequest') public class CustomerOrder"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "113- A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record.\n\nHow can the developer find the current user's default record type?",
      "tipo": "única",
      "options": [
        "A) Use the Schema.userInfo.Opportunity.getDefaultRecordType() method.",
        "B) Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() method.",
        "C) Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true.",
        "D) Create the opportunity and check the opportunity.recordType, which will have the record Id if the current user's default record type, before inserting."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "114- What should a developer use to fix a LWC bug in a sandbox?",
      "tipo": "única",
      "options": [
        "A) Developer Console.",
        "B) Force.com IDE.",
        "C) VS Code.",
        "D) Execute Anonymus."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "115- A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience.\n\nWhat should the developer use to override the Contact's Edit button and provide this functionality?",
      "tipo": "única",
      "options": [
        "A) A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
        "B) A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C) A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience.",
        "D) A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "116- When importing and exporting data into Salesforce, which two statements are true?\n\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
        "B) Developer and Developer Pro sandboxes have different storage limits.",
        "C) Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
        "D) Data import wizard is an application that is installed on your computer."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "117- A team of developers is working on a source-driven project that allows them to work independently with many different org configurations.\n\nWhich type of Salesforce orgs should they use for their development?",
      "tipo": "única",
      "options": [
        "A) Scratch orgs.",
        "B) Developer sandboxes.",
        "C) Developer orgs.",
        "D) Full copy sandboxes."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "118- Universal Containers wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation.\n\nWhat are two characteristics of declarative development over programmatic customization?",
      "tipo": "múltiple",
      "options": [
        "A) Declarative code logic does not require maintenance or review.",
        "B) Declarative development can be done using Setup Menu.",
        "C) Declarative development does not require Apex Test classes.",
        "D) Declarative development has higher design limits and query limits."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "119- What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name 'Universal Containers'?",
      "tipo": "única",
      "options": [
        "A) SELECT Lead.Id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
        "B) FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)",
        "C) SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
        "D) FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)"
      ],
      "correctAnswer": [1]
    },
    {
      "question": "120- Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month.\n\nWhich approach should a developer use to meet this requirement?",
      "tipo": "única",
      "options": [
        "A) Create a Schedulable Apex Class.",
        "B) Use the Data Loader command line.",
        "C) Schedule a report.",
        "D) Define a Data Export Scheduled job."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "121- What should a developer use to script the deployment and unit test execution as part of continuous integration?",
      "tipo": "única",
      "options": [
        "A) Developer console.",
        "B) VS Code.",
        "C) Salesforce CLI.",
        "D) Execute anonymous."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "122- Universal Containers decides to use exclusively declarative development to build out a new Salesforce application.\n\nWhich three options should be used to build out the database layer for the application?\n\nChoose 3 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Custom object and fields.",
        "B) Roll up summaries.",
        "C) Relationships.",
        "D) Flows.",
        "E) Triggers."
      ],
      "correctAnswer": [0, 1, 2]
    },
    {
      "question": "123- Which two operations affect the number of times a trigger can fire?\n\nChoose 2 answers:",
      "tipo": "múltiple",
      "options": [
        "A) Roll-up summary fields.",
        "B) Criteria-based sharing calculations.",
        "C) After-save-record-triggered flow.",
        "D) Email messages."
      ],
      "correctAnswer": [0, 1]
    },
    {
      "question": "124- A developer wrote Apex code that calls out to an external system using REST API.\n\nHow should a developer write the test to prove the code is working as intended?",
      "tipo": "única",
      "options": [
        "A) Write a class that extends WebServiceMock.",
        "B) Write a class that implements HTTPCalloutMock.",
        "C) Write a class that implements WebServiceMock.",
        "D) Write a class that implements HTTPCalloutMock."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "125- A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org.\n\nWhich tool should the developer use to troubleshoot query performance?",
      "tipo": "única",
      "options": [
        "A) Setup Menu.",
        "B) Visual Studio Code IDE",
        "C) AppExchange",
        "D) Developer Console."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "126- A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition.\n\nAs part of a data enrichment process, Universal Containers has a CSV file that contains data for all candidates in the system. The file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.\n\nWhich technique should the developer implement to streamline the data upload?",
      "tipo": "única",
      "options": [
        "A) Create a before save flow to correctly map the records.",
        "B) Upload the CSV into a custom object related to Candidate__c.",
        "C) Create a before insert trigger to correctly map the records.",
        "D) Update the PrimaryId__c field definition to mark it as an External Id."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "127- A credit card company needs to implement the functionality for a service agent to process damaged or stolen credit cards. When the customers call in, the service agent must gather many pieces of information. A developer is tasked to implement this functionality.\n\nWhat should the developer use to satisfy this requirement in the most efficient manner?",
      "tipo": "única",
      "options": [
        "A) Lightning component.",
        "B) Screen-based flow.",
        "C) Approval process.",
        "D) Apex trigger."
      ],
      "correctAnswer": [1]
    },
    {
  "question": "128- What are two considerations for deploying from sandbox to production?\n\nChoose two answers:",
  "tipo": "múltiple",
  "options": [
    "A) All triggers must have at least one line of test coverage.",
    "B) Should deploy during business hours to ensure feedback can be quickly addressed.",
    "C) At least 75% of Apex code must be covered by unit tests.",
    "D) Unit tests must have calls to the System.assert method."
  ],
  "correctAnswer": [0, 2]
}

    
  ]
  
  
  export default questions;