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
private class TEST22 {

    @isTest
    static void myUnitTest() {
        
        test.startTest();

        generateNewTestAccount();

        Ejercicio22 ej = new Ejercicio22();

        Account acc = [SELECT Id, Name FROM Account WHERE Name = 'Test'];

        ej.actualizarAccount(acc.id, 'Test02');

        String name2 = [SELECT Name FROM Account WHERE Id =: acc.Id];

        System.assertEquals('Test02', name2, 'Ambos nombres coinciden.');

        ej.actualizarAccount('12323554423', 'Test03');

        System.assert(true, 'Se lanza la excepción.');

        test.stopTest();

    }


    private void generateNewTestAccount(){
        try {
            Account acc = new Account();
            acc.Name = 'Test';
            insert acc;
        }
        catch (Exception ex) {
            System.debug('Error inesperado: ' + e.getMessage());
        }
    }
}