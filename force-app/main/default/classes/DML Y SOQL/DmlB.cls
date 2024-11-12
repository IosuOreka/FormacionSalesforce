/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// **B.Enunciado: Crea una clase llamada OpportunityStatusUpdater que tenga un método updateOpportunityStage. Este método debe recibir una lista de Ids de oportunidades y cambiar el campo StageName de cada una a "Closed Won".**

// Requerimientos:
// - *Recupera las oportunidades usando el Id proporcionado*.
// - *Cambia el campo StageName de cada oportunidad a "Closed Won"*.
// - *Usa una operación update para guardar los cambios.*


public with sharing class OpportunityStatusUpdater {
    public updateOpportunityStage(List<Id> OpportunityStatusUpdater) {

        List<Opportunity> oportunidadesUpdate = [SELECT Id FROM Opportunity WHERE Id =: OpportunityStatusUpdater];

        for(Opportunity opp : oportunidadesUpdate){
            opp.StageName = 'Closed Won';
        }

        if(oportunidadesUpdate.size() > 0){
            update oportunidadesUpdate;
        }
    }
}