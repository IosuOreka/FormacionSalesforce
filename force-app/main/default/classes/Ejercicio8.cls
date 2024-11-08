/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 8. *Clases y Métodos*: Define una clase Persona con propiedades nombre y edad, y un método que imprima sus datos.

public with sharing class Persona {

    public String nombre{get; set;}
    public Integer edad{get; set;}

    public Persona(String n, Integer e) {
        this.nombre = n;
        this.edad = e;
    }

    public void imprimirDatos() {
        System.debug('Persona: ' + nombre + ' con edad ' + edad);
    }
}