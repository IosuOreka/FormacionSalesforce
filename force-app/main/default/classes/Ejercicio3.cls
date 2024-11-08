/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 3. *Operadores Aritméticos*: Realiza operaciones básicas de suma, resta, multiplicación y división con dos números y muestra el resultado.

public with sharing class Ejercicio3 {

    public Integer suma(Integer num1, Integer num2) {
        Integer resultado = num1 + num2;
        System.debug('La suma es: ' + resultado);
        return resultado;
    }

    public Integer resta(Integer num1, Integer num2) {
        Integer resultado = num1 - num2;
        System.debug('La resta es: ' + resultado);
        return resultado;
    }

    public Integer multiplicacion(Integer num1, Integer num2) {
        Integer resultado = num1 * num2;
        System.debug('La multiplicacion es: ' + resultado);
        return resultado;
    }

    public Integer division(Integer num1, Integer num2) {
        Integer resultado = num1 / num2;
        System.debug('La division es: ' + resultado);
        return resultado;
    }
}