<!-- ======================================================================
README TEMPLATE — FRONTEND BOILERPLATE (v2025-09-20)
Scope: JavaScript + ESLint + Prettier + pnpm
----------------------------------------------------------------------

WARNINGS
- Avoid placeholders. If Demo/Changelog not ready, write "Not available".
- Add live-server as a dev dependency (not global).
- TypeScript is optional. Add tsconfig.json if really needed.
- Do not duplicate badges and plain text for the same info.
- If Changelog will not be updated, use GitHub Releases instead.
- Be careful when updating the Project Status once the project is finished.
- Always include references to the original project or platform.

====================================================================== -->

<p align="center">
  <img src="https://img.shields.io/badge/README-.md-blue?style=flat&labelColor=2f2f2f&logo=markdown&logoColor=white" alt="README badge" width="170">
</p>

---

### 📊 Repository Badges

<!-- Replace `ferrancipres/html-css-template` with your new repo -->

![issues](https://img.shields.io/github/issues/ferrancipres/basekit)
![pull requests](https://img.shields.io/github/issues-pr/ferrancipres/basekit)
![last commit](https://img.shields.io/github/last-commit/ferrancipres/basekit)
![repo size](https://img.shields.io/github/repo-size/ferrancipres/basekit)
![code size](https://img.shields.io/github/languages/code-size/ferrancipres/basekit)
![top language](https://img.shields.io/github/languages/top/ferrancipres/basekit)

---

#### 📌 Quick Access

- [README.md](README.md)
- [LICENSE](LICENSE)
- [config/.gitignore](config/.gitignore)
- [config/.prettierrc.json](config/.prettierrc.json)
- [config/.prettierignore](config/.prettierignore)
- [config/.gitattributes](config/.gitattributes)
- [config/.editorconfig](config/.editorconfig)
- [src/](src/)

---

📋 Table of Contents

1. [Description](#description)
2. [Demo](#demo)
3. [Goals](#goals)
4. [Technologies](#technologies)
5. [Prerequisites](#prerequisites)
6. [Installation & Usage](#installation--usage)
7. [Project Structure](#project-structure)
8. [Useful Scripts](#useful-scripts)
9. [Features](#features)
10. [Environment Variables](#environment-variables)
11. [Known Issues](#known-issues)
12. [Roadmap](#roadmap)
13. [Project Status](#project-status)
14. [Contributing](#contributing)
15. [License](#license)
16. [Contact](#contact)
17. [Credits](#credits)

---

#### Description

**Project Name** is a boilerplate for small web projects using **HTML, CSS, and JavaScript, configured with **Prettier and ESLint\*\*.

It ensures best practices from the start and allows scaling to more complex setups (React, Next.js, etc.).

---

#### Demo

Screenshot or live example of the app:

[🔗 Live Demo](https://your-deploy-link.com)
_Not yet available_

---

#### Goals

- Provide a professional starter template.
- Maintain code quality via **ESLint** and **Prettier**.
- Document the project with a clean README.
- Prepare for future integrations (frameworks, testing, CI/CD).

---

#### Technologies

- HTML5
- CSS3
- JavaScript ES6+
- ESLint
- Prettier
- pnpm

---

#### Prerequisites

- Node.js ≥ 18
- pnpm (`npm install -g pnpm`)
- Git
- VSCode with extensions:
  - Prettier
  - ESLint
  - Live Server

<p>
<img src="https://img.shields.io/badge/node-%3E%3D18-green" alt="node">
</p>

---

#### Installation & Usage

```sh
# Clone the repository

git clone https://github.com/<user>/<repo>.git
cd <repo>
```

```sh
# Install dependencies

pnpm install
```

```sh
# Start local server

pnpm dev
```

**📝 Notes**

- Open `src/index.html` in your browser or run with **Live Server** in VSCode.
- pnpm dev requires live-server installed as a dev dependency:
- pnpm add -D live-server

---

#### Project Structure

```sh
project-name/
├─ .vscode/
│  ├─ settings.json
│  └─ extensions.json
├─ src/
│  ├─ index.html
│  ├─ styles.css
│  ├─ main.js
├─ img/
├─ eslint.config.js
├─ .prettierrc.json
├─ .prettierignore
├─ .gitignore
├─ .gitattributes
├─ package.json
├─ pnpm-lock.yaml
├─ LICENSE
└─ README.md
```

---

#### Useful Scripts

Defined in `package.json`:

```json
{
  "scripts": {
    "dev": "live-server src",
    "lint": "eslint . --ext .js,.ts",
    "lint:fix": "eslint . --ext .js,.ts --fix",
    "format": "prettier --check .",
    "format:fix": "prettier --write ."
  }
}
```

Usage:

```bash
pnpm lint         # Check ESLint errors
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Check Prettier formatting
pnpm format:fix   # Apply Prettier formattin
```

---

#### Features

- ✅ Preconfigured ESLint + Prettier
- ✅ Supports **JavaScript** and **TypeScript**
- ✅ Clear modular structure (`src/`, `img/`, `.vscode/`)
- 🚧 Pending: UI framework integration (React/Tailwind)

---

#### Environment Variables

Example `.env.example`:

```bash
API_URL=https://api.ejemplo.com
API_KEY=clave-super-secreta
```

---

#### Roadmap

- [ ] Add **unit tests**
- [ ] Configure CI/CD with GitHub Actions
- [ ] Automatic deploy on **Vercel**
- [ ] Migrate to framework (React/Next.js)

---

#### Project Status

Version: **0.1.0-beta**

<p>
  <img src="https://img.shields.io/badge/version-0.1.0--beta-orange" alt="version">
</p>

Status: In progress

<p>
  <img src="https://img.shields.io/badge/status-in%20progress-yellow" alt="status">
</p>

---

#### Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add feature'`)
4. Push the branch (`git push origin feature/your-feature`)
5. Open a **Pull Request**

⚠️ Guidelines: Conventional Commits + small, well-documented PRs.

---

#### License

This project is licensed under the MIT License. <br>
See [LICENSE](./LICENSE) for details.

<p>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
</p>

---

#### Contact

- GitHub: [ferran-cipres](https://github.com/ferran-cipres)
- LinkedIn: [Ferran Ciprés](https://www.linkedin.com/in/ferrancipres/)
- Email: ferrancipres@gmail.com

---

#### Credits

- [FreeCodeCamp Guide](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/?utm_source=chatgpt.com)
- Adapted by **Ferran Ciprés**
