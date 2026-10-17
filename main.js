// ====== CONFIGURACIÓN DE EMAILJS (rellena las dos líneas marcadas) ======
const EMAILJS = {
  SERVICE_ID: "service_l8oo19f",          // ya es el tuyo (servicio Gmail)
  TEMPLATE_ID: "PEGA_AQUI_TU_TEMPLATE_ID", // EmailJS > Plantillas de correo
  PUBLIC_KEY: "PEGA_AQUI_TU_PUBLIC_KEY"    // EmailJS > Cuenta > Public Key
};

const form = document.getElementById("form");
const estado = document.getElementById("estado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (EMAILJS.TEMPLATE_ID.startsWith("PEGA") || EMAILJS.PUBLIC_KEY.startsWith("PEGA")) {
    estado.textContent = "El formulario aún no está configurado. Escríbeme a cpm4tic@gmail.com.";
    return;
  }
  estado.textContent = "Enviando...";
  try {
    await emailjs.send(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, {
      from_name: form.from_name.value,
      reply_to: form.reply_to.value,
      message: form.message.value
    }, { publicKey: EMAILJS.PUBLIC_KEY });
    estado.textContent = "¡Mensaje enviado! Te responderé pronto.";
    form.reset();
  } catch (err) {
    estado.textContent = "No se pudo enviar. Inténtalo de nuevo o escríbeme por correo.";
    console.error(err);
  }
});

// Ampliar capturas al hacer clic
const lb = document.getElementById("lb");
document.querySelectorAll(".shots img").forEach((img) => {
  img.addEventListener("click", () => { lb.querySelector("img").src = img.src; lb.hidden = false; });
});
lb.addEventListener("click", () => { lb.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });
