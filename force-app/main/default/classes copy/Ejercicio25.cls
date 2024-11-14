/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 25. Operaciones SOSL: Escribe una búsqueda SOSL que encuentre registros de Account y Contact relacionados con "John".

public with sharing class Ejercicio25 {
    
    public List<List<SObject>> getAccountsAndContacts(){
        List<List<SObject>> resultados = [FIND 'John' IN ALL FIELDS RETURNING Account(Name), Contact(FirstName, LastName)];
        return resultados;
    }

}