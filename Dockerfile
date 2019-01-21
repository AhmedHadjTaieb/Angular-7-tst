FROM node:10.15 as angular-dev

# **************** INSTALL GOOGLE CHROME ***************/
# Install wget.
#RUN apt-get install -y wget
# Set the Chrome repo.
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
# Install Chrome.npm insta
#RUN apt-get update && apt-get -y install google-chrome-stable
# **************** INSTALL GLOBAL ***************/
#RUN npm install -g gulp 
RUN npm install @angular/cli@7.2.1 -g
RUN apt-get update
RUN apt-get install -y net-tools

RUN apt-get install  -y locales
ENV LANG en_US.UTF-8

WORKDIR /home/angular

ADD package.json package.json

RUN npm install