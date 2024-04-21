# define a imagem base
FROM linux:latest

WORKDIR /backend
# define o mantenedor da imagem
LABEL maintainer="Macoratti"
# Atualiza a imagem com os pacotes
RUN apt-get update && apt-get upgrade -y
# Instala o NGINX para testar
RUN npm install
# Expoe a porta 80
EXPOSE 80
# Comando para iniciar o NGINX no Container
CMD ["npm", "start"]