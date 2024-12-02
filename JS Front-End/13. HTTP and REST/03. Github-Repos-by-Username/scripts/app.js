function loadRepos() {
	

	const username = document.getElementById('username').value;
    const reposList = document.getElementById('repos');
    reposList.innerHTML = '';

    try {
        const response = fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const repos = response.json();

        repos.forEach(repo => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = repo.full_name;
            listItem.appendChild(link);
            reposList.appendChild(listItem);
        });

        if (repos.length === 0) {
            const noReposItem = document.createElement('li');
            noReposItem.textContent = 'No repositories found.';
            reposList.appendChild(noReposItem);
        }
    } catch (error) {
        const errorItem = document.createElement('li');
        errorItem.textContent = `Error: Unable to load repositories. ${error.message}`;
        reposList.appendChild(errorItem);
    }
}