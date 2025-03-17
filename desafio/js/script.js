function adicionarCategoria(){
    const nomeCategoria = document.getElementById("categoryname")
    let categoria = nomeCategoria.value

    let tCategoria = document.getElementById("teste")
    let novaCategoria = document.createElement("td")
    novaCategoria.textContent = categoria
    tCategoria.appendChild(novaCategoria)

    nomeCategoria.value = ""
}

/*function adicionarTaxa(){
    const nomeTaxa = document.getElementById(tax)
    let taxa = nomeTaxa.value

    let tTaxa = document.getElementById("teste")
    let novaTaxa = document.createElement("td")
    novaTaxa.textContent = taxa
    tTaxa.appendChild(novaTaxa)
 
    nomeTaxa.value = ""
}*/