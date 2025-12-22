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
                        <div id = "card" class="box-border w-7/10 l-100 border-3 text-orange-950 justify-self-center"
                        style=" background-image: url('https://i.pinimg.com/originals/6d/ef/d6/6defd669e0329347b62fc1f0159ec8d6.jpg'); background-position:center,center; width:90%;">
                            <div id="name" class="font-serif font-bold">${r.name}</div>
                            <div id="desc" class="font-serif">${r.asi_desc}</div>
                            <div id="desc" class="font-serif">${r.alignment}</div>
                            <a href="${r.document__url}"><div id="doc" class="font-serif">This race is from ${r.document__title}</div></a>  
                            <button id = "details" class="justify-self-end-safe">More Details</button>
                        </div>
                        <br>
                    `)
            })

            document.querySelectorAll("#details").forEach(i => {
                i.addEventListener("click", s => {
                    let n = s.querySelector("#name").value;
                    let race = races.filter(race => race.name == n);
                    document.querySelector("#stuff").innerHTML = 
                        `<div>
                            <div>${n}</div>
                            <br>
                            ${race.asi_desc}
                            <br>
                            ${r.alignment}
                            <br>
                            ${race.traits}
                            <br>
                            ${race.age}
                            <br>
                            ${race.size}
                            <br>
                            ${race.speed_desc}
                            <br>
                            ${race.languages}
                            <br>
                            ${race.vision}
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