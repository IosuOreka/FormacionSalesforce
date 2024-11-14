const questions = [
    {
      "question": "Universal Containers wants to lower its shipping cost while making the shipping process more efficient. The distribution Officer advises UC to implement global addresses to allow multiple accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for the business requirement and uses the setup menu to create a custom object called 'Global Address'.",
      "tipo": "única",
      "options": [
        "A) Add a master detail field on the Global Address object to the Account object.",
        "B) Add a lookup field on the Global Address object to the Account object.",
        "C) Add a lookup field on the Account object to the Global Address object.",
        "D) Add a master-detail field on the Account object to the Global Address object."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "Universal Containers hires a developer to build a custom search page to help users find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field.",
      "tipo": "múltiple",
      "options": [
        "A) SOQL is able to return more records.",
        "B) SOSL is faster for text searches.",
        "C) SOSL is able to return more records.",
        "D) SOQL is faster for text searches."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data.",
      "tipo": "única",
      "options": [
        "A) The isAccessible() method must be used for field-label access checks.",
        "B) The with sharing keyword must be used to enforce sharing rules.",
        "C) Lightning Data Service handles sharing rules and field-level security.",
        "D) Lightning Data Services ignores field-level security."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "A developer considers the following snippet of code:\n\nBoolean isOK;\ninteger x;\nString theString = 'Hello';\n\nif(isOK == false && theString = 'Hello'){\n  x = 1;\n}else if(isOK == true && theString == 'Hello'){\n  x = 2;\n}else if(isOK != null && theString == 'Hello'){\n  x = 3;\n}else{\n  x = 4;\n}",
      "tipo": "única",
      "options": [
        "a) 2",
        "b) 1",
        "c) 4",
        "d) 3"
      ],
      "correctAnswer": [2],
      "image": "public/4.png"
    },
    {
      "question": "A developer created a trigger on the Account object. While testing the trigger, the developer sees the error message 'Maximum trigger depth exceeded'. What could be the possible causes?",
      "tipo": "única",
      "options": [
        "a) The trigger is getting executed multiple times.",
        "b) The trigger is too long and should be refactored into a helper class.",
        "c) The developer does not have the correct user permission.",
        "d) The trigger does not have sufficient code coverage."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
      "tipo": "única",
      "options": [
        "a) Use SOQL to query the org for the required data.",
        "b) Use Test.loadData() and reference a JSON file in Documents.",
        "c) Use Test.loadData() and reference a CSV file in static resource.",
        "d) Use Anonymous Apex to create required data."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "A developer deployed a trigger to update the Status__c of Assets related to an Account when the Account's status changes and a nightly integration that updates Accounts in bulk has started to fail with limit failures.",
      "tipo": "única",
      "options": [
        "a) Add a limit clause to SOQL query on line 16 to limit the number of Assets queried for an Account.",
        "b) Move all the logic to a Queueable class that queries for and updates the Assets and call it from the trigger.",
        "c) Add List&lt;Asset&gt; assets = [SELECT Id, Status__c FROM Asset WHERE AccountId = acctId].",
        "d) Change the getAssetsToUpdate method to process all Accounts in one call and call it outside of the for loop that starts on line 3."
      ],
      "correctAnswer": [3],
      "image": "public/7.png"
    },
    {
      "question": "A developer is asked to write helper methods that create test data for unit tests.\n\npublic testUtils{\n\n    public static Account createAccount(){\n        Account act = new Account();\n\n        // set some fields on acct...\n\n        return act;\n    }\n\n    //.. other methods ...\n}",
      "tipo": "única",
      "options": [
        "a) Remove static from line 03.",
        "b) Add @isTest above line 01.",
        "c) Add @isTest above line 03.",
        "d) Change public to private on line 01."
      ],
      "correctAnswer": [1],
      "image": "public/8.png"
    },
    {
      "question": "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
      "tipo": "única",
      "options": [
        "a) Use SOQL and the Tooling API.",
        "b) Use the Flow Properties page.",
        "c) Use the Code coverage Setup page.",
        "d) Use the ApexTestResults class."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "A deployment team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
      "tipo": "múltiple",
      "options": [
        "a) Developer console.",
        "b) SFDX CLI.",
        "c) Change Sets.",
        "d) Ant migration tool."
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "A developer identifies the following triggers on the Expense__c object:\ndeleteExpense,\napplyDefaultsToExpense,\nValidateExpenseUpdate;\n\nThe triggers process before delete, before insert, and before update events respectively.\n\nWhat two techniques should the developer implement to ensure trigger best practices are allowed?",
      "tipo": "múltiple",
      "options": [
        "a) Create helper classes to execute the appropriate logic when a record is saved.",
        "b) Maintain all three triggers on the Expense__c object, but move the Apex logic out of the trigger definition.",
        "c) Unify the before insert and before update triggers and use flow for the delete action.",
        "d) Unify all three triggers in a single trigger on the Expense__c object that includes all events."
      ],
      "correctAnswer": [0, 3]
    },
    {
      "question": "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
      "tipo": "única",
      "options": [
        "a) Developer console.",
        "b) Salesforce CLI.",
        "c) VS Code.",
        "d) Execute Anonymous."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "The Job_Application__c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology', while also retrieving the Contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
      "tipo": "única",
      "options": [
        "a) [SELECT id, [SELECT Id FROM Job_Applications__c] FROM Contact WHERE Accounts.Industry = 'Technology'];",
        "b) [SELECT id, [SELECT Id FROM Job_Applications__r] FROM Contact WHERE Accounts.Industry = 'Technology'];",
        "c) [SELECT id, [SELECT Id FROM Job_Application__c] FROM Contact WHERE Account.Industry = 'Technology'];",
        "d) [SELECT id, [SELECT Id FROM Job_Application__r] FROM Contact WHERE Account.Industry = 'Technology'];"
      ],
      "correctAnswer": [3]
    },
    {
      "question": "What are three characteristics of change set deployments?",
      "tipo": "múltiple",
      "options": [
        "a) Sending a change set between two orgs requires deployment connection.",
        "b) Change sets can only be used between related organizations.",
        "c) Deployment is done in one-way, single transaction.",
        "d) Change sets can deploy custom settings data.",
        "e) Change sets can be used to transfer records."
      ],
      "correctAnswer": [0, 1, 2]
    },
    {
      "question": "What are the two benefits of using declarative customizations over code?",
      "tipo": "múltiple",
      "options": [
        "a) Declarative customizations automatically generate test classes.",
        "b) Declarative customizations generally require less maintenance.",
        "c) Declarative customizations cannot generate runtime errors.",
        "d) Declarative customizations automatically update with each Salesforce release."
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "A developer is creating a lightning web component to show a list of sales records. The Sales representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the records except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
      "tipo": "única",
      "options": [
        "a) Use lightning Locker Service to enforce Sharing rules and field-level security.",
        "b) Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component.",
        "c) Use Lightning Data Service to get the collection of Sales Records.",
        "d) Use security-stripInaccessible to remove fields inaccessible to the current user."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "A software company uses the following objects and relationships:\n* Case: To handle customer support issues.\n* Defect__c: A custom object to represent known issues with the company's software.\n* Case_Defect__c: A junction object between Case and Defect__c to represent that a defect is a cause of a customer issue.\n\nCase and Defect__c have Private organization-wide defaults.\n\nWhat should be done to share a specific Case_Defect__c record with a user?",
      "tipo": "única",
      "options": [
        "A) Share the parent Defect__c record.",
        "B) Share the parent Case record.",
        "C) Share the parent Case and Defect__c records.",
        "D) Share the Case_Defect__c record."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex Helper class.\nChange Set deployment to production fails with the test coverage warning:\nTest coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.\n\nWhat should the developer do to successfully deploy the new Apex Trigger and helper class?",
      "tipo": "única",
      "options": [
        "a) Run the tests using 'Run All Tests' method.",
        "b) Remove the failing test methods from the test class.",
        "c) Increase the test class coverage on the helper class.",
        "d) Create a test class and method to cover the Apex trigger."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "Which statement describes the execution order when triggers are associated to the same object and event?",
      "tipo": "única",
      "options": [
        "A) Trigger execution order cannot be guaranteed.",
        "B) Triggers are executed in the order they are modified.",
        "C) Triggers are executed in the order they are created.",
        "D) Triggers are executed alphabetically by trigger name."
      ],
      "correctAnswer": [0]
    },
    {
        "question": "Which code displays the contents of a Visualforce page as pdf?",
        "tipo": "única",
        "options": [
        "a) &lt;apex:page contentType='pdf'&gt;",
        "b) &lt;apex:page renderAs='application/pdf'&gt;",
        "c) &lt;apex:page renderAs='pdf'&gt;",
        "d) &lt;apex:page contentType='application/pdf'&gt;"
        ],
        "correctAnswer": [2]
    },
    {
      "question": "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation.\nWhat would be the best solution for this requirement?",
      "tipo": "única",
      "options": [
        "a) Submit a REST API callout with a JSON payload and validate the fields on a third party system.",
        "b) Use a custom Lightning Web component to make a callout to validate the fields on a third party system.",
        "c) Use an Approval Process to enforce the completion of a valid email address using an outbound message action.",
        "d) Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "What are two ways a developer can get the status of an enqueued job for a class that implements the queueable interface?",
      "tipo": "múltiple",
      "options": [
        "A) View the Apex Flex Queue",
        "B) View the Apex Jobs page",
        "C) Query the AsyncApexJob object",
        "D) View the Apex Status Page"
      ],
      "correctAnswer": [0, 1]
    },
    {
        "question": "Which Statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
        "tipo": "única",
        "options": [
          "a) List &lt;sObject&gt; searchList = [FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
          "b) Map &lt;sObject&gt; searchList = [FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
          "c) List &lt;List &lt;sObject&gt;&gt; searchList = [FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
          "d) List &lt;List &lt;sObject&gt;&gt; searchList = [SELECT Name, ID FROM Contact, Lead WHERE Name LIKE '%ACME%'];"
        ],
        "correctAnswer": [0]
      },
    {
      "question": "Given the following Anonymous block:",
      "tipo": "única",
      "options": [
        "a) The transaction will succeed and changes will be committed.",
        "b) The try-catch block will handle exceptions thrown by governor limits.",
        "c) The transaction will fail due to exceeding the governor limit.",
        "d) The try-catch block will handle any DML exceptions thrown."
      ],
      "correctAnswer": [2],
      "image": "public/24.png"
    },
    {
      "question": "A developer must create a DrayList class that provides capabilities defined in the Sortable and Drawable interfaces.",
      "tipo": "única",
      "options": [
        "A) public class DrawList implements Sortable, Drawable{\n    public void sort(){ /*Implementation*/ }\n    public void draw(){ /*Implementation*/ }\n}",
        "B) public class DrawList extends Sortable, Drawable{\n    public void sort(){ /*Implementation*/ }\n    public void draw(){ /*Implementation*/ }\n}",
        "C) public class DrawList extends Sortable,  extends Drawable{\n    public void sort(){ /*Implementation*/ }\n    public void draw(){ /*Implementation*/ }\n}",
        "D) public class DrawList implements Sortable, implements Drawable{\n    public void sort(){ /*Implementation*/ }\n    public void draw(){ /*Implementation*/ }\n}"
      ],
      "correctAnswer": [0],
        "image": "public/25.png"
    },
    {
      "question": "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/won stage.\nWhich two strategies can a developer use to accomplish this?",
      "tipo": "múltiple",
      "options": [
        "A) Use a before-save Apex trigger.",
        "B) Use a validation rule.",
        "C) Use an automatically launched Approval Process.",
        "D) Use an auto-response rule."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "When using Salesforce DX, what does a developer need to create and manage scratch orgs?",
      "tipo": "única",
      "options": [
        "A) Environment hub.",
        "B) Dev Hub.",
        "C) Sandbox.",
        "D) Production."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user.\nHow can the developer make sure the validation rules violations are displayed?",
      "tipo": "única",
      "options": [
        "a) Include &lt;apex:messages&gt; on the Visualforce page.",
        "b) Perform the DML using the Database.upsert() method.",
        "c) Use a try/catch with a custom exception class.",
        "d) Add custom controller attributes to display the message."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "Flow builder uses an Apex Action to provide additional information about multiple Contacts, sorted in a custom class, ContactInfo.\nWhich is the correct definition of the Apex method that gets the additional information?",
      "tipo": "única",
      "options": [
        "A) @InvocableMethod(label='Additional Info')\n    public ContactInfo getInfo(Id contactId){\n        /* Implementation */ }",
        "B) @InvocableMethod(label='Additional Info')\n    public static ContactInfo getInfo(Id contactId){\n        /* Implementation */ }",
        "C) @InvocableMethod(label='Additional Info')\n    public static List&lt;ContactInfo&gt; getInfo(List&lt;Id&gt; contactId){\n        /* Implementation */ }",
        "D) @InvocableMethod(label='Additional Info')\n     public List&lt;ContactInfo&gt; getInfo(List&lt;Id&gt; contactId){\n        /* Implementation */ }"
      ],
      "correctAnswer": [2],
        "image": "public/29.png"
    },
    {
      "question": "What are two ways for a developer to execute tests in an org?",
      "tipo": "múltiple",
      "options": [
        "A) Bulk API.",
        "B) Tooling API.",
        "C) Developer Console.",
        "D) Metadata API."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "A developer created a Lightning web component called statusComponent to be inserted into the Account record page. Which two things should the developer do to make this component available?",
      "tipo": "múltiple",
      "options": [
        "A) Add &lt;masterLabel&gt;Account&lt;/masterLabel&gt; to the statusComponent.js-meta.xml file.",
        "B) Set isExposed to true in the statusComponent.js-meta.xml file.",
        "C) Add &lt;target&gt;lightning__RecordPage&lt;/target&gt; to the statusComponent.js file.",
        "D) Add &lt;target&gt;lightning__RecordPage&lt;/target&gt; to the statusComponent.js-meta.xml file."
      ],
      "correctAnswer": [1, 3]
    },
    {
      "question": "A developer creates a batch Apex job to update a large number of records, and receives reports of the job timing out and not completing.\nWhat is the first step towards troubleshooting the issue?",
      "tipo": "única",
      "options": [
        "A) Check the asynchronous job monitoring page to view the job status and logs.",
        "B) Disable the batch job and recreate it with a smaller number of records.",
        "C) Check the debug logs for the batch job.",
        "D) Decrease the batch size to reduce the load of the system."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "Which are two phases in the Aura application event propagation framework?",
      "tipo": "múltiple",
      "options": [
        "A) Control.",
        "B) Emit.",
        "C) Bubble.",
        "D) Default."
      ],
      "correctAnswer": [1, 2]
    },
    {
      "question": "What is an example of a polymorphic lookup field in Salesforce?",
      "tipo": "única",
      "options": [
        "A) The WhatId field on the Standard Event object.",
        "B) A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign.",
        "C) The LeadId and ContactId fields on the standard Campaign Member object.",
        "D) The ParentId field on the standard Account object."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.\nWhich approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      "tipo": "única",
      "options": [
        "a) Declare the class as global and use the public access modifier on the method.",
        "b) Declare the class as public and use the global access modifier on the method.",
        "c) Declare the class and method using the public access modifier.",
        "d) Declare the class and method using the global access modifier."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "Which three Salesforce resources can be accessed from a Lightning web component?",
      "tipo": "múltiple",
      "options": [
        "A) Third-party web components.",
        "B) SVG resources.",
        "C) All external libraries.",
        "D) Content asset files.",
        "E) Static resources."
      ],
      "correctAnswer": [1, 3, 4]
    },
    {
      "question": "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
      "tipo": "única",
      "options": [
        "a) Database.insert(records, true)",
        "b) Database.insert(records, false)",
        "c) insert(records, false)",
        "d) insert records."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "Universal Hiring uses Salesforce to capture job applications. A Salesforce administrator created two custom objects; Job__c acting as the master object, Job_Application__c acting as the detail. Within the Job__c object, a custom multi-select picklist, Preferred_Locations__c, contains a list of approved states for the positions. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship. Recruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync if changes occur to the Contact's Mailing State.\nWhat is the recommended tool a developer should use to meet the business requirement?",
      "tipo": "única",
      "options": [
        "A) Roll-up summary field.",
        "B) Record-triggered flow.",
        "C) Formula field.",
        "D) Apex trigger."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "Refer to the following Apex code What is the value of the X when it is written to the debug log?",
      "tipo": "única",
      "options": [
        "A) 0.",
        "B) 1.",
        "C) 2.",
        "D) 3."
      ],
      "correctAnswer": [2],
        "image": "public/39.png"
    },
    {
      "question": "What is a consideration for running a flow in debug mode?",
      "tipo": "única",
      "options": [
        "a) Callouts to external systems are not executed when debugging a flow.",
        "b) When debugging a scheduled-triggered flow, the flow starts only for one record.",
        "c) DML Operations will be rolled back when the debugging ends.",
        "d) Clicking Pause allows an element to be replaced in the flow."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "An Apex method, getAccounts, that returns a list of Accounts given a searchTerm, is available for Lightning Web Components to use.\nWhat is the correct definition of a Lightning Web Component property that uses the getAccounts method?",
      "tipo": "única",
      "options": [
        "A) @wire(getAccounts, '$searchTerm')\n   accountList;",
        "B) @AuraEnabled(getAccounts, {searchTerm: '$searchTerm'})\n   accountList;",
        "C) @wire(getAccounts, {searchTerm: '$searchTerm'})\n   accountList;",
        "D) @AuraEnabled(getAccounts, '$searchTerm')\n   accountList;"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component based development over Visualforce?",
      "tipo": "múltiple",
      "options": [
        "A) Self-contained and reusable units of an application.",
        "B) Built-in standard and custom set controllers.",
        "C) Log capturing via the Debug Logs Setup page.",
        "D) Rich component ecosystem."
      ],
      "correctAnswer": [0, 3]
    },
    {
      "question": "Universal Containers uses out-of-the-box order management, that has a Master-Detail relationship between Order and Order Line Item. UC stores the availability date on each Order Line Item and Orders are only shipped when all of the Order Line Items are available. Which method should be used to calculate the estimated ship date for an order?",
      "tipo": "única",
      "options": [
        "A) Use a MAX Roll-Up Summary field on the latest availability date fields.",
        "B) Use a LATEST formula on each of the latest availability date fields.",
        "C) Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "D) Use a CEILING formula on each of the latest availability date fields."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "A software company is using Salesforce to track the companies they sell their software to in the Account object. They also use Salesforce to track bugs in their software with a custom object, Bug__c. As part of a process improvement initiative, they want to be able to report on which companies have reported which bugs. Each company should be able to report multiple bugs and bugs can also be reported by multiple companies. What is needed to allow this reporting?",
      "tipo": "única",
      "options": [
        "a) Roll-up summary field of Bug__c on Account.",
        "b) Junction object between Bug__c and Account.",
        "c) Master-detail field on Bug__c to Account.",
        "d) Lookup field on Bug__c to Account."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
      "tipo": "única",
      "options": [
        "A) A lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "B) A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C) A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience.",
        "D) A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "A developer wants to send an outbound message when a record meets a specific criteria. Which two features satisfy this use case?",
      "tipo": "múltiple",
      "options": [
        "A) Flow builder can be used to check the record criteria and send an outbound message.",
        "B) Approval Process can be used to check the record criteria and send an outbound message without Apex code.",
        "C) Next Best Action can be used to check the record criteria and send an outbound message.",
        "D) Entitlement Process can be used to check the record criteria and send an outbound message without Apex code."
      ],
      "correctAnswer": [0, 1]
    },
    {
      "question": "A developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component.\nIn which two ways can this be accomplished?",
      "tipo": "múltiple",
      "options": [
        "A) The parent component can use the Apex controller class to send data to the child component.",
        "B) The parent component can use a custom event to pass the data to the child component.",
        "C) The parent component can invoke a public method in the child component.",
        "D) The parent component can use a public property to pass the data to the child component."
      ],
      "correctAnswer": [2, 3]
    },
    {
      "question": "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions.\nHow should the developer declare maxAttempts to meet these requirements?",
      "tipo": "única",
      "options": [
        "A) Declare maxAttempts as a variable on a helper class.",
        "B) Declare maxAttempts as a member variable on the trigger definition.",
        "C) Declare maxAttempts as a private static variable on a helper class.",
        "D) Declare maxAttempts as a constant using the static and final keywords."
      ],
      "correctAnswer": [2]
    },
    {
      "question": "A developer created these three Rollup Summary fields in the custom object, Project__c:\nTotal_Timesheets__c\nTotal_Approved_Timesheets__c\nTotal_Rejected_Timesheets__c\nThe developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
      "tipo": "única",
      "options": [
        "A) Formula field.",
        "B) Apex trigger.",
        "C) Record-triggered flow.",
        "D) Roll-up summary field."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "Consider the following code snippet for a Visualforce page that is launched using a Custom Button on the Account detail page layout.\n&lt;apex:page standardController=\"Account\"&gt;\n    &lt;!-- Additional UI elements--&gt;\n    &lt;apex:commandButton action=\"{!save}\" value=\"Save\"&gt;\n&lt;/apex:page&gt;\nWhen the Save button is pressed the developer must perform a complex validation that involves multiple objects and, upon success, redirect the user to another Visualforce page. What can the developer use to meet this business requirement?",
      "tipo": "única",
      "options": [
        "A) Apex trigger.",
        "B) Controller extension.",
        "C) Custom controller.",
        "D) Validation rule."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "A developer creates a custom exception as shown below:\npublic class ParityException extends Exception{}\nWhat are two ways the developer can fire the exception in Apex? (OJO QUE DICE FIRE)",
      "tipo": "múltiple",
      "options": [
        "A) new ParityException();",
        "B) new ParityException('parity does not match');",
        "C) throw new ParityException('parity does not match');",
        "D) throw new ParityException;"
      ],
      "correctAnswer": [2, 3]
    },
    {
      "question": "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order records will be imported into Salesforce. How should the Order number field be defined in Salesforce?",
      "tipo": "única",
      "options": [
        "A) Indirect Lookup.",
        "B) External ID and Unique.",
        "C) Lookup.",
        "D) Direct Lookup."
      ],
      "correctAnswer": [1]
    },
    {
      "question": "What are two use cases for executing Anonymous Apex code?",
      "tipo": "múltiple",
      "options": [
        "A) To delete 15.000 inactive Accounts in a single transaction after a deployment.",
        "B) To schedule an Apex class to run periodically.",
        "C) To run a batch Apex class to update all Contacts.",
        "D) to add unit test code coverage to an org."
      ],
      "correctAnswer": [0, 3]
    },
    {
      "question": "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three things should the developer do to satisfy these requirements?",
      "tipo": "múltiple",
      "options": [
        "A) Create a lightning web component.",
        "B) Add a dynamic action to the account record page.",
        "C) Create a Dynamic Form.",
        "D) Create a Custom permission for the users.",
        "E) Add a Dynamic Action to the Users' assigned Page Layouts."
      ],
      "correctAnswer": [0, 2, 3]
    },
    {
      "question": "Which annotation should a developer use on an Apex method to make it available to be wired to a property in a Lightning web component?",
      "tipo": "única",
      "options": [
        "A) @RemoteAction(cacheable = true)",
        "B) @AuraEnabled",
        "C) @AuraEnabled(cacheable = true)",
        "D) @RemoteAction"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "The following code snippet is executed by a Lightning web component in an environment with more than 2000 lead records:\nWhich governor limit will likely be exceeded within the Apex transaction?",
      "tipo": "única",
      "options": [
        "A) Total number of SOQL queries issued.",
        "B) Total number of records processed as a result of DML statements.",
        "C) Total number of DML statements issued.",
        "D) Total number of records retrieved by SOQL queries."
      ],
      "correctAnswer": [1],
        "image": "public/56.png"
    },
    {
      "question": "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements. Which approach should the developer use to be sure that the Apex class is working according to specifications?",
      "tipo": "única",
      "options": [
        "A) Run the code in an Execute Anonymous block in Developer Console.",
        "B) Include try/catch block to the Apex class.",
        "C) Include a savepoint and Database.rollback().",
        "D) Create a test class to execute the business logic and run the test in the developer console."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "A developer is tasked with building a custom Lightning web component to collect Contact information. The form will be shared among many different types of users in the org. There are security requirements that only certain fields should be edited and viewed by certain groups of users. What should the developer use in their lightning web component to support security requirements?",
      "tipo": "única",
      "options": [
        "A) lightning-input-field.",
        "B) ui-input-field.",
        "C) form-input-field.",
        "D) aura-input-field."
      ],
      "correctAnswer": [0]
    },
    {
      "question": "A developer creates a lightning web component that imports a method within an Apex Class. When a Validate button is pressed, the method runs to execute complex validations. In this implementation scenario, which two options are part of the Controller according to the MVC architecture?",
      "tipo": "múltiple",
      "options": [
        "A) JS file.",
        "B) HTML file.",
        "C) Apex class.",
        "D) XML file."
      ],
      "correctAnswer": [0, 3]
    },
    {
      "question": "Universal Containers wants to back up all the data and attachments in its salesforce org once a month. Which approach should a developer use to meet this requirement?",
      "tipo": "única",
      "options": [
        "A) Create a Schedulable Apex Class.",
        "B) Use the Data Loader command line.",
        "C) Schedule a report.",
        "D) Define a Data export scheduled job."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "How does the lightning Component framework help developers implement solution faster?",
      "tipo": "única",
      "options": [
        "A) By providing code review standards and processes.",
        "B) By providing an Agile process with default steps.",
        "C) By providing change history and version control.",
        "D) By providing device-awareness for mobile and desktops."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "Which code in a Visualforce page and/or controller might present a security vulnerability?",
      "tipo": "única",
      "options": [
        "A) &lt;apex:outputText value=\"{!$CurrentPage.parameters.userInput}\"&gt;",
        "B) &lt;apex:outputText value=\"{!ctrl.userInput}\" rendered=\"{!isEditable}\"&gt;",
        "C) &lt;apex:outputText escape=\"false\" value=\"{!$CurrentPage.parameters.userInput}\"&gt;",
        "D) &lt;apex:outputText value=\"{!ctrl.userInput}\"&gt;"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "The following Apex method is part of the ContactService class that is called from a trigger:\npublic static void setBusinessUnitToEMEA(Contact thisContact){\n    thisContact.Business__Unit__c = 'EMEA';\n    update thisContact;\n}\nHow should the developer modify the code to ensure best practices are met?",
      "tipo": "única",
      "options": [
        "a) public static void setBusinessUnitToEMEA(Contact thisContact){\n    list&lt;Contact&gt; contacts = new List&lt;Contact&gt;();\n    contacts.add(thisContact.Business__Unit__c = 'EMEA');\n    update contacts;",
        "b) public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){\n    for(Contact thisContact : contacts){\n        thisContact.Business__Unit__c = 'EMEA';\n        update contacts[0];\n    }",
        "c) public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){\n    for(Contact thisContact : contacts){\n        thisContact.Business__Unit__c = 'EMEA';\n    }\n    update contacts;",
        "d) public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){\n    contacts[0].Business__Unit__c = 'EMEA';\n    update contacts[0];"
      ],
      "correctAnswer": [2]
    },
    {
      "question": "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system when the user presses a custom button on the Opportunity detail page. Example values are as follows:\nName\nAccount\nAccount\nWhich two methods should the developer implement to fulfill the business requirement?",
      "tipo": "múltiple",
      "options": [
        "A) Create a custom Visualforce quick action that performs the HTTP REST Callout, and use a Visualforce quick action to expose the component to the detail page.",
        "B) Create a remote action on the opportunity object that executes an apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
        "C) Create an after update trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform the HTTP REST callout.",
        "D) Create a Lightning component quick action that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page."
      ],
      "correctAnswer": [3]
    },
    {
      "question": "A developer completed modifications to a customized feature that is comprised of two elements:\nApex trigger\nTrigger handler Apex class\nWhat are two factors that the developer must take into account to properly deploy the modification to the production environment?",
      "tipo": "múltiple",
      "options": [
        "A) Test methods must be declared with testMethod keyword.",
        "B) Apex classes must have at least 75% code coverage org-wide.",
        "C) At least one line of code must be executed for the apex trigger.",
        "D) All methods in the test classes must use @isTest."
      ],
      "correctAnswer": [1, 2]
    }
  ]
  
  
  export default questions;