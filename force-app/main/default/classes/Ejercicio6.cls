/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 6. *Bucles While*: Escribe un programa que use un bucle while para sumar números del 1 al 10.

public with sharing class Ejercicio6 {
    public Ejercicio6() {
        Integer suma = 0;
        Integer cont = 1;

        while(cont <= 10) {
            suma += cont;
            cont++;
        }

        System.debug('La suma es: ' + suma);
    }
}