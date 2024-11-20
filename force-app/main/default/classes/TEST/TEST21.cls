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
private class TEST21 {

    @isTest
    static void myUnitTest() {
        
        test.startTest();

        Ejercicio21 ej = new Ejercicio21();

        ej.nuevoAccount();

        Account acc = [SELECT Phone from Account WHERE Name = 'Oreka' LIMIT 1];

        System.assertEquals('625-478-874', acc.Phone, 'El mensaje es el esperado.');

        Test.startTest();
        try {
            Account invalidAccount = new Account();
            insert invalidAccount;
        } catch (DmlException e) {
            System.debug('Se ha capturado una excepción DML: ' + e.getMessage());
            System.assert(e.getMessage().contains('Required fields are missing'), 'Se esperaba un error de campo requerido.');
        }
        Test.stopTest();
    }
}