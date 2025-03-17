function adicionarProduto(){
    const produto = document.getElementById("productname").value
    const category = document.getElementById("category").value
    const quantidade = document.getElementsByName("amount").value 
    const price = document.getElementById("unitprice").value

    if (produto && category && quantidade && price){
        const produtos = {
            nome: produto,
            categoria: category,
            quantidade: quantidade,
            price: price
        }

        let prod = JSON.parse(localStorage.getItem("prod")) || []

        prod.push(produtos)

        localStorage.setItem('produtos', JSON.stringify(produtos))

        const produto = document.getElementById("productname").value = ''
        const category = document.getElementById("category").value = ''
        const quantidade = document.getElementsByName("amount").value = ''
        const price = document.getElementById("unitprice").value = ''

        atualizarTabela()
    } else{
        alert("Por favor, preencha todos os campos.")
    }

}

function atualizarTabela(){
    const prod = JSON.parse(localStorage.getItem('prod')) || []
    const tbody = document.getElementById('tb')

    tbody.innerHTML = ''

    prod.array.forEach((produto, index) => {
        const row = document.createElement('tr')
        row.innerHTML =`<td class="t1 bd">${index + 1}</td>
                <td class="t2 br">${produto.name}</td>
                <td class="t3 br">${produto.category}</td>
                <td class="t4 br">${produto.quantidade}</td>
                <td class="t5 br">${produto.price}
                <td class="t6">
                <button onclick="removerProduto(${index})">Delete</button>
                </td>`
                tbody.appendChild(row)
    })
}

function removerProduto(){
    let prod = JSON.parse(localStorage.getItem('prod')) || []
    prod.splice(index,1)
    localStorage.setItem('prod', JSON.stringify(prod))

    atualizarTabela()
}

window.onload = atualizarTabela