# My Movie Engine

API-Project

# Introduction

This project is an Movie App recommendation application. It allows users to search movies by title
or genre, and retrieve information about the movies that match their query.
The API used is <http://www.omdbapi.com/>

## Getting Started

1. Clone or Download the repository: `git clone https://github.com/mariamisaeva/MovieApp.git`
2. Navigate into the directory: `cd MovieApp`
3. Open the index.html file in your preferred web browser.
4. Enter a keyword in the search input and click the "Search" button to retrieve movie results.
5. Alternatively, you can open http://localhost in your browser to see the app running.

## Adding Your API Key

Follow these steps to add your API key to the code:
1. Get an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).
2. Open the `index.html` file in your browser.
3. Enter your own API key in prompt box.
4. Press Ok.

## How It Works

Searches the movie database for movies matching the given search term. Returns an array of movie objects with properties : title, poster, year, and type. with the total number of results.
If no matches are found, not relevant input, or no input, returns an error message.
All responses return JSON data.

## Features 

- Dynamic rendering of movie search results.
- Display of total search results.
- Error handling for unsuccessful API calls.

## Screenshots

<img width="1658" alt="Screenshot 2024-01-20 at 21 51 28" src="https://github.com/mariamisaeva/MovieApp/assets/142991068/35bd3097-61c2-467c-b33a-0bebbf99468c">



<img width="1651" alt="Screenshot 2024-01-20 at 21 53 49" src="https://github.com/mariamisaeva/MovieApp/assets/142991068/d54239e1-91b7-43d6-a819-afe8eec92ef0">



<img width="1652" alt="Screenshot 2024-01-20 at 21 54 04" src="https://github.com/mariamisaeva/MovieApp/assets/142991068/31e63d8b-3203-4795-b2b8-6bbbb9896a0d">



