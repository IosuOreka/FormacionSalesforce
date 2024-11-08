/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 15. *Conversión de Tipos*: Escribe un programa que convierta un Integer a String y viceversa.

public with sharing class Ejercicio15 {
    public String numberToString(Integer num) {
        return String.valueOf(num);
    }

    public Integer stringToNumber(String num){
        return Integer.valueOf(num);
    }
}