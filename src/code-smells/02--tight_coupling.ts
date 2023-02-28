/**
 * tight coupling: alto acoplamiento.
 * 
 * Alto acoplamiento:
 *  Desventaja: 
 *      -   Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos.
 *      -   El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
 *      -   Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se debe incluir módulos dependientes.   
 *  Solución:
 *      -   "A" tiene un atributo que se refiere a "B".
 *      -   "A" llama a los servicios de un objeto "B".
 *      -   "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o parámetro ).
 *      -   "A" es una subclase de (o implementar ) la clase "B".
 * 
  * Lo que queremos lograr:
 *      "Queremos diseñar componentes que sean autocontenidos, autosuficientes e independientes. 
 *      Con un objetivo y un propósito bien definido" - The Pragmatic Programmer 
 * 
 * Cohesión: Lo ideal es tener bajo acoplamiento y buena cohesión.
 *      -   La cohesión se refiere lo que la clase (o módulo) puede hacer.
 *      -   BAJA cohesión significa que la clase realiza una gran variedad de acciones: 
 *          es amplia, no se enfoca en lo que debe hacer.
 *      -   ALTA cohesión significa que la clase se enfoca en lo que debía estar haciendo, es decir
 *          solo los métodos relacionados con la intención de la clase.       
 * 
 * Acoplamiento: Lo ideal es tener bajo acoplamiento y buena cohesión.
 *      -   Se refiere a cuán relacionada o dependiente son dos clases o módulos entre sí.
 *      -   BAJO acoplamiento, cambiar algo importante en una clase no debería afectar a otra. 
 *      -   ALTO acoplamiento, dificulta el cambio y el mantenimiento de su código; dado que las clases
 *          están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.
 * 
 */