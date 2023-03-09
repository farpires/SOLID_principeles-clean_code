/**
 * 
 * SRP - Principio de responsabilidad única
 *      "nunca debería haber más de un motivo por el cual cambiar una clase o un módulo" - Robert C. Martin
 *      -   una clase debe tener una única responsabilidad , tener más de una responsabilidad en nuestras clase o 
 *          módulo, hace que nuestros código se haga difícil de leer testear y de mantener. hace que el código se ha menos 
 *          flexible más rígido y en definitiva menos tolerante al cambio,
 *          
 *          "tener una única responsabilidad" !== "hacer una única cosa"
 *          En si es que nuestras clases y módulos realizan unas series de procesos,que estén relacionados entre sí.
 *          Se basa en diseñar componentes que solo estén expuestos a una sola fuente de cambio.
 * 
 * SRP - cómo detectar violaciones
 *      -   Nombres de clases y módulos demasiado genéricos.
 *      -   cambios en el código suelen afectar la clase o módulo.
 *      -   La clase involucra varias capas.
 *      -   Número elevado de importación.
 *      -   cantidad elevada de métodos públicos.
 *      -   excesivo  números de líneas de código.          
 * 
 */

