document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search)
    const codigoPedido = parseInt(params.get("pedido"))
    if (!codigoPedido) {
        alert("Pedido não encontrado!")
        window.location.href = "history.html"
        return
    }

    carregarDetalhesPedido(codigoPedido)
})

function carregarDetalhesPedido(codigoPedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || []
    let pedido = pedidos.find(p => p.codigo === codigoPedido)

    if (!pedido) {
        alert("Pedido não encontrado no LocalStorage!")
        window.location.href = "history.html"
        return
    }

    let tbody = document.getElementById("pedidoDetalhes")
    tbody.innerHTML = ""

    let totalPedido = 0

    pedido.produtos.forEach(produto => {
        let totalProduto = (parseFloat(produto.preco) * parseInt(produto.quantidade))
        totalPedido += totalProduto

       
        let taxaProduto = (parseFloat(produto.taxa) || 0) 

        totalPedido = totalProduto + (totalProduto * (taxaProduto/100))

        let row = document.createElement("tr")
        row.innerHTML = `
            <td class="t1 br">${produto.nome}</td>
            <td class="t3 br">${produto.quantidade}</td>
            <td class="t4 br">R$${parseFloat(produto.preco).toFixed(2)}</td>
            <td class="t5 br">R$${(totalProduto * (taxaProduto / 100)).toFixed(2)}</td>
            <td class="t6 br">R$${(totalProduto).toFixed(2)}</td>
        `
        tbody.appendChild(row)
    })

    let totalInput = document.getElementById("purchasevalue")

    if (totalInput) {
        totalInput.value = totalPedido.toFixed(2)
    }
}

console.log(JSON.parse(localStorage.getItem("pedidos")))
