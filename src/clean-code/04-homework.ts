(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    /*function isRedFruit(fruit: string): boolean {
        const fruitNames: string[] = ['manzana', 'cereza', 'ciruela'];
        if (fruitNames.find(fruitName => fruitName == fruit)) return true
        return false;
    }*/
    function isRedFruit(fruit: string): boolean {
        const redFruits: string[] = ['manzana', 'cereza', 'ciruela']; 
        return redFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    interface IFruitsByColor {
        red: string[];
        yellow: string[];
        purple: string[];
    }
    type FruitColor = 'red'|'yellow'|'purple'; 
    function getFruitsByColor(color: FruitColor): string[] {
        const fruitsByColor:IFruitsByColor = {
            red:['manzana', 'fresa'],
            yellow:['piña', 'banana'],
            purple:['moras', 'uvas'],
        }
        if(!Object.keys(fruitsByColor).includes(color)) 
            throw Error('the color must be: red, yellow, purple');
        return fruitsByColor[color];
        /*switch (color) {
            case "red":
                return ['manzana', 'fresa'];
            case "yellow":
                return ['piña', 'banana'];
            case "purple":
                return ['moras', 'uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
        }*/
    }
    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking)  return 'Second step broken.';
        if (!isThirdStepWorking)  return 'Third step broken.';
        if (!isFourthStepWorking)  return  'Fourth step broken.';
        return 'Working properly!'
        /** 
        if (isFirstStepWorking) {
            if (isSecondStepWorking) {
                if (isThirdStepWorking) return isFourthStepWorking ? 'Working properly!' : 'Fourth step broken.';
                return 'Third step broken.';
            }
            return 'Second step broken.';
        }
        return 'First step broken.';
        */
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();





