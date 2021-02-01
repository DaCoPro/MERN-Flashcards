import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createCard(cardData) {
    return sendRequest(BASE_URL, "POST", cardData);
}