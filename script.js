const newLi = document.createElement("li")
const newImg = document.createElement("img")
const posterUl = document.getElementById("moviePosters").getElementsByTagName("ul")[0]

const posterLi = movieDatabase.Movies.map((item) => {
    return item.Poster
});
console.log(posterLi);



function addPosters(item) {
    posterUl.appendChild(newLi.appendChild(newImg.setAttribute("src", posterLi)))
}

const linkPosters = posterLi.forEach(addPosters);


console.log("-------------------------------------")

const movieTitles = movieDatabase.Movies.map((item) => {
    return item.Title
})

console.log(movieTitles)

const avengerMovies = movieDatabase.Movies.filter((item) => {
    return item.Title.includes('Avengers')
});
console.log("avenger movies", avengerMovies)

const xmenMovies = movieDatabase.Movies.filter((item) => {
    return item.Title.includes('X-Men')
});
console.log("X-Men", xmenMovies)

const princessMovies = movieDatabase.Movies.filter((item) => {
    return item.Title.includes('Princess')
});
console.log("Princess movies", princessMovies)

const batmanMovies = movieDatabase.Movies.filter((item) => {
    return item.Title.includes('Batman')
});
console.log("Batman movies", batmanMovies)


