

window.onload = async () => {
    deck = await getNewDeck();
    player1 = await getCards(deck);
    setPlayer1(player1)
    setPlayer2();
}

getNewDeck = async () => {
    let deck = '';
    deck = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then((response) => response.json())
        .then(response => response.deck_id)
    return deck;
}

getCards = async (deck) => {
    let cards = await fetch(`https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=3`)
        .then(response => response.json())
        .then(response => response)
    return cards.cards.map(object => ({ code: object.code, image: object.image }))
}

setPlayer1 = (cards) => {
    player1_cards = document.getElementById('player1-cards')
    cards.forEach(card => {
        img = document.createElement('img');
        img.src = card.image;
        player1_cards.appendChild(img);
    });
}

setPlayer2 = () => {
    player2_cards = document.getElementById('player2-cards')
    for (let i = 0; i < 3; i++) {
        img = document.createElement('img');
        img.src = 'https://www.deckofcardsapi.com/static/img/back.png';
        player2_cards.appendChild(img);
    }
}