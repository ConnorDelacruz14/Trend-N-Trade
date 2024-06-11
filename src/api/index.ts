const URL = "http://localhost:5050";

export async function fetchData(route: string, queryParams: never[], body: NonNullable<unknown>, type: string) {
    let fullUrl = `${URL}${route}`;

    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

    // Initialize headers
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json'
    };

    // Add token to headers if it exists
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    if (type === "GET") {
        // Convert queryParams array into a query string
        const queryString = queryParams.map(param => `${encodeURIComponent(param[0])}=${encodeURIComponent(param[1])}`).join('&');
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // eslint-disable-next-line no-useless-catch
        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers,
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    } else if (type === "POST") {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(body)
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    } else if (type === "PUT") {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await fetch(fullUrl, {
                method: 'PUT',
                headers,
                body: JSON.stringify(body)
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error('Unsupported request type');
    }
}
