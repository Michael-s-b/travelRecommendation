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
    if (text === "beach" || text === "beaches") {
        results = data.beaches;
      } else if (text === "temple" || text === "temples") {
        results = data.temples;
      } else if (text === "country" || text === "countries") {
        results = data.countries;
      } else {
        results = ["No matches found."];
      }
      console.log(results);
    const resultContainer = document.getElementById("searchResult");
    results.forEach(element => {
        let containerElement = document.createElement("div");
        let nameElement = document.createElement("p");
        let descriptionElement = document.createElement("p")
        nameElement.innerText = element.name;
        descriptionElement.innerText = element.description;
        containerElement.appendChild(nameElement)
        containerElement.appendChild(descriptionElement)
        resultContainer.appendChild(containerElement);
    });
}


