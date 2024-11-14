/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/


// 29. Trigger After Insert: Crea un trigger que añada un Contact automáticamente al insertar un nuevo Account.

trigger AccountAndContact on Account (after insert){

    List<Contact> contactsAInsertar = new List<Contact>();

    for(Account acc: Trigger.new){
        Contact cont = new Contact(LastName = acc.Name + ' Contact', AccountId = acc.Id);
        contactsAInsertar.add(cont);
    }

    if(contactsAInsertar.size() > 0){
        insert contactsAInsertar;
    }
}