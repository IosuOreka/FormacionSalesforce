/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 42. Copiar un Campo de Cuenta: En la clase AccountCopier, escribe un método copiarNombreACampoPersonalizado.
//  Este método debe copiar el valor de Name al campo personalizado Nombre_Copia__c para una lista de cuentas.

public with sharing class AccountCopier {
    public copiarNombreACampoPersonalizado() {
        List <Account> cuentasPorActualizar = [SELECT Id, Name FROM Account];

        for(Account acc : cuentasPorActualizar) {
            acc.Nombre_Copia__c = acc.Name;
        }
        if(!cuentasPorActualizar.isEmpty()) {
            update cuentasPorActualizar;
        }
    }
}