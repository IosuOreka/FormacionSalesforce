/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 4. Copiar el nombre de una cuenta a un campo personalizado al crearla.

trigger AcccountCopyName on Account(before insert){
    for(Account acc : Trigger.new){
        acc.Campo_personalizado__c = acc.Name;
    }
}