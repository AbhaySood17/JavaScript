const AccessKey = "jfYXc_c_-p8Jnr-Zj0cKlYIwVoUw6WAT0JTurMfPfmk";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-image");
const searchresults = document.querySelector(".search-results");
const showmore = document.getElementById("show-more-button");

let inputdata = ""
let page = 1 ;

async function serachimages(){
    inputdata = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${AccessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page===1){
        searchresults.innerHTML= "";
    }
    results.map((result)=>{
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src= result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement('a');
        imagelink.herf = result.links.innerHTML;
        imagelink.target= "_blank";
        imagelink.textcontent = result.alt_description;

        imagelink.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
    });
    page++;
    if(page>1){
        showmore.style.display = "block";
    }
    
}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    serachimages();
})
showmore.addEventListener("click",()=>{
    serachimages();
})
