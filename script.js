const units = {
  longueur: {
    mètre: 1,
    kilomètre: 1000,
    centimètre: 0.01,
    millimètre: 0.001,
    pouce: 0.0254,
    pied: 0.3048,
    yard: 0.9144,
    mile: 1609.34
  },
  temperature: {
    celsius: 'celsius',
    fahrenheit: 'fahrenheit',
    kelvin: 'kelvin'
  },
  poids: {
    kilogramme: 1,
    gramme: 0.001,
    milligramme: 0.000001,
    tonne: 1000,
    livre: 0.453592,
    once: 0.0283495
  },
  volume: {
    litre: 1,
    millilitre: 0.001,
    gallon: 3.78541,
    pinte: 0.473176,
    once_liquide: 0.0295735
  }
};

function updateUnits() {
  const category = document.getElementById('category').value;
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');

  fromUnit.innerHTML = '';
  toUnit.innerHTML = '';

  // Ajout des options pour les unités disponibles dans la catégorie
  for (const unit in units[category]) {
    const option = `<option value="${unit}">${unit.charAt(0).toUpperCase() + unit.slice(1)}</option>`;
    fromUnit.innerHTML += option;
    toUnit.innerHTML += option;
  }

  // Option de réinitialiser les sélections à la première unité disponible
  fromUnit.selectedIndex = 0;
  toUnit.selectedIndex = 0;
}

function convert() {
  const category = document.getElementById('category').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const inputValue = parseFloat(document.getElementById('inputValue').value);

  let result;

  if (category === 'temperature') {
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      result = (inputValue * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      result = inputValue + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      result = (inputValue - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      result = inputValue - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      result = (inputValue - 273.15) * 9/5 + 32;
    } else {
      result = inputValue; // Si les unités sont identiques
    }
  } else {
    result = inputValue * units[category][fromUnit] / units[category][toUnit];
  }

  document.getElementById('result').textContent = `Résultat : ${result.toFixed(2)} ${toUnit}`;
}

// Initialisation des unités dès le chargement de la page
updateUnits();
