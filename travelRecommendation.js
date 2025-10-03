async function fetchData() {
    const response = await fetch("./travel_recommendation_api.json");
    const data = await response.json();
    return data;
}

fetchData().then((data) => {
    console.log(data);

})
