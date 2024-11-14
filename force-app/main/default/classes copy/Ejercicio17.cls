/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 17. *Mapas*: Crea un Map de nombres de personas y sus edades. Añade, elimina y actualiza entradas en el mapa.

public class Mapeo{
    public Map<String, Integer> personas {get;set;};

    public Mapeo(){
        this.personas = new Map<String, Integer>();
    }

    public void anadir (){
        this.personas.put('Jonan', 36);
    }

    public void del (){
        this.personas.remove('Jonan');
    }

    public vois update (){
        this.personas.put('Jonan', personas.get('Jonan') + 1);
    }
}