axios('people.json')
.then(response => loadElement(response.data));

const table = document.querySelector('.resultado');


function loadElement(json) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>Name</th>
        <th>E-mail</th>
        <th>Salary</th>
        <th>Region</th>
        <th>Company</th>
        <th>Age</th>
    `;
    table.appendChild(tr);
    json.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>${item.salario}</td>
            <td>${item.estado}</td>
            <td>${item.empresa}</td>
            <td>${item.idade}</td>
        `;
        table.appendChild(tr);
    });
}