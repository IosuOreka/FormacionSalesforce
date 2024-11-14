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
private class TEST12 {

    @isTest
    static void myUnitTest() {
        
        test.startTest();

        Ejercicio12 ej = new Ejercicio12();

        String resultado = ej.Ejercicio12(1);
        String resultado2 = ej.Ejercicio12(2);
        String resultado4 = ej.Ejercicio12(3);
        String resultado5 = ej.Ejercicio12(4);
        String resultado6 = ej.Ejercicio12(5);
        String resultado3 = ej.Ejercicio12(98);

        test.stopTest();

        System.assertEquals('Lunes', resultado, 'Se obtiene lunes de manera correcta.');
        System.assertEquals('Martes', resultado2, 'Se obtiene martes de manera correcta.');
        System.assertEquals('Miercoles', resultado4, 'Se obtiene martes de manera correcta.');
        System.assertEquals('Jueves', resultado5, 'Se obtiene martes de manera correcta.');
        System.assertEquals('Viernes', resultado6, 'Se obtiene martes de manera correcta.');
        System.assertEquals('No mames wey pendejo!', resultado3, 'El mensaje es el oportuno.');
    }
}