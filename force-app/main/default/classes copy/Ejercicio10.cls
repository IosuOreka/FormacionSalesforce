/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 10. *Propiedades de Solo Lectura*: Crea una propiedad **readonly** en la clase Persona para el nombre.

public class Persona{
    public String nombre {get;};

    public String readonly (String a){
        this.nombre = a;
        return nombre;
    }
}