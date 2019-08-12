dev-dockerfile := -f docker-compose.dev.yml

build-dev:
	docker-compose $(dev-dockerfile) build
	$(MAKE) dev

dev:
	docker-compose $(dev-dockerfile) up $(variadic_args)

dev-down:
	docker-compose $(dev-dockerfile) down