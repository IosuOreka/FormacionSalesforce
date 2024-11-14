/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 35. *Clase de Validación de Datos con Excepciones Personalizadas*: 
// Crea una clase que tenga un método para validar que el Phone y Email de un Contact no estén vacíos. 
// Si alguno de los campos está vacío, lanza una excepción personalizada con un mensaje descriptivo.

public class ContactValidationException extends Exception {}

public class ContactValidator {
    public static void validarContactInfo(Contact c) {
        if (c.Phone == null || c.Phone == '') {
            throw new ContactValidationException('El teléfono no puede estar vacío.');
        }
        if (c.Email == null || c.Email == '') {
            throw new ContactValidationException('El correo electrónico no puede estar vacío.');
        }
    }
}
