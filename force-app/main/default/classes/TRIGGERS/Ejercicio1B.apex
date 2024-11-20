/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 1. Registrar el número de contactos asociados a una cuenta cada vez que se crea un nuevo contacto.

trigger UpdateContactCount on Contact (after insert){

    Map<Id, Integer> accountContactCount = new Map<Id, Integer>();

    for(Contact con: Trigger.new){
        if(con.AccountId != null){
            accountContactCount.put(con.AccountId, accountContactCount.getOrDefault(con.AccountId, 0) + 1);
        }
    }

    List <Account> accountsToUpdate = new List<Account>();
    for(Id accountId : accountContactCount.keySet()){
        accountsToUpdate.add(new Account(Id = accountId, Number_of_Contacts__c = accountContactCount.get(accountId)));
    }
    update accountsToUpdate;
}


// trigger UpdateContactCount on Contact (after insert) {
//     Map<Id, Integer> accountContactCount = new Map<Id, Integer>();

//     for (Contact con : Trigger.new) {
//         if (con.AccountId != null) {
//             accountContactCount.put(con.AccountId, accountContactCount.get(con.AccountId, 0) + 1);
//         }
//     }

//     update [SELECT Id FROM Account WHERE Id IN :accountContactCount.keySet() 
//             FOR UPDATE SET Number_of_Contacts__c = :accountContactCount.values()];
// }
