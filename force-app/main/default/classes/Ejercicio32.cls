/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// *Creación de contactos*: Escribe un método en Apex que cree 5 contactos para una cuenta específica, tomando el Id de la cuenta como parámetro.
//  Los contactos deben tener nombres y apellidos únicos.

public with sharing class Ejercicio32 {
    public static void crearContactos(Id accountId) {
        List<Contact> contactos = new List<Contact>();
        for(Integer i = 1; i <= 5; i++){
            Contact contacto = new Contact();
            contacto.FirstName = 'Nombre ' + i;
            contacto.LastName = 'Apellido ' + i;
        
            contactos.add(contacto);
        }
        insert contactos;
    }
}