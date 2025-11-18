import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd
import streamlit as st

# -----------------------------
# 1. Conexión a Firestore
# -----------------------------
cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# -----------------------------
# 2. Leer datos de la colección
# -----------------------------
docs = db.collection("mantenimiento").stream()
data = [doc.to_dict() for doc in docs]

st.title("📊 Dashboard de Mantenimiento")

if not data:
    st.warning("⚠️ No se encontraron documentos en la colección 'mantenimiento'")
else:
    df = pd.DataFrame(data)

    # -----------------------------
    # 3. Conversión de fechas
    # -----------------------------
    if "fecha" in df.columns:
        df["fecha"] = pd.to_datetime(df["fecha"], errors="coerce")

    # -----------------------------
    # 4. Clasificación Preventivo/Correctivo
    # -----------------------------
    preventivos = ["limpieza", "limpio", "ajuste", "ajusto", "obstrucción", "limpoesa", "ajuete", "obstrucion"]
    correctivos = ["cambio", "rebobinado", "rebobinado de motores", "reparacion", "reparar"]

    def clasificar(row):
        texto = str(row.get("actividad", "")).lower() + " " + str(row.get("observacion", "")).lower()
        if any(p in texto for p in preventivos):
            return "Preventivo"
        elif any(c in texto for c in correctivos):
            return "Correctivo"
        else:
            return "Sin clasificar"

    df["tipo_mantenimiento"] = df.apply(clasificar, axis=1)

    # -----------------------------
    # 5. KPIs
    # -----------------------------
    st.subheader("Indicadores clave (KPIs)")
    st.metric("Total mantenimientos", len(df))
    st.metric("Preventivos", (df["tipo_mantenimiento"] == "Preventivo").sum())
    st.metric("Correctivos", (df["tipo_mantenimiento"] == "Correctivo").sum())

    # -----------------------------
    # 6. Tabla de datos
    # -----------------------------
    st.subheader("Datos de mantenimientos")
    st.dataframe(df)

    # -----------------------------
    # 7. Gráficos
    # -----------------------------
    st.subheader("Distribución Preventivo vs Correctivo")
    st.bar_chart(df["tipo_mantenimiento"].value_counts())

    if "usuario" in df.columns:
        st.subheader("Mantenimientos por técnico")
        st.bar_chart(df["usuario"].value_counts())

    if "maquina" in df.columns:
        st.subheader("Mantenimientos por máquina")
        st.bar_chart(df["maquina"].value_counts())

    if "fecha" in df.columns:
        st.subheader("Evolución de mantenimientos en el tiempo")
        st.line_chart(df["fecha"].value_counts().sort_index())

    if "actividad" in df.columns:
        st.subheader("Actividades más frecuentes")
        st.bar_chart(df["actividad"].value_counts())

    # -----------------------------
    # 8. Exportación
    # -----------------------------
    st.subheader("Descargar datos")
    st.download_button(
        "📥 Descargar CSV",
        df.to_csv(index=False).encode("utf-8"),
        "mantenimientos.csv",
        "text/csv"
    )
