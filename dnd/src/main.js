



try {
    const response = await fetch(`https://api.open5e.com/v1/races/`);

    if (response.status != 200){
        throw new Error(response);
    } else {
        const data = await response.json();
        const races = data.results;

        races.forEach(r => {
                document.querySelector(".stuff")
                    .insertAdjacentHTML("beforeend",`
                        <div></div>
                    `)
        })
    }
} catch(error) {
    console.log(error);
}



