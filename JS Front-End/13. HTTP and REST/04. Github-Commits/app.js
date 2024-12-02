function loadCommits() {
    
    const username = document.getElementById("username").value;
    const repo = document.getElementById("repo").value;
    const commitsList = document.getElementById("commits");

    commitsList.innerHTML = "";

    try {
        const url = `https://api.github.com/repos/${username}/${repo}/commits`;

        const response =  fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        const commits =  response.json();

        commits.forEach(commit => {
            const author = commit.commit.author.name;
            const message = commit.commit.message;
            const listItem = document.createElement("li");
            listItem.textContent = `${author}: ${message}`;
            commitsList.appendChild(listItem);
        });
        
    } catch (error) {
        const listItem = document.createElement("li");
        listItem.textContent = error.message;
        commitsList.appendChild(listItem);
    }
}