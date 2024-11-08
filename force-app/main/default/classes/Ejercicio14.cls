/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 14. *Comparación de Cadenas*: Crea un método que compare dos cadenas y devuelva si son iguales o no.

public with sharing class Ejercicio14 {
    public Boolean compararCadenas(String s1, String s2) {
        Boolean esIgual;
        if( s1 == s2){
            esIgual = true;
        }else{
            esIgual = false;
        }
        
        return esIgual;
    }
}