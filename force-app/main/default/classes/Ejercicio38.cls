/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 38. *Consultar Todas las Cuentas:* Crea una clase llamada AccountService con un método obtenerCuentas. 
// Este método debe consultar todas las cuentas y devolver la lista de cuentas encontradas.

public with sharing class AccountService {
    public List<Account> obtenerCuentas() {
        List<Account> cuentas = [SELECT Id, Name FROM Account];
        return cuentas;
    }
}