
// Módulo 1: Validar credenciales de acceso
function validateCredentials(email, password){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
}

// Módulo 1: Validar enlace público (alfanumérico, sin espacios, máx 30 char)
function validatePublicLink(link){
    const linkRegex = /^[a-zA-Z0-9]+$/;
    return linkRegex.test(link) && link.length > 0 && link.length <= 30;
}

// Módulo 4: Validar que la fecha de reserva no sea en el pasado
function isDateInFuture(dateString){
    if (!dateString) return false;
    const requestedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return requestedDate >= today;
}

// Módulo 4: Calcular la hora de fin de un turno
function calculateEndTime(startTime, durationMinutes){
    if(!startTime || !durationMinutes) return null;
    const [hours, minutes] = startTime.split (':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes + durationMinutes, 0, 0);
    const endHours = String(date.getHours()).padStart(2, '0');
    const endMinutes = String(date.getMinutes()).padStart(2, '0');
    return `${endHours}:${endMinutes}`;
}

module.exports = {
    validateCredentials,
    validatePublicLink,
    isDateInFuture,
    calculateEndTime
};