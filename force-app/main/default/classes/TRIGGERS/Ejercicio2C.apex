/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 2. Actualizar un campo de tipo casilla de verificación cuando se crea un nuevo registro.

trigger SetCheckBoxOnInsert on CustomObject__c (before insert){
    for(CustomObject__c obj : Trigger.new){
        obj.Is_Checked__c = true;
    }
}