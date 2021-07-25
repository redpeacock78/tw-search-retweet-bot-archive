service = 
dist =
name =
mode = 

.PHONY: up
up: ## Start the container (ARGS: service)
ifeq ($(service), '')
	@docker-compose up -d --scale gh-app=0
else
	@docker-compose up -d --scale gh-app=0 ${service}
endif
.PHONY: build-up
build-up: ## Build the container and get started (ARGS: dist)
ifeq ($(dist), alpine)
	@DOCKER_FILE="Dockerfile.alpine" docker-compose up -d --build --scale gh-app=0
else
	@docker-compose up -d --build --scale gh-app=0
endif
.PHONY: start
start: ## Start an existing container as a service
	@docker-compose start
.PHONY: stop
stop: ## Stop running containers without deleting them
	@docker-compose stop
.PHONY: down
down: ## Stop the container and delete the container, network, volume, and image created in up
	@docker-compose down
.PHONY: down-rm
down-rm: ## Stop the container and delete the container, network, volume, and image created in up (including the named volume)
	@docker-compose down --volume
.PHONY: log
log: ## View the log (ARGS: name)
	@docker-compose logs ${name}
.PHONY: test
test:
ifeq ($(mode), watch)
	@docker-compose up -d db && \
	until DB_HOST="127.0.0.1" python3 libs/db_check.py 2>/dev/null; do sleep 1; done && \
	SEARCH_QUERY="test" SEARCH_LIMIT="10" DB_HOST="127.0.0.1" yarn test-watch && \
	docker-compose stop db
else ifeq ($(mode), coverage)
	@docker-compose up -d db && \
	until DB_HOST="127.0.0.1" python3 libs/db_check.py 2>/dev/null; do sleep 1; done && \
	SEARCH_QUERY="test" SEARCH_LIMIT="10" DB_HOST="127.0.0.1" yarn test:coverage && \
	docker-compose stop db || \
	(docker-compose stop db && exit 1)
else
	@docker-compose up -d db && \
	until DB_HOST="127.0.0.1" python3 libs/db_check.py 2>/dev/null; do sleep 1; done && \
	SEARCH_QUERY="test" SEARCH_LIMIT="10" DB_HOST="127.0.0.1" yarn test && \
	docker-compose stop db || \
	(docker-compose stop db && exit 1)
endif
.PHONY: gh-action
gh-action:
	@docker-compose up -d db && \
	docker-compose up gh-app && \
	docker-compose stop db && \
	sudo chown -R ${USER}:${USER} ./docker

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
