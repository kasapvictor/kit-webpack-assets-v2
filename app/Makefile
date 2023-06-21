# include .env - можно брать настройки из .env файла, к переменным обращаться так же $(VARIABLE)
include .env

# HOST := 0.0.0.0
# PORT := 4001

# вызывает по умолчанию команду help.
.PHONY: help

help: ### Ignore - Show current help message
	@echo "Available 🚀App commands:"
	@grep -E '^[a-zA-Z_-]+:.*?🚀.*$$' ./Makefile | awk '!/## Ignore/' | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

install-npm: ## 🚀App - Installs NPM Required NPM Packages for the App
	npm install

install-yarn: ## 🚀App - Installs YARN Required NPM Packages for the App
	yarn install

start: ## 🚀App - Starts the App Server in Development Mode
	HOST=$(HOST) PORT=$(PORT_1) NODE_ENV=development npx webpack serve

build-dev: ## 🚀App - Builds the App in Development Mode (Uncompressed Files)
	NODE_ENV=development npx webpack --mode development

build-prod: pretty lint ## 🚀App - Builds the App in Production Mode (Compressed Files)
	NODE_ENV=production npx webpack --mode production

browser: ## 🚀App - Starts the App with Browser-Sync for Live Testing
	npx browser-sync --watch --no-notify --host $(HOST) --port $(PORT_2) dist

pretty: ## 🚀App - Make pretty files
	npx prettier --write "src/**/*.{css,scss,js,ts}"

lint: ## 🚀App - Check & Fix code
	npx eslint --fix src

pre-commit: pretty lint ## 🚀App - Check Pre commit code
