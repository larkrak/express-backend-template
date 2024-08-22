# Usa una imagen oficial de Node.js como imagen base
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install
# RUN apt-get update && apt-get install -y nano && apt-get clean

# Copia el código de tu aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecutará tu aplicación
EXPOSE 3000
EXPOSE 3004
# Comando para iniciar tu aplicación
CMD ["npm", "start"]