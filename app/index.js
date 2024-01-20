'use strict'

const API_KEY = `1baa3467`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


async function fetchData(keyword) {

    try {

        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('HTTP ERROR');
        }

        const fetchedData = await response.json();
        return fetchedData;

    } catch (err) {
        console.error('ERROR WITH API CALL');
    }
}


async function fetchAndSearchUserInput() {

    const container = document.getElementById('container');
    const inputValue = document.getElementById('searchInput').value.toLowerCase().trim();
    container.style.transform = 'translateY(-30%)';

    const totalResults = document.getElementById('totalResults');

    if (totalResults) {
        clearOldResults();
    }
    document.getElementById('searchInput').value = '';


    try {

        if (!inputValue) {
            renderError('Enter a keyword');
            setTimeout(() => {
                clearError();
            }, 1500);
            return;
        }

        const data = await fetchData(inputValue);

        if (data.Response === 'True') {
            renderResults(data.Search);
            renderTotalRes(data.totalResults);
        } else {
            renderError('Results Not Found');
            clearOldResults();
        }

    } catch (err) {
        console.error('Search Error: ');
        throw err;
    }

}


function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');

    resultsContainer.innerHTML = '';

    results.forEach(element => {
        const resultCard = document.createElement('div');
        resultCard.className = 'resultCard';

        const resultImg = document.createElement('img');
        resultImg.src = element.Poster;
        resultImg.alt = element.Title;
        resultImg.className = 'resultImg';
        resultCard.appendChild(resultImg);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'infoDiv';
        infoDiv.innerHTML = `<h4>${element.Title}</h4>
        <p> ${element.Year} - ${element.Type}</p>`;

        resultCard.appendChild(infoDiv);
        resultsContainer.appendChild(resultCard);
    });
}


function renderTotalRes(totalResults) {
    const container = document.getElementById('container');
    const totalResContainer = document.createElement('div');
    totalResContainer.id = "totalResults";
    totalResContainer.innerHTML = `<p>Total Result: ${totalResults}</p>`

    container.appendChild(totalResContainer);
}


function clearTotalRes() {
    const totalResults = document.getElementById('totalResults');
    totalResults.innerHTML = '';
}


function renderError(msg) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `<div class=err>${msg}</div>`;
}


function clearError() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
}

function clearOldResults() {
    const totalResults = document.getElementById('totalResults');
    totalResults.innerHTML = '';
}


function main() {


    async function showNewestMovies() {
        try {
            const data = await fetchData('movie');

            if (data.Response === 'True') {
                const randomizeMovies = data.Search.sort(() => Math.random() - 0.5);

                // Select the first four movies
                const randomMovies = randomizeMovies.slice(0, 3);
                renderResults(randomMovies);

            }

        } catch (err) {
            console.error('Search Error: ');
            throw err;
        }
    }
    showNewestMovies();



    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', fetchAndSearchUserInput);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            fetchAndSearchUserInput();
        }
    });

}


window.addEventListener('load', main);


