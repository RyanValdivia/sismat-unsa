<div align="center">
<table>
    <thead>
        <tr>
            <td style="width:25%; text-align:center;"><img src="https://github.com/RyanValdivia/sismat-unsa/blob/main/img/epis.png?raw=true" alt="EPIS" style="width:80%; height:auto"/></td>
            <td style="text-align:center;">
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </td>
            <td style="width:25%; text-align:center;"><img src="https://github.com/RyanValdivia/sismat-unsa/blob/main/img/abet.png?raw=true" alt="ABET" style="width:80%; height:auto"/></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3"><span style="font-weight:bold;">Proyecto web</span>: Desarrollo de una aplicación web para realizar la inscripción de estudiantes</td>
        </tr>
        <tr>
            <td colspan="3"><span style="font-weight:bold;">Fecha</span>:  2024/07/28</td>
        </tr>
    </tbody>
</table>
</div>
<div align="center" style="margin-top: 10px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png" alt="Logo de la UNSA" width="450px" height="150px">
    <h1 style="font-weight:bold; font-size: 2em;">Proyecto: Sistema de Matrículas</h1>
</div>

<div align="center">
    <table>
        <thead>
            <tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
        </thead>
        <tbody>
            <tr><td>ASIGNATURA:</td><td colspan="5">Programación Web II</td></tr>
            <tr><td>NOMBRE DEL PROYECTO:</td><td colspan="5">SISMAT - UNSA</td></tr>
            <tr><td colspan="6">INTEGRANTES:
                <ul>
                    <li>Caceres Ruiz, Johann Andre - jcaceresruiz@unsa.edu.pe</li>
                    <li>Mamani Céspedes, Jhonatan Benjamin - jmamanices@unsa.edu.pe</li>
                    <li>Valdivia Segovia, Ryan Fabian - rvaldiviase@unsa.edu.pe</li>
                </ul>
            </td></tr>
            <tr><td colspan="6">DOCENTES:
                <ul>
                    <li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
                </ul>
            </td></tr>
        </tbody>
    </table>
</div>

# Sistema de Matrícula

[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]

[![Django][Django]][django-site]
[![React][React]][react-site]
[![Vite][Vite]][vite-site]
[![Axios][Axios]][axios-site]
[![Tailwind][Tailwind]][tailwind-site]
[![MUI][MUI]][mui-site]
[![SQLite][SQLite]][sqlite-site]
[![Node.js][Node.js]][nodejs-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]

#

## OBJETIVOS, TEMAS Y COMPETENCIAS

### OBJETIVOS

-   Desarrollar una aplicación web para la matrícula de cursos.
-   Permitir a los estudiantes iniciar sesión, seleccionar cursos y grupos, y confirmar la matrícula.
-   Generar un horario y una constancia de matrícula descargable.

### TEMAS
-   Autenticación de usuarios
-   Manejo de estado en React
-   Integración de frontend y backend con APIs RESTful
-   Estilos y diseño responsivo con Tailwind y Material UI (MUI)
-   Uso de SQLite para la base de datos
-   Control de versiones con Git y GitHub

## CONTENIDO DEL PROYECTO

### MARCO CONCEPTUAL

-   Desarrollo Web Full-Stack
    -   Uso de Django para el backend y React con Vite para el frontend.
    -   Diseño de componentes reutilizables con Material UI.
    -   Estilización de la aplicación con Tailwind CSS.
    -   Implementación de APIs RESTful para la comunicación entre frontend y backend.
    -   Almacenamiento de datos con SQLite.
    -   Control de versiones y colaboración con Git y GitHub.

-   Herramientas y Tecnologías:
    -   **Django:** Framework de backend para desarrollo web en Python.
    -   **React:** Biblioteca de JavaScript para construir interfaces de usuario.
    -   **Vite:** Herramienta de desarrollo rápida para proyectos de frontend.
    -   **Tailwind CSS:** Framework de CSS utilitario para estilización rápida y eficiente.
    -   **Material UI (MUI):** Biblioteca de componentes de UI para React.
    -   **SQLite:** Sistema de gestión de bases de datos ligero y autónomo.
    -   **Node.js:** Entorno de ejecución para JavaScript en el backend.
    -   **Git:** Sistema de control de versiones distribuido.
    -   **GitHub:** Plataforma para hospedaje de código fuente y colaboración.

