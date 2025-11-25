# Monorepo Template

This is a monorepo template configured with **pnpm workspaces**, featuring a robust backend and a modern frontend. It is designed to be a starting point for full-stack applications.

## 🚀 Tech Stack

### Backend (`packages/backend`)

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Architecture:** MVC (Model-View-Controller)
- **Logging:** Winston
- **Security:** Helmet, CORS, Express Rate Limit
- **Validation:** Express Validator
- **Dev Tool:** Nodemon

### Frontend (`packages/frontend`)

- **Build Tool:** Vite
- **Language:** TypeScript (Vanilla)
- **Styling:** Tailwind CSS v4
- **Features:** PostCSS, Autoprefixer

## 🛠️ Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>

    ```

2.  **Install dependencies:**
    Make sure you have `pnpm` installed.
    ```bash
    pnpm install
    ```

## 🏃‍♂️ Usage

To start both the backend and frontend in development mode with a single command:

```bash
pnpm dev
```

- **Backend:** Runs on `http://localhost:3000`
- **Frontend:** Runs on `http://localhost:5173` (default Vite port)

## 🏃‍♂️ Compile

```bash
pnpm build
```

## 📂 Project Structure

```
monorepo/
├── packages/
│   ├── backend/          # Express server
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── frontend/         # Vite application
│       ├── src/
│       ├── package.json
│       ├── vite.config.ts
│       └── ...
├── package.json          # Root scripts
├── pnpm-workspace.yaml   # Workspace configuration
└── README.md
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
