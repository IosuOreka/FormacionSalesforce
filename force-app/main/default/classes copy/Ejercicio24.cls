/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 24. Consulta SOQL: Realiza una consulta SOQL para obtener todos los Account cuyo nombre comience con "A".

public with sharing class Ejercicio24 {
    public List<Account> getAccounts(){

        List <Account> accounts = [SELECT Id, Name, Phone, Type, NumberOfEmployees
        FROM Account
        WHERE Name LIKE 'A%'];

        System.debug(accounts);
        return accounts;
    }


}