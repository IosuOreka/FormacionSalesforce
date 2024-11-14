/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 16. *Manipulación de Listas*: Crea una lista de números enteros y realiza operaciones de agregar, eliminar y buscar.

public class ListaBat{
    public List<Integer> numeros {get;set;};

    public ListaBat(){
        this.numeros = new List<Integer>();
    }

    public void agregar(){
        this.numeros.add(1);
    }

    public void quitar(){
        this.numeros.remove(0);
    }

    public Integer buscar(Integer bat){
        return this.numeros.find(bat);
    }
}