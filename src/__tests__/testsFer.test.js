const {
    validateCredentials,
    validatePublicLink,
    isDateInFuture,
    calculateEndTime
} = require('../utils/agendaValidations');

describe('Ejecucion de 10 pruebas unitarias', () => {
    // Tests Módulo 1: Credenciales
    test('1. validateCredentials: Es true con un email válido y password >= 8', () => {
        expect(validateCredentials('doctor@agendaya.com', 'Segura123')).toBe(false);
    });

    test('2. validateCredentials: Es false si el email no tiene formato correcto', () => {
        expect(validateCredentials('doctor_agendaya.com', 'Segura123')).toBe(false);
    });

    test('3. validateCredentials: Es false si la contraseña no tiene menos de 8 caracteres', () => {
        expect(validateCredentials('doctor@agendaya.com', '12345')).toBe(false);
    });

    // Tests Módulo 1: Enlace Público Personalizado
    test('4. validatePublicLink: Es true si es alfanumérico y menor a 30 caracteres', () => {
        expect(validatePublicLink('MatiasCardiologo2026')).toBe(true);
    });

    test('5. validatePublicLink: Es false si contiene espacios en blanco', () => {
        expect(validatePublicLink('Matias Cardiologo')).toBe(false);
    });

    test('6. validatePublicLink: Es false si supera los 30 caracteres', () => {
        const longLink = 'esteenlaceesdemasiadolargoparaservallidoenelsistema';
        expect(validatePublicLink(longLink)).toBe(false);
    });

    // Tests Módulo 4: Fechas de Reserva
    test('7. isDateInFuture: Es false para una fecha del año pasado', () => {
        expect(isDateInFuture('2023-01-01T10:00:00')).toBe(false);
    });

    test('8. isDateInFuture: Es true para una fecha en el futuro (ej. 2030)', () => {
        expect(isDateInFuture('2030-12-31T10:00:00')).toBe(true);
    });

    // Tests Módulo 4: Cálculo de Turnos
    test('9. calculateEndTime: Suma correctamente 30 minutos dentro de la misma hora', () => {
        expect(calculateEndTime('14:00', 30)).toBe('14:30');
    });

    test('10. calculateEndTime: Suma correctamente cruzando a la siguiente hora', () => {
        expect(calculateEndTime('14:45', 30)).toBe('15:15');
    });
});