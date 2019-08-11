var listRepos = document.querySelector('#listRepos');

function listar() {
    var user = document.querySelector('#user').value;

    var item = document.createElement('li');
    item.innerHTML = "Carregando...";
    listRepos.appendChild(item);

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
        })
        .catch(function () {
            listRepos.innerHTML = "";
            var item = document.createElement('li');
            item.innerHTML = "Erro 404, usuário não existe";
            listRepos.appendChild(item);
        })
    ;
}