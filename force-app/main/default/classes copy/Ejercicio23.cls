/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 23. Eliminación de Registro: Elimina un registro de Contact mediante DML.

public with sharing class Ejercicio23 {
    
    public void borrarContacto(Id contactId) {
        Contact con = [select id from contact where id = :ContactId];
        delete con;

    }
}