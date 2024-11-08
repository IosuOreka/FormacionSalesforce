/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 22. Actualización de Registro: Actualiza un Account existente cambiando su nombre.

public with sharing class Ejercicio22 {
    public void actualizarAccount(Id accountId, String newName) {
        try {
            
            if (Schema.sObjectType.Account.isAccessible() && 
                Schema.sObjectType.Account.isUpdatable()) {
         
                Account acc = [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
                
                acc.Name = newName;
                
                update acc;
                
            } else {
                System.debug('No tiene permisos para leer o actualizar registros de Account.');
            }
        } catch (DmlException e) {
            System.debug('Error al actualizar la cuenta: ' + e.getMessage());
        } catch (Exception e) {
            System.debug('Error inesperado: ' + e.getMessage());
        }
    }
}
