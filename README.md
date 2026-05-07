# pruebaCrowdar

## Descripción

Este proyecto abarca la prueba enviada por el departamento de selección de Crowdar. Es una suite de tests de automatización desarrollada con **Cypress** y **TypeScript**, diseñada para validar la funcionalidad de la aplicación web de prueba SauceDemo.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu equipo:

- **Node.js** (versión 16 o superior) - [Descargar](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** - [Descargar](https://git-scm.com/)
- Navegadores web instalados (Chrome, Firefox o Edge - se utilizan para ejecutar los tests)

## Cómo clonar el repositorio

```bash
git clone https://github.com/catalinapinillas/pruebaCrowdar.git
cd pruebaCrowdar
```

## Cómo instalar dependencias

Una vez clonado el repositorio, instala todas las dependencias requeridas:

```bash
npm install
```

Esto instalará:
- Cypress (framework de automatización)
- TypeScript (lenguaje de tipado)
- cypress-mochawesome-reporter (generador de reportes)

## Cómo ejecutar los comandos

A continuación se detallan todos los comandos disponibles:

| Comando | Descripción |
|---------|-------------|
| `npm run cy:open` | Abre Cypress en modo interactivo para ejecutar tests manualmente |
| `npm run test:chrome` | Ejecuta todos los tests en navegador Chrome (headless) |
| `npm run test:firefox` | Ejecuta todos los tests en navegador Firefox (headless) |
| `npm run test:edge` | Ejecuta todos los tests en navegador Edge (headless) |
| `npm run test:all` | Ejecuta todos los tests en Chrome y Firefox secuencialmente |
| `npm run test:headed` | Ejecuta los tests en Chrome con interfaz visible (no headless) |
| `npm run report` | Abre el reporte HTML en navegador (macOS/Linux) |
| `npm run report:win` | Abre el reporte HTML en navegador (Windows) |

### Ejemplos de uso:

```bash
# Abrir Cypress en modo interactivo
npm run cy:open

# Ejecutar todos los tests en Chrome
npm run test:chrome

# Ejecutar todos los tests con visualización
npm run test:headed

# Ver el reporte de la última ejecución
npm run report:win  # En Windows
npm run report      # En macOS/Linux
```

## Estructura del proyecto

```
cypress/
├── e2e/                 # Archivos de tests
│   ├── api.cy.ts       # Tests de API
│   ├── cart.cy.ts      # Tests del carrito de compras
│   └── login.cy.ts     # Tests de login
├── fixtures/            # Datos de prueba
│   ├── apis.json
│   └── users.json
├── support/             # Configuración y comandos personalizados
│   ├── commands.ts
│   └── e2e.ts
└── reports/             # Reportes generados
    └── html/
```

## Reportes y Screenshots

Después de ejecutar los tests, se generan automáticamente:

- **Reportes HTML**: `cypress/reports/html/index.html`
- **Videos de ejecución**: `cypress/videos/`
- **Screenshots**: `cypress/screenshots/` (solo en caso de fallos)

Puedes visualizar el reporte usando `npm run report` o `npm run report:win` según tu sistema operativo.

## Base URL

Los tests están configurados para ejecutarse contra:
```
https://www.saucedemo.com
```

## Notas importantes

- Es recomendable ejecutar `npm run test:all` para asegurar que los tests pasen en múltiples navegadores
- Los videos y screenshots se guardan automáticamente para auditoría y debugging
- La información de login se encuentra en `cypress/fixtures/users.json`