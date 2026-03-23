# Estágio 1: Build da aplicação React
# Usamos a versão 22-alpine por ser leve e compatível com o Vite mais recente
FROM node:22-alpine AS build-stage

WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte para dentro do container
COPY . .

# Gera a versão de produção (pasta dist)
RUN npm run build

# Estágio 2: Servidor Web para entregar os arquivos estáticos
# O React gera apenas arquivos estáticos, então usamos o Nginx para servi-los
FROM nginx:stable-alpine AS production-stage

# Copia os arquivos gerados no estágio anterior para a pasta do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta 80 (padrão HTTP)
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]