/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 9. Evitar que se elimine un caso con comentarios relacionados.

trigger avoidEraseCase on Case (before delete){
    for(Case c : Trigger.old){
        Integer comentarios = [SELECT COUNT() FROM CaseComment WHERE ParentId = :c.Id];
        if(comentarios > 0){
            c.addError('No se puede eliminar un caso que tenga comentarios.');
        }
    }
}