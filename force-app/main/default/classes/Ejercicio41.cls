/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 41. Eliminar Contactos: Crea una clase ContactDeleter con un método eliminarContactosPorCuentaId. 
// El método debe eliminar todos los contactos de una cuenta específica utilizando su Id.

public with sharing class ContactDeleter {
    public eliminarContactosPorCuentaId(Id AccountId) {

        try {
            
            List<Contact> contactosPorEliminar = [SELECT Id, AccountId FROM Contact WHERE AccountId = :AccountId];

            if(contactosPorEliminar.size() > 0) {
                delete contactosPorEliminar;
                System.debug('Se eliminaron correctamente los contactos de la cuenta con ID: ' + AccountId);
            }else {
                System.debug('No se encontraron contactos para la cuenta con ID: ' + AccountId);
            }
        } catch (Exception e) {
            System.debug('Error al consultar contactos: ' + e.getMessage());
        } catch (DmlException ex){
            System.debug('Error al eliminar contactos: ' + ex.getMessage());
        }
    }
}

 