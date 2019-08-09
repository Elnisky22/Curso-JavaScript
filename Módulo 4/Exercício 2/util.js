function listar() {
    var user = document.querySelector('#user').value;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            var listRepos = document.querySelector('#listRepos');


        }
    );
}