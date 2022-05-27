FROM node
COPY package.json package-lock.json ./
RUN npm install && mkdir /server && mv ./node_modules ./server && mv package.json ./server
WORKDIR /server
COPY . .
ENV PORT 4000
EXPOSE $PORT
CMD ["npm", "start"]
