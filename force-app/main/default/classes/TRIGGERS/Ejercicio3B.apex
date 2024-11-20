/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 3. Copiar automáticamente el correo y el teléfono del contacto asociado cuando se crea un caso.

trigger CaseInformed on Case (before insert) {
    for (Case c : Trigger.new) {
        if (c.ContactId != null) {
            Contact contactoAsociado = [SELECT Email, Phone FROM Contact WHERE Id = :c.ContactId LIMIT 1];
            c.Email = contactoAsociado.Email;
            c.Phone = contactoAsociado.Phone;
        }
    }
}
