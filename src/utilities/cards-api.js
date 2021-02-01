import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createCard(cardData) {
    return sendRequest(BASE_URL, "POST", cardData);
}

export function updateCard(cardData) {
    return sendRequest(`${BASE_URL}/${cardData._id}`, "PUT", cardData);
}

export function deleteCard(cardData) {
    return sendRequest(`${BASE_URL}/${cardData._id}`, "DELETE");
}

export function deleteChildCards(deckData) {
    return sendRequest(`${BASE_URL}/${deckData._id}`, "DELETE");
}