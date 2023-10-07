const indianMovies = [
    {
        "title": "Bollywood Dreams",
        "language": "Hindi",
        "releaseYear": 2022,
        "director": "Rajesh Kapoor",
        "rating": 7.9
    },
    {
        "title": "Chennai Chronicles",
        "language": "Tamil",
        "releaseYear": 2021,
        "director": "Priya Rajan",
        "rating": 7.0
    },
    {
        "title": "Mumbai Melodies",
        "language": "Marathi",
        "releaseYear": 2023,
        "director": "Amit Deshmukh",
        "rating": 8.2
    },
    {
        "title": "Rajasthan Rhapsody",
        "language": "Rajasthani",
        "releaseYear": 2020,
        "director": "Meera Sharma",
        "rating": 6.8
    },
    {
        "title": "Kolkata Confessions",
        "language": "Bengali",
        "releaseYear": 2022,
        "director": "Amit Bannerjee",
        "rating": 7.5
    },
    {
        "title": "Punjab Diaries",
        "language": "Punjabi",
        "releaseYear": 2021,
        "director": "Gurpreet Kaur",
        "rating": 7.1
    },
    {
        "title": "Hyderabad Hues",
        "language": "Telugu",
        "releaseYear": 2023,
        "director": "Venkat Reddy",
        "rating": 8.0
    },
    {
        "title": "Gujarati Gazals",
        "language": "Gujarati",
        "releaseYear": 2020,
        "director": "Rita Patel",
        "rating": 6.5
    },
    {
        "title": "Kashmir Ki Kahani",
        "language": "Kashmiri",
        "releaseYear": 2022,
        "director": "Arun Singh",
        "rating": 7.7
    },
    {
        "title": "Assamese Adventures",
        "language": "Assamese",
        "releaseYear": 2021,
        "director": "Manoj Barua",
        "rating": 6.9
    },
    {
        "title": "Bihar Ki Baat",
        "language": "Bhojpuri",
        "releaseYear": 2022,
        "director": "Amit Singh",
        "rating": 7.3
    },
    {
        "title": "Odia Odyssey",
        "language": "Odia",
        "releaseYear": 2020,
        "director": "Sunita Mohanty",
        "rating": 6.7
    },
    {
        "title": "Kerala Chronicles",
        "language": "Malayalam",
        "releaseYear": 2023,
        "director": "Anand Menon",
        "rating": 8.4
    },
    {
        "title": "Gangetic Glimpses",
        "language": "Bengali",
        "releaseYear": 2022,
        "director": "Debabrata Ghosh",
        "rating": 7.8
    },
    {
        "title": "Goa Getaway",
        "language": "Konkani",
        "releaseYear": 2021,
        "director": "Maria D'Souza",
        "rating": 7.2
    }
];

const filteredMovies = indianMovies.filter(movie => {
    return movie["releaseYear"] > 2021 && movie.rating > 8.0;

    // return movie.releaseYear > 2021 && movie.rating > 8.0;  --both line

});

console.log(filteredMovies);




