/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 11. *Ciclo Do-While*: Implementa un bucle do-while que siga ejecutándose mientras un número sea menor a 20.


public with sharing class Ejercicio11 {
    public Ejercicio11() {
        Integer suma = 0;
        Integer cont = 1;
        do{
            suma = suma + cont;
            cont++;
        } while (cont <= 20);
        System.debug('La suma es: ' + suma);
    }
}