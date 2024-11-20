/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 7. Bloquear actualizaciones en el campo Phone de una cuenta.

trigger bloqueoActualización on Account (before update){
    for(Account acc : Trigger.new){
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        if(acc.Phone != oldAcc.Phone){
            acc.addError('No se permite actualizar el número de teléfono.');
        }
    }
}