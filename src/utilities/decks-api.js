import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function create(deck) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(deck)
    }).then(res => res.json());
}
  