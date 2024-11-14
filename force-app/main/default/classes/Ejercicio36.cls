/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// *Clase con un Método que Devuelve el Nombre de una Cuenta*: Escribe una clase llamada AccountUtils con un método obtenerNombreCuenta(Id accountId). 
// Este método debe consultar el nombre de una cuenta con el Id especificado y devolverlo.

public with sharing class AccountUtils {
    public String AccountUtils(Id accountId) {
        try {
            String nameSelected = [SELECT Name FROM Account WHERE Id = :accountId LIMIT 1];
            return nameSelected.name;
        }
        catch (Exception ex) {
            System.debug('Error en AccountUtils: ' + ex.getMessage() + ' Line: ' + ex.getLineNumber());
            return null;
        }
        finally {
            System.debug('Cuenta Seleccionada: ' + nameSelected + ' (Line: ' + nameSelected.Line + ')');
            
        }
        

    }
}