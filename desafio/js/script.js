function adicionarCategoria() {
        const categoryName = document.getElementById('categoryname').value
        const tax = document.getElementById('tax').value
    
        if (categoryName && tax) {
            const category = {
                name: categoryName,
                tax: tax
            }
    
            let categories = JSON.parse(localStorage.getItem('categories')) || []
    
            categories.push(category)
    
            localStorage.setItem('categories', JSON.stringify(categories))
    
            document.getElementById('categoryname').value = ''
            document.getElementById('tax').value = ''
    
            atualizarTabela()
        } else {
            alert("Por favor, preencha todos os campos.")
        }
    }
    
function atualizarTabela() {
        const categories = JSON.parse(localStorage.getItem('categories')) || []
        const tbody = document.getElementById('teste')
    
        tbody.innerHTML = ''
    
        categories.forEach((category, index) => {
            const row = document.createElement('tr')
            row.innerHTML = 
                `<td class="t1 bd">${index + 1}</td>
                <td class="t2 bd">${category.name}</td>
                <td class="t3 bd">${category.tax}</td>
                <td class="t4">
                <button onclick="removerCategoria(${index})">Delete</button>
                </td>`
            tbody.appendChild(row)
        })
    }
    
function removerCategoria(index) {
        let categories = JSON.parse(localStorage.getItem('categories')) || []
    
        categories.splice(index, 1)
    
        localStorage.setItem('categories', JSON.stringify(categories))
    
        atualizarTabela()
    }
    
    window.onload = atualizarTabela