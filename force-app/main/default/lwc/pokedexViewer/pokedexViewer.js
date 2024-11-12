import { LightningElement, track } from 'lwc';

export default class Pokedex extends LightningElement {
    @track pokemons = []; 
    @track pokemon;       
    @track isPreviousDisabled = true; 
    @track isNextDisabled = false;  

    currentIndex = 0; 
    allPokemons = []; 

    connectedCallback() {
        this.loadPokemons();
    }

    // Llamada para obtener los primeros 150 Pokémon y sus detalles
    loadPokemons() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
            .then(response => response.json())
            .then(data => {
                this.pokemons = data.results;
                console.log("RESULTS", data.results);
                this.fetchPokemonDetails(this.pokemons);
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

        
        Promise.all(promises).then(() => {
            this.pokemons = this.allPokemons.slice(0, 10); 
            this.pokemon = this.allPokemons[0]; 
            this.isNextDisabled = this.allPokemons.length <= 10; 
        });
    }

    // Selecciona un Pokémon de la lista
    handlePokemonSelect(event) {
        const pokemonId = event.target.closest('li').dataset.id;
        this.pokemon = this.allPokemons.find(poke => poke.Id === parseInt(pokemonId));
    }

    // Manejo de paginación de 10 en 10 en la lista
    handlePrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex -= 10; 
            this.pokemons = this.allPokemons.slice(this.currentIndex, this.currentIndex + 10);
            this.isPreviousDisabled = this.currentIndex === 0;
            this.isNextDisabled = false;
        }
    }

    handleNext() {
        if (this.currentIndex < this.allPokemons.length - 10) {
            this.currentIndex += 10; 
            this.pokemons = this.allPokemons.slice(this.currentIndex, this.currentIndex + 10);
            this.isPreviousDisabled = false;
            this.isNextDisabled = this.currentIndex + 10 >= this.allPokemons.length;
        }
    }

    // Manejo de paginación para el Pokémon central (de 1 en 1)
    handlePreviousPokemon() {
        const currentIndex = this.allPokemons.findIndex(poke => poke.Id === this.pokemon.Id);
        if (currentIndex > 0) {
            this.pokemon = this.allPokemons[currentIndex - 1];
        }
    }

    handleNextPokemon() {
        const currentIndex = this.allPokemons.findIndex(poke => poke.Id === this.pokemon.Id);
        if (currentIndex < this.allPokemons.length - 1) {
            this.pokemon = this.allPokemons[currentIndex + 1];
        }
    }

    // Obtener la clase CSS según el tipo de Pokémon para el fondo
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

    // Método para obtener la clase del tipo primario
    get pokemonBackgroundClass() {
        return this.pokemon ? this.getTypeClass(this.pokemon.Tipo_1__c) : '';
    }
}
