const buttonTemperatureConvert = document.getElementById('buttonTemperatureConvert');

buttonTemperatureConvert.addEventListener('click', async () => {
    let value = parseFloat(document.querySelector('[name="temperatureValue"]').value);
    let fromTemperature = document.querySelector('[name="fromTemperature"]').value;
    let toTemperature = document.querySelector('[name="toTemperature"]').value;

    if (!value && value !== 0) {
        alert('Insira um valor para conversão!');
        return false;
    }

    const jsonConversion = await requestJson('./conversion.json');

    let result;

    if (fromTemperature === toTemperature) {
        result = value;
    } else {
        let formula = jsonConversion.temperatureUnits[fromTemperature][`to${capitalizeFirstLetter(toTemperature)}`];
        result = eval(formula);
    }

    document.getElementById('temperatureResult').textContent = result.toFixed(2);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}