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
private class TEST24 {

    @isTest
    static void myUnitTest() {
        
        Boolean check = false;

        test.startTest();

        Ejercicio24 ej = new Ejercicio24();

        List<Account> cuentasChequear = ej.getAccounts();
        Integer size = cuentasChequear.size();
        Integer contador = 0;

        for(Account acc : cuentasChequear){
            if(acc.Name.startsWith('A')){
                contador++;
            }
        }
        
        System.assertEquals(size, contador,'Todos los nombres de las cuentas que se eligen empiezan por A. ');
        
        test.stopTest();
    }
}