(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMoviActorsById(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyById(ActorId: string) {
        console.log({ ActorId });
    }

    interface Movie {
        cast: string[]
        description: string;
        rating: number;
        title: string;
    }
    // Crear una película
    function createMovie({title, description, rating, cast}:Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    /**
     *  other recomendation 
     * 
     *  Functions must be small in size. 
     *  Single-line functions without causing complexity. 
     *  Less than 20 lines of code. 
     *  Avoid using the "else".
     *  Prioritize the use of ternary conditional.
     * 
     */

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;
        
        return isRetired ? 3000 : 4000;
    }






})();
