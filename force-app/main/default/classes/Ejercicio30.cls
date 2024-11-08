/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 30. Trigger Before Update: Crea un trigger que verifique que la industria de un Account no sea null al actualizarse.

trigger verificarIndustria on Account(before update){
        for (Account acc : Trigger.new) {
            if (acc.Industry == null) {
                acc.addError('La industry no debe ser nula');
            }else{
                insert acc;
            }
        }
}