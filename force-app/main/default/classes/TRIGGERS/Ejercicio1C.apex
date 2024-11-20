/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-20-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 1. Mostrar un mensaje si se intenta crear un contacto sin nombre.

trigger messageContact on Contact (before insert){
    for(Contact con : Trigger.new){
        if(con.Name == null || con.Name == ''){
           con.addError('El contacto debe tener al menos un nombre.');
        }
    }
}