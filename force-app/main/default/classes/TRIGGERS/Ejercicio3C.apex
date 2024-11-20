/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 3. Bloquear la eliminación de una cuenta si tiene contactos relacionados.

trigger checkingAccount on Account(before delete){
    Set<Id> accountIds = new Set<Id>();
    for(Account acc : Trigger.old){
        accountIds.add(acc.Id);
    }

    Map<Id, Integer> accountContactCounts = new Map<Id,Integer>();
    for (AggregateResult result : [SELECT AccountId, COUNT(Id) totalContacts FROM Contact WHERE AccountId IN :accountIds GROUP BY AccountId]) {
        accountContactCounts.put((Id)result.get('AccountId'), (Integer)result.get('totalContacts'));
    }

    for (Account acc : Trigger.old) {
        if (accountContactCounts.containsKey(acc.Id) && accountContactCounts.get(acc.Id) > 0) {
            acc.addError('No se puede eliminar una cuenta que tiene contactos relacionados.');
        }
    }

}