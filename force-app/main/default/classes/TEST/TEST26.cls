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
private class TEST26 {

    @isTest
    static void myUnitTest() {
       
        Test.startTest();

        Ejercicio26 ej = new Ejercicio26();
        ej.performTransaction();

        Test.stopTest();

        Account acc = [SELECT Id FROM Account WHERE Name = 'Cuenta temporal' LIMIT 1];


        System.assertEquals(null, acc, 'La cuenta no debería existir en la base de datos.');
    }

    @isTest
    static void testRollBackEffect(){
        Integer beforeCount = [SELECT COUNT() FROM Account WHERE Name = 'Cuenta temporal'];

        Test.startTest();
        Ejercicio26 ej = new Ejercicio26();
        ej.performTransaction();
        Test.stopTest();

        Integer afterCount = [SELECT COUNT() FROM Account WHERE Name = 'Cuenta temporal'];

        System.Assert.areEqual(beforeCount, afterCount, 'No se realizaron efectos sobre la cuenta.');
    }
}

