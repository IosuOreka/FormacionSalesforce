/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-19-2024
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

        for (Account cuenta : cuentas) {
            System.debug('ID de la cuenta: ' + cuenta.Id + ' | Nombre de la cuenta: ' + cuenta.Name);
        }

        System.debug('La lista de cuentas está vacía: ' + cuentas.isEmpty());
    }
}
