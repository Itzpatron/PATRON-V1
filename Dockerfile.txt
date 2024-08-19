
FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf ~/node_modules 

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 3000

CMD ["node", "index.js", "--server"]

CMD ["npm i -g forever && forever index.js && forever save && forever logs"] 
