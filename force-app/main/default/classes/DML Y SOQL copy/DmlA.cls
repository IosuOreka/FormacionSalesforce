/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-12-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/



**A.Enunciado: Crea una clase llamada AccountCreator con un método createAccounts. Este método debe crear e insertar tres cuentas nuevas con nombres específicos.**

public class AccountCreator{
    public void createAccounts(Account cuenta1, Account cuenta2, Account cuenta3){
        cuenta1.Name = 'Jon';
        cuenta2.Name = 'Jon_feo';
        cuenta3.Name = 'Jon_superfeo';
        insert cuenta1;
        insert cuenta2;
        insert cuenta3;
    }
}