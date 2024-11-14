PREVIOS:

**A.Enunciado: Crea una clase llamada AccountCreator con un método createAccounts. Este método debe crear e insertar tres cuentas nuevas con nombres específicos.**

Requerimientos:
- *Crea tres objetos Account en la clase y asigna valores para el campo Name*.
- *Inserta estos objetos en Salesforce usando una sola operación insert.*

**B.Enunciado: Crea una clase llamada OpportunityStatusUpdater que tenga un método updateOpportunityStage. Este método debe recibir una lista de Ids de oportunidades y cambiar el campo StageName de cada una a "Closed Won".**

Requerimientos:
- *Recupera las oportunidades usando el Id proporcionado*.
- *Cambia el campo StageName de cada oportunidad a "Closed Won"*.
- *Usa una operación update para guardar los cambios.*

**C.Enunciado: Crea una clase llamada ContactDeleter que tenga un método deleteContactsWithoutEmail. Este método debe buscar todos los contactos en la organización que no tienen un correo electrónico y eliminarlos.**

Requerimientos:
Realiza una consulta para encontrar contactos donde el campo Email esté vacío o sea null.
Usa una operación delete para eliminar los contactos encontrados.

**D. Enunciado: Crea una clase llamada ContactAccountAssigner con un método assignAccountToContacts. Este método debe recibir una lista de Ids de contactos y el Id de una cuenta, y asignar todos esos contactos a la cuenta especificada.**

Requerimientos:
- *Recupera los contactos utilizando la lista de Ids proporcionada.*
- *Cambia el campo AccountId de cada contacto al Id de la cuenta proporcionada.* 
- *Usa una operación update para guardar los cambios.*


**E.Enunciado: Crea una clase llamada OpportunityCreator que tenga un método createOpportunitiesForAccount. Este método debe recibir el Id de una cuenta y crear tres oportunidades nuevas para esa cuenta con distintos nombres y montos.**

Requerimientos:
- *Crea tres objetos Opportunity y asigna valores para Name, Amount, StageName (como "Prospecting") y AccountId usando el Id de cuenta proporcionado.*
- *Usa una operación insert para guardar las oportunidades.*

**F.Enunciado: Crea una clase llamada AccountPhoneUpdater con un método updateAccountPhones. Este método debe recibir una lista de Ids de cuentas y un número de teléfono, y actualizar el campo Phone de cada cuenta con el número proporcionado.**

Requerimientos:
- *Recupera las cuentas usando la lista de Ids proporcionada.*
- *Cambia el campo Phone de cada cuenta al número de teléfono proporcionado.*
- *Usa una operación update para guardar los cambios.*

**G.Enunciado: Crea una clase llamada OpportunityCloseDateUpdater con un método updateCloseDate. Este método debe recibir una lista de Ids de oportunidades y una fecha de cierre, y actualizar el campo CloseDate de cada oportunidad con la fecha proporcionada.**

Requerimientos:
- *Recupera las oportunidades usando la lista de Ids proporcionada.*
- *Cambia el campo CloseDate de cada oportunidad a la fecha proporcionada.*
- *Usa una operación update para guardar los cambios.*

**H.Enunciado: Crea una clase llamada InactiveAccountDeactivator que tenga un método deactivateInactiveAccounts. Este método debe buscar cuentas que no tengan ninguna oportunidad abierta y actualizar su estado a "Inactive".**

Requerimientos:
- *Realiza una consulta para buscar cuentas que no tengan oportunidades con estado distinto a "Closed".*
- *Cambia el campo Active__c (suponiendo que es un campo personalizado tipo Checkbox) de cada cuenta a false.*
- *Usa una operación update para guardar los cambios.*





Ejercicio 1: Crear una Clase para Gestión de Oportunidades
Enunciado: Crea una clase llamada OpportunityManager en Apex que tenga métodos para gestionar oportunidades. Esta clase debe incluir los siguientes métodos:

getClosedWonOpportunities(List<Id> accountIds): Devuelve una lista de oportunidades en estado "Closed Won" relacionadas con una lista de cuentas.
calculateTotalAmount(List<Id> opportunityIds): Calcula el monto total de una lista de oportunidades.
setCloseDate(List<Id> opportunityIds, Date newCloseDate): Actualiza la fecha de cierre de una lista de oportunidades a la fecha proporcionada en newCloseDate.
Prueba esta clase en un método de prueba en el que crees algunas oportunidades de ejemplo y luego llames a estos métodos para verificar que funcionan como se espera.

Ejercicio 2: Generar Informes de Cuentas en Diferentes Etapas de Venta
Enunciado: Crea una clase llamada AccountReport que permita generar informes sobre cuentas en función de las etapas de venta de sus oportunidades. Los métodos que debe incluir son:

