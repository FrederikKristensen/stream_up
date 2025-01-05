// alert("The test extension is up and running")

FetchData();

async function fetchdata(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);
    }
}

// https://www.youtube.com/watch?v=37vxWr0WgQk