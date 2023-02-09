fetch("https://randomuser.me/api/").then((response) => {
    const Informacion = response.json();
    Informacion.then((data) => {
        const sujeto = data.results[0];
        localStorage.setItem("usuarioData", JSON.stringify(sujeto));
        fillData(sujeto);
    });
});

fillData = function(dataUsuario){
    document.getElementById("IMAGE").src = dataUsuario.picture.large;
    document.getElementById("NOMBRE").innerHTML = dataUsuario.name.first;
    document.getElementById("APELLIDO").innerHTML = dataUsuario.name.last;
    document.getElementById("EDAD").innerHTML = dataUsuario.dob.age;
    document.getElementById("GENERO").innerHTML = dataUsuario.gender;
    document.getElementById("TELEFONO").innerHTML = dataUsuario.phone;
    document.getElementById("EMAIL").innerHTML = dataUsuario.email;
}