generateReportByStage(String stage): Devuelve una lista de cuentas que tienen al menos una oportunidad en la etapa de venta especificada en stage.
countOpportunitiesByStage(String stage): Devuelve el número de oportunidades en la etapa de venta indicada, relacionadas con todas las cuentas de la organización.
listTopAccountsByRevenue(Integer limit): Devuelve una lista de cuentas con mayores ingresos (sumando todas las oportunidades ganadas), con un límite especificado en el parámetro limit.
Este ejercicio te ayudará a manipular relaciones entre objetos y a aplicar filtros en consultas.

Ejercicio 3: Clases y Métodos para la Gestión de Productos
Enunciado: Crea una clase llamada ProductManager que gestione productos y sus relaciones con oportunidades. Esta clase debe contener:

getOpportunitiesWithProduct(String productName): Devuelve una lista de oportunidades que incluyen un producto con el nombre especificado.
getTopProductsByRevenue(Integer limit): Devuelve una lista de productos ordenados por el ingreso total generado, con un límite de elementos definido por el parámetro limit.
updateProductPrice(String productName, Decimal newPrice): Actualiza el precio de lista de todos los productos con el nombre especificado.
Este ejercicio te permitirá practicar DML para actualizar registros y trabajar con relaciones entre objetos relacionados (productos y oportunidades).

Ejercicio 4: Implementación de un Manejador de Casos de Soporte
Enunciado: Crea una clase llamada CaseHandler para gestionar casos de soporte técnico. Incluye los siguientes métodos:

getCasesByStatus(String status): Devuelve una lista de casos que tienen el estado indicado en status.
assignCasesToUser(List<Id> caseIds, Id userId): Asigna una lista de casos al usuario especificado en el parámetro userId.
closeCases(List<Id> caseIds): Cambia el estado de los casos especificados en caseIds a "Closed" y registra la fecha de cierre actual.
Este ejercicio es útil para practicar operaciones DML y el uso de consultas condicionales.

Ejercicio 5: Actualización Automática de Contactos
Enunciado: Crea una clase llamada ContactUpdater con los siguientes métodos:

updateContactEmails(List<Id> contactIds, String domain): Actualiza el correo electrónico de una lista de contactos para usar el dominio especificado en domain. Por ejemplo, si domain es "example.com", el email de "john.doe@old.com" se actualizará a "john.doe@example.com".
linkContactsToAccount(List<Id> contactIds, Id accountId): Asigna todos los contactos especificados en contactIds a la cuenta con el Id proporcionado.
getContactsWithoutEmails(): Devuelve una lista de contactos que no tienen un correo electrónico asociado.
Esta práctica te ayudará a manipular datos de contactos y realizar operaciones en lote para actualizar registros de forma eficiente.

Ejercicio 6: Validación y Filtrado de Cuentas
Enunciado: Crea una clase llamada AccountValidator que ayude a verificar y filtrar cuentas en función de criterios específicos. La clase debe incluir:

getHighRevenueAccounts(Decimal minRevenue): Devuelve una lista de cuentas con ingresos anuales mayores al valor indicado en minRevenue.
validateAccountData(List<Id> accountIds): Valida que todas las cuentas en la lista tengan campos críticos llenos (por ejemplo, nombre y teléfono). Devuelve una lista de cuentas que no cumplen con estos requisitos.
deactivateInactiveAccounts(List<Id> accountIds): Cambia el estado de todas las cuentas especificadas en accountIds a "Inactive" si no tienen oportunidades abiertas.
Este ejercicio es útil para trabajar con reglas de negocio y validaciones de campos en las cuentas.

Ejercicio 7: Notificaciones y Alertas de Casos Urgentes
Enunciado: Crea una clase llamada CaseNotifier que gestione alertas para casos urgentes. Los métodos que debe incluir son:

sendAlertForHighPriorityCases(): Envía una alerta (simulada en este ejercicio) a los usuarios de soporte cuando hay casos de prioridad alta que no se han actualizado en más de 48 horas.
markCaseAsUrgent(List<Id> caseIds): Cambia el campo "Urgent" a true para todos los casos especificados.
getUnresolvedCasesOlderThan(Integer days): Devuelve una lista de casos sin resolver que tienen más de un número específico de días abiertos.
Este ejercicio te permitirá practicar la lógica condicional, el manejo de fechas y la notificación a usuarios.

Ejercicio 8: Estadísticas de Contactos por Cuenta
Enunciado: Crea una clase llamada ContactStatistics para obtener estadísticas sobre contactos en una organización. Los métodos que debe contener son:

countContactsByAccount(List<Id> accountIds): Devuelve un mapa de AccountId a número de contactos para cada cuenta en la lista.
getAccountsWithNoContacts(): Devuelve una lista de cuentas que no tienen contactos asociados.
calculateAverageContactsPerAccount(): Devuelve el promedio de contactos por cuenta para toda la organización.
Este ejercicio es útil para trabajar con mapas y cálculos agregados en objetos relacionados.