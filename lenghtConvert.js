const buttonLenghtConvert = document.getElementById('buttonLenghtConvert');

buttonLenghtConvert.addEventListener('click', async () => {
    let value = document.querySelector('[name="lengthValue"]').value;
    let fromLength = document.querySelector('[name="fromLength"]').value;
    let toLength = document.querySelector('[name="toLength"]').value;

    if (!value) {
        alert('Insira um valor para conversão!');
        return false;
    }

    const jsonConversion = await requestJson('./conversion.json');

    let fromFactor = jsonConversion.lengthUnits[fromLength];
    let toFactor = jsonConversion.lengthUnits[toLength];

    let valueInMeters = value / fromFactor;
    let result = valueInMeters * toFactor;

    document.getElementById('lengthResult').textContent = result;
});
