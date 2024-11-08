/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 28. Triggers Básicos: Crea un trigger que se active al crear un Account y lo imprima en el log.

trigger imprimirDatosAccount on Account (before insert) {
    for (Account acc : Trigger.new) {
        System.debug('Nueva cuenta creada: ' + acc.Name);

    }
}