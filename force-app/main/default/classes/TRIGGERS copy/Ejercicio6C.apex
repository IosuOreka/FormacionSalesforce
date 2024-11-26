/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 6. Establecer un valor predeterminado en un campo personalizado al insertar un registro.

trigger SetDefaultValue on CustomObject__c (before insert) {
    for (CustomObject__c obj : Trigger.new) {
        if (obj.Status__c == null) {
            obj.Status__c = 'Nuevo'; 
        }
    }
}
