/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

// 6. *Bucles While*: Escribe un programa que use un bucle while para sumar números del 1 al 10.

public class sumaNum{
    public Integer suma {get;set;};

    public sumar(){
        Integer i = 1;
        this.suma = 0;
        while (i <= 10){
            this.suma += i;
        }
        return suma;
    }
}