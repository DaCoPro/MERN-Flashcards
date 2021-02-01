import sendRequest from './send-request';

const BASE_URL = '/api/categories';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createCat(catData) {
    return sendRequest(BASE_URL, "POST", catData);
}

export function deleteCat(catData) {
    return sendRequest(`${BASE_URL}/${catData._id}`, "DELETE");
}