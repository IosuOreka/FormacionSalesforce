/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 10. *Propiedades de Solo Lectura*: Crea una propiedad **readonly** en la clase Persona para el nombre.

public with sharing class Persona {

    // Propiedad de solo lectura para el nombre, sin el setter.
    public final String nombre { get; }
    public Integer edad { get; set; }

    public Persona(String n, Integer e) {
        this.nombre = n;  
        this.edad = e;
    }

    public void imprimirDatos() {
        System.debug('Persona: ' + nombre + ' con edad ' + edad);
    }
}
