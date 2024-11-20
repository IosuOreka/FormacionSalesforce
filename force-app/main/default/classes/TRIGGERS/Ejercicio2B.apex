/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 2. Evitar la creación de oportunidades duplicadas basadas en el nombre o un campo identificador.

trigger AvoidDuplicateOpportunities on Opportunity (before insert) {
    Set<String> nombresOportunidad = new Set<String>();
    
    for (Opportunity op : [SELECT Name FROM Opportunity]) {
        nombresOportunidad.add(op.Name);
    }

    for (Opportunity opp : Trigger.new) {
        if (nombresOportunidad.contains(opp.Name)) {
            opp.addError('No puede haber oportunidades con el mismo nombre.');
        }
    }
}