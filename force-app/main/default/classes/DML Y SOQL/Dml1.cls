/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/


// Ejercicio 1: Crear una Clase para Gestión de Oportunidades
// Enunciado: Crea una clase llamada OpportunityManager en Apex que tenga métodos para gestionar oportunidades. Esta clase debe incluir los siguientes métodos:

// getClosedWonOpportunities(List<Id> accountIds): Devuelve una lista de oportunidades en estado "Closed Won" relacionadas con una lista de cuentas.
// calculateTotalAmount(List<Id> opportunityIds): Calcula el monto total de una lista de oportunidades.
// setCloseDate(List<Id> opportunityIds, Date newCloseDate): Actualiza la fecha de cierre de una lista de oportunidades a la fecha proporcionada en newCloseDate.
// Prueba esta clase en un método de prueba en el que crees algunas oportunidades de ejemplo y luego llames a estos métodos para verificar que funcionan como se espera.

public with sharing class OpportunityManager {
    public static List<Opportunity> getClosedWonOpportunities(List<Id> accountIds){
        return [SELECT Id, Name, AccountId, Amount, StageName, CloseDate FROM Opportunity WHERE StageName = 'Closed Won' AND AccountId IN :accountIds];
    }

    public static Double calculateTotalAmount(List<Id> opportunityIds){
        List<Opportunity> opportunityList = [SELECT Id, Name, AccountId, Amount, StageName, CloseDate FROM Opportunity WHERE Id IN :opportunityIds];
        Double totalAmount = 0;
        for(Opportunity opp : opportunityList){
            totalAmount += opp.Amount;
        }
        return totalAmount;
    }

    public void setCloseDate(List<Id> opportunityIds, Date newCloseDate){
        // Creamos una lista para almacenar las oportunidades que se van a actualizar
        List<Opportunity> opportunitiesToUpdate = new List<Opportunity>();

        for(Opportunity opp : [SELECT Id, Name, AccountId, Amount, StageName, CloseDate FROM Opportunity WHERE Id IN :opportunityIds]){
            opp.CloseDate = newCloseDate;
            opportunitiesToUpdate.add(opp); 
        }
        
        update opportunitiesToUpdate;
    }
}