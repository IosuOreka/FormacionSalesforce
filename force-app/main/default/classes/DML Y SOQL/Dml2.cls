/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// Ejercicio 2: Generar Informes de Cuentas en Diferentes Etapas de Venta
// Enunciado: Crea una clase llamada AccountReport que permita generar informes sobre cuentas en función de las etapas de venta de sus oportunidades. Los métodos que debe incluir son:

// generateReportByStage(String stage): Devuelve una lista de cuentas que tienen al menos una oportunidad en la etapa de venta especificada en stage.
// countOpportunitiesByStage(String stage): Devuelve el número de oportunidades en la etapa de venta indicada, relacionadas con todas las cuentas de la organización.
// listTopAccountsByRevenue(Integer limit): Devuelve una lista de cuentas con mayores ingresos (sumando todas las oportunidades ganadas), con un límite especificado en el parámetro limit.
// Este ejercicio te ayudará a manipular relaciones entre objetos y a aplicar filtros en consultas.

public with sharing class AccountReport{

    public static List<Account> generateReportByStage(String stage){
        List <Account> accountsWithStage = [SELECT Id, Name FROM Account Where Id IN (SELECT AccountId FROM Opportunity WHERE StageName = :stage)];
        return accountsWithStage;
    }

    public static Integer countOpportunitiesByStage(String stage){
        Integer opportunitiesCount = [SELECT COUNT() FROM Opportunity WHERE StageName = :stage];
        return opportunitiesCount;
    }

    public static List<Account> listTopAccountsByRevenue(Integer limit) {
        List<Account> topAccounts = [
            SELECT Id, Name, 
                (SELECT SUM(Amount) FROM Opportunities WHERE StageName = 'Closed Won') TotalRevenue
            FROM Account
            ORDER BY TotalRevenue DESC
            LIMIT :limit
        ];
        return topAccounts;
    }
}