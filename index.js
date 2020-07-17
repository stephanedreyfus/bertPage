// Cache frequently used elements
const $jokeText = document.getElementById("joke-content");

// Get that joke while trying to respect the user-agent wishes of the API
async function loadJoke() {
    const res = await axios.get(
        "https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Prof Dreyfus Archives (https://github.com/stephanedreyfus/bertPage)",
            }
        }
    );
    $jokeText.innerText = res.data.joke;
}

loadJoke();

// Code for later use when "changing" nav bar page active style.
// $(".nav .nav-link").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//  });
