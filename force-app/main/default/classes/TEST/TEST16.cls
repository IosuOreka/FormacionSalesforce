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
private class TEST16 {

    @isTest
    static void myUnitTest() {
        
        test.startTest();

        Ejercicio16 ej = new Ejercicio16();
        
        List<Integer> resultado = ej.manipulacionLista();

        System.assertEquals(3, resultado.size(), 'El tamaño de la lista es el esperado.');
        
        System.assert(!resultado.contains(2), 'El número 2 debe haber sido eliminado de la lista.');

        System.assert(resultado.contains(1), 'La lista debe contener el número 1.');
        System.assert(resultado.contains(3), 'La lista debe contener el número 3.');
        System.assert(resultado.contains(4), 'La lista debe contener el número 4.');
        System.assert(!resultado.contains(5), 'El número 5 no debe estar en la lista.');

        Test.stopTest();
    }
}