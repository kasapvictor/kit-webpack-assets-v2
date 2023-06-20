install:
	npm ci || npm install

rm-rf-dist:
	rm -rf dist

start:
	NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write "src/**/*.{css,scss,js,ts}"

lint:
	npx eslint --fix src

pre-commit: pretty lint

build-prod: rm-rf-dist
	NODE_ENV=production npx webpack --mode production

build-prod-inject: rm-rf-dist
	INJECT=true NODE_ENV=production npx webpack --mode production

build-dev: rm-rf-dist
	NODE_ENV=development npx webpack --mode development

watch: rm-rf-dist
	NODE_ENV=development npx webpack --watch

# for browser-sync
browser:
	npx browser-sync --watch --no-notify --port 4000 --host 0.0.0.0 public
