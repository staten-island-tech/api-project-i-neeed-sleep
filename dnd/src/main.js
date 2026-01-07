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
                        <div id = "card" name = "${r.name}" class="font-serif box-border w-7/10 l-150 border-4 text-yellow-900 justify-self-center bg-sky-100 p-8 m-10">
                            <div class="font-bold text-2xl">${r.name}</div>
                            <div class="text-lg">
                                <div>${r.alignment}</div>
                                <br>
                                <div class="font-bold">Ability Score Increase</div>
                                <div>${r.asi_desc}</div>
                                <br>
                                <div class="font-bold">Age</div>
                                <div>${r.age}</div>
                                <br>
                                <div class="font-bold">Size</div>
                                <div>${r.size}</div>
                                <br>
                                <div class="font-bold">Speed</div>
                                <div>${r.speed_desc}</div>
                                <br>
                                <div class="font-bold">Language</div>
                                <div>${r.languages}</div>
                                <br>
                                <div class="font-bold">Vision</div>
                                <div>${r.vision}</div>
                                <br>
                                <div class="font-bold">Racial Traits</div>
                                <div>${r.traits}</div>
                            </div>
                            
                            <br>
                            <a href="${r.document__url}"><div class="underline">This race is from ${r.document__title}</div></a> 
                        </div>
                    `)
            })

            function fltr(ask){
                document.querySelectorAll("#card").forEach(card => {
                    if(card.getAttribute("name").toLowerCase().includes(ask)){
                        card.style.display = "block";
                    }else{
                        card.style.display = "none";
                    }
                })
            }

            document.querySelector('#search').addEventListener('submit', ask =>{
                ask.preventDefault();
                let input = document.querySelector('#srch').value.toLowerCase();
                fltr(input);
            })
        }

    } catch(error) {
        console.log(error);
    }
}

page();