/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
@isTest
public class AccountCopierTest{
    @isTest
    static void testCopiarNombreACampoPersonalizado(){
        List<Account> cuentasPorActualizar = new List<Account>();
        cuentasPorActualizar.add(new Account(Name = 'Cuenta de prueba 1'));
        cuentasPorActualizar.add(new Account(Name = 'Cuenta de prueba 2'));

        insert cuentasPorActualizar;
        Test.startTest();
        AccountCopier accountCopier = newAccountCopier();
        accountCopier.copiarNombreACampoPersonalizado();
        Test.stopTest();
        
        List<Account> cuentasActualizadas = [SELECT Name, Nombre_Copia__c FROM Account WHERE Id IN :cuentasDePrueba];
        
        for (Account cuenta : cuentasActualizadas) {
            System.assertEquals(cuenta.Name, cuenta.Nombre_Copia__c, 'El campo Nombre_Copia__c debería ser igual a Name');
        }

    }
}