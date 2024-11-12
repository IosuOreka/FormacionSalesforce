/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// **H.Enunciado: Crea una clase llamada InactiveAccountDeactivator que tenga un método deactivateInactiveAccounts.
//  Este método debe buscar cuentas que no tengan ninguna oportunidad abierta y actualizar su estado a "Inactive".**

// Requerimientos:
// - *Realiza una consulta para buscar cuentas que no tengan oportunidades con estado distinto a "Closed".*
// - *Cambia el campo Active__c (suponiendo que es un campo personalizado tipo Checkbox) de cada cuenta a false.*
// - *Usa una operación update para guardar los cambios.*


public with sharing class InactiveAccountDeactivator{

    public void deactivateInactiveAccounts(){

        List<Opportunity> oportunidadesBuscadas = [SELECT Id, Active__c FROM Opportunity where Status != 'Closed'];
        List<Opportunity> oportunidadesActualizadas = new List<Opportunity>();

        for(Opportunity opp : oportunidadesBuscadas){
            opp.Active__c = false;
            oportunidadesActualizadas.add(opp);
        }

        if(oportunidadesActualizadas.size() > 0){
            update oportunidadesActualizadas; 
        }

    }
}