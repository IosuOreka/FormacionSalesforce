/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 2. *Variables y Asignaciones*: Declara y asigna diferentes tipos de variables (Integer, String, Boolean) e imprime sus valores.

public class Ejercicio2 {
    public Integer num {get;set;};
    public String nombre {get;set;};
    public Boolean check {get;set;};

   public Ejercicio2 (Integer a, String b, Boolean c){
    this.num = a;
    this.nombre = b;
    this.check = c;
   }

   public imprime(){
    System.debug(this.nombre + ' ' + this.num + ' ' + this.check);
   }

}