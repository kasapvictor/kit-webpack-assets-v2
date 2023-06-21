################ Docker commands ################
# include .env - можно брать настройки из .env файла, к переменным обращаться так же $(VARIABLE)
include .env

# вызывает по умолчанию команду help.
.PHONY: help

help: ### Ignore - Show current help message
	@echo "Available 🔶Docker commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## 🔶.*$$' ./Makefile | awk '!/## Ignore/' | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "Available 🚀App commands:"
	@grep -E '^[a-zA-Z_-]+:.*?🚀.*$$' ./Makefile | awk '!/## Ignore/' | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

build: ## 🔶Docker - Builds Docker Image Without Using Cache
	docker-compose build --no-cache

up: ## 🔶Docker - Starts the Docker Container and Opens the Terminal
	docker-compose up -d && make bash

down: ## 🔶Docker - Stops the Docker Container
	docker-compose down

bash: ## 🔶Docker - Opens the Terminal in the Current Docker Container
	docker exec -it ${CONTAINER_NAME} zsh || winpty docker exec -it ${CONTAINER_NAME} zsh

	@echo "\n\n";

################ App commands ################
app-install-npm: ## 🚀App - Installs NPM Required NPM Packages for the App
	docker exec -it ${CONTAINER_NAME} make -C /home/app install-npm

app-install-yarn: ## 🚀App - Installs YARN Required NPM Packages for the App
	docker exec -it ${CONTAINER_NAME} make -C /home/app install-yarn

app-start: ## 🚀App - Starts the App Server in Development Mode
	docker exec -it ${CONTAINER_NAME} make -C /home/app start

app-build-dev: ## 🚀App - Builds the App in Development Mode (Uncompressed Files)
	docker exec -it ${CONTAINER_NAME} make -C /home/app build-dev

app-build-prod: ## 🚀App - Builds the App in Production Mode (Compressed Files)
	docker exec -it ${CONTAINER_NAME} make -C /home/app build-prod

app-browser: ## 🚀App - Starts the App with Browser-Sync for Live Testing
	docker exec -it ${CONTAINER_NAME} make -C /home/app browser
