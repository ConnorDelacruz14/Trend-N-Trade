const URL = "http://localhost:5050";

export async function fetchData(route: string, queryParams: never[], body: any, type: string) {
    let fullUrl = `${URL}${route}`;

    if (type === "GET") {
        // Convert queryParams array into a query string
        const queryString = queryParams.map(param => `${encodeURIComponent(param[0])}=${encodeURIComponent(param[1])}`).join('&');
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return await response.json();
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    } else if (type === "POST") {
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            return await response.json();
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    } else {
        throw new Error('Unsupported request type');
    }
}
