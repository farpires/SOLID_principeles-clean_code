/**
 * optimizaciones prematuras
 * 
 *  -   Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es 
 *      más importante en una aplicación.
 * 
 *      " en este caso son las reglas de negocio , en que ahí está el valor de la misma, además el simple hecho de aplazar 
 *        estas decisiones nos permitirá tomar a nosotros o tener cierta información adicional sobre las necesidades 
 *        reales del proyecto, lo que nos permitirá a nosotros poder tomar mejores decisiones que estén basadas en los nuevos
 *        requisitos o querimiento del proyecto"
 * 
 *  -   No debemos anticiparnos  a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental
 *      
 *      " Con esto no quiero decir debamos escribir un código poco optimizado, si no que no debemos de anticiparnos a los requisitos 
 *        y desarrollar abstracciones innecesarias que puedan añadir una complejidad accidental"
 * 
 * 
 * complejidad accidental :
 *  -   es cuando implementamos una solución compleja a la mínima necesaria. 
 *  
 * complejidad Esencial :
 *  -   la cual es inherente al problema.
 * 
 * entre la complejidad Esencial y accidental tiene que haber un balance, tenemos que ser capaces de decir  e.g. :
 * vamos a sumar números, usaremos el patrón redux solo para sumar estos números, espera nosotros ya tenemos un problema en el cual
 * ocupamos compartir información a lo largo de un montón de componentes, tal vez un Gestor de estado sea lo ideal , que gestor 
 * de estado podría servirno para un proyecto de esta magnitud?
 *      "aquí debemos encontrar un equilibrio entre la propiedad Esencial y accidental"
 *  
 *  */