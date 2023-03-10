export abstract class Vehicule {    
   /** 
    getNumberOfSeats(): number{
        throw Error('Method not implemented')
    };
    */

    abstract getNumberOfSeats(): number;
}



export class Tesla extends Vehicule {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicule {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicule {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}



export class Honda extends Vehicule {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicule {

    constructor( private numberOfSeats: number ) {
        super()
    }
    
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicule{

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
