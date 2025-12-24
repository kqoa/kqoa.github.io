function actualizarHoraColombia() {
  const ahora = new Date();

  const formato = new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  document.getElementById("ColombiaTime").textContent = formato.format(ahora);
}

// actualizar cada segundo
setInterval(actualizarHoraColombia, 1000);
actualizarHoraColombia();

// evitar que el <a> recargue la página
document.getElementById("ColombiaTime").addEventListener("click", e => {
  e.preventDefault();
});
