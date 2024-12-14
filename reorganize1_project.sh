#!/usr/bin/env bash

# Define la raíz del proyecto
PROJECT_ROOT="./webobsidian"

# Crea las carpetas organizadas
mkdir -p "$PROJECT_ROOT/public/images"
mkdir -p "$PROJECT_ROOT/public/styles"
mkdir -p "$PROJECT_ROOT/public/scripts"
mkdir -p "$PROJECT_ROOT/src/components"
mkdir -p "$PROJECT_ROOT/src/layouts"
mkdir -p "$PROJECT_ROOT/src/pages"
mkdir -p "$PROJECT_ROOT/src/styles"
mkdir -p "$PROJECT_ROOT/src/lib"
mkdir -p "$PROJECT_ROOT/src/api"
mkdir -p "$PROJECT_ROOT/tests/unit"
mkdir -p "$PROJECT_ROOT/tests/integration"

# Mueve los archivos a las carpetas correspondientes
mv "$PROJECT_ROOT/styles.css" "$PROJECT_ROOT/src/styles/" 2>/dev/null
mv "$PROJECT_ROOT/script.js" "$PROJECT_ROOT/public/scripts/" 2>/dev/null
mv "$PROJECT_ROOT/index.js" "$PROJECT_ROOT/src/pages/" 2>/dev/null
mv "$PROJECT_ROOT/minimalist_blog.html" "$PROJECT_ROOT/public/" 2>/dev/null
mv "$PROJECT_ROOT/PostTemplate.md" "$PROJECT_ROOT/src/components/" 2>/dev/null
mv "$PROJECT_ROOT/lib/" "$PROJECT_ROOT/src/lib/" 2>/dev/null

# Mueve las configuraciones generales
mv "$PROJECT_ROOT/package.json" "$PROJECT_ROOT/" 2>/dev/null
mv "$PROJECT_ROOT/.gitignore" "$PROJECT_ROOT/" 2>/dev/null
mv "$PROJECT_ROOT/README.md" "$PROJECT_ROOT/" 2>/dev/null

echo "Reorganización completa. ¡Tu proyecto está limpio!"

