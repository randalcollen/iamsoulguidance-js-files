async function fetchJson() {
    try {
        const response = await fetch('./urls_for_questionnaire.json');
        console.log('Response:', response);
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}
fetchJson();

