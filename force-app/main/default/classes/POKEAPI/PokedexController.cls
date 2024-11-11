/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class PokedexController {

    // Método para contar el total de Pokémon en la base de datos
    @AuraEnabled(cacheable=true)
    public static Integer contarTotalPokemon() {
        try {
            return [SELECT COUNT() FROM Pokemon__c];
        } catch (Exception e) {
            System.debug('Error al contar el total de Pokémon: ' + e.getMessage());
            return 0;
        }
    }

    // Método para obtener una lista paginada de Pokémon
    @AuraEnabled(cacheable=true)
    public static List<Pokemon__c> obtenerPokemonPaginado(Integer pageSize, Integer pageNumber) {
        Integer offsetValue = (pageNumber - 1) * pageSize;
        
        try {
            List<Pokemon__c> pokemons = [
                SELECT Id, Name, Imagen_URL__c, N_en_pokedex__c, Altura__c, Peso__c, Tipo_1__c, Tipo_2__c 
                FROM Pokemon__c 
                ORDER BY N_en_pokedex__c
                LIMIT :pageSize OFFSET :offsetValue
            ];
            return pokemons;
        } catch (Exception e) {
            System.debug('Error al obtener Pokémon paginados: ' + e.getMessage());
            return new List<Pokemon__c>();
        }
    }
}
