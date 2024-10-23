const buttonWeightConvert = document.getElementById('buttonWeightConvert');

buttonWeightConvert.addEventListener('click', async () => {
    let value = document.querySelector('[name="weightValue"]').value;
    let fromWeight = document.querySelector('[name="fromWeight"]').value;
    let toWeight = document.querySelector('[name="toWeight"]').value;

    if (!value) {
        alert('Insira um valor para conversão!');
        return false;
    }

    const jsonConversion = await requestJson('./conversion.json');

    let fromFactor = jsonConversion.weightUnits[fromWeight];
    let toFactor = jsonConversion.weightUnits[toWeight];

    let valueInKilograms = value / fromFactor;
    let result = valueInKilograms * toFactor;

    document.getElementById('weightResult').textContent = result;
});
