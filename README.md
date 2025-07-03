# Tienda Estudio Materia

## ¡Bienvenido al repositorio de la Tienda Online de Estudio Materia! ✨

Este proyecto es una aplicación web de e-commerce desarrollada para **Estudio Materia**, un taller cerámico especializado en piezas de porcelana únicas y hechas a mano.

## Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Acerca del Proyecto

La Tienda Estudio Materia es una plataforma de comercio electrónico que permite a los usuarios explorar nuestro catálogo de productos cerámicos, ver detalles de cada pieza, añadir artículos a un carrito de compras y, eventualmente, realizar pedidos.

Desarrollada con React, esta aplicación se conecta con Firebase para gestionar la base de datos de productos, la autenticación de usuarios (futura) y el almacenamiento de imágenes de forma eficiente.

## Características

-   **Catálogo de Productos:** Explora una variedad de piezas cerámicas únicas.
-   **Detalle de Producto:** Visualiza información detallada, imágenes y precios de cada artículo.
-   **Filtrado por Categorías:** Encuentra productos fácilmente filtrando por tipo de cerámica (ej. artefactos lumínicos, aros, anillos, etc.).
-   **Carrito de Compras:** Añade productos al carrito, ajusta cantidades y gestiona tu selección antes de la compra.
-   **Responsive Design:** Experiencia de usuario optimizada para diferentes dispositivos (móviles, tablets, escritorio).
-   **Integración con Firebase:** Almacenamiento y gestión de datos de productos en tiempo real con Cloud Firestore y Cloud Storage.

## Tecnologías Utilizadas

-   **Frontend:**
    -   [React](https://react.dev/) (Biblioteca de JavaScript para construir interfaces de usuario)
    -   [Vite](https://vitejs.dev/) (Herramienta de compilación rápida para desarrollo frontend)
    -   [React Router DOM](https://reactrouter.com/en/main) (Para la navegación en la aplicación)
    -   [Context API de React](https://react.dev/learn/managing-state#passing-state-with-a-context-provider) (Para la gestión del estado global del carrito)
    -   [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
-   **Backend (BaaS):**
    -   [Firebase](https://firebase.google.com/) (Plataforma de desarrollo de aplicaciones de Google)
        -   [Cloud Firestore](https://firebase.google.com/docs/firestore) (Base de datos NoSQL para productos y datos de carrito)
        -   [Cloud Storage for Firebase](https://firebase.google.com/docs/storage) (Almacenamiento de imágenes de productos)
-   **Iconos:**
    -   [React Icons](https://react-icons.github.io/react-icons/) (Para iconos como el carrito de compras)

## Configuración del Proyecto

Sigue estos pasos para tener una copia local del proyecto ejecutándose:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/](https://github.com/)[TU_USUARIO_DE_GITHUB]/[NOMBRE_DE_TU_REPOSITORIO].git
    cd [NOMBRE_DE_TU_REPOSITORIO]
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn:
    # yarn install
    ```

3.  **Configura Firebase:**
    -   Crea un nuevo proyecto en la [Consola de Firebase](https://console.firebase.google.com/).
    -   Crea una aplicación web dentro de tu proyecto Firebase.
    -   Obtén tus credenciales de configuración de Firebase (SDK setup and configuration).
    -   Crea un archivo `.env` en la raíz de tu proyecto (al mismo nivel que `package.json`) y añade tus variables de entorno de Firebase:

        ```
        VITE_FIREBASE_API_KEY=tu_api_key
        VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
        VITE_FIREBASE_PROJECT_ID=tu_project_id
        VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
        VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
        VITE_FIREBASE_APP_ID=tu_app_id
        VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
        ```
    -   Asegúrate de que tu archivo `src/firebaseConfig.js` (o donde inicialices Firebase) use estas variables de entorno:

        ```javascript
        // src/firebaseConfig.js
        import { initializeApp } from "firebase/app";
        import { getFirestore } from "firebase/firestore";
        import { getStorage } from "firebase/storage";

        const firebaseConfig = {
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
          appId: import.meta.env.VITE_FIREBASE_APP_ID,
          measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
        };

        const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app);
        export const storage = getStorage(app); // Si vas a usar Cloud Storage directamente
        ```

    -   **Reglas de Seguridad de Firestore:** Para el desarrollo, puedes establecer reglas de prueba (solo para fines de prueba, no para producción):
        ```
        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /{document=**} {
              allow read, write: if fecha_vigencia_base; // ¡Solo para desarrollo! PELIGROSO en producción.
            }
          }
        }
        ```
        **Recuerda cambiar esto a reglas seguras antes de desplegar en producción.**

## Uso

Para ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev
# o si usas yarn:
# yarn dev