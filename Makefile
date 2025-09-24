.PHONY: install serve build clean help

# Default target
help:
	@echo "Available targets:"
	@echo "  install    - Install dependencies (bundle install)"
	@echo "  serve      - Serve the site locally with live reload"
	@echo "  build      - Build the site for production"
	@echo "  clean      - Clean build artifacts"
	@echo "  help       - Show this help message"

# Install dependencies
install:
	bundle install

# Serve the site locally
serve:
	bundle exec jekyll serve

# Build the site for production
build:
	bundle exec jekyll build

# Clean build artifacts
clean:
	bundle exec jekyll clean