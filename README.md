# 🗄️ Task Manager API (Mock Backend)

API simulada desenvolvida com json-server para servir como backend do projeto Task Manager.

Este repositório foi criado com o objetivo de simular um ambiente real de integração entre frontend e backend, mantendo a separação de responsabilidades entre as aplicações.

🔗 Frontend Repository: https://github.com/nicolasandreos/Task-Manager-React
🚀 Deploy do Frontend: https://task-manager-react-six-rho.vercel.app/

---

## 📦 Tecnologias Utilizadas

- Node.js
- json-server

---

## 🎯 Objetivo

Simular uma API REST para:

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Remover tarefas
- Atualizar status da tarefa

A estrutura segue o padrão RESTful para simular um backend real.

---

## 🛠️ Como Rodar Localmente

```bash
# Clonar repositório
git clone https://github.com/seu-user/task-manager-api.git

# Entrar na pasta
cd task-manager-api

# Instalar dependências
npm install

# Rodar servidor
npx json-server --watch db.json --port 3000
```
