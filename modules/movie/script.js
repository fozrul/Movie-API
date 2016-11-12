//this determines if the request is good or bad etc

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=fef1753927fd3fd57cb0d1ef20a63fb8", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);