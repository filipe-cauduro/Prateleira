const baseURL = 'api/';
let myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json");

async function get(api, id) {
    let url = `${baseURL}${api}`;
    if (id) url = `${url}/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

async function post(api, obj) {
    let url = `${baseURL}${api}`;

    const response = await fetch(
        url,
        {
            "method": 'POST',
            "headers": myHeaders,
            "body": JSON.stringify(obj)
        }
    )
    const data = await response.json();

    return data;
}

async function put(api, obj) {
    let url = `${baseURL}${api}/${obj.id}`;

    await fetch(
        url,
        {
            "method": 'PUT',
            "headers": myHeaders,
            "body": JSON.stringify(obj)
        }
    );
}

async function destroy(api, id) {
    let url = `${baseURL}${api}/${id}`;

    const response = await fetch(
        url,
        {
            "method": 'DELETE',
            "headers": myHeaders,
            "body": ""
        }
    );
    const data = await response.json();
    return data;
}

export { get, post, put, destroy }