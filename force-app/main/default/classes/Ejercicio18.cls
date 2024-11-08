/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 18. *Set*: Implementa un Set de enteros y demuestra cómo agregar elementos únicos.

public with sharing class Ejercicio18 {

    public void manipulateSet() {
        Set<Integer> numeros = new Set<Integer>();
        
        numeros.add(10);
        numeros.add(20);
        numeros.add(20); 
        numeros.add(30);

        System.debug('Set después de agregar elementos: ' + numeros);
        Boolean contiene20 = numeros.contains(20);
        System.debug('¿El set contiene el número 20? ' + contiene20);
    }
}
