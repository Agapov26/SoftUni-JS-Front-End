function loadRepos() {
   
   const url = "https://api.github.com/users/testnakov/repos";

    fetch(url)
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("res").textContent = data;
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
            document.getElementById("res").textContent = "An error occurred while fetching the repositories.";
        });
}