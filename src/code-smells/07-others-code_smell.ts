/** 
 * mas inforamcion en : https://refactoring.guru/
 * 
 * code smells:
 * 
 * inflación
 *  -   cuando un método contiene demasiada líneas de código , en general cualquier método de mas de 10 lineas de codigo deberia de hacerlo
 *      pensar en la existencia del mismo
 *          solución:   usualmente lo que nosotros terminaremos buscando es obviamente cortar o hacer mas pequeño ese método
 *                      es decir  que nosotros podamos delegar ese método enorme en pequeño submetodos, que cada uno de ellos 
 *                      realice una tarea específica y la realice bien , y a si con otro método podemos llamar a todos los método
 *          nota:   muchas personas se preocupa por el rendimiento, y la verdad que es cierto no es lo mismo llamar 5 funciones que llamar una sola.
 *                  pero en casi todos estos casos, el impacto en el código es tan insignificante que ni siquiera vale la pena preocuparse por el 
 *                  muchas veces nos preocupamos más que la compu lo realice más rápidos, a preocuparse a que el dia de mañana , otra persona 
 *                  o ustedes mismos van a leer este código y es muy difícil de leer.
 *  -   otro caso de inflación es de clases super grandes, las clases generalmente comienzan bastante pequeñas , pero cuando avanza el 
 *      El tiempo se van hinchando, a medida que el programa va creciendo, van creciendo también las clases.
 *      resulta menos exigente mentalmente , colocar una nueva característica en una clase existente que crear una nueva clase para cada 
 *      característica o una nueva característica que queramos en nuestra aplicación.
 *          solución:   el tratamiento es que cuando observamos una clase tiene demasiados, sombreros (que realiza muchas cosas).
 *                      esta clase se podría separar en pequeñas subclases, los cuales hagan una tarea y la realicen bien .
 *          nota: en muchos casos de dividir las clases grandes en pequeñas, evita la duplicidad de código  y también en reutilización,
 *                  más fáciles de probar etc...
 * 
 * Obsesión primitiva:
 *  -   los signos y síntomas en que estamos en una obsesión primitiva , el uso de primitivo en lugar de objetos pequeños , para tareas simple
 *      cómo manejar datos de monedas, rangos cadena especiales para manejar numeros de telefonos... y el uso de constantes también para 
 *      codificar información ejemplo si tenemos una constantes: 
 *      const userAdminRol =  1; esto para referir que el usuario tiene derecho de administrador, esto es lo que se está refiriendo
 *      el uso de constantes tipos string , como nombre de campos para el uso de matrices de datos. esta es la razon que es considerado un problema
 *          solución:   si tienes una gran cantidad de datos primitivos , entonces puede posiblemente agruparse de manera lógica algunos de ellos
 *                      en su propia clase, objeto o a un mejor mover el comportamiento asociado de estos a una nueva clase , un nuevo método
 *                      función o módulo, para que esa tarea intente reemplazar dichos valores en un objeto y nos permita en un futuro
 *                      tener una reutilización de los mismo.
 * 
 * Lista larga de parámetro:
 *  -   más de tres o cuatro argumento en un método, razón por la cuales esto es un problema, una lista larga de parámetro puede ocurrir
 *      al funcionar varios tipos de datos o algoritmos, en un solo métodos.
 *          solución:   tratamiento que se recomienda comprobar los valores que se los pasa a los parámetros, si todos son necesario
 *                      o requeridos, o si se pueden eliminar algunos de ellos, pasar un objeto como parámetro en dicha función, es para reducir
 *                      la cantidad de argumento que se les pasa. 
 */