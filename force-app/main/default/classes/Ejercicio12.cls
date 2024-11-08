/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 12. *Sentencia Switch*: Usa Switch para determinar el día de la semana según un número entre 1 y 7.

public with sharing class Ejercicio12 {
    public Ejercicio12(Integer dia) {
        switch on dia {
            when 7 {
                System.debug('Domingo');
            }
            when 1 {
                System.debug('Lunes');
            }
            when 2 {
                System.debug('Martes');
            }
            when 3 {
                System.debug('Miercoles');
            }
            when 4 {
                System.debug('Jueves');
            }
            when 5 {
                System.debug('Viernes');
            }
            //Cierro aquí el ciclo para mostrar un cierre de la estructura switch.
            when else  {
                System.debug('Sabado');
            }    
        }
    }
}