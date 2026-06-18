const {
  validarTurnoDisponible,
  calcularEdad,
  validarEmail,
} = require("../lib/funciones");

test("Debe indicar que hay turnos disponibles", () => {
  expect(validarTurnoDisponible(3)).toBe(true);
});

test("Debe calcular correctamente la edad", () => {
  expect(calcularEdad(2000)).toBe(26);
});

test("Debe validar email correcto", () => {
  expect(validarEmail("usuario@gmail.com")).toBe(true);
});