/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// **E.Enunciado: Crea una clase llamada OpportunityCreator que tenga un método createOpportunitiesForAccount. Este método debe recibir el Id de una cuenta 
// y crear tres oportunidades nuevas para esa cuenta con distintos nombres y montos.**

// Requerimientos:
// - *Crea tres objetos Opportunity y asigna valores para Name, Amount, StageName (como "Prospecting") y AccountId usando el Id de cuenta proporcionado.*
// - *Usa una operación insert para guardar las oportunidades.*

public with sharing class OpportunityCreator{
    public void createOpportunitiesForAccount(Id accountId){
        List<Opportunity> oportunidadesNuevas = new List<Opportunity>();
        oportunidadesNuevas.add(new Opportunity(Name = 'Oportunidad 1', Amount = 1000, StageName = 'Prospecting', AccountId = accountId));
        oportunidadesNuevas.add(new Opportunity(Name = 'Oportunidad 2', Amount = 2000, StageName = 'Prospecting', AccountId = accountId));
        oportunidadesNuevas.add(new Opportunity(Name = 'Oportunidad 3', Amount = 3000, StageName = 'Prospecting', AccountId = accountId));

        insert oportunidadesNuevas;

    }
}