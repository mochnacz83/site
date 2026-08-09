function verificarAprovacao() 
{
    let nota = document.getElementById("nota").value;
     console.log("Nota inserida: ",nota);
    
    if (nota >= 7)
    {
        document.getElementById("resultado").innerHTML = "Aluno(a) Aprovado(a)";
        alert("Parabéns! Você foi aprovado(a)!");
    }
    else if (nota < 7) {
        document.getElementById("resultado").innerHTML = "Aluno(a) Reprovado(a)";
        alert("Infelizmente, você foi reprovado(a).");
    }
 
}



