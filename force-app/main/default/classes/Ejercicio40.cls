/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 40. *Actualizar un Campo de Cuenta:* Crea una clase llamada AccountUpdater con un método actualizarIndustria. 
// Este método debe recibir un Id de cuenta y
//  un nuevo valor de industria, y actualizar la cuenta con la industria proporcionada.

public with sharing class AccountUpdater {
    public actualizarIndustria(Id AccountId) {
        Account acc = [SELECT Id FROM Account WHERE Id = :accountId];
        acc.Industry = 'Finance';
        update acc;
    }
}