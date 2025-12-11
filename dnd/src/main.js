
async function getData(){
    try{
        const response = await fetch(`https://api.open5e.com/v1/races/`);

        if (response.status != 200){
            throw new Error(response);
        }else {
            const data = await response.json();
            document.getElementById("api-response").textContent = data.name;
        }
    } catch(error) {
        console.log(error);
    }
}

getData('alseid');