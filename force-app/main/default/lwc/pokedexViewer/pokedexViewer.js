import { LightningElement, track } from 'lwc';

export default class Pokedex extends LightningElement {
    @track pokemons = []; // Lista de todos los Pokémon con solo nombre e imagen
    @track pokemon;       // Pokémon seleccionado con todos los detalles
    @track isPreviousDisabled = true; // Inicialmente deshabilitado el botón Previous
    @track isNextDisabled = false;   // Inicialmente habilitado el botón Next

    currentIndex = 0; // Para manejar la paginación
    allPokemons = []; // Aquí almacenamos todos los detalles de los Pokémon

    connectedCallback() {
        this.loadPokemons();
    }

    // Llamada para obtener los primeros 150 Pokémon y sus detalles
    loadPokemons() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
            .then(response => response.json())
            .then(data => {
                this.pokemons = data.results; // Lista inicial de Pokémon
                console.log("RESULTS", data.results);
                this.fetchPokemonDetails(this.pokemons); // Obtener detalles de los Pokémon
            })
            .catch(error => {
                console.error('Error loading Pokémon:', error);
            });
    }

    // Fetch los detalles de cada Pokémon
    fetchPokemonDetails(pokemonList) {
        let promises = pokemonList.map(pokemon => {
            return fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    this.allPokemons.push({
                        Id: data.id,
                        Name: data.name,
                        N_en_pokedex__c: data.id,
                        Altura__c: data.height,
                        Peso__c: data.weight,
                        imageUrl: data.sprites.front_default,
                        Tipo_1__c: data.types[0].type.name,
                        Tipo_2__c: data.types[1] ? data.types[1].type.name : 'N/A'
                    });
                });
        });

        // Esperamos que todas las promesas se resuelvan antes de cargar el primer Pokémon
        Promise.all(promises).then(() => {
            this.pokemons = this.allPokemons.slice(0, 10); // Cargar los primeros 10 Pokémon
            this.pokemon = this.allPokemons[0]; // Cargamos el primer Pokémon
            this.isNextDisabled = this.allPokemons.length <= 10; // Deshabilitar "Next" si no hay más
        });
    }

    // Selecciona un Pokémon de la lista
    handlePokemonSelect(event) {
        const pokemonId = event.target.closest('li').dataset.id;
        this.pokemon = this.allPokemons.find(poke => poke.Id === parseInt(pokemonId));
    }

    // Manejo de paginación (mostrar 10 Pokémon a la vez)
    handlePrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex -= 10; // Retrocedemos 10 Pokémon
            this.pokemons = this.allPokemons.slice(this.currentIndex, this.currentIndex + 10);
            this.isPreviousDisabled = this.currentIndex === 0;
            this.isNextDisabled = false;
        }
    }

    handleNext() {
        if (this.currentIndex < this.allPokemons.length - 10) {
            this.currentIndex += 10; // Avanzamos 10 Pokémon
            this.pokemons = this.allPokemons.slice(this.currentIndex, this.currentIndex + 10);
            this.isPreviousDisabled = false;
            this.isNextDisabled = this.currentIndex + 10 >= this.allPokemons.length;
        }
    }

    // Obtener la clase CSS según el tipo de Pokémon
    getTypeClass(type) {
        switch (type) {
            case 'fire': return 'fire-type';
            case 'water': return 'water-type';
            case 'grass': return 'grass-type';
            case 'electric': return 'electric-type';
            case 'psychic': return 'psychic-type';
            case 'normal': return 'normal-type';
            case 'flying': return 'flying-type';
            case 'ghost': return 'ghost-type';
            default: return 'normal-type';
        }
    }
}
