"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

function addCoffee(event) {
    event.preventDefault();
    var newCoffee = {
        name: coffeeAdd.value,
        roast: roastAdd.value,
        all: 'all'
    }
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

function renderCoffee(coffee) {
    var html = '<div class="coffee col-12 col-lg-6">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === coffee.all) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedRoast.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all:'all'},
    {id: 2, name: 'Half City', roast: 'light', all:'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', all:'all'},
    {id: 4, name: 'City', roast: 'medium', all:'all'},
    {id: 5, name: 'American', roast: 'medium', all:'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all:'all'},
    {id: 7, name: 'High', roast: 'dark', all:'all'},
    {id: 8, name: 'Continental', roast: 'dark', all:'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all:'all'},
    {id: 10, name: 'European', roast: 'dark', all:'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all:'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all:'all'},
    {id: 13, name: 'Italian', roast: 'dark', all:'all'},
    {id: 14, name: 'French', roast: 'dark', all:'all'},
];

var tbody = document.querySelector('.coffees');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var submitSearchButton = document.querySelector('#submit-search');
var roastAdd = document.querySelector('#add-coffee-roast')
var coffeeAdd = document.querySelector('#add-coffee-name')
var submitAddButton = document.querySelector('#submit-add');


tbody.innerHTML = renderCoffees(coffees);

submitSearchButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffeesSearch);
submitAddButton.addEventListener('click', addCoffee);
roastSelection.addEventListener('change', updateCoffees);