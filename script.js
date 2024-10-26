let cards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming Language" }
];
let currentCardIndex = 0;
let showTerm = true;

function displayCard() {
    const cardContent = document.getElementById("card-content");
    cardContent.textContent = showTerm ? cards[currentCardIndex].term : cards[currentCardIndex].definition;
}

function flipCard() {
    showTerm = !showTerm;
    displayCard();
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    showTerm = true;
    displayCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showTerm = true;
    displayCard();
}

function addCard() {
    const term = document.getElementById("term").value;
    const definition = document.getElementById("definition").value;
    if (term && definition) {
        cards.push({ term, definition });
        document.getElementById("term").value = "";
        document.getElementById("definition").value = "";
        alert("Card added!");
    } else {
        alert("Please enter both a term and a definition.");
    }
}

// Initialize display
displayCard();