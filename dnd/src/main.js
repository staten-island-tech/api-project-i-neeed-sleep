
async function page() {
    try {
        const response = await fetch(`https://api.open5e.com/v1/races/`);

        if (response.status != 200){
            throw new Error(response);
        } else {
            const data = await response.json();
            const races = data.results;

            races.forEach(r => {
                document.querySelector("#stuff")
                    .insertAdjacentHTML("beforeend",`
                        <div class = "card">
                            <h2 id="name">${r.name}</h2>
                            <h2 id="desc">${r.asi_desc}</h2>
                            <h2 id="desc">${r.alignment}</h2>
                            <a href="${r.document_url}"><h2 id="doc">This race is from ${r.document_title}</h2></a>  
                            <button id = "details">More Details</button>
                        </div>
                        <br>
                    `)
            })

            document.querySelectorAll("#details").forEach(i => {
                i.addEventListener("click", s => {
                    let n = s.querySelector("#name").value;
                    let race = races.filter(race => race.name == n);
                    document.querySelector("#stuff").innerHTML(`
                        <h1>${n}</h1>
                        <h2>${race.asi_desc}</h2>
                        <h2 id="desc">${r.alignment}</h2>
                        <h2>${race.traits}</h2>
                        <h2>${race.age}</h2>
                        <h2>${race.size}</h2>
                        <h2>${race.speed_desc}</h2>
                        <h2>${race.languages}</h2>
                        <h2>${race.vision}</h2>
                    `)
                })
            });

        }

    } catch(error) {
        console.log(error);
    }
}

page();