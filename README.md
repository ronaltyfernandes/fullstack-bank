# 💰 Finan-Finanças Pessoais

Uma aplicação web desenvolvida para auxiliar no controle financeiro pessoal, permitindo o gerenciamento de receitas, despesas, categorias, metas e geração de relatórios para acompanhar a saúde financeira.

---

## 📖 Sobre o projeto

O objetivo deste sistema é facilitar a organização das finanças pessoais através de uma interface simples, intuitiva e responsiva.

Com ele é possível:

* 📊 Visualizar o balanço financeiro.
* 💵 Cadastrar receitas.
* 💸 Cadastrar despesas.
* 🏷️ Organizar lançamentos por categorias.
* 👤 Cadastrar Usuario e fazer login
* 📅 Filtrar informações por período.
* 📈 Visualizar gráficos e indicadores financeiros.
* 👤 Gerenciar usuários.
* 🔒 Autenticação com JWT e bycrypt.
* 🌙 Tema claro e escuro.

---

## 🚀 Tecnologias utilizadas

### Front-end

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Lucide React

### Back-end

* Node.js
* Express
* TypeORM
* PostgreSQL
* JWT (JSON Web Token)
* Bcrypt

### Infraestrutura

* Docker
* Docker Compose

---

## 📁 Estrutura do projeto

```text
financas-pessoais/
│
├── front-end/
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── back-end/
│   ├── src/
│   ├── database/
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## ✨ Funcionalidades

### Dashboard

* Resumo financeiro
* Saldo atual
* Total de receitas
* Total de despesas
* Indicadores mensais

### Receitas

* Cadastro
* Edição
* Exclusão
* Pesquisa
* Filtros

### Despesas

* Cadastro
* Edição
* Exclusão
* Pesquisa
* Filtros

### Categorias

* Cadastro de categorias
* Personalização por usuário
* Associação aos lançamentos

### Relatórios

* Gráfico de categorias
* Evolução mensal
* Comparativo entre receitas e despesas

### Usuários

* Cadastro
* Login
* Autenticação JWT
* Controle de acesso

---

## 📊 Dashboard

O sistema apresenta diversos indicadores financeiros, incluindo:

* Saldo atual
* Receitas do período
* Despesas do período
* Balanço mensal
* Distribuição de gastos por categoria
* Evolução financeira mensal

---

## 🔐 Autenticação

A autenticação é realizada utilizando JWT.

Após o login:

* o token é armazenado localmente;
* todas as requisições autenticadas enviam automaticamente o token;
* os dados são filtrados de acordo com o usuário autenticado.

---

## 🐳 Executando com Docker

### Clone o projeto

```bash
git clone https://github.com/seu-usuario/financas-pessoais.git

cd financas-pessoais
```

### Inicie os containers

```bash
docker compose up --build
```

Após iniciar:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:3000
```

---

## 💻 Executando o projeto localmente

> **Importante:** Mesmo executando o frontend e o backend localmente, **o banco de dados PostgreSQL é executado através do Docker**. Portanto, antes de iniciar a aplicação, é necessário subir o container do banco de dados.

### 1. Inicie o banco de dados

```bash
docker compose up -d postgres
```

> Caso o serviço do banco no `docker-compose.yml` possua outro nome, substitua `postgres` pelo nome correspondente.

### 2. Inicie o backend

```bash
cd back-end

npm install

npm run dev
```

### 3. Inicie o frontend

```bash
cd front-end

npm install

npm run dev
```

### Endereços da aplicação

**Frontend**

```
http://localhost:5173
```

**Backend**

```
http://localhost:3000
```

### Observações

* O frontend e o backend são executados localmente utilizando o Node.js.
* O PostgreSQL é executado em um container Docker.
* Antes de iniciar o backend, certifique-se de que o container do banco de dados esteja em execução.
* Caso o banco seja interrompido, a API não conseguirá estabelecer conexão até que o container seja iniciado novamente.


## ⚙️ Variáveis de ambiente

### Backend

Crie um arquivo `.env`:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=senha
DB_DATABASE=financas

JWT_SECRET=sua_chave_secreta
```

---

## 📸 Telas

O sistema possui telas para:

* Login
* Cadastro
* Dashboard
* Receitas
* Despesas
* Categorias
* Relatórios
* Perfil do usuário

---

## 📈 Possíveis Próximas funcionalidades

* Metas financeiras
* Planejamento de orçamento
* Parcelamento de despesas
* Contas bancárias
* Cartões de crédito
* Exportação para Excel
* Exportação para PDF
* Backup automático
* Notificações de vencimento
* Aplicação PWA

---

## 🤝 Contribuindo

1. Faça um Fork.
2. Crie uma branch.

```bash
git checkout -b minha-feature
```

3. Faça suas alterações.

4. Commit.

```bash
git commit -m "Minha nova funcionalidade"
```

5. Envie para o GitHub.

```bash
git push origin minha-feature
```

6. Abra um Pull Request.

---

## 📄 Licença

Este projeto está disponível sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Ronalty Fernandes**.

Caso tenha sugestões ou encontre algum problema, fique à vontade para abrir uma Issue ou enviar um Pull Request.
