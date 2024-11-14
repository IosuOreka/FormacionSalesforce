/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/


// **F.Enunciado: Crea una clase llamada AccountPhoneUpdater con un método updateAccountPhones. 
// Este método debe recibir una lista de Ids de cuentas y un número de teléfono,
//  y actualizar el campo Phone de cada cuenta con el número proporcionado.**

// Requerimientos:
// - *Recupera las cuentas usando la lista de Ids proporcionada.*
// - *Cambia el campo Phone de cada cuenta al número de teléfono proporcionado.*
// - *Usa una operación update para guardar los cambios.*

public with sharing class AccountPhoneUpdater{
    public void updateAccountPhones(List<Id> accountsId, String Phone){
        List<Account> cuentasPorActualizar = [SELECT Id, Phone FROM Account WHERE Id =: accountsId];
        List<Account> cuentasActualizadas = new List<Account>();

        for(Account acc : cuentasPorActualizar){
            acc.Phone = Phone;
            cuentasActualizadas.add(acc);
        }

        update cuentasActualizadas;

    }
}