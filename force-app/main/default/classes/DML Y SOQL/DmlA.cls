/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-14-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// **A.Enunciado: Crea una clase llamada AccountCreator con un método createAccounts. Este método debe crear e insertar tres cuentas nuevas con nombres específicos.**

// Requerimientos:
// - *Crea tres objetos Account en la clase y asigna valores para el campo Name*.
// - *Inserta estos objetos en Salesforce usando una sola operación insert.*

// public with sharing class AccountCreator {
//     public void createAccounts() {

//         for(Integer i = 1; i<= 3; i++){
//             Account acc = new Account();
//             acc.Name = 'Cuenta ' + i;
//             insert acc;
//         }
        
//     }
// }

//Sacando insert del for

public with sharing class AccountCreator {
    public void createAccounts() {

        List<Account> cuentasPorInsertar = new List<Account>();

        for(Integer i = 1; i<= 3; i++){
            Account acc = new Account();
            acc.Name = 'Cuenta ' + i;
            cuentasPorInsertar.add(acc);
        }

        if(cuentasPorInsertar.size()>0){
            insert cuentasPorInsertar;
        }
        
    }
}
