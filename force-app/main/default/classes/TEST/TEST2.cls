/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
@isTest
private class Ejercicio2Test {
    
    @isTest
    static void testConstructor() {
        Test.startTest();

        try {
            Ejercicio2 instance = new Ejercicio2();
            System.assertNotEquals(null, instance, 'La instancia de Ejercicio2 no debe ser null.');
        } catch (Exception e) {
            System.assert(false, 'No se esperaba ninguna excepción al crear una instancia de Ejercicio2.');
        }
        Test.stopTest();
    }
}
