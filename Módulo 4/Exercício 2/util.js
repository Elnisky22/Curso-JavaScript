var listRepos = document.querySelector('#listRepos');

function listar() {
    var user = document.querySelector('#user').value;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            listRepos.innerHTML = "";
            var repositories = response.data;

            for (repo of repositories) {
                const name = document.createTextNode(repo.name);
                var item = document.createElement('li');

                item.appendChild(name);
                listRepos.appendChild(item);
            }
        }
    );
}