from node
RUN apt -y update && apt -y upgrade && apt -y install npm
COPY ./ /app
WORKDIR /app
RUN npm i puppeteer
RUN npm install