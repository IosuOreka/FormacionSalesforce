/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 1. Registrar el número de contactos asociados a una cuenta cada vez que se crea un nuevo contacto.


trigger Ejercicio1B on Contact (after insert) {
    Set<Id> accountIds = new Set<Id>();
    for (Contact contact : Trigger.new) {
        accountIds.add(contact.AccountId);
    }
    List<Account> accounts = [SELECT Id, NumberOfContacts__c FROM Account WHERE Id IN :accountIds];
    for (Account account : accounts) {
        account.NumberOfContacts__c = [SELECT COUNT() FROM Contact WHERE AccountId = :account.Id];
    }
    update accounts;
}