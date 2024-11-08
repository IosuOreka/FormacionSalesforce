/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// Métodos de Instancia: Implementa métodos de instancia en una clase para manejar datos de Contact.
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