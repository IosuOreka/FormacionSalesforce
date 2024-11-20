/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 5. Enviar un mensaje de error si se intenta crear un caso sin un asunto.

trigger checkSubjectCase on Case(before insert){
    for(Case c : Trigger.new){
        if(String.isBlank(c.Subject)){
            c.addError('No se puede crear un caso sin asunto.');
        }
    }
}