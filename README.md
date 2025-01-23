# GUI production front-end

este proyecto consta de una ventana para el registro y otra para el inicio de sesion.

para esto se usaron tokens y encriptacion de las contraseñas para tener una mayor seguridad

en cuanto al cuerpo de la pagina se contruyo con grid y grid areas, para tener mas flexibilidad con el diseño de los bloques, este cuerpo cuenta con los siguientes componente:
header - se actualiza el correo del usuario
footer - convencional
navigation - es este componente se seleccionan los diferentes queries o reportes que se puden extraer del api y aparte se muestra un form para el posteo de la informacion. los queries que se pueden relizar son, reporte mensual (se ingresa mes y año), reporte por desarrollador (mes, año y desarrollador) y reporte por mentor (mes, año y mentor)
Report - en este componente se muestrar en formato de tabla los datos obtenidos en cada query

ente proyecto se desarrollo con Vite y React, usando usestate, useEffect, navifation, reac-dom y demas tecnologias react que nos facilitan la navegacion entre los difrentes componentes.
