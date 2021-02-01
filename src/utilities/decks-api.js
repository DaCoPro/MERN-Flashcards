import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createDeck(newDeckData) {
    return sendRequest(BASE_URL, "POST", newDeckData);
}

export function createCard(newCardData) {
    return sendRequest(`${BASE_URL}/${newCardData.deck}/addCard`, "PUT", newCardData)
}