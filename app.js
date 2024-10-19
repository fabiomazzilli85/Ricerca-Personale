const dipendenti = [
    { nome: 'Mario', cognome: 'Rossi', età: 30, ruolo: 'CEO' },
    { nome: 'Luca', cognome: 'Bianchi', età: 25, ruolo: 'Addetto sicurezza informatica' },
    { nome: 'Paolo', cognome: 'Verdi', età: 40, ruolo: 'Sistemista informatico' },
    { nome: 'Giovanni', cognome: 'Neri', età: 35, ruolo: 'Front End Developer' },
    { nome: 'Andrea', cognome: 'Gialli', età: 45, ruolo: 'Back End Developer' },
    { nome: 'Giuseppe', cognome: 'Blu', età: 50, ruolo: 'Social Media Manager' },
    { nome: 'Antonio', cognome: 'Arancioni', età: 55, ruolo: 'Copywriter' },
    { nome: 'Roberto', cognome: 'Viola', età: 60, ruolo: 'Addetto stampa' },
    { nome: 'Francesco', cognome: 'Rosa', età: 65, ruolo: 'Segretario' },
    { nome: 'Alessandro', cognome: 'Marroni', età: 70, ruolo: 'Custode notturno' }
];

// Crea una card per ogni dipendente
dipendenti.forEach((dipendente) => {
    const { nome, cognome, età, ruolo } = dipendente;
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'p-3', 'border'); 
    card.innerHTML = `
        <h2>${nome} ${cognome}</h2>
        <p>Età: ${età}</p>
        <p>Ruolo: ${ruolo}</p>
    `;
    document.getElementById('dipendenti-list').appendChild(card);
});

function cercaDipendente() {
    const nome = document.getElementById('search-nome').value.toLowerCase();
    const cognome = document.getElementById('search-cognome').value.toLowerCase();
    const dipendente = dipendenti.find((d) => d.nome.toLowerCase() === nome && d.cognome.toLowerCase() === cognome);

    if (dipendente) {
        alert(`Trovato: ${dipendente.nome} ${dipendente.cognome}, ${dipendente.età} anni, ${dipendente.ruolo}`);
    } else {
        alert('Dipendente non trovato.');
    }
}