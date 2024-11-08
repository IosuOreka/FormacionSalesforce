1. *Hello World*: Escribe un programa que imprima "Hello World" en la consola de depuración.
2. *Variables y Asignaciones*: Declara y asigna diferentes tipos de variables (Integer, String, Boolean) e imprime sus valores.
3. *Operadores Aritméticos*: Realiza operaciones básicas de suma, resta, multiplicación y división con dos números y muestra el resultado.
4. *Condicionales*: Escribe un programa que verifique si un número es positivo, negativo o cero.
5. *Bucles For*: Usa un bucle for para imprimir los números del 1 al 10.
6. *Bucles While*: Escribe un programa que use un bucle while para sumar números del 1 al 10.
7. *Funciones*: Crea una función que reciba dos números como parámetros y devuelva la potencia de elevar uno a otro.
8. *Clases y Métodos*: Define una clase Persona con propiedades nombre y edad, y un método que imprima sus datos.
9. *Constructores*: Implementa un constructor para la clase Persona que inicialice las propiedades nombre y edad.
10. *Propiedades de Solo Lectura*: Crea una propiedad **readonly** en la clase Persona para el nombre.
11. *Ciclo Do-While*: Implementa un bucle do-while que siga ejecutándose mientras un número sea menor a 20.
12. *Sentencia Switch*: Usa Switch para determinar el día de la semana según un número entre 1 y 7.
13. *Concatenación de Strings*: Escribe un programa que tome dos String y los concatene.
14. *Comparación de Cadenas*: Crea un método que compare dos cadenas y devuelva si son iguales o no.
15. *Conversión de Tipos*: Escribe un programa que convierta un Integer a String y viceversa.
16. *Manipulación de Listas*: Crea una lista de números enteros y realiza operaciones de agregar, eliminar y buscar.
17. *Mapas*: Crea un Map de nombres de personas y sus edades. Añade, elimina y actualiza entradas en el mapa.
18. *Set*: Implementa un Set de enteros y demuestra cómo agregar elementos únicos.
19. *Uso de DateTime*: Escribe un programa que obtenga y muestre la fecha y hora actuales.
20. *Calcular Edad*: Dado un Date de nacimiento, calcula la edad actual de la persona.
21. *DML Básico*: Crea un nuevo Account en Salesforce usando DML.
22. *Actualización de Registro*: Actualiza un Account existente cambiando su nombre.
23. *Eliminación de Registro*: Elimina un registro de Contact mediante DML.
24. *Consulta SOQL*: Realiza una consulta SOQL para obtener todos los Account cuyo nombre comience con "A".
25. *Operaciones SOSL*: Escribe una búsqueda SOSL que encuentre registros de Account y Contact relacionados con "John".
26. *Transacciones*: Usa Savepoint y Rollback para revertir cambios después de una operación DML.
27. *Bulk DML*: Inserta una lista de Account en una sola transacción DML.

**TRIGGERS**
28. Triggers Básicos: Crea un trigger que se active al crear un Account y lo imprima en el log.
29. Trigger After Insert: Crea un trigger que añada un Contact automáticamente al insertar un nuevo Account.
30. Trigger Before Update: Crea un trigger que verifique que la industria de un Account no sea null al actualizarse.
31. Governor Limits: Crea un ejemplo donde un trigger exceda los límites de tiempo para comprender la importancia de los Governor Limits.


**Ejercicios de Optimización**
32. Bulkify un Trigger: Refactoriza un trigger para hacerlo compatible con operaciones en masa.
33. Uso de Collection en Triggers: Implementa un Set para almacenar Ids de registros y evitar consultas SOQL dentro de bucles.
34. Reutilización de Código: Crea una clase de utilidad con métodos reutilizables para operaciones comunes en registros Account.
35. SOQL y FOR Loop: Usa un for loop con SOQL para evitar límites de consulta en Triggers.
36. SOQL Lazy Loading: Implementa una lógica donde se carguen datos solo cuando sean necesarios.