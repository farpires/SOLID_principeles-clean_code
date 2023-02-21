// don't repeat yourself
/**
 *  If you want to be a productive programmer, strive to write readable code. - Robert C. martin
 * 
 *  It is simply avoiding having duplication of code. 
 *  Simplifies testing. It helps to centralize processes. 
 *  Apply the DRY principle,
 * 
 */



type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',

    ) { }

    isProductReady(): boolean {
        // --------------------------------------------------------- yes dry
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) throw Error(`${key} is empty `);
                    break;
                case 'number':
                    if ((this[key] as number) <= 0) throw Error(`${key} is zero `);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true;
    }

    toString() {
        // ------------------------------------------------------------ no dry
        // if (this.name.length <=0 ) throw Error("name is empty"); 
        // if (this.price <=0 ) throw Error("price is empty or 0");
        // if (this.size.length <=0 ) throw Error("size is empty");
     
        if (!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`
    }

}

(() => {
    const bluePants = new Product("blue large pants", 10,"M");
    console.log(bluePants.toString());
})();