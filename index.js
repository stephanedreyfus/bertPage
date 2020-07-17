// Cache frequently used elements
const $jokeText = document.getElementById("#joke-content");

// Get that joke while trying to respect the user-agent wishes of the API
async function loadJoke() {
    console.log("In loadJoke");
    const res = await axios.get(
        "https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Prof Dreyfus Archives (https://github.com/stephanedreyfus/bertPage)",
            }
        }
    );
    console.log("Here is the result", res);
    $jokeText.innerText = res.joke;
}


// Code for later use when "changing" nav bar page active style.
// $(".nav .nav-link").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//  });
