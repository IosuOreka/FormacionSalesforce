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


public with sharing class OpportunityStatusUpdater{

    public void updateOpportunityStage(List<Id> ids){
        List<Opportunity> oppActualizadas = new List<Opportunity>();

        List<Opportunity> oportunidades = [select Id, StageName from Opportunity where Id =: ids];
        for (Opportunity opp : oportunidades){
            opp.StageName='Closed Won';
            oppActualizadas.add(opp);
        }
        update oppActualizadas;
    }
}