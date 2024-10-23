const requestJson = async (json) => {
    try {
        const response = await fetch(json);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const conversionData = await response.json();
        return conversionData;
    } catch (error) {
        console.error('Error loading JSON:', error);
        return null; // Caso ocorra um erro, retorna null
    }
}