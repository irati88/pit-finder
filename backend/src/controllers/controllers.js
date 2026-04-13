// Endpoints

GET /events // Devuelve la lista completa de eventos publicados ordenados por fecha (orden ascendente). EJEMPLO: 
// event_name - Lucifer 
// event_date - "2026-04-13T20:00:00.000Z" 
// city - Barcelona
// country - Spain 
// venue - Sala Upload 
// description - https://mutick.com/e/lucifer-en-barcelona 
// poster - https://lastfm.freetls.fastly.net/i/u/ar0/04d5dbe6afd3922ff2a12cbb6aa0619b 
// address - Av. Francesc Ferrer i Guàrdia, 13, 08038 Barcelona, Spain, Barcelona, Spain

GET /events/:id  // Devuelve detalles de eventos por ID. En caso de que no exista, devuelve un mensaje de error "Evento no encontrado" (status 404)
POST /events  // Postea nuevo evento y lo añade a la lista (hay que validar datos: si no viene event_name? si la fecha es inválida?)
POST /attendance // Añade usuario a la lista de asistentes. Recibe userId, user_photo (opcional), eventId (para saber a qué evento asistirá), username. 
// Si no existe asistencia -> la crea // Si existe asistencia -> actualiza