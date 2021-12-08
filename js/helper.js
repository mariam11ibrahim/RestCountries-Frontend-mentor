export const AJAXRequest = async function(query) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/${query}`);
        if (!response.ok) throw new Error(`${response.statusText}`);
        return response.json();
    } catch (error) {
        throw error;
    }
};