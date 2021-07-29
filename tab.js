let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let employees = [
    { name: 'lavina', age: 23, country: 'India' },
    { name: 'lavi', age: 22, country: 'India' },
    { name: 'mary', age: 21, country: 'Canada' },
    { name: 'kiya', age: 20, country: 'Spain' },
    { name: 'anu', age: 20, country: 'Spain' },
    { name: 'asmita', age: 25, country: 'Canada' },
    { name: 'piya', age: 28, country: 'India' }, 
    { name: 'siya', age: 22, country: 'United States' },
     { name: 'riya', age: 29, country: 'China' },  
     { name: 'ram', age: 20, country: 'Africa' }

]
let headers = ['Name', 'Age', 'Country'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    employees.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});