/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// **D. Enunciado: Crea una clase llamada ContactAccountAssigner con un método assignAccountToContacts. Este método debe recibir una lista de Ids de contactos y el Id de una cuenta, y asignar todos esos contactos a la cuenta especificada.**

// Requerimientos:
// - *Recupera los contactos utilizando la lista de Ids proporcionada.*
// - *Cambia el campo AccountId de cada contacto al Id de la cuenta proporcionada.* 
// - *Usa una operación update para guardar los cambios.*


public with sharing class ContactAccountAssigner {
    public void assignAccountToContacts(List<Id> ids, Id accountId){
        List<Contact> cuenta = [select Id, AccountId from Contact where Id =: ids];
        List<Contact> cuentasParaMeter = new List<Contact>();
        for( Contact con : cuenta){
            con.AccountId = accountId;
            cuentasParaMeter.add(con);
        }
        update cuentasParaMeter;
    }
}