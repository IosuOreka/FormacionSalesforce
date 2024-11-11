/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 4. *Condicionales*: Escribe un programa que verifique si un número es positivo, negativo o cero.

public with sharing class Ejercicio4 {
    
    public void verificarNumero(Integer num){
        if (num < 0){
            System.debug('El numero ' + num + ' es negativo');
        } else if(num == 0){
            System.debug('El numero ' + num + ' es cero');
        }else{
            System.debug('El numero ' + num + ' es positivo');
        }
    }
}