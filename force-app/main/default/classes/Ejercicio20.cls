/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 20. *Calcular Edad*: Dado un Date de nacimiento, calcula la edad actual de la persona.

public with sharing class Ejercicio20 {

    public Integer calcularEdad(Date fechaNacimiento) {
        Date fechaActual = Date.today();
        
        Integer edad = fechaActual.year() - fechaNacimiento.year();
        if (fechaActual < fechaNacimiento.addYears(edad)) {
            edad--;
        }
        
        System.debug('La edad de la persona es: ' + edad);
        return edad;
    }
}
