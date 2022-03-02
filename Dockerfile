FROM node:17-alpine

WORKDIR /usr/src/app

RUN npm install -g @angular/cli
RUN npm -v
RUN ng version
RUN ng new frontend 
CMD ["./start.sh"]
