document.addEventListener("DOMContentLoaded", function() {
  console.log('Happy developing ✨');

  const posts = [
      {
          title: 'Primer Post',
          content: '¡Bienvenido a mi blog minimalista! Aquí encontrarás contenido simple y relevante.'
      },
      {
          title: '¿Por qué un blog minimalista?',
          content: 'Los diseños minimalistas son limpios, rápidos y fáciles de usar. ¡Perfectos para compartir ideas!'
      },
      {
          title: 'Mantén las cosas simples',
          content: 'La clave del éxito en la escritura es mantener las cosas claras, simples y al grano.'
      }
  ];

  const blogContainer = document.getElementById('blog-container');

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    
      blogContainer.appendChild(postElement);
  });
});