function showCars(brand) {
    var carSection = document.getElementById('carSection');
    carSection.style.display = 'block';
    carSection.scrollIntoView({ behavior: 'smooth' });

    var specialOffersSection = document.getElementById('specialOffers');
    specialOffersSection.style.display = 'none';

    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'none';

    var carsData = getCarsData(brand);

    carSection.innerHTML = ''; // Очистка предыдущего содержимого

    carsData.forEach(function (car) {
        var carElement = document.createElement('div');
        carElement.classList.add('car');

        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + car.image;
        imgElement.alt = car.model;
        carElement.appendChild(imgElement);

        var detailsElement = document.createElement('div');
        detailsElement.classList.add('car-details');

        var brandModelElement = document.createElement('h3');
        brandModelElement.textContent = car.brand + ' ' + car.model;
        detailsElement.appendChild(brandModelElement);

        var yearElement = document.createElement('p');
        yearElement.textContent = 'Рік випуску: ' + car.year;
        detailsElement.appendChild(yearElement);

        var characteristicsElement = document.createElement('p');
        characteristicsElement.textContent = 'Характеристики: ' + car.characteristics;
        detailsElement.appendChild(characteristicsElement);

        var priceElement = document.createElement('p');
        priceElement.textContent = 'Ціна: ' + car.price + ' грн.';
        detailsElement.appendChild(priceElement);

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = car.description;
        detailsElement.appendChild(descriptionElement);

        carElement.appendChild(detailsElement);
        carSection.appendChild(carElement);
    });
}

// Переміщуємо функцію getCarsData за межі showCars
function getCarsData(brand) {
    // Додайте більше деталей, таких як рік, ціна та опис
    if (brand === 'bmw') {
        return [
            { brand: 'BMW', model: 'X5', year: 2024, characteristics: 'Потужність: 300 к.с., об\'єм двигуна: 3.0 л', price: 5000000, image: 'bmw_x5.jpg.jfif', description: 'Відмінний кросовер для комфортних поїздок.' },
            { brand: 'BMW', model: 'M5', year: 2023, characteristics: 'Потужність: 600 к.с., об\'єм двигуна: 4.4 л', price: 8000000, image: 'bmw_m5.jpg.jfif', description: 'Спортивний седан для справжніх цінителів потужності.' },
        ];
    } else if (brand === 'audi') {
        return [
            { brand: 'Audi', model: 'A4', year: 2024, characteristics: 'Потужність: 200 к.с., об\'єм двигуна: 2.0 л', price: 3500000, image: 'audi_a4.jpg.jfif', description: 'Стильний седан з передовими технологіями.' },
            { brand: 'Audi', model: 'Q7', year: 2023, characteristics: 'Потужність: 300 к.с., об\'єм двигуна: 3.0 л', price: 6000000, image: 'audi_q7.jpg.jfif', description: 'Просторий позашляховик для активного відпочинку.' },
        ];
    } else if (brand === 'mercedes') {
        return [
            { brand: 'Mercedes', model: 'C-Class', year: 2024, characteristics: 'Потужність: 250 к.с., об\'єм двигуна: 2.0 л', price: 4000000, image: 'mercedes_c-class.jpg.jfif', description: 'Елегантний седан з високим рівнем комфорту.' },
            { brand: 'Mercedes', model: 'S-Class', year: 2023, characteristics: 'Потужність: 450 к.с., об\'єм двигуна: 4.0 л', price: 9000000, image: 'mercedes_s-class.jpg.jfif', description: 'Представницький седан для справжніх гурманів.' },
        ];
    } else {
        return [];
    }
}

function showSpecialOffers() {
    var specialOffersSection = document.getElementById('specialOffers');
    specialOffersSection.style.display = 'block';

    var carSection = document.getElementById('carSection');
    carSection.style.display = 'none';

    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'none';
}

function showContact() {
    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'block';
    contactSection.scrollIntoView({ behavior: 'smooth' });

    var carSection = document.getElementById('carSection');
    carSection.style.display = 'none';

    var specialOffersSection = document.getElementById('specialOffers');
    specialOffersSection.style.display = 'none';
}

