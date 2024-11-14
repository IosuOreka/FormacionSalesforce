/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 34. *Clase para Resumir Ventas por Cuenta*: Crea una clase que tenga un método que devuelva el monto total de
//  oportunidades (Amount) cerradas para una lista de Id de cuentas.

public with sharing class Ejercicio34 {
    public static Map<Id, Decimal> getOpportunitiesAmountByAccountId(List<Id> accountIds) {
        Map<Id, Decimal> amountByAccountId = new Map<Id, Decimal>();

        AgregateResult[] results = [SELECT AccountId, SUM(Amount) totalAmount FROM Opportunity WHERE AccountId IN :accountIds AND isClosed = true GROUP BY AccountId];
        
        for(AgregateResult result : results) {
            amountByAccountId.put((Id)result.get('AccountId'), (Decimal)result.get('totalAmount'));
        }

        return amountByAccountId;
    
    }
}