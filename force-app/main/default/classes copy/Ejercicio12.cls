/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 12. *Sentencia Switch*: Usa Switch para determinar el día de la semana según un número entre 1 y 7.


public class Switch {
    public String switch (Integer dia){
        switch on dia{
            when 1 {
                return 'Lunes';
            }
            when 2 {
                return 'Martes';
            }
            when 3 {
                return 'Mierdes';
            }
            when 4 {
                return 'Juernes';
            }
            when 5 {
                return 'Baixaku';
            }
            when 6 {
                return 'Zapatu';
            }
            when else {
                return 'Domeka'
            }
        }
    }
}