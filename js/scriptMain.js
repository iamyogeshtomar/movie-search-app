const input = document.querySelector("#search-query");
const button = document.querySelector("#submit-search");
const body = document.getElementsByTagName("body");

const fetchMovie = async (moddedString) => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${moddedString}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "80dfa45c4fmshf05c2f8c65bbb48p11e4e4jsn89b61d249925",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result.d;
  } catch (error) {
    console.error(error);
  }
};

// const spreadCard = (searchResults) => {

//   searchResults.map((movie) =>{
//     body.innerHTML += `<div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//     <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
//     ${movie.imageURl}
//     </div>
//     <div class="p-6">
//     <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    
//     </h5>
//     <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
//     </p>
//     </div>
//     <div class="p-6 pt-0">
//     <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//     Read More
//     </button>
//     </div>
//     })
// </div>`;
// });

button.addEventListener("click", async(e) => {
  e.preventDefault();
  const queryValue = input.value;
  const queryModdedValue = queryValue.replace(" ", "%20");
  // console.log(queryModdedValue);
  const searchResults = await fetchMovie(queryModdedValue);
  console.log(searchResults)
  // spreadCard(searchResults);
});
