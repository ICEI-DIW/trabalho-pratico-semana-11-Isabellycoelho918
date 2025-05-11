document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000';
    const params = new URLSearchParams(window.location.search);
    const filmeId = params.get('id');

    if (!filmeId) {
        alert('Filme não especificado.');
        return;
    }

    fetch(`${API_URL}/todosFilmes/${filmeId}`)
        .then(response => response.json())
        .then(filme => {
            document.getElementById('imagem-filme').src = filme.imagem;
            document.getElementById('imagem-filme').alt = filme.titulo;
            document.getElementById('titulo-filme').textContent = filme.titulo;
            document.getElementById('descricao-filme').textContent = filme.descricao;

            const detalhesList = document.getElementById('outros-detalhes');
            detalhesList.innerHTML = `
                <li><strong>Diretor:</strong> ${filme.diretor}</li>
                <li><strong>Gênero:</strong> ${filme.genero}</li>
                <li><strong>Ano:</strong> ${filme.ano}</li>
            `;

            const fotosContainer = document.getElementById('fotos-vinculadas');
            filme.personagens?.forEach(personagem => {
                const personagemHTML = `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img src="${personagem.foto}" class="card-img-top" alt="${personagem.nome}">
                            <div class="card-body">
                                <h5 class="card-title">${personagem.nome}</h5>
                                <p class="card-text">${personagem.descricao}</p>
                            </div>
                        </div>
                    </div>
                `;
                fotosContainer.innerHTML += personagemHTML;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os detalhes do filme:', error);
            alert('Erro ao carregar os dados do filme.');
        });
});

