
let names = [];
let descs = [];
let asis = [];
let ages = [];
let alignments = [];
let sizes = [];
let speeds = [];
let languagess = [];
let visions = [];
let traitss = [];
let document = [];

async function getData(){
    try{
        const response = await fetch(`https://api.open5e.com/v1/races/`);

        if (response.status != 200){
            throw new Error(response);
        } else {
            const data = await response.json();
            console.log(data.results);
        }
    } catch(error) {
        console.log(error);
}}

getData();

/*

data.results.forEach(i => {
                    names.push(i.name);
                    descs.push(i.desc);
                    asis.push(i.asi_desc);
                    ages.push(i.age);
                    alignments.push(i.alignment);
                    sizes.push(i.size);
                    speeds.push(i.speed_desc);
                    languagess.push(i.languages);
                    document.push(i.document_title);

                    if (i.vision === ""){
                        visions.push("This race has regular vision.");
                    } else {
                        visions.push(i.vision);
                    }
                    
                    if (i.traits === ""){
                        traitss.push("This race has no special traits");
                    } else {
                        traitss.push(i.traits);
                    }
                }); */