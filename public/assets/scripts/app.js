axios.get("https://api.github.com/users/YuriZocoli").then(function (response){
    console.log(response)
    document.getElementById("profile-name").innerText = response.data.name
}).catch(function(erro){
    console.log(erro)
})

