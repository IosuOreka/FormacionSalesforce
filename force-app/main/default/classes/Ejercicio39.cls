/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 39. *Método para Contar Cuentas:* En la clase AccountService, añade un método contarCuentas. 
// Este método debe contar el número total de cuentas en Salesforce y devolver el número.

public with sharing class AccountService {
    public Integer contarCuentas() {
        Integer numCuentas = [SELECT COUNT() FROM Account];
        return numCuentas;
    }
}