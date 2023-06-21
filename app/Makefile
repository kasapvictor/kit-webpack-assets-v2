include .env

install:
	npm ci || npm install

start:
	HOST=$(HOST) PORT=$(PORT_1) NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write "src/**/*.{css,scss,js,ts}"

lint:
	npx eslint --fix src

pre-commit: pretty lint

build-prod:
	NODE_ENV=production npx webpack --mode production

build-dev:
	NODE_ENV=development npx webpack --mode development

watch:
	NODE_ENV=development npx webpack --watch

# for browser-sync
browser:
	npx browser-sync --watch --no-notify --host $(HOST) --port $(PORT_2) dist
