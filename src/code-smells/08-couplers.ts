/** 
 * mas inforamcion en: https://refactoring.guru/
 * 
 * todos los code smell de este grupo contribuye al acoplamiento excesivo entre clases o muestran lo que sucede  si el acoplamiento
 * se reemplaza por una delegación excesiva.
 * 
 * 
 * feature Envy:
 *  -   un método accede a los datos de otro objeto más que a sus propios datos, es cuando estamos utilizando una clase función o módulo
 *      y ese módulo clase o función está llamando a más información que se encuentra en otro lugar que a su misma la clase
 *      módulo o funcion.
 *          solución: si las cosas cambian al mismo tiempo deben de mantenerla en el mismo lugar, por lo general los datos y funciones 
 *                      se cambian juntos, una que son ciertas excepciones. 
 * nota: cuando un método valor función o módulo, hace mucha referencia a una función método o otro módulo, entonces tenemos que considerar
 *          que tal vez esa factorización no fue muy buena, y esa función deberíamos de colocarla en el otro lugar .
 * 
 * 
 * Intimidad apropiada:
 *  -   cuando una clase usa campos y métodos internos de otra clases.
 *          solución:   las buenas clases deben saber los menos posibles de otras clases, tales clases son más fáciles de mantener
 *                      y de reutilizar.
 * 
 *  
 * cadena de mensajes:
 *  -   cuando tenemos una función A que llama a B, de B llama a C, de C llama a D, ese es el signo que estamos cayendo en este code smell
 *          solución: es ver si nosotros podemos eliminar esa comunicación, tener una comunicación entre A y D directamente.
 * 
 * 
 * 
 * the middle man:
 *  -   si una clase realiza solo una acción y esa acción es delegar el trabajo a otra clase, entonces ese es el caso porque existe esa clase?
 *          A veces queda como resultado de la eliminación de cadena de mensajes.
 *      solución: las clases tiene que tratar de evitar ese punto intermedio porque realmente, obviamente no queremos tener funciones
 *                  innecesarias en nuestro código, pero un punto importante es evitar esa cadena de mensaje. 

 *       
 */
