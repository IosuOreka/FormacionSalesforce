/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 19. *Uso de DateTime*: Escribe un programa que obtenga y muestre la fecha y hora actuales.

public with sharing class Ejercicio19 {

    public void mostrarFechaHoraActual() {
        DateTime fechaHoraActual = DateTime.now();
        System.debug('Fecha y hora actuales: ' + fechaHoraActual.format());
    }
}
