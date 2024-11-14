/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
trigger AccountContactLogger on Account (after insert, after update) {
    for (Account acc : Trigger.new) {
        List<Contact> contacts = [SELECT Id, FirstName, LastName FROM Contact WHERE AccountId = :acc.Id];
        
        for (Contact con : contacts) {
            System.debug('Contact Name: ' + con.FirstName + ' ' + con.LastName);
        }
    }
}