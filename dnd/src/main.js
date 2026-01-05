async function page() {
    try {
        const response = await fetch(`https://api.open5e.com/v1/races/`);

        if (response.status != 200){
            throw new Error(response);
        } else {
            const data = await response.json();
            const races = data.results;

            //HEADER + SEARCHBAR CODE, also, scratch the breadcrumbs, these arent sprt pages S

            races.forEach(r => {
                document.querySelector("#stuff")
                    .insertAdjacentHTML("beforeend",`
                        <div id = "card" class="font-serif box-border w-7/10 l-150 border-3 text-yellow-900 justify-self-center bg-sky-100">
                            <div id="name" class="font-bold">${r.name}</div>
                            <div id="desc" class="">${r.asi_desc}</div>
                            <div id="desc" class="">${r.alignment}</div>
                            <a href="${r.document__url}"><div id="doc" class="underlines">This race is from ${r.document__title}</div></a>  
                            <button class="bg-rose-950 hover:bg-rose-900 text-yellow-900 font-bold py-2 px-4 rounded-full duration-300 ease-out" id = "details">More Details</button>
                        </div>
                        <br>
                    `)
            })

            document.querySelectorAll("#details").
                forEach(i => {i.addEventListener("click", s => {
                    let n = s.target.closest("#name").value;
                    let race = races.filter(race => race.name == n);

                    document.querySelector("#stuff").innerHTML = 
                        `<div class="font-serif">
                            <button class="py-2 px-4 rounded-full">EXIT DETAILS</button>
                            <h1>${n}</h1>
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
                            <h2>Vision</h2>
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