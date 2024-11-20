/**
 * This class contains unit tests for validating the behavior of Apex classes
 * and triggers.
 *
 * Unit tests are class methods that verify whether a particular piece
 * of code is working properly. Unit test methods take no arguments,
 * commit no data to the database, and are flagged with the testMethod
 * keyword in the method definition.
 *
 * All test methods in an org are executed whenever Apex code is deployed
 * to a production org to confirm correctness, ensure code
 * coverage, and prevent regressions. All Apex classes are
 * required to have at least 75% code coverage in order to be deployed
 * to a production org. In addition, all triggers must have some code coverage.
 * 
 * The @isTest class annotation indicates this class only contains test
 * methods. Classes defined with the @isTest annotation do not count against
 * the org size limit for all Apex scripts.
 *
 * See the Apex Language Reference for more information about Testing and Code Coverage.
 */
@isTest
private class TEST25 {

    @isTest
    static void myUnitTest() {
       
        Test.startTest();

        Account testAccount = new Account(Name = 'John Enterprises');
        insert testAccount;

        Contact testContact = new Contact(FirstName = 'John', LastName = 'Doe', AccountId= testAccount.Id);
        insert testContact;

        Ejercicio25 ej = new Ejercicio25();

        List<List<SObject>> resultados = ej.getAccountsAndContacts();

        Test.stopTest();

        System.assertEquals(2, resultados.size(), 'Se esperaban dos listas: una para Account y otra para Contact.');
        
        List<Account> foundAccounts = (List<Account>)resultados[0];
        Boolean accountFound = false;
        for (Account acc : foundAccounts) {
            if (acc.Name == 'John Enterprises') {
                accountFound = true;
                break;
            }
        }
        System.assert(accountFound, 'Se esperaba encontrar la cuenta "John Enterprises".');

        List<Contact> foundContacts = (List<Contact>)resultados[1];
        Boolean contactFound = false;
        for (Contact con : foundContacts) {
            if (con.FirstName == 'John' && con.LastName == 'Doe') {
                contactFound = true;
                break;
            }
        }
        System.assert(contactFound, 'Se esperaba encontrar el contacto "John Doe".');
    }
}