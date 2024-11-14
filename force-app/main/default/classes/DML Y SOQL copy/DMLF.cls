/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/


// **F.Enunciado: Crea una clase llamada AccountPhoneUpdater con un método updateAccountPhones. 
// Este método debe recibir una lista de Ids de cuentas y un número de teléfono,
//  y actualizar el campo Phone de cada cuenta con el número proporcionado.**

// Requerimientos:
// - *Recupera las cuentas usando la lista de Ids proporcionada.*
// - *Cambia el campo Phone de cada cuenta al número de teléfono proporcionado.*
// - *Usa una operación update para guardar los cambios.*

public class AccountPhoneUpdater{
    public void updateAccountPhones(List<Id> cuentas, Integer telefono){
        List<Account> contactosActualizados = new List<Account>();
        List<Account> misCuentas = [select Id, Phone from Account where Id =:cuentas];
        for (Account acc : misCuentas){
            acc.Phone = telefono;
            contactosActualizados.add(acc);
        }
        update contactosActualizados;
    }
}