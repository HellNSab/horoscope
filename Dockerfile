FROM node
WORKDIR /app
COPY package.json /app
RUN npm install --omit=dev
COPY . /app
CMD ["node","index.js"]
