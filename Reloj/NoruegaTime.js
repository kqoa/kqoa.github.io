function actualizarHoraNoruega() {
  const ahora = new Date();

  const formato = new Intl.DateTimeFormat("es-NO", {
    timeZone: "Europe/Oslo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  document.getElementById("NoruegaTime").textContent = formato.format(ahora);
}

// actualizar cada segundo
setInterval(actualizarHoraNoruega, 1000);
actualizarHoraNoruega();

// evitar que el <a> recargue la página
document.getElementById("NoruegaTime").addEventListener("click", e => {
  e.preventDefault();
});
