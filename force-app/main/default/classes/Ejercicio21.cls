/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
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

                insert newAccount;
            } else {
                System.debug('No tiene permisos para crear un registro de Account.');
            }
        } catch (DmlException e) {
            // Manejar el error de inserción
            System.debug('Error al insertar la cuenta: ' + e.getMessage());
        }
    }
}
