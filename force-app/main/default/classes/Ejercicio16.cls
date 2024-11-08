/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 16. *Manipulación de Listas*: Crea una lista de números enteros y realiza operaciones de agregar, eliminar y buscar.

public with sharing class Ejercicio16 {

    public manipulacionLista() {

        List<Integer> lista = new List<Integer>();

        //Operación de agregar números usando add().

        lista.add(1);
        lista.add(2);
        lista.add(3);
        lista.add(4); 

        System.debug('Esta es la lista inicial: ' + lista);

        //Eliminar números de la lista usando remove(). Se remueve por índice.
        lista.remove(2);

        System.debug('Esta es la lista tras remover elemento: ' + lista);


        //Buscar un número usando contains()
        Integer num = 5;
        Boolean encontrado = lista.contains(num);
        System.debug('El número palnteado se encuentra en la lista: ' + encontrado);
    }
}