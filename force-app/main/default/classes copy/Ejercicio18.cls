/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 18. *Set*: Implementa un Set de enteros y demuestra cómo agregar elementos únicos.

public class SetLista {
    public Set<Integer> enteros {get;set;};

    public SetLista(){
        this.enteros = new Set<Integer>();
    }

    public void anadir (Integer bat){
        this.enteros.add(3);
        this.enteros.add(4);
        this.enteros.add(5);
        this.enteros.add(5);
    }

    public void quitar (){
        this.enteros.remove(1)
    }

}