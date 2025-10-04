async function fetchData() {
    const response = await fetch("./travel_recommendation_api.json");
    const data = await response.json();
    return data;
}


async function handleSearch(){
    const searchInput = document.getElementById("searchField");
    const text = searchInput.value.toLowerCase().trim();
    let results = [];
    const data = await fetchData().then((data) => {
    return data;
})
const resultContainer = document.getElementById("searchResult");
    if (text === "beach" || text === "beaches") {
        results = data.beaches;
      } else if (text === "temple" || text === "temples") {
        results = data.temples;
      } else if (text === "country" || text === "countries") {
        results = data.countries;
      } else {
        results = ["No matches found."];
      }
      resultContainer.replaceChildren()
    if (results[0] == "No matches found.") {
        window.alert("No matches found")
    } else {
        results.forEach(element => {
        resultContainer.appendChild(createTravelCard(element));
    });
    }
}

function handleReset(){
    const searchInput = document.getElementById("searchField");
    searchInput.value = "";
    const resultContainer = document.getElementById("searchResult");
    resultContainer.replaceChildren();
}


function createTravelCard(data){
    let containerElement = document.createElement("div");
    let nameElement = document.createElement("p");
    let imageElement = document.createElement("img")
    let descriptionElement = document.createElement("p")
    nameElement.innerText = data.name;
    descriptionElement.innerText = data.description;
    imageElement.src = data.imageUrl
    imageElement.style.width = "400px";
    containerElement.appendChild(nameElement)
    containerElement.appendChild(descriptionElement)
    containerElement.appendChild(imageElement)

    return containerElement;
}