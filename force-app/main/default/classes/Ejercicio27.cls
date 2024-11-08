/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 27. Bulk DML: Inserta una lista de Account en una sola transacción DML.

public with sharing class Ejercicio27 {
    public void insertarLista() {
        List<Account> cuentas = new List<Account>{
                new Account(Name='DML Insert 1'),
                new Account(Name='DML Insert 2'),
                new Account(Name='DML Insert 3'),
                new Account(Name='DML Insert 4')
        };

        insert cuentas;
        System.debug('Las IDs de las cuentas son: '+ cuentas.getId() + ' y su nombre es: '+ cuentas.getName() + ' y el estatus de la lista es: '+ cuentas.isEmpty());

    }
}