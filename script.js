const memeBtn = document.getElementById("generate-Meme");
const memeImg = document.getElementById("meme-img");
const memeTitle = document.getElementById("meme-title");
const memeAuthor = document.getElementById("meme-author");

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeAuthor.innerHTML = author;
    memeTitle.innerHTML = title;
}

const GenerateMeme = () => {
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author)
    })
}

memeBtn.addEventListener("click", GenerateMeme);