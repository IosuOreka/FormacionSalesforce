/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 33.  *Actualización Masiva de Contactos*:  Escribe una clase con un método que reciba una lista de Id de Account y 
// establezca el campo Title de todos los contactos asociados a esas cuentas en "Cliente Preferido".

public with sharing class Ejercicio33 {
    public Ejercicio33(List<Id> accountsId) {
        List<Contact> contactosPorActualizar = [SELECT Id, AccountId, Title
                FROM Contact
                WHERE AccountId IN :accountsId];
        for(Contact contacto : contactosPorActualizar){
            contacto.Title = 'Cliente Preferido';
        }

        if(contactosPorActualizar.size() > 0){
            insert contactosPorActualizar;
        }
    }
}