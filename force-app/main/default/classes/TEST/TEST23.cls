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
private class TEST23 {

    @isTest
    static void myUnitTest() {
        
        test.startTest();
        
        Contact con2 = new Contact();
        con2.Description = 'Contact de Test';
        con2.FirstName = 'Iosu';
        con2.LastName = 'Gomez';
        insert con2;

        List<Contact> contacts = [SELECT Id, Description FROM Contact WHERE FirstName = 'Iosu' LIMIT 1];
        if (!contacts.isEmpty()) {
            Contact con = contacts[0];
            
            Ejercicio23 ej = new Ejercicio23();
            Boolean borrado = ej.borrarContacto(con.id);
            
            System.assertEquals(true, borrado, 'El tamaño de la lista recuperada es 0');
        } else {
            System.assert(false, 'No se encontró la cuenta con el nombre "Test".');
        }

        test.stopTest();
    }
}