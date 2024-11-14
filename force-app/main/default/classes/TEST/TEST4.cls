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
private class TEST4 {
    @isTest
    static void myUnitTest() {
        Ejercicio4 test = new Ejercicio4();

        String valoracion = test.verificarNumero(10);
        System.assertEquals('mayor', valoracion, 'El número 10 es mayor que 0');

        String valoracion2 = test.verificarNumero(0);
        System.assertEquals('cero', valoracion2, 'El número 0 no es positivo ni negativo');

        String valoracion3 = test.verificarNumero(-1);
        System.assertEquals('menor', valoracion3, 'El número -1 es menor que 0.');
    }
}