/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
@isTest
private class Ejercicio1Test{
    @isTest
    static void testConstructor(){

        Test.startTest();
        try {
            Ejercicio1 instancia = new Ejercicio1();
            System.assertEquals(null, instancia, 'La instancia del ejercicio no debe ser null');
        }
        catch (Exception ex) {
            System.assert(false, 'No se esperaba una excepción al crear la instancia de ejercicio 1.');
        }
        Test.stopTest();
    }
}