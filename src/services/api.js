import config from '../config';

const apiKey = config.apiKey;

// tout ca correspond a la correction du tp 8 

// Fonction de connexion de l'utilisateur
export const logUser = (pseudo, password) => {
    var data = JSON.stringify({
        "pseudo": pseudo,
        "password": password
    });

    return fetch('https://api.cogform.fr/login', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erreur');
        }
        return response.json();
    });
};

// Fonction permettant de récupérer les info sur le parc
export const getMyParc = () => {
    return fetch('https://api.cogform.fr/parc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erreur');
        }
        return response.json();
    });
};

// Fonction permettant de mettre à jour le parc
export const updateMyParc = (token, parc) => {
    return fetch('https://api.cogform.fr/parc', {
        method: 'PUT',
        body: parc,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'Authorization': `Bearer ${token}` // ici on ajoute le token de l'utilisateur (récupéré après sa connexion)
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erreur');
        }
        return response.json();
    });
};