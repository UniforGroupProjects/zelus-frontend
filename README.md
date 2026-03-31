# Front-end - Projeto Zelus

Interface web do sistema de denúncias urbanas, responsável pela interação com o usuário.

---

## 📌 Tecnologias

* React
* Axios

---

## 🌐 Funcionalidades

* Login de usuário
* Cadastro de denúncias
* Listagem de denúncias

---

## 🔐 Autenticação

* Recebe o **token JWT** do back-end
* Armazena no navegador
* Envia o token nas requisições protegidas

---

## 🔄 Comunicação

* Consome a API via requisições HTTP (Axios)

---

## ⚙️ Execução

```bash id="k3n8xa"
npm install
npm run dev
```

=============================================================================

Como Usar - Projeto Zelus

Guia básico para executar e utilizar o sistema de denúncias urbanas.

🚀 1. Iniciar o Back-end

No diretório do back-end:

pip install -r requirements.txt
uvicorn main:app --reload

A API estará disponível em:

http://localhost:8000
🌐 2. Iniciar o Front-end

Em outro terminal, no diretório do front-end:

npm install
npm run dev

A aplicação abrirá em:

http://localhost:5173
🔐 3. Criar Usuário
Acesse o sistema pelo navegador
Cadastre um novo usuário (ou use rota /users via API)
🔑 4. Fazer Login
Informe email e senha
O sistema irá gerar um token JWT
O usuário ficará autenticado
📢 5. Enviar Denúncia
Preencha os dados da denúncia
Envie pelo sistema
A denúncia será salva no banco de dados
📋 6. Visualizar Denúncias
Acesse a lista de denúncias
Visualize os registros cadastrados
📄 Observação
O front-end se comunica com o back-end automaticamente
O back-end é responsável por salvar e validar os dados
O banco de dados armazena usuários e denúncias
