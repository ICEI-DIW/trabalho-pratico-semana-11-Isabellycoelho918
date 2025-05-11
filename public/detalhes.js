document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const filmeId = params.get('id');
    
    const filmes = [
        {
            "id": 1,
            "titulo": "Procurando o Nemo",
            "descricao": "A trama acompanha o peixe-palhaço Marlin, um pai solteiro que sai em uma busca incansável por seu filho Nemo, que saiu em mar aberto e acabou sendo capturado por um pescador. Durante sua jornada, ele conhece Dory, uma peixinha que sofre de perda de memória recente e que decide ajudá-lo em sua busca.",
            "imagem": "nemo5.webp",
            "imagens": [
                { "src": "n.jpg", "titulo": "Personagens" },
                { "src": "e.jpg", "titulo": "Dory" },
                { "src": "m.jpg", "titulo": "Marlin e Nemo" }
            ],
            "ano": 2003,
            "genero": "Animação, Aventura, Infantil",
            "diretor": "Andrew Stanton",
            "duracao": "100 min",
            "link": "detalhes.html?id=1"
        },
        {
            "id": 2,
            "titulo": "John Wick",
            "descricao": "John Wick é um ex-assassino de aluguel, agora aposentado, que é obrigado a voltar ao submundo do crime após o roubo do seu carro e a morte do seu cachorro, um presente da sua falecida esposa. A história se concentra na sua busca por vingança e nas consequências.",
            "imagem": "jon.png",
            "imagens": [
                { "src": "j.jpg", "titulo": "John Wick" },
                { "src": "o.jpg", "titulo": "Charon" },
                { "src": "h.jpg", "titulo": "Winston" }
            ],
            "ano": 2014,
            "genero": "Ação, Crime, Thriller",
            "diretor": "Chad Stahelski",
            "duracao": "101 min",
            "link": "detalhes.html?id=2"
        },
        {
            "id": 3,
            "titulo": "Parasita",
            "descricao": "Toda a família de Ki-taek está desempregada, vivendo na miséria. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrar também na abastada família.",
            "imagem": "parasita.jpg",
            "imagens": [
                { "src": "parasita1.jpg", "titulo": "Park Dong-ik" },
                { "src": "parasita2.jpg", "titulo": "Ki-jung" },
                { "src": "parasita3.jpg", "titulo": "ki-woo" }
            ],
            "ano": 2019,
            "genero": "Drama, Suspense, Comédia",
            "diretor": "Bong Joon-ho",
            "duracao": "132 min",
            "link": "detalhes.html?id=3"
        },
        {
            "id": 4,
            "titulo": "Fratura",
            "descricao": "Depois que sua esposa e filha desaparecem do pronto-socorro, um homem fica convencido de que o hospital está escondendo alguma coisa. Ray sofre uma grande tragédia quando a sua filha, Peri, cai e fratura o braço. Após isso coisas inexplicáveis começam a acontecer.",
            "imagem": "Fratu.webp",
            "imagens": [
                { "src": "fratura1.jpg", "titulo": "Ray Monroe" },
                { "src": "fratura2.jpg", "titulo": "Joanne Monroe" },
                { "src": "fratura3.jpg", "titulo": "Peri Monroe" }
            ],
            "ano": 2019,
            "genero": "Mistério, Thriller",
            "diretor": "Brad Anderson",
            "duracao": "100 min",
            "link": "detalhes.html?id=4"
        },
        {
            "id": 5,
            "titulo": "Todo tempo que temos",
            "descricao": "Almut e Tobias são unidos por um encontro surpresa que muda suas vidas. Ao embarcarem em um caminho desafiado pelos limites do tempo, eles aprendem a valorizar cada momento de sua história de amor não convencional.",
            "imagem": "tempo.jpeg",
            "imagens": [
                { "src": "todo1.jpg", "titulo": "Almut" },
                { "src": "todo2.jpg", "titulo": "Tobias" },
                { "src": "todo3.jpg", "titulo": "Jade" }
            ],
            "ano": 2020,
            "genero": "Drama, Romance",
            "diretor": "Caroline Link",
            "duracao": "111 min",
            "link": "detalhes.html?id=5"
        },
        {
            "id": 6,
            "titulo": "Carros",
            "descricao": "Relâmpago McQueen é um carro de corridas ambicioso, que em sua 1ª temporada na Copa Pistão torna-se um astro. Ele sonha em se tornar o 1º estreante a vencer o campeonato, e assinar um patrocínio com a cobiçada Dinoco.",
            "imagem": "car.jpg",
            "imagens": [
                { "src": "carros1.jpg", "titulo": "Relampago McQueen" },
                { "src": "carros2.jpg", "titulo": "Mater" },
                { "src": "carros3.jpg", "titulo": "Sally" }
            ],
            "ano": 2006,
            "genero": "Animação, Aventura, Comédia",
            "diretor": "John Lasseter",
            "duracao": "117 min",
            "link": "detalhes.html?id=6"
        },
        {
            "id": 7,
            "titulo": "La La Land",
            "descricao": "O pianista Sebastian conhece a atriz Mia, e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva Los Angeles, os jovens tentam fazer o relacionamento amoroso dar certo, enquanto perseguem fama e sucesso.",
            "imagem": "lala.webp",
            "imagens": [
                { "src": "lalaland1.jpg", "titulo": "Mia" },
                { "src": "lalaland2.jpg", "titulo": "Sebastian" },
                { "src": "lalaland3.jpg", "titulo": "Sarah" }
            ],
            "ano": 2016,
            "genero": "Musical, Drama, Romance",
            "diretor": "Damien Chazelle",
            "duracao": "128 min",
            "link": "detalhes.html?id=7"
        },
        {
            "id": 8,
            "titulo": "É assim que acaba",
            "descricao": "Lily Bloom decide começar uma nova vida em Boston. Lily acredita que encontrou o amor verdadeiro com Ryle. Porém, as coisas se complicam quando um incidente doloroso desencadeia um trauma do passado e também, quando seu primeiro amor reaparece.",
            "imagem": "acaba.jpg",
            "imagens": [
                { "src": "assim1.jpg", "titulo": "Lily" },
                { "src": "assim2.jpg", "titulo": "Atlas" },
                { "src": "assim3.jpg", "titulo": "Ryan" }
            ],
            "ano": 2022,
            "genero": "Drama, Romance",
            "diretor": "Claire McCarthy",
            "duracao": "105 min",
            "link": "detalhes.html?id=8"
        }
    ];

  
    const filme = filmes.find(f => f.id == filmeId);

    if (filme) {
        
        document.getElementById('imagem-filme').src = filme.imagem;
        document.getElementById('titulo-filme').textContent = filme.titulo;
        document.getElementById('descricao-filme').textContent = filme.descricao;

       
        const detalhesList = document.getElementById('outros-detalhes');
        detalhesList.innerHTML = `
            <li><strong>Ano:</strong> ${filme.ano}</li>
            <li><strong>Gênero:</strong> ${filme.genero}</li>
            <li><strong>Diretor:</strong> ${filme.diretor}</li>
            <li><strong>Duração:</strong> ${filme.duracao}</li>
        `;

        const imagensContainer = document.getElementById('fotos-vinculadas');
        imagensContainer.innerHTML = ''; 
        filme.imagens.forEach(imagem => {
            imagensContainer.innerHTML += `
                <div class="col-md-4 mb-3">
                    <img src="${imagem.src}" class="img-fluid" alt="Imagem do Filme">
                    <h5 class="text-center mt-2">${imagem.titulo}</h5>
                </div>
            `;
        });
    }
});

filme.imagens.forEach(imagem => {
    imagensContainer.innerHTML += `
        <div class="col-md-4 mb-4 d-flex flex-column align-items-center">
            <img src="${imagem.src}" class="img-fluid rounded shadow personagem-img" alt="${imagem.titulo}">
            <h5 class="text-center mt-2">${imagem.titulo}</h5>
        </div>
    `;
});

