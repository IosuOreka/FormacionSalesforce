/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 5. *Bucles For*: Usa un bucle for para imprimir los números del 1 al 10.

public with sharing class Ejercicio5 {
    
    public List<Integer> getNumbers() {
        List<Integer> numbers = new List<Integer>();
        
        for (Integer i = 1; i <= 10; i++) {
            numbers.add(i);
            System.debug(i);
        }
        
        return numbers;
    }
}
