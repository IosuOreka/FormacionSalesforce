/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// Crear un Contacto: Crea una clase llamada ContactCreator con un método crearContacto. 
// El método debe recibir un nombre y apellido, crear un nuevo
//  contacto con esos valores y guardarlo en Salesforce.

public with sharing class ContactCreator {
    public void crearContacto(String nombre, String Apellido) {
        try {
            Contact contacto = new Contact(FirstName = nombre, LastName = Apellido);
            insert contacto;
            System.debug('Contacto insertado.');
        }
        catch (Exception ex) {
            System.debug('Contacto no insertado.' + ex.getMessage());
        }
    }
}