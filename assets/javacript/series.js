const filmContainer = document.getElementById('filmContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
let filmCount = 0;
const filmsPerPage = 4;

async function filmleriGetir() {
    const url = 'https://www.episodate.com/api/most-popular';

    try {
        const response = await fetch(url);
        const data = await response.json();

        const gösterilecekFilmler = data.tv_shows.slice(filmCount, filmCount + filmsPerPage);

        gösterilecekFilmler.forEach(film => {
            const filmDiv = document.createElement('div');
            filmDiv.classList.add('film');

            const img = document.createElement('img');
            img.src = film.image_thumbnail_path;
            img.alt = `${film.name} Önizleme`;
            img.style.width = '100%';
            img.style.height = '400px';

            filmDiv.appendChild(img);

            filmDiv.innerHTML += `
                <h3 style="color: white;">${film.name}</h3>
            `;

            Object.assign(filmDiv.style, {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '10px',
                height: 'auto',
            });

            filmContainer.appendChild(filmDiv);
        });

        filmCount += filmsPerPage;
    } catch (error) {
        console.error('Filmler tapilmadi', error);
    }
}

filmleriGetir();

showMoreBtn.addEventListener('click', filmleriGetir);

searchBtn.addEventListener('click', () => {
    const aramaKelimesi = searchInput.value.trim().toLowerCase();
    const filmler = document.querySelectorAll('.film');

    filmler.forEach(film => {
        const filmAdı = film.querySelector('h3').textContent.toLowerCase();
        if (filmAdı.includes(aramaKelimesi)) {
            film.style.display = 'block';
        } else {
            film.style.display = 'none';
        }
    });
});