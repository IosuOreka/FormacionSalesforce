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

public with sharing class ContactDeleter{
    public void deleteContactsWithoutEmail(){
        List <Contact> contactosPorRevisar = [SELECT Id, Email FROM Contact];
        List <Contact> contactosRevisados = new List<Contact>();
    
        for(Contact con : contactosPorRevisar){
            if(con.Email == null){
                contactosRevisados.add(con);
            }
        }
        delete contactosRevisados;
    }
}

