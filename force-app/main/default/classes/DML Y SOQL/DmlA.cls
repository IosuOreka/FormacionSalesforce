/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AccountCreator {
    public void createAccounts() {
        for(Integer i = 1; i<= 3; i++){
            Account acc = new Account();
            acc.Name = 'Cuenta ' + i;
            insert acc;
        }
        
    }
}

//Sacando 