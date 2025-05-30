// ✅ Validación del formulario
const formulario = document.getElementById('formulario-contacto');
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = formulario.querySelector('input[type="text"]').value.trim();
  const email = formulario.querySelector('input[type="email"]').value.trim();
  const mensaje = formulario.querySelector('textarea').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos.');
    return;
  }

  alert(`Gracias por tu mensaje, ${nombre}. Te responderé pronto.`);
  formulario.reset();
});

// ✅ Botón flotante de WhatsApp
const botonWhatsapp = document.createElement('a');
botonWhatsapp.href = 'https://wa.me/524427102940'; // ← Reemplaza con tu número real
botonWhatsapp.target = '_blank';
botonWhatsapp.innerHTML = '💬';
botonWhatsapp.style.position = 'fixed';
botonWhatsapp.style.bottom = '20px';
botonWhatsapp.style.right = '20px';
botonWhatsapp.style.backgroundColor = '#25d366';
botonWhatsapp.style.color = 'white';
botonWhatsapp.style.fontSize = '30px';
botonWhatsapp.style.borderRadius = '50%';
botonWhatsapp.style.width = '50px';
botonWhatsapp.style.height = '50px';
botonWhatsapp.style.display = 'flex';
botonWhatsapp.style.justifyContent = 'center';
botonWhatsapp.style.alignItems = 'center';
botonWhatsapp.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
botonWhatsapp.style.zIndex = '1000';
botonWhatsapp.title = 'Escríbeme por WhatsApp';
document.body.appendChild(botonWhatsapp);

// ✅ Consola
console.log("🚀 Bienvenido al sitio de Christopher Web. ¿Listo para tener tu página?");
