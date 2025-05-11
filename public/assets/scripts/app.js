document.addEventListener('DOMContentLoaded', function () {
  fetch('filmes.json')
      .then(response => response.json())
      .then(data => {
          // Carregar carrossel
          const carouselContent = document.getElementById('carousel-content');
          data.destaques.forEach((filme, index) => {
              const activeClass = index === 0 ? 'active' : '';
              const item = `
                  <div class="carousel-item ${activeClass}">
                      <img src="${filme.imagem}" class="d-block w-100" alt="${filme.titulo}">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>${filme.titulo}</h5>
                          <p>${filme.descricao}</p>
                      </div>
                  </div>
              `;
              carouselContent.innerHTML += item;
          });

          // Carregar filmes em destaque
          const moviesContainer = document.getElementById('movies-container');
          data.todosFilmes.forEach(filme => {
              const movieCard = `
                  <div class="col-md-3 mb-4">
                      <div class="card">
                          <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
                          <div class="card-body">
                              <h5 class="card-title">${filme.titulo}</h5>
                              <p class="card-text">${filme.descricao}</p>
                              <a href="${filme.link}" class="btn btn-primary">Ver Detalhes</a>
                          </div>
                      </div>
                  </div>
              `;
              moviesContainer.innerHTML += movieCard;
          });
      })
      .catch(error => console.error('Erro ao carregar os filmes:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  const carouselContent = document.getElementById('carousel-content');

  const filmes = [
      {
          title: "Filme 1",
          image: "emilia.jpg",
          alt: "Filme 1"
      },
      {
          title: "Filme 2",
          image: "sub.jpg",
          alt: "Filme 2"
      },
      {
          title: "Filme 3",
          image: "ainda.jpg",
          alt: "Filme 3"
      },
      {
          title: "Filme 4",
          image: "wicked.jpg",
          alt: "Filme 4"
      }
  ];

  filmes.forEach((filme, index) => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-item');
      if (index === 0) slide.classList.add('active');

      const img = document.createElement('img');
      img.src = filme.image;
      img.classList.add('d-block', 'w-100');
      img.alt = filme.alt;

      slide.appendChild(img);
      carouselContent.appendChild(slide);
  });

  const carousel = document.getElementById('carouselFilmes');
  let slideIndex = 0;

  function nextSlide() {
      slideIndex++;
      if (slideIndex >= filmes.length) {
          slideIndex = 0;
      }
      const carouselItems = carousel.querySelectorAll('.carousel-item');
      carouselItems.forEach(item => item.classList.remove('active'));
      carouselItems[slideIndex].classList.add('active');
  }

  
  setInterval(nextSlide, 3000);  
});



