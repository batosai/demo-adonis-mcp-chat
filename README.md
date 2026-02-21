# Demo Adonis MCP Chat

A demo chat application built with [AdonisJS v7](https://adonisjs.com/), [Inertia.js](https://inertiajs.com/), [Vue 3](https://vuejs.org/), and [@jrmc/adonis-mcp](https://github.com/jrmc/adonis-mcp). It showcases how to integrate an AI chat interface powered by MCP (Model Context Protocol) tools that interact with your database in real time.

## 🎬 Demo

[![Watch the demo](https://img.youtube.com/vi/-WC4Tawo2vY/maxresdefault.jpg)](https://youtu.be/-WC4Tawo2vY)

▶️ [Watch on YouTube](https://youtu.be/-WC4Tawo2vY)

## Tech Stack

- **[@jrmc/adonis-mcp](https://github.com/jrmc/adonis-mcp)** — MCP (Model Context Protocol) integration for AdonisJS. Exposes tools, resources and prompts to AI models through a standardized protocol.
- **[AI SDK](https://sdk.vercel.ai/)** (`ai` + `@ai-sdk/vue`) — Vercel's AI SDK for streaming chat completions on the backend and consuming them reactively on the frontend with Vue composables.
- **[Nuxt UI](https://ui.nuxt.com/)** (`@nuxt/ui` v4) — A comprehensive Vue component library powered by Tailwind CSS. Used here for the chat UI components (`UChatMessages`, `UChatPrompt`, `UChatPromptSubmit`, etc.).
- **[AdonisJS v7](https://adonisjs.com/)** — Full-stack TypeScript framework (v7) handling authentication, database (Lucid ORM), routing and more.
- **[Inertia.js](https://inertiajs.com/)** — Bridges AdonisJS and Vue 3 for a SPA-like experience without building a separate API.

## Available MCP Tools

| Tool | Name | Description |
|------|------|-------------|
| Count Users | `count_users` | Count the total number of users in the database |
| Count Articles | `count_articles` | Count the total number of articles in the database |
| Last Article | `last_article` | Retrieve the most recently created article |
| Create User | `create_user` | Create a new user with a full name, email and password |

## Example Questions You Can Ask the Chat

### 📊 Counting & Statistics

- "How many users are registered?"
- "What is the total number of articles in the database?"
- "Can you count all users and all articles for me?"

### 📰 Articles

- "Show me the latest article"
- "What was the last article published?"
- "Can you retrieve the most recent article and summarize it?"

### 👤 User Management

- "Create a new user named John Doe with email john@example.com and password secret1234"
- "Register a user with the name Jane Smith, email jane@smith.com and password mypassword"
- "Add a new account for Bob Martin (bob@martin.dev) with the password hello123"

### 🔀 Combined Questions

- "How many users are there? Then create a new one named Alice with email alice@test.com and password test1234, and tell me the new count."
- "Show me the last article and tell me how many articles exist in total."
- "Create a user named Demo User with email demo@demo.com and password demo1234. After that, how many users do we have now?"

## Environment Variables

Copy the `.env.example` file to `.env` and fill in the required values:

```bash
cp .env.example .env
```

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `development` |
| `PORT` | Server port | `3333` |
| `HOST` | Server host | `localhost` |
| `APP_KEY` | Application secret key (generate with `node ace generate:key`) | — |
| `LOG_LEVEL` | Log level | `info` |
| `SESSION_DRIVER` | Session storage driver (`cookie`, `memory` or `database`) | `cookie` |
| `AI_API_KEY` | Your Anthropic API key | `sk-ant-...` |
| `AI_MODEL` | The AI model to use | `claude-sonnet-4-20250514` |

> **Note**
> You can get an Anthropic API key at [console.anthropic.com](https://console.anthropic.com/).

## Getting Started

```bash
# Install dependencies
npm install

# Run migrations and seeders
node ace migration:fresh --seed

# Start the development server
npm run dev
```

## License

This project is unlicensed and intended for demonstration purposes.
