/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
// 17. *Mapas*: Crea un Map de nombres de personas y sus edades. Añade, elimina y actualiza entradas en el mapa.

public with sharing class Ejercicio17 {

    public manejoMaps() {

        Map<String,Integer> personas = new Map<String,Integer>();

        //Agregar personas al map.

        personas.put('Eduardo', 10);
        personas.put('Sara', 20);
        personas.put('Rosa', 30);
        personas.put('Carlos', 40);
        personas.put('Diana', 50);
        personas.put('Iosu', 38);
        personas.put('Vero', 37);
        personas.put('Izaro', 0);

        System.debug('Mapa de personas inicial: ' + personas);

        //Remover personas del map

        personas.remove(0);
        personas.remove(2);
        personas.remove(3);

        System.debug('Mapa de personas despues de las eliminaciones: ' + personas);

        //Busqueda de edades de personas.

        System.debug('Eduardo tiene la edad de: ' + personas.get('Eduardo'));
        System.debug('Sara tiene la edad de: ' + personas.get('Sara'));

        //Actualizar edad de Eduardo y Sara.

        personas.put('Eduardo', personas.get('Eduardo') + 1);
        personas.put('Sara', personas.get('Sara') + 1);

        System.debug('Mapa de personas final:    ' + personas);

    }
}