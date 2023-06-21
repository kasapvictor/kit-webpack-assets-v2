FROM node:18-alpine

WORKDIR /home/app

COPY /app /home/app

# PACKAGES
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    mc \
    nano \
    curl \
    wget \
    bash \
    gnupg \
    zsh \
    git \
    make

# install zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

RUN export DOCKER_SCAN_SUGGEST=false

EXPOSE ${PORT_1}
EXPOSE ${PORT_2}
EXPOSE ${PORT_3}

