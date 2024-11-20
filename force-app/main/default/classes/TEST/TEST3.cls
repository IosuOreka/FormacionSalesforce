/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
@isTest
private class Ejercicio3Test {
    
    @isTest
    static void testConstructor() {

        Ejercicio3 calculator = new Ejercicio3();

        Integer sumaResultado = calculator.suma(5, 3);
        System.assertEquals(8, sumaResultado, 'La suma de 5 + 3 debe dar 8.');

        Integer restaResultado = calculator.resta(5, 3);
        System.assertEquals(2, restaResultado, 'La resta de 5 - 3 debe dar 2.');

        Integer multiResultado = calculator.multiplicacion(5, 3);
        System.assertEquals(15, multiResultado, 'La multiplicación de 5 x 3 debe dar 15.');

        Decimal diviResultado = calculator.division(15, 3);
        System.assertEquals(5, diviResultado, 'La división de 15 entre 3 debe dar 5.');

        try{
            calculator.division(10, 0);
            System.assert(false, 'La división por cero debería lanzar una excepción.');
        }catch(Exception e){
            System.assert(true,'La excepción esperada fue lanzada para la división por cero.');
        }
    }
}
