/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-18-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 23. Eliminación de Registro: Elimina un registro de Contact mediante DML.

public with sharing class Ejercicio23 {
    
    public Boolean borrarContacto(Id contactId) {
        Contact con = [select Id from contact where id = :ContactId];
        delete con;
        return true;

    }
}