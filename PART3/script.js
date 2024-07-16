// script.js
const colorOptions = [
    { label: 'Red', value: '#FF0000' },
    { label: 'Green', value: '#00FF00' },
    { label: 'Blue', value: '#0000FF' },
    { label: 'Yellow', value: '#FFFF00' },
    { label: 'Purple', value: '#800080' },
    { label: 'Cyan', value: '#00FFFF' },
    { label: 'Orange', value: '#FFA500' },
    { label: 'Pink', value: '#FFC0CB' }
];

const colorSelect = document.getElementById('color');

colorOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.label;
    colorSelect.add(optionElement);
});

const form = document.getElementById('userForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;
    const colorLabel = colorOptions.find(option => option.value === color).label;

    const resultHTML = `
        <div class="user-info-card">
            <div class="card-header">
                <h2>User Information</h2>
            </div>
            <div class="card-body">
                <p>Name: <span class="info-value">${name}</span></p>
                <p>Age: <span class="info-value">${age}</span></p>
                <p>Favorite Color: <span class="info-value">${colorLabel}</span> (<span class="info-value">${color}</span>)</p>
            </div>
        </div>
    `;

    resultDiv.innerHTML = resultHTML;
    document.body.style.backgroundColor = color;
});