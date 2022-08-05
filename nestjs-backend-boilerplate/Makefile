SHELL := /bin/bash

init-test:
	scripts/init-test-data.sh

sync-220:
	rsync -avhzL --delete \
		--no-perms --no-owner --no-group \
		--exclude .git \
		--filter=":- .gitignore" \
		. sotatek@172.16.1.220:/home/sotatek/sota-dex-be
