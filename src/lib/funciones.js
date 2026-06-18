function validarTurnoDisponible(cupos) {
  return cupos > 0;
}

function calcularEdad(anioNacimiento) {
  return 2026 - anioNacimiento;
}

function validarEmail(email) {
  return email.includes("@");
}

module.exports = {
  validarTurnoDisponible,
  calcularEdad,
  validarEmail,
};