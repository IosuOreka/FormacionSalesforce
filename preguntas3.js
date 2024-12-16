1- 34
2- 125
3- 33
4- 17
7- 39
8- 120
9- 69
10- 87
11- 85
14- 9
15- 92
18- 93
19- 30
20- 56
23- 16
25- 37
27- 64
29- 31
30- 66
33- 128
34- 24
36- 127
38-114
39- 50
43- 22
44- 83
45- 79
48- 51
49- 8
50- 25
51- 113
52- 19
53- 35
54-55
56- 41
57- 44
58- 84


const questions = [
    {
        "question": "5- The OrderHelper class is a utility class that contains business logic for processing orders. Consider the following code snippet: public class without sharing OrderHelper {//Code implementation} A developer needs to create a constant named DELIVERY_MULTIPLIER with a value of 4.15. The value of the constant should not change at any time in the code. How should the developer declare the DELIVERY_MULTIPLIER constant to meet the business objetives?",
        "tipo": "única",
        "options": [
          "A) static decimal DELIVERY_MULTIPLIER = 4.15;",
          "B) constant decimal DELIVERY_MULTIPLIER = 4.15;",
          "C) decimal DELIVERY_MULTIPLIER = 4.15;",
          "D) static final decimal DELIVERY_MULTIPLIER = 4.15;"
        ],
        "correctAnswer": [3]
      },
      {
        "question": "6- A Lightning component has a wire property, searchResult, that stores a list of Opportunities. Which definition of the Apex method, to which searchResult property is wired, should be used?",
        "tipo": "única",
        "options": [
          "A) ",
          "B) ",
          "C) ",
          "D) "
        ],
        "correctAnswer": [1],
        "image": "public/6B.png"
      },
      {
        "question": "12- Which two actions may cause triggers to fire?",
        "tipo": "múltiple",
        "options": [
          "A) Updates to feedItem",
          "B) Changing a users default division when the transfer division option is checked",
          "C) Cascading delete operations",
          "D) Resuming or replacing a picklist entry"
        ],
        "correctAnswer": [0, 2]
      },
      {
        "question": "13-The 'High, 'Medium', and 'Low' are identified as common values for multiple picklist across different objects. What is an approach a developer can take to streamline maintenance of the picklists and their values, while also restricting the values to the ones mentioned above?",
        "tipo": "única",
        "options": [
          "A) Create the Picklist on each object and select 'Restrict picklist to the values defined in the value set'",
          "B) Create the Picklist on each object as a required field and select 'Display values alphabetically, not in the order entered'",
          "C) Create the Picklist on each object and add a validation rule to ensure data integrity",
          "D) Create the Picklist on each object and use a Global Picklist Value Set containning the values"
        ],
        "correctAnswer": [3],
      },
      {
        "question": "21- Which three steps allow a custom Scalable Vector Graphic (SVG) to be included in a Lightnning web componnent?",
        "tipo": "múltiple",
        "options": [
          "A) Import the static resource and provide a JavaScript property for it.",
          "B) Import th SVG as a content asset file",
          "C) Reference the import in the HTML template",
          "D) Reference the property in the HTML template",
          "E) Upload the SVG as a static resource"
        ],
        "correctAnswer": [0, 2, 4]
      },
      {
        "question": "22-A developer wants to mark each Account in a List&lt;Account&gt; as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past. Which Apex technique should developer use?",
        "tipo": "única",
        "options": [
          "A) An if-else statemment, with a for loop inside",
          "B) A switch statemment, with a for loop inside",
          "C) A for loop, with an if or if/else statemment inside",
          "D) A for loop, with a switch statemment inside"
        ],
        "correctAnswer": [2],
      },
      {
        "question": "24- Universal Containers is developing a new Lightning component for their marketing department. They want to ensure that the component is fine tuned and provides a seamless user experience. What are some benefits of using the Lightning Component framework?",
        "tipo": "única",
        "options": [
          "A) Better performance due to client-side rendering",
          "B) Automatic support for accesibility standards",
          "C) Compatibility with all web browsers",
          "D) Easy integration with third-party libraries"
        ],
        "correctAnswer": [0],
      },
      {
        "question": "26- Developers at Universal Containers (UC) use version control to share their code changes, but they notice that when they deploy their code to different enviromments they often have fallures. they decide to set up Continuous Integration (CI). What should the UC development team use to automatically run test as part of their CI process?",
        "tipo": "única",
        "options": [
          "A) Visual Studio Code",
          "B) Salesforce CLI",
          "C) Force.com Toolkit",
          "D) Developer Console"
        ],
        "correctAnswer": [1],
      },
      {
        "question": "28- A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requeriment in the most efficient manner?",
        "tipo": "única",
        "options": [
          "A) An error condition formula on a validation rule on Opportunity",
          "B) An approval process on the Opportunity object",
          "C) A record trigger flow on the Opportunity object",
          "D) An Apex trigger on the Opportunity object"
        ],
        "correctAnswer": [0],
      },
      {
        "question": "31- The sales management team ast Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted. What should be done to ensure that a user populates the Lead Source field prior to converting a Lead?",
        "tipo": "única",
        "options": [
          "A) Create an after trigger on Lead",
          "B) Use a validation rule",
          "C) Use Lead Conversion field mapping",
          "D) Use a formula field"
        ],
        "correctAnswer": [1],
      },
      {
        "question": "32- A developer has identified a method in an Apex class that performs resource intensive actions in memory by assuming over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes in the database",
        "tipo": "única",
        "options": [
          "A) Use the readOnly annotation to bypass the number of rows returned by a SOQL.",
          "B) Use the system.Limit class to monitor the current CPU governor limit consumption.",
          "C) Use partial DML statemment to ensure only valid data is commited",
          "D) Use the Database.savepoint method to enforce database integrity."
        ],
        "correctAnswer": [1],
      },
      {
        "question": "35- A developer has the following requerements: 1- Calculate the total amount on an Oreder. 2- Calculate the line amount for each Line Item based on quantity selected and price. 3- Move Line Items to a different Order if a Line Item is not in stock. Which relationship to a different supports these requirements on its own?",
        "tipo": "única",
        "options": [
          "A) Line Item has a re-parentable master-detail field to Order",
          "B) Order has a re-parentable lookup field to Line Items",
          "C) Order has a re-parentable master-detail field to Line Item",
          "D) Line Item has a re-parentable lookup field to Order"
        ],
        "correctAnswer": [3],
      },
      {
        "question": "37- Assuming that name is a String obtained by an <apex:inputText> tag on a Visualforge page, which two SOQL queries perfomed are safe from SOQL inyection? Choose 2:",
        "tipo": "múltiple",
        "options": [
          "A) String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + String.escapeSingleQuotes(name) + '%\''; List<Account> result = Database.query(query);",
          "B) String query = '%' + name + '%'; List<Account> results = [SELECT Id FROM Account WHERE name LIKE : query];",
          "C) String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + name.noQuotes() + '%\''; List<Account> results = Database.query(query);",
          "D) String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + name + '%\''; List<Account> results = Database.query(query);"
        ],
        "correctAnswer": [0, 1],
        "image": "public/37B.png"
      },
      {
        "question": "40- As part of new feature development, a developer is asked to build a responsive application capable of responding to touch events that will be executed on stateful clients. Which two technologies are build on a framework that fully suports the business requeriments? ",
        "tipo": "múltiple",
        "options": [
          "A) Lightning Web Components",
          "B) Aura Components",
          "C) Visualforce Pages",
          "D) Visualforce Components"
        ],
        "correctAnswer": [0, 1],
      },
      {
        "question": "41- Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
        "tipo": "única",
        "options": [
          "A) Rewrite all Visualforce pages as Lightning components",
          "B) Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript application",
          "C) Set the attribute enableLihgtning to true in the definition",
          "D) Enable Avaiable for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by custom application."
        ],
        "correctAnswer": [1],
      },
      {
        "question": "10- A deployment team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
        "tipo": "múltiple",
        "options": [
          "a) SFDX CLI",
          "b) VSCode",
          "c) Developer Console",
          "d) Change Sets"
        ],
        "correctAnswer": [0, 1]
      },
      {
        "question": "46- A developer wants to import 500 Opportunity records into sandbox. Why should the developer choose to use Data Loader instead of Data Import Wizard?",
        "tipo": "única",
        "options": [
          "a) Data Loader runs from the developers browser",
          "b) Data Import Wizard does not support Opportunities",
          "c) Data Loader automatically relates Opportunities to Accounts",
          "d) Data Import Wizard can not import all 500 records"
        ],
        "correctAnswer": [1]
      },
      {
        "question": "47- A custom Trainer__c has a lookup field to another custom object Gym__c. Which SOQL query will get the record for the Viridian City Gym and all its trainers?",
        "tipo": "única",
        "options": [
          "a) SELECT Id, (SELECT Id FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
          "b) SELECT Id, (SELECT Id FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
          "c) SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
          "d) SELECT Id FROM Trainer__c WHERE Gym__c.Name = 'Viridian City Gym'"
        ],
        "correctAnswer": [2]
      },
      {
        "question": "55- Given the multi-tenant architecture of the Salesforce platform, what is a best practice a developer should implement and ensure successful execution of the method?",
        "tipo": "única",
        "options": [
          "a) Avoid using variables as query filters",
          "b) Avoid executing queries without a limit clauses",
          "c) Avoid performing queries inside for loops",
          "d) Avois returnning an empty List of records "
        ],
        "correctAnswer": [2]
      },
      {
        "question": "59- Which two characterictics are true for Lightning Web Component custom events? Choose 2:",
        "tipo": "múltiple",
        "options": [
          "a) By default a custom event only propagates to its immediate container and to its immediate child component",
          "b) By default a custom event only propagates to its immediate container",
          "c) Data may be passed in the payload of a custom event using @wire decorated properties",
          "d) Data may be passed in the payload of a custom event using a property called detail"
        ],
        "correctAnswer": [1, 3]
      },
      {
        "question": "60- A company decides to implement a new process where every time an Opportunity is created, a follow up Task should be created and assigned to the Opportunity Owner. What is the most efficient way for a developer to implement this?",
        "tipo": "única",
        "options": [
          "a) Record triggered flow on Opportunity",
          "b) Auto-launched flow on Task",
          "c) Task actions",
          "d) Apex trigger on Task"
        ],
        "correctAnswer": [0]
      },

