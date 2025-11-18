// =======================
// CONFIGURACIÓN FIREBASE
// =======================
const firebaseConfig = {
    apiKey: "AIzaSyCi8EbS_axFrbZg8RUmPZVxzz-UBOlhD30",
    authDomain: "mantenimientomaquina3maples.firebaseapp.com",
    projectId: "mantenimientomaquina3maples",
    storageBucket: "mantenimientomaquina3maples.appspot.com",
    messagingSenderId: "1032929810772",
    appId: "1:1032929810772:web:c1e75764a9fd39d489d0c1",
    measurementId: "G-6EVLC61CTL"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // =======================
  // LISTA DE ACTIVIDADES ORIGINAL
  // =======================
  const activitiesList = [
    "Final de carrera", "Reductora de maquina", "Reductora de bandeja", "Ajuste de tapas",
    "Cambio/Ajuste de codo movil", "Manguera 3 pulg","Manguera 2 pulg","Manguera 1.25 pulg",
    "Manguera 1 pulg","Solenoide de aire","Solenoide de ducha","Mesa de hormas",
    "Carrito","Bandeja descarrilada","Eje principal", "Refinadora", "Pulmon",
    "Bomba de ducha", "Ajuste/Nivelacion de brazos", "Cambio de bujes del brazo","Cambio de ejes de brazo",
    "Defecto de hormas", "Cambio de bandejas", "Ajuste/Cambio de mariposa",
    "Cambio de vibrastop", "Cambio de rodamiento brazo central",
    "Cambio de rodamiento mesa de hormas", "Cambio de rodamientos eje principal","Cambio de rodamiento de brazo lateral",
    "Calce de brazo central", "Cambio de piñon", "Resortes", "Cadena",
    "Estructura de maquina","Ducha",
    "Cuerno de vacio", "Cañeria de vacio 6 pulgadas", "Burlete"
  ];
  const activitiesListHorno = [
    "Puerta lateral", "Puerta del cilindro", "Puerta de cenizas", "Puerta principal",
    "Cortafuegos", "Parrilla","Cilindro","Cambio de sombrero",
    "Hormigon de cilindro","Transferencia","Cambio de codo","Cambio de sensor de temp tunel"
  ];
  const activitiesListLicuadora = [
    "Cuchilla", "Rodamiento", "Manguito", "Portaruleman",
    "Ajuste/Cambio de empaquetadura", "Eje de licuadora","Motor","Sombrero",
    "Correa","Polea","Estructura","Fondo plano","Cono de licuadora"
  ];
  const activitiesListVacio = [
    "Motor", "Acoplamiento", "Correa", "Base",
    "Ajuste/Cambio de empaquetadura", "Polea","Bomba de vacio","Cañeria",
    "Accesorios"
  ];
  const activitiesListCompresor = [
    "Limpieza", "Sobrecalentamiento", "Mantenimiento tercerizado", "Recarga de aceite", "Correa","Cañerias","Accesorios", "Problema electrico"
  ];
  const activitiesListSecador = [
    "Limpieza", "Filtros", "Trampa", "Compresor", "Solenoide","Cañerias","Problema electrico"
  ];
  const activitiesListDepurador = [
    "Correa", "Rodamiento", "Tuberia", "Bomba de agua", "Motor","Polea","Obstruccion"
  ];
  const activitiesListCiclon = [
    "Manometro", "Bomba de agua", "Solenoide", "Obstruccion", "Tuberia","Cilindro neumatico"
  ];
  const activitiesListZaranda = [
    "Bomba", "Chapa perforada", "Ducha", "Nivelacion", "Motor","Estructura"
  ];
  const activitiesListMezcladora = [
    "Motor", "Aletas", "Reductora", "Eje", "Rodamiento","Portaruleman","Valvulas","Estructura","Polea","Correa","Cadena"
  ];
  const activitiesListBomba = [
    "Motor", "Impulsor", "Sello", "Correa", "Polea","Valvulas","Tuberia"
  ];
  const activitiesListVentilador = [
    "Motor", "Polea", "Correa", "Turbina", "Carcasa","Base","Rodamiento","Manguito","Portaruleman","Silleta"
  ];
  const activitiesListPlanta = [
    "Tuberia", "Tableros", "Baranda", "Rejillas", "Obra civil","Chimenea","Tunel de secado"
  ];
  // =======================
  // EQUIPOS Y ACTIVIDADES
  // =======================
  const equipos = [
    "Maquina 1", "Maquina 2", "Maquina 3", "Maquina 5",
    "Horno 1", "Horno 2", "Horno 3", "Horno 4", "Horno 5",
    "Bomba de vacio 50hp", "Bomba de vacio 3", "Bomba de vacio 5",
    "Compresor Atlas", "Compresores a piston", "Secador de aire",
    "Depurador", "Ciclon", "Zaranda",
    "Licuadora 1", "Licuadora 2", "Licuadora 3", "Licuadora 4", "Licuadora 5",
    "Mezcladora 1", "Mezcladora 2", "Mezcladora 3", "Mezcladora 4",
    "Bomba de envio de masa", "Bomba ciclon", "Bomba de fosa", "Bomba de desagote",
    "Instalaciones de planta",
    "Ventilador 1", "Ventilador 2", "Ventilador 3", "Ventilador 5", "Ventilador A", "Ventilador B"
  ];
  
  const actividadesPorEquipo = {
    "Bomba de envio de masa":activitiesListBomba,
    "Bomba ciclon":activitiesListBomba,
    "Bomba de fosa":activitiesListBomba,
    "Bomba de desagote":activitiesListBomba,
    "Maquina 1": activitiesList,
    "Maquina 2": activitiesList,
    "Maquina 3": activitiesList,
    "Maquina 5": activitiesList,
    "Horno 1": activitiesListHorno,
    "Horno 2": activitiesListHorno,
    "Horno 3":activitiesListHorno,
    "Horno 4":activitiesListHorno,
    "Horno 5":activitiesListHorno,
    "Licuadora 1":activitiesListLicuadora,
    "Licuadora 2": activitiesListLicuadora,
    "Licuadora 3": activitiesListLicuadora,
    "Licuadora 4": activitiesListLicuadora,
    "Licuadora 5": activitiesListLicuadora,
    "Bomba de vacio 50hp":activitiesListVacio,
    "Bomba de vacio 3":activitiesListVacio,
    "Bomba de vacio 5":activitiesListVacio,
    "Compresor Atlas": activitiesListCompresor,
    "Compresores a piston":activitiesListCompresor,
    "Secador de aire": activitiesListSecador,
    "Depurador":activitiesListDepurador,
    "Ciclon": activitiesListCiclon,
    "Zaranda":activitiesListZaranda,
    "Mezcladora 1":activitiesListMezcladora,
    "Mezcladora 2":activitiesListMezcladora,
    "Mezcladora 3":activitiesListMezcladora,
    "Mezcladora 4":activitiesListMezcladora,
    "Ventilador 1":activitiesListVentilador,
    "Ventilador 2":activitiesListVentilador,
    "Ventilador 3":activitiesListVentilador,
    "Ventilador 5":activitiesListVentilador,
    "Ventilador A":activitiesListVentilador,
    "Ventilador B":activitiesListVentilador,
    "Instalaciones de planta":activitiesListPlanta



    // Si querés, agregá actividades específicas para otros equipos aquí
  };
  
  // =======================
  // AUTENTICACIÓN
  // =======================
  function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, pass)
      .then(() => {
        // Ocultar login y historial público
        document.getElementById("loginContainer").style.display = "none";
        // Mostrar plan
        document.querySelector(".plan").style.display = "block";
        // Ocultar historial privado
        document.querySelector(".historial").style.display = "none";
  
        mostrarChecklistEquipos();
        cargarHistorialPublicoInicial(); // opcional: ya carga si querés ver antes del login
      })
      .catch(error => {
        document.getElementById("loginError").textContent = "Error: " + error.message;
      });
  }
  
  function logout() {
    auth.signOut().then(() => {
      // Restaurar vistas
      document.getElementById("loginContainer").style.display = "flex";
      document.querySelector(".plan").style.display = "none";
      document.querySelector(".historial").style.display = "none";
      // Limpiar UI
      document.getElementById("equiposContainer").innerHTML = "";
      document.getElementById("activities").innerHTML = "";
      document.getElementById("loginError").textContent = "";
    });
  }
  
  // =======================
  // CHECKLIST DE EQUIPOS
  // =======================
  function mostrarChecklistEquipos() {
    const container = document.getElementById("equiposContainer");
    container.innerHTML = "";
  
    equipos.forEach(nombre => {
      const item = document.createElement("div");
      item.className = "equipo-item";
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = nombre;
  
      const label = document.createElement("label");
      label.textContent = nombre;
  
      checkbox.addEventListener("change", () => {
        // Solo una máquina a la vez
        const todos = container.querySelectorAll("input[type='checkbox']");
        todos.forEach(cb => {
          if (cb !== checkbox) cb.checked = false;
        });
  
        if (checkbox.checked) {
          mostrarActividades(nombre);
        } else {
          const actCont = document.getElementById("activities");
          actCont.innerHTML = "";
          actCont.removeAttribute("data-equipo");
        }
      });
  
      item.appendChild(checkbox);
      item.appendChild(label);
      container.appendChild(item);
    });
  }
  
  // =======================
  // ACTIVIDADES POR EQUIPO
  // =======================
  function mostrarActividades(equipo) {
    const actividades = actividadesPorEquipo[equipo] || ["Chequeo general", "Inspección visual"];
    const container = document.getElementById("activities");
    container.innerHTML = "";
  
    actividades.forEach((nombre, idx) => {
      const item = document.createElement("div");
      item.className = "actividad-item";
  
      const texto = document.createElement("span");
      texto.className = "actividad-texto";
      texto.textContent = nombre;
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "act_" + idx;
  
      const textarea = document.createElement("textarea");
      textarea.placeholder = "Observación...";
      textarea.style.display = "none";
  
      checkbox.addEventListener("change", () => {
        textarea.style.display = checkbox.checked ? "block" : "none";
      });
  
      item.appendChild(texto);
      item.appendChild(checkbox);
      item.appendChild(textarea);
      container.appendChild(item);
    });
  
    // Guardar el equipo seleccionado para el registro
    container.setAttribute("data-equipo", equipo);
  }
  
  // =======================
  // GUARDAR REGISTRO
  // =======================
  function savePlan() {
    const container = document.getElementById("activities");
    const equipo = container.getAttribute("data-equipo");
    const user = auth.currentUser;
  
    if (!equipo) {
      alert("Seleccioná un equipo antes de guardar.");
      return;
    }
    if (!user) {
      alert("Sesión inválida. Volvé a iniciar sesión.");
      return;
    }
  
    const ahora = new Date();
    const elementos = container.querySelectorAll(".actividad-item");
  
    const batch = db.batch();
    elementos.forEach(elem => {
      const actividad = elem.querySelector(".actividad-texto").textContent;
      const marcado = elem.querySelector("input[type='checkbox']").checked;
      const observacion = elem.querySelector("textarea").value;
  
      if (marcado) {
        const ref = db.collection("mantenimiento").doc();
        batch.set(ref, {
          fecha: firebase.firestore.Timestamp.fromDate(ahora),
          hora: ahora.toLocaleTimeString(),
          actividad,
          observacion: observacion || "Sin observación",
          usuario: user.email,
          maquina: equipo
        });
      }
    });
  
    batch.commit()
      .then(() => {
        alert("Registro guardado correctamente.");
        // Limpiar selección de actividades
        elementos.forEach(elem => {
          const cb = elem.querySelector("input[type='checkbox']");
          const ta = elem.querySelector("textarea");
          cb.checked = false;
          ta.value = "";
          ta.style.display = "none";
        });
      })
      .catch(err => alert("Error al guardar: " + err.message));
  }
