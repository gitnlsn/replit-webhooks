# Usando a imagem base do Node.js
FROM node:20

# Criando o diretório de trabalho dentro do container
WORKDIR /app

COPY . .
RUN npm install

# Compilar o código TypeScript
RUN npm run build

# Expor a porta 8080
EXPOSE 8080

# Iniciar a aplicação
CMD ["npm", "start"]