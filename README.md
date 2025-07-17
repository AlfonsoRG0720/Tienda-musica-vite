# 🛒 Tienda Web de Música

Proyecto de refactorización de una tienda de discos de música **rock y retro**, desarrollada como práctica en tecnologías modernas del ecosistema web. Esta aplicación responsive está construida con **JavaScript**, **TypeScript**, **Vite**, **Redux** y **Jest**, e implementa buenas prácticas de arquitectura como **MVC**, manejo de estado con Redux + LocalStorage y control de acceso por roles de usuario.

La aplicación está preparada como una **PWA (Progressive Web App)** instalable en cualquier dispositivo, con rutas protegidas para usuarios autenticados y administración avanzada del contenido de discos.

---

## 🌐 Vista Previa

🔗 [**Ver aplicación en vivo**](https://dicos-vite.netlify.app/index.html)

### 🧾 Página principal
![Página principal](/public/assets/Captura%20de%20pantalla%204.jpg)

### 🔐 Login de usuario
![Login](/public/assets/Captura%20de%20pantalla%205.jpg)

### 🎸 Gestión de discos (admin)
![Gestión de discos](/public/assets/Captura%20de%20pantalla%206.jpg)

### 🧑‍💼 Edición de perfil
![Editar perfil](/public/assets/Captura%20de%20pantalla%207.jpg)

### 🛍️ Modal del carrito de compras
![Carrito de compras](/public/assets/Captura%20de%20pantalla%208.jpg)

---

## ✨ Funcionalidades destacadas

- Arquitectura modular basada en **MVC**
- Control de sesión mediante cookies y localStorage
- Gestión del estado global con **Redux Toolkit**
- Roles de usuario (visitante, usuario, administrador)
- Rutas protegidas según permisos del usuario
- CRUD completo para usuarios y discos
- Testing automatizado con **Jest**
- Workflow CI con **GitHub Actions**
- Instalación como **PWA** offline-friendly

---

## ⚙️ Tecnologías utilizadas

- ⚡ [Vite](https://vitejs.dev/) — compilador ultrarrápido
- 🧠 [TypeScript](https://www.typescriptlang.org/)
- 🗃️ [Redux Toolkit](https://redux-toolkit.js.org/)
- 🧪 [Jest](https://jestjs.io/)
- 🧱 HTML, CSS, JavaScript

---

## 📁 Estructura del proyecto

\`\`\`bash
TIENDA-MUSICA-VITE/
│
├── __test__/                      
│   └── BBDDmodels.test.js
│
├── .github/workflows/            
├── dist/                         
├── node_modules/                 
├── pages/                        
├── public/                       
│
├── src/                          
│   ├── controllers/             
│   ├── mocks/                    
│   ├── models/                   
│   ├── slices/                   
│   ├── store/                    
│   ├── styles/                   
│   ├── types/                    
│   ├── utilities/                
│   ├── counter.ts                
│   ├── main.ts                   
│   ├── style.css                 
│   ├── typescript.svg            
│   └── vite-env.d.ts             
│
├── .gitignore
├── index.html                    
├── jest.config.ts                
├── package.json                  
├── package-lock.json
├── tsconfig.json                 
├── tsconfig.test.json            
├── vite.config.js                
\`\`\`

---

## 🚀 ¿Cómo usar esta aplicación?

1. Visita la app en producción:  
   👉 https://dicos-vite.netlify.app/index.html

2. O clona el repositorio:
   \`\`\`bash
   git clone https://github.com/AlfonsoRG0720/Tienda-musica.git
   cd Tienda-musica
   \`\`\`

3. Instala dependencias:
   \`\`\`bash
   npm install
   \`\`\`

4. Ejecuta el proyecto en desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Puedes instalar la app como **PWA** en tu dispositivo desde el navegador.

---

## 👨‍💻 Autor

**Alfonso Rodríguez**  
📧 alfonsor814@gmail.com  
🔗 [GitHub @AlfonsoRG0720](https://github.com/AlfonsoRG0720)
