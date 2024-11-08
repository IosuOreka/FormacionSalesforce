/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 26. Transacciones: Usa Savepoint y Rollback para revertir cambios después de una operación DML.

public with sharing class Ejercicio26 {
    
    public void performTransaction(){
        SavePoint sp = Database.setSavepoint();

        try {
            Account acc = new Account(Name = 'Cuenta temporal');
            insert acc;
            System.debug('Cuenta creada: ' + acc.Id);

            Integer divisionByZero = 0;
        }
        catch (Exception ex) {
            Database.rollback(sp);
            System.debug('Rolback realizado');
        }
    }
}