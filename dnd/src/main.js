async function page() {
    try {
        const response = await fetch(`https://api.open5e.com/v1/races/`);

        if (response.status != 200){
            throw new Error(response);
        } else {
            const data = await response.json();
            const races = data.results;

            //HEADER + SEARCHBAR CODE, also, scratch the breadcrumbs, these arent sprt pages 

            //Light dark mode code

            races.forEach(r => {
                document.querySelector("#stuff")
                    .insertAdjacentHTML("beforeend",`
                        <div id = "card" class="box-border w-7/10 l-150 border-3 text-orange-950 justify-self-center"
                        style = "background-image: url('/img/scroll.jpg'); background-position:center; background-size: cover;">
                            <div id="name" class="font-serif font-bold">${r.name}</div>
                            <div id="desc" class="font-serif">${r.asi_desc}</div>
                            <div id="desc" class="font-serif">${r.alignment}</div>
                            <a href="${r.document__url}"><div id="doc" class="font-serif underlines">This race is from ${r.document__title}</div></a>  
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id = "details" >More Details</button>
                        </div>
                        <br>
                    `)
            })

            document.querySelectorAll("#details").
                forEach(i => {i.addEventListener("click", s => {
                    let c = s.target.closest("#card");
                    let n = c.querySelector("#name").value;
                    let race = races.filter(race => race.name == n);
                    document.querySelector("#stuff").innerHTML = 
                        `<div>
                            <h1>${n}</h1>
                            <br>
                            <h3>${race.asi_desc}</h3>
                            <br>
                            <h2>ALignment</h2>
                            <h3>${race.alignment}</h3>
                            <br>
                            <h2>Special Traits</h2>
                            <h3>${race.traits}</h3>
                            <br>
                            <h2>Lifespan</h2>
                            <h3>${race.age}</h3>
                            <br>
                            <h2>Size</h2>
                            <h3>${race.size}</h3>
                            <br>
                            <h2>Walkspeed</h2>
                            <h3>${race.speed_desc}</h3>
                            <br>
                            <h2>Linguistics</h2>
                            <h3>${race.languages}</h3>
                            <br>
                            <h3>${race.vision}</h3>
                            <br>
                        </div>`;
                })
            });

        }

    } catch(error) {
        console.log(error);
    }
}

page();