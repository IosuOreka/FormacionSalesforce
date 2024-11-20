/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 4. *Condicionales*: Escribe un programa que verifique si un número es positivo, negativo o cero.

public with sharing class Ejercicio4 {
    
    public String verificarNumero(Integer num){
        if (num < 0){
            System.debug('El numero ' + num + ' es negativo');
            return 'menor';
        } else if(num == 0){
            System.debug('El numero ' + num + ' es cero');
            return 'cero';
        }else{
            System.debug('El numero ' + num + ' es positivo');
            return 'mayor';
        }
    }
}