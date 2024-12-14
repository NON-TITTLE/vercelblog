console.log('Happy developing ✨');
// Array de publicaciones del blog
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const obsidianNotePath = '/ruta/a/tu/nota';
const jekyllPostPath = '/ruta/a/tu/blog/_posts';
const repoPath = '/ruta/del/repositorio';

// Leemos la nota de Obsidian
const noteContent = fs.readFileSync(path.join(obsidianNotePath));

// Añadimos el front matter al comienzo
const newPostContent = `---
layout: post
title:  "My post"
date:   ${new Date().toISOString()}
categories: blog
---
${noteContent}`;

// Creamos el nombre del nuevo archivo basado en la fecha y el título del post
const fileName = `${new Date().toISOString().slice(0, 10)}-mi-post.md`;

// Creamos la nueva publicación en la carpeta de publicaciones de Jekyll
fs.writeFileSync(path.join(jekyllPostPath, fileName), newPostContent);

// Entra al repositorio
process.chdir(repoPath);

// Hacemos commit y push
execSync('git add .');
execSync('git commit -m "Add new blog post"');
execSync('git push');