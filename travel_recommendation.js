function search(query) {
    const recs = document.getElementById('recs');
    recs.innerHTML = ''; //reset the contents

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if(query.includes('beach') || query.includes('beaches'))
            {
                data.beaches.forEach(beach => {
                    const beachRec = document.createElement('div');
                    beachRec.innerHTML = `<h2>${beach.name}</h2>
                        <img src="${beach.imageUrl}" alt="${beach.name}">
                        <p>${beach.description}</p>`;
                    recs.appendChild(beachRec);
                    console.log(`Found beach ${beach.name}`);
                    })
            }
            if(query.includes('temple') || query.includes('temples'))
            {
                data.temples.forEach(temple => {
                    const templeRec = document.createElement('div');
                    templeRec.innerHTML = `<h2>${temple.name}</h2>
                        <img src="${temple.imageUrl}" alt="${temple.name}">
                        <p>${temple.description}</p>`;
                    recs.appendChild(templeRec);
                    console.log(`Found temple ${temple.name}`);
                    })
            }
            if(query.includes('country') || query.includes('countries'))
            {
                data.countries.forEach(country => {
                    console.log(`Found country ${country.name}`);
                    country.cities.forEach(city => {
                        const cityRec = document.createElement('div');
                        cityRec.innerHTML = `<h2>${city.name}</h2>
                            <img src="${city.imageUrl}" alt="${city.name}">
                            <p>${city.description}</p>`;
                        recs.appendChild(cityRec);
                        console.log(`Found city ${city.name}`);
                    })
                })
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        })

}

function clearSearch() {
    const recs = document.getElementById('recs');
    const searchBar = document.getElementById('searchbar');
    recs.innerHTML = ''; //reset the contents
    searchBar.value = '';
}

document.getElementById('search-button').addEventListener('click', function() {
    search(document.getElementById('searchbar').value.toLowerCase());
});
document.getElementById('clear-button').addEventListener('click', clearSearch);