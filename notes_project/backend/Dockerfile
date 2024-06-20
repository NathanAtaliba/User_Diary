# define a imagem base
# Especifica a imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR ./src

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos restantes do projeto para o diretório de trabalho
COPY . .

# Expõe a porta que será usada pela aplicação
EXPOSE 3000

# Comando para executar a aplicação
CMD ["npm", "run", "start"]
