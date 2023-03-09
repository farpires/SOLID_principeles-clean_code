/**
 * Dependency inversion:
 * Es recomendable utilizar typescript.
 *      "Los módulos de alto nivel no deben depender de modulo de bajo nivel, ambos deben depender de abstracción. las abstracciones
 *      no deben depender de concreciones. los detalles deben depender de abstracciones" -Robert C. martin.
 * 
 * en sí:
 *  -   los módulos de alto nivel no deberían depender de módulos de bajo nivel .
 *  -   ambos deberían depender de abstracciones.
 *  -   Las abstracciones no deberían depender de detalles .
 *  -   los detalles deberían depender de la abstracciones.
 * 
 * 
 * LOS COMPONENTES MÁS IMPORTANTES SON AQUELLOS QUE SE CENTRADOS EN RESOLVER EL PROBLEMA SUBYACENTE AL NEGOCIO, ES DECIR LA CAPA DE DOMINIO.
 * LOS COMPONENTES MENOS IMPORTANTES SON LOS QUE ESTÁN  PRÓXIMAMENTE A LA INFRAESTRUCTURA, ES DECIR LOS QUE ESTÁN RELACIONADO CON 
 *      LA INTERFAZ DE USUARIO, PERSISTENCIA, LA COMUNICACIÓN CON API EXTERNAS , ETC.
 * 
 * LO CUAL NOS DA UNA PERSPECTIVA COMO DEBE DE TRABAJAR LA ARQUITECTURA HEXAGONAL, UN EJEMPLO. 
 * 
 */
