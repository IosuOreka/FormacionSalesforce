/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 12. *Sentencia Switch*: Usa Switch para determinar el día de la semana según un número entre 1 y 7.

public with sharing class Ejercicio12 {
    public String Ejercicio12(Integer dia) {
        switch on dia {
            when 7 {
                System.debug('Domingo');
                return 'Domingo';
            }
            when 1 {
                System.debug('Lunes');
                return 'Lunes';
            }
            when 2 {
                System.debug('Martes');
                return 'Martes';
            }
            when 3 {
                System.debug('Miercoles');
                return 'Miercoles';
            }
            when 4 {
                System.debug('Jueves');
                return 'Jueves';
            }
            when 5 {
                System.debug('Viernes');
                return 'Viernes';
            }
            when 6{
                System.debug('Sabado');
                return 'Sabado';
            }  
            when else  {
                System.debug('No hay semanas de más de 7 días!');
                return 'No mames wey pendejo!';
            }    
        }
    }
}