/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 21. DML Básico: Crea un nuevo Account en Salesforce usando DML.

public with sharing class Ejercicio21 {
    public void nuevoAccount() {
        try {
            if (Schema.sObjectType.Account.isCreateable()) {
                Account newAccount = new Account();
                newAccount.Name = 'Oreka';
                newAccount.Phone = '625-478-874';  
                // SELECT Id, Phone FROM Account where Name = 'Oreka';
                insert newAccount;
            } else {
                System.debug('No tiene permisos para crear un registro de Account.');
            }
        } catch (DmlException e) {
            System.debug('Error al insertar la cuenta: ' + e.getMessage());
        }
    }
}


// public with sharing class Ejercicio21 {
//     public void nuevoAccount() {
//         Account newAccount = new Account();
//         newAccount.Name = 'Oreka';
//         newAccount.Phone = '625-478-874';  
//         insert newAccount;
//     }
// }