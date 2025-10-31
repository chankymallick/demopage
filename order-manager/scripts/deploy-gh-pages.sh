#!/bin/bash

# Exit on error
set -e

# Build the project (if necessary)
# npm run build

# Navigate to the docs directory
cd docs

# Initialize a new git repository (if not already initialized)
if [ ! -d ".git" ]; then
    git init
fi

# Add all changes to git
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch
git push -f origin master:gh-pages

# Navigate back to the original directory
cd ..