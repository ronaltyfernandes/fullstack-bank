# 💰 Finan - Finanças Pessoais

Uma aplicação web desenvolvida para auxiliar no controle financeiro pessoal, permitindo o gerenciamento de receitas, despesas, categorias, metas e geração de relatórios para acompanhar a saúde financeira.

<p align="center">
  <img src="https://github.com/user-attachments/assets/efa844d7-9bee-4191-bee8-30791d3468fd" alt="Banner do projeto" width="100%">
</p>

<p align="center">
  <strong>Gerencie suas finanças de forma simples, organizada e intuitiva.</strong>
</p>

---

## 🌐 Deploy

A aplicação está disponível online para teste:

**🔗 [https://ronaltyfernandes.github.io/finan/#/login](https://ronaltyfernandes.github.io/finan/#/login)**

> 💡 Use a conta demo disponível na tela de login para explorar o sistema sem precisar se cadastrar.

---

## 📑 Sumário

- [Deploy](#-deploy)
- [Demonstração](#-demonstração)
- [Screenshots](#-screenshots)
- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Dashboard](#-dashboard)
- [Autenticação](#-autenticação)
- [Executando com Docker](#-executando-com-docker)
- [Executando o projeto localmente](#-executando-o-projeto-localmente)
- [Telas](#-telas)
- [Próximas funcionalidades](#-possíveis-próximas-funcionalidades)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🎥 Demonstração

> **Projeto em funcionamento**

<p align="center">
  <img src="https://github.com/user-attachments/assets/a8f4c760-0081-4d9c-ab9a-0fed35bd407c" alt="Demonstração do sistema" width="100%">
</p>

---

## 📷 Screenshots

| Login | Cadastro |
|--------|-----------|
| <img src="https://github.com/user-attachments/assets/431ca3c6-fedc-415e-bf5f-6b898c480484" width="100%"> | <img src="https://github.com/user-attachments/assets/be55221c-2f89-445b-b09c-70b2e7e36463" width="100%"> |

| Dashboard |
|--------|-----------|
| <img src="https://github.com/user-attachments/assets/efa844d7-9bee-4191-bee8-30791d3468fd" width="100%"> | <img src="https://github.com/user-attachments/assets/82520ab1-cd15-46e9-ada6-43b1075d2a42" width="100%"> |

| Categorias | Contas |
|----------|-----------|
| <img src="https://github.com/user-attachments/assets/921a7d5a-7a7d-4cfb-abd8-99ae61dc2341" width="100%"> | <img src="https://github.com/user-attachments/assets/f1118f29-92e8-4ba1-a2ad-996534b824b" width="100%"> |

| Trasações | Adicionar |
|------------|------------|
| <img src="https://github.com/user-attachments/assets/405f4d26-e2d6-45c2-b3ef-d62ed7f13f9b" width="100%"> | <img src="https://github.com/user-attachments/assets/b11060ac-8cac-472e-858e-245fdcd1329f" width="100%"> |

| Mobile | Header Mobile |
|------------|------------|
| <img src="https://github.com/user-attachments/assets/7efb1d68-d163-4432-a502-951a1acbc27d" width="100%"> | <img src="https://github.com/user-attachments/assets/3d21f39f-b3e7-4f65-94fb-fb835546397b" width="100%"> |


---

## 📖 Sobre o projeto

O objetivo deste sistema é facilitar a organização das finanças pessoais através de uma interface simples, intuitiva e responsiva.

Com ele é possível:

* 📊 Visualizar o balanço financeiro.
* 💵 Cadastrar receitas.
* 💸 Cadastrar despesas.
* 🏷️ Organizar lançamentos por categorias.
* 👤 Cadastrar usuário e fazer login.
* 📅 Filtrar informações por período.
* 📈 Visualizar gráficos e indicadores financeiros.
* 👤 Gerenciar usuários.
* 🔒 Autenticação com JWT e Bcrypt.
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
git clone https://github.com/ronaltyfernandes/finan.git

cd financas-pessoais
```

### Inicie os containers

```bash
docker compose up --build
```

Após iniciar:

**Frontend**
```
http://localhost:5173
```

**Backend**
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

## 📈 Possíveis próximas funcionalidades

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