## INSTRUCCIONES DE INSTALACIÓN

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/RyanValdivia/sismat-unsa.git
    cd sismat-unsa
    ```

2. **Configurar el entorno virtual de Python:**

    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

3. **Instalar dependencias del backend (Django):**

    ```bash
    cd BackEnd/sismat
    pip install -r requirements.txt
    ```

4. **Instalar dependencias del frontend (React y Vite):**

    ```bash
    cd Frontend/sismat
    npm install
    ```

5. **Iniciar el servidor de desarrollo de Django:**

    ```bash
    python manage.py runserver
    ```

6. **Iniciar el servidor de desarrollo de Vite:**

    ```bash
    npm run dev
    ```

## PROCESO SEGUIDO

### Planificación

1. **Definición de Requisitos:**
    - Realizamos varias reuniones iniciales para definir los objetivos y alcances del proyecto, asegurándonos de cubrir todas las necesidades de los usuarios.
    - Identificación de las necesidades de los usuarios y especificaciones funcionales.
    - Definición de las relaciones entre las entidades del sistema, utilizando diagramas ER para visualizar la estructura de la base de datos.
    - En el proceso de planificación, colaboramos estrechamente para entender los requisitos y establecer prioridades claras para el desarrollo.
    - Aquí está nuestro diagrama ER básico utilizado en este proceso:
    
    <div align="center" style="margin-top: 20px;">
        <img src="https://github.com/RyanValdivia/sismat-unsa/blob/main/img/diagrama_ER.png" alt="Diagrama ER" style="width:80%; height:auto;"/>
    </div>

2. **Análisis:**
    - Estudio de factibilidad técnica.
    - Evaluación de las tecnologías a utilizar (Django, React, Vite, Tailwind, etc.).

### Diseño

3. **Diseño del Sistema:**
    - Creación de diagramas de arquitectura y diseño de base de datos.
    - Realizamos los diseños iniciales y diagramas en Excalidraw para visualizar y planificar la estructura del sistema.
    - **Diagrama de diseño:**
        <div align="center">
            <img src="https://github.com/RyanValdivia/sismat-unsa/blob/main/img/design.png?raw=true" alt="Design Diagram" style="width:80%; height:auto"/>
        </div>

4. **Planificación de Tareas:**
    - División del trabajo en sprints y asignación de tareas específicas.
    - Uso de herramientas de gestión de proyectos como Trello o Jira.

### Implementación

5. **Desarrollo del Backend:**
    - Configuración de Django y creación de modelos, vistas, y controladores.
    - Implementación de la API RESTful para la comunicación con el frontend.

6. **Desarrollo del Frontend:**
    - Configuración de React y Vite.
    - Creación de componentes reutilizables y diseño responsivo con Tailwind y MUI.

### Pruebas

7. **Pruebas Unitarias:**
    - Implementación de pruebas unitarias para asegurarse de que cada componente funciona correctamente.
    - Uso de herramientas como Jest y Django Test.

8. **Pruebas de Integración:**
    - Pruebas de flujo completo del sistema para asegurarse de que todos los componentes trabajan en conjunto.
    - Validación de la interfaz de usuario y la API RESTful.

### Despliegue

9. **Preparación para el Despliegue:**
    - Configuración del entorno de producción.
    - Uso de servicios de despliegue como Heroku, Vercel, o AWS.

10. **Despliegue:**
    - Lanzamiento de la aplicación en el entorno de producción.
    - Monitoreo inicial y ajustes necesarios.

<div align="center" style="margin-top: 20px;">
    <img src="https://github.com/RyanValdivia/sismat-unsa/blob/main/img/credentials.png?raw=true" alt="Despliegue" style="width:80%; height:auto;"/>
</div>

---

## PDF Generado del README.md
- **Adjuntar PDF del README.md**: [Descargar PDF](URL_AQUÍ)

## Lista de Videos
1. **BackEnd-Admin**
    - [Video Rest BackEnd](https://www.youtube.com/watch?v=KP6HK6RwmdE)

2. **FrontEnd-Framework**
    - [Video 2](URL_AQUÍ)

3. **Proyecto en Producción**
    - [Video 3](URL_AQUÍ)


## Infografía Tipo Poster Digital PDF (Tamaño A1)
- **Título de la webapp**: SISMAT - UNSA
- **Curso**: Programación Web II
- **Semestre**: III
- **Alumnos**:
    - Jhonatan Benjamin Mamani Céspedes
    - Ryan Fabian Valdivia Segovia
    - Johann Andre Caceres Ruiz
- **Profesor**: Richart Smith Escobedo Quispe
- **Imágenes y capturas de pantalla**: [Poster PDF](URL_AQUÍ)

## RECURSOS

-   [Documentación de Django](https://docs.djangoproject.com/en/stable/)
-   [Documentación de React](https://reactjs.org/docs/getting-started.html)
-   [Guía de Vite](https://vitejs.dev/guide/)
-   [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
-   [Componentes de Material UI](https://mui.com/components/)
-   [Documentación de SQLite](https://www.sqlite.org/docs.html)
-   [Documentación de Node.js](https://nodejs.org/en/docs/)
-   [Documentación de Git](https://git-scm.com/doc)
-   [Documentación de GitHub](https://docs.github.com/en)

## AUTORES

-   [Caceres Ruiz, Johann Andre](https://github.com/Johann-1498)
-   [Mamani Céspedes, Jhonatan Benjamin](https://github.com/JBenjamin01)
-   [Valdivia Segovia, Ryan Fabian](https://github.com/RyanValdivia)

## LICENCIA

Este proyecto está licenciado bajo los términos de la licencia MIT.

[license]: https://img.shields.io/github/license/usuario/proyecto-matricula?label=License
[license-file]: https://github.com/usuario/proyecto-matricula/blob/main/LICENSE

[downloads]: https://img.shields.io/github/downloads/usuario/proyecto-matricula/total?label=Downloads
[releases]: https://github.com/usuario/proyecto-matricula/releases/

[last-commit]: https://img.shields.io/github/last-commit/usuario/proyecto-matricula?label=Last%20Commit

[Django]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white
[django-site]: https://www.djangoproject.com/

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-site]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vite-site]: https://vitejs.dev/

[Axios]: https://img.shields.io/badge/Axios-2D2E2E?style=for-the-badge&logo=axios&logoColor=white
[axios-site]: https://axios-http.com

[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-site]: https://tailwindcss.com/

[MUI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[mui-site]: https://mui.com/

[SQLite]: https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white
[sqlite-site]: https://www.sqlite.org/index.html

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-site]: https://nodejs.org/

[Git]: https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white
[git-site]: https://git-scm.com/

[GitHub]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[github-site]: https://github.com/