# 🧠 Projeto de Kids Game (React + NestJS + MySQL + Docker)

Este projeto é um sistema de jogos escolares com backend em **NestJS**, frontend em **React + Vite** e banco de dados **MySQL**, tudo empacotado com **Docker** para rodar facilmente em qualquer computador.

---

## 🚀 O que é Docker?

O **Docker** é uma plataforma que permite "empacotar" um projeto com tudo que ele precisa (código, banco de dados, dependências) para rodar **em qualquer lugar**, sem precisar instalar Node.js, MySQL ou configurar nada. Basta apenas um comando para rodar tudo.

---

## 🛠️ Tecnologias usadas

- ⚙️ **Backend**: [NestJS](https://nestjs.com/)
- 🎨 **Frontend**: [React + Vite](https://vitejs.dev/)
- 🗃️ **Banco de dados**: [MySQL](https://www.mysql.com/)
- 🐳 **Containerização**: [Docker](https://www.docker.com/)

---

## 📝 Pré-requisitos

Antes de começar, você precisa ter instalado no seu computador:

### 🐳 Docker + Docker Compose
- Baixe e instale: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- Após instalar, **reinicie o computador** se for solicitado.

---

## 📥 Como clonar e rodar o projeto

### 1. Clone este repositório no seu computador

Abra o terminal (cmd, PowerShell, Git Bash ou outro) e execute:

git clone https://github.com/projetowordgame/wordgamedocker.git


### 2. Rode o projeto com Docker

Ainda no terminal, execute:

docker-compose up --build

Este comando irá:

- Baixar as imagens necessárias (Node.js, MySQL)
- Instalar todas as dependências do frontend e backend
- Rodar o banco de dados MySQL
- Rodar o backend NestJS
- Rodar o frontend React + Vite.

OBS: É possivel monitorar o container criado (iniciar ou parar) no docker desktop.


### 3. Acessos após rodar

| Serviço     | URL                                            |
| ----------- | ---------------------------------------------- |
| Frontend    | [http://localhost:5173](http://localhost:5173) |
| Backend API | [http://localhost:3000](http://localhost:3000) |
| MySQL       | `localhost:3307` (externo)                     |


### 4. Parar o projeto

Para parar os containers rodando, use:

CTRL + C ( ou entre no docker desktop e clique em stop conteiners)

Ou, se preferir remover tudo (containers, volumes, cache):

docker-compose down