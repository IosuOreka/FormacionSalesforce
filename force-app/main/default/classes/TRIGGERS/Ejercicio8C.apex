/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 8. Cambiar automáticamente el estado de una oportunidad a "Nuevo" al crearla.

trigger opportunityStatus on Opportunity(before insert){
    for(Opportunity opp : Trigger.new){
        opp.Status = 'Nuevo';
    }
}