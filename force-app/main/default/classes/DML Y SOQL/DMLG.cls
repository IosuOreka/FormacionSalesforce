/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// **G.Enunciado: Crea una clase llamada OpportunityCloseDateUpdater con un método updateCloseDate.
//  Este método debe recibir una lista de Ids de oportunidades y una fecha de cierre, y actualizar
//  el campo CloseDate de cada oportunidad con la fecha proporcionada.**

// Requerimientos:
// - *Recupera las oportunidades usando la lista de Ids proporcionada.*
// - *Cambia el campo CloseDate de cada oportunidad a la fecha proporcionada.*
// - *Usa una operación update para guardar los cambios.*

public with sharing class OpportunityCloseDateUpdater{
    public void updateCloseDate(List<Id> listaOportunidades, Datetime cierre){
        List<Opportunity> oportunidadesRecuperadas = [SELECT Id, CloseDate FROM Opportunity WHERE Id =: listaOportunidades];
        List<Opportunity> oportunidadesActualizadas = new List<Opportunity>();

        for(Opportunity opp : oportunidadesRecuperadas){
            opp.CloseDate = cierre;
            oportunidadesActualizadas.add(opp);
        }

        update oportunidadesActualizadas;
    }
}