// =======================
// HISTORIAL PÚBLICO
// =======================
function cargarHistorialPublicoInicial() {
    db.collection("mantenimiento")
      .orderBy("fecha", "desc")
      .limit(100)
      .get()
      .then(snap => {
        renderPublicHistory(snap.docs.map(d => d.data()));
      })
      .catch(err => {
        console.warn("Error cargando historial público inicial:", err.message);
      });
  }
  
  function renderPublicHistory(rows) {
    const tbody = document.querySelector("#publicHistoryTable tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
  
    rows.forEach(r => {
      const f = r.fecha?.toDate?.() || new Date();
      const fechaStr = `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`;
      const horaStr = r.hora || f.toLocaleTimeString();
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${fechaStr}</td>
        <td>${horaStr}</td>
        <td>${r.actividad || ""}</td>
        <td>${r.observacion || ""}</td>
        <td>${r.usuario || ""}</td>
        <td>${r.maquina || ""}</td> <!-- ✅ ESTA ES LA COLUMNA QUE FALTABA -->
      `;
      tbody.appendChild(tr);
    });
  }
  
  
  function filtrarHistorial() {
    const inicioEl = document.getElementById("fechaInicio");
    const finEl = document.getElementById("fechaFin");
    const inicio = inicioEl.value ? new Date(inicioEl.value + "T00:00:00") : null;
    const fin = finEl.value ? new Date(finEl.value + "T23:59:59") : null;
  
    let q = db.collection("mantenimiento").orderBy("fecha", "desc");
  
    if (inicio && fin) {
      q = db.collection("mantenimiento")
        .where("fecha", ">=", firebase.firestore.Timestamp.fromDate(inicio))
        .where("fecha", "<=", firebase.firestore.Timestamp.fromDate(fin))
        .orderBy("fecha", "desc");
    } else if (inicio) {
      q = db.collection("mantenimiento")
        .where("fecha", ">=", firebase.firestore.Timestamp.fromDate(inicio))
        .orderBy("fecha", "desc");
    } else if (fin) {
      q = db.collection("mantenimiento")
        .where("fecha", "<=", firebase.firestore.Timestamp.fromDate(fin))
        .orderBy("fecha", "desc");
    }
  
    q.get()
      .then(snap => renderPublicHistory(snap.docs.map(d => d.data())))
      .catch(err => console.warn("Error filtrando historial:", err.message));
  }
  
  // =======================
  // HISTORIAL PRIVADO
  // =======================
  function showHistory() {
    document.querySelector(".plan").style.display = "none";
    document.querySelector(".historial").style.display = "block";
  
    db.collection("mantenimiento")
      .orderBy("fecha", "desc")
      .get()
      .then(snap => {
        const tbody = document.querySelector("#historyTable tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
  
        snap.forEach(doc => {
          const r = doc.data();
          const f = r.fecha?.toDate?.() || new Date();
          const fechaStr = `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`;
          const horaStr = r.hora || f.toLocaleTimeString();
  
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${fechaStr}</td>
            <td>${horaStr}</td>
            <td>${r.actividad || ""}</td>
            <td>${r.observacion || ""}</td>
            <td>${r.usuario || ""}</td>
            <td>${r.maquina || ""}</td> <!-- ✅ ESTA ES LA COLUMNA QUE FALTABA -->
          `;
          tbody.appendChild(tr);
        });
      });
  }
  
  
  function backToPlan() {
    document.querySelector(".historial").style.display = "none";
    document.querySelector(".plan").style.display = "block";
  }
  
  // =======================
  // EXPORTAR HISTORIAL PRIVADO
  // =======================
  function downloadFullExcel() {
    const tbody = document.querySelector("#historyTable tbody");
    if (!tbody) {
      alert("No hay datos para exportar.");
      return;
    }
  
    const rows = [];
    for (const tr of tbody.querySelectorAll("tr")) {
      const cols = Array.from(tr.querySelectorAll("td")).map(td => td.textContent);
      rows.push({
        Fecha: cols[0],
        Hora: cols[1],
        Actividad: cols[2],
        Observacion: cols[3],
        Usuario: cols[4],
        Maquina: cols[5] // ✅ NUEVA COLUMNA
      });
    }
  
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Historial");
    XLSX.writeFile(wb, "historial_mantenimiento.xlsx");
  }
    