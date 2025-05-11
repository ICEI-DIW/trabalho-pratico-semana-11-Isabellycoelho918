document.addEventListener('DOMContentLoaded', function () {
    const API_URL = 'http://localhost:3000';

    // Carregar carrossel com os filmes em "destaques"
    fetch(`${API_URL}/destaques`)
        .then(response => response.json())
        .then(destaques => {
            const carouselContent = document.getElementById('carousel-content');
            destaques.forEach((filme, index) => {
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
        })
        .catch(error => console.error('Erro ao carregar destaques:', error));

    // Carregar filmes em destaque (todosFilmes)
    fetch(`${API_URL}/todosFilmes`)
        .then(response => response.json())
        .then(filmes => {
            const moviesContainer = document.getElementById('movies-container');
            filmes.forEach(filme => {
                const movieCard = `
                    <div class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${filme.titulo}</h5>
                                <p class="card-text">${filme.descricao}</p>
                                <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                `;
                moviesContainer.innerHTML += movieCard;
            });
        })
        .catch(error => console.error('Erro ao carregar filmes:', error));
});




