// ========================================
// EVENTO: VER MENÚ (Soporta múltiples botones)
// ========================================

const botonesMenu = [document.getElementById("btn-ver-menu"), document.getElementById("btn-nav-menu")];

botonesMenu.forEach(function (btn) {
  if (btn) {
    btn.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "view_menu", {
          event_category: "interaccion",
          event_label: "Boton Ver Menu"
        });
      }
      console.log("Evento registrado: view_menu");
    });
  }
});


// ========================================
// EVENTO: INTERÉS EN UN PRODUCTO
// ========================================

const botonesProductos = document.querySelectorAll(".btn-producto");

botonesProductos.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const producto = boton.dataset.producto;

    if (typeof gtag === "function") {
      gtag("event", "select_item", {
        item_name: producto
      });
    }

    alert("¡Excelente elección! Te interesa: " + producto);
    console.log("Producto seleccionado:", producto);
  });
});


// ========================================
// EVENTO: PROMOCIÓN
// ========================================

const btnPromo = document.getElementById("btn-promocion");

if (btnPromo) {
  btnPromo.addEventListener("click", function () {
    if (typeof gtag === "function") {
      gtag("event", "select_promotion", {
        promotion_name: "2 Sandwiches de Milanesa"
      });
    }

    alert("¡Promoción seleccionada!");
    console.log("Evento registrado: select_promotion");
  });
}


// ========================================
// EVENTO: CLIC EN WHATSAPP
// ========================================

const btnWsp = document.getElementById("btn-whatsapp");

if (btnWsp) {
  btnWsp.addEventListener("click", function () {
    if (typeof gtag === "function") {
      gtag("event", "contact_whatsapp", {
        event_category: "conversion",
        event_label: "Pedido por WhatsApp"
      });
    }

    console.log("Evento registrado: contact_whatsapp");
  });
}


// ========================================
// EVENTO: ENVÍO DEL FORMULARIO
// ========================================

const formContacto = document.getElementById("form-contacto");

if (formContacto) {
  formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    if (typeof gtag === "function") {
      gtag("event", "generate_lead", {
        event_category: "conversion",
        event_label: "Formulario de contacto"
      });
    }

    document.getElementById("mensaje").textContent =
      "¡Gracias " + nombre + "! Recibimos tus datos correctamente.";

    this.reset();
    console.log("Evento registrado: generate_lead");
  });
}