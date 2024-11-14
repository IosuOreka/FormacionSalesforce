/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 20. *Calcular Edad*: Dado un Date de nacimiento, calcula la edad actual de la persona.

public class Anos {
    public DateTime obtenerAnos(DateTime fecha){
        Datetimme hoy = Datetime.today();
        DateTime anio = hoy.year();
        Datetime mes = hoy.month();
        if(fecha.month() < mes){
            return anio - fecha.year();
        } else {
            return anio - fecha.year() - 1;
        }
    }
}