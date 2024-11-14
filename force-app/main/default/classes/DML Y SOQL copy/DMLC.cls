/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// **C.Enunciado: Crea una clase llamada ContactDeleter que tenga un método deleteContactsWithoutEmail. Este método debe buscar todos los contactos en la organización que no tienen un correo electrónico y eliminarlos.**

// Requerimientos:
// Realiza una consulta para encontrar contactos donde el campo Email esté vacío o sea null.
// Usa una operación delete para eliminar los contactos encontrados.


public class ContactDeleter{
    public void deleteContactsWithoutEmail(){
        List<Contact> contactos = [select Id, Email from Contact where Email = null];
        delete contactos;
    }
}
