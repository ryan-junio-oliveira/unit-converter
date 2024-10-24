# Unit Converter

Este projeto é uma pagina web em HTML, TAILWIND CSS E JAVASCRIPT que permite aos usuários realizar conversoes simples de medidas , peso e temperatura.

## Funcionalidades

- Converte para as seguintes unidades de medidas.
    ```json
        {
            "lengthUnits": {
            "millimeter": 1000,
            "centimeter": 100,
            "meter": 1,
            "kilometer": 0.001,
            "inch": 39.3701,
            "foot": 3.28084,
            "yard": 1.09361,
            "mile": 0.000621371
            },
            "weightUnits": {
            "milligram": 1000000,
            "gram": 1000,
            "kilogram": 1,
            "ounce": 35.274,
            "pound": 2.20462
            },
            "temperatureUnits": {
            "celsius": {
                "toFahrenheit": "(value * 9/5) + 32",
                "toKelvin": "value + 273.15"
            },
            "fahrenheit": {
                "toCelsius": "(value - 32) * 5/9",
                "toKelvin": "((value - 32) * 5/9) + 273.15"
            },
            "kelvin": {
                "toCelsius": "value - 273.15",
                "toFahrenheit": "((value - 273.15) * 9/5) + 32"
            }
            }
        }

    ```

## Como Usar

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>

2. Abra o arquivo no seu navegador e começe a converter.

## Referências

Este projeto segue as diretrizes e estruturas propostas no [roadmap.sh](https://roadmap.sh/projects/unit-converter).

- Link para o repositório do projeto: [Uniti Converter](https://github.com/ryan-junio-oliveira/unit-converter).
- Link para o github pages: [Uniti Converter](https://ryan-junio-oliveira.github.io/unit-converter/).
