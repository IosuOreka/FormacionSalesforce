/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 10. Marcar automáticamente un campo "Revisado" como verdadero al actualizar un registro.

trigger updateCampo on CustomObject__c (before update){
    for(CustomObject__c c : Trigger.new){
        c.Revisado__c = true;
    }
}