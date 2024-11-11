/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 11-11-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class PokedexInitializer {

    public static void cargarPrimeros150Pokemon() {
        // Llamar al método asincrónico para cargar los Pokémon
        cargarPokemonAsincrono(1, 100);
    }

    @future(callout=true)
    public static void cargarPokemonAsincrono(Integer start, Integer ends) {
        List<Pokemon__c> listaPokemon = new List<Pokemon__c>();

        for (Integer i = start; i <= ends; i++) {
            Pokemon__c pokemon = obtenerDatosPokemon(i);
            if (pokemon != null) {
                listaPokemon.add(pokemon);
            }
        }

        if (!listaPokemon.isEmpty()) {
            insert listaPokemon;
        }
    }

    // Método para obtener los datos de un Pokémon específico usando su número de Pokédex
    private static Pokemon__c obtenerDatosPokemon(Integer numeroPokedex) {
        String apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + numeroPokedex;
        
        try {
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(apiUrl);
            request.setMethod('GET');
            HttpResponse response = http.send(request);
            
            if (response.getStatusCode() == 200) {
                Map<String, Object> pokemonData = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                
                Pokemon__c pokemon = new Pokemon__c();
                pokemon.Name = (String) pokemonData.get('name');
                pokemon.N_en_pokedex__c = numeroPokedex;
                pokemon.Altura__c = (Integer) pokemonData.get('height');
                pokemon.Peso__c = (Integer) pokemonData.get('weight');
                pokemon.Imagen_URL__c = (String) ((Map<String, Object>) pokemonData.get('sprites')).get('front_default');
                
                List<Map<String, Object>> tipos = (List<Map<String, Object>>) pokemonData.get('types');
                pokemon.Tipo_1__c = (String) ((Map<String, Object>) tipos[0].get('type')).get('name');
                if (tipos.size() > 1) {
                    pokemon.Tipo_2__c = (String) ((Map<String, Object>) tipos[1].get('type')).get('name');
                }

                return pokemon;
            } else {
                System.debug('Error al obtener datos del Pokémon: ' + response.getStatus());
            }
        } catch (Exception e) {
            System.debug('Excepción al llamar a la API: ' + e.getMessage());
        }
        return null;
    }
}
