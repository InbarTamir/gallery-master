'use strict';

var gProjects = [
    { id: 'minesweeper', name: 'Minesweeper', title: 'Try not to hit any mine!', desc: 'The old classic game with a twist. You can undo your moves, use lives and hints and manually locate mines', url: 'https://inbartamir.github.io/Minesweeper/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] },
    { id: 'in-picture', name: 'In-Picture Game', title: 'Choose the sentence that describes best!', desc: 'You have a picture and options. Choose which option describes the picture best', url: 'https://inbartamir.github.io/in-picture/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] },
    { id: 'guess-who', name: 'Guess-Who', title: 'I know who you\'re thinking about!', desc: 'Think of a famous character, and answer yes/no questions. I will guess who it is', url: 'https://inbartamir.github.io/guess-who/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] },
    { id: 'bookshop', name: 'Bookshop', title: 'Just like a real bookshop!', desc: 'You can see which books we have on our bookstore, and even add books yourself', url: 'https://inbartamir.github.io/bookStore/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] },
    { id: 'my-bakery', name: 'My-Bakery', title: 'Order delicious cakes!', desc: 'We bake the cakes, and you enjoy them. You can view, order and send us a message', url: 'https://inbartamir.github.io/my-bakery/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] },
    { id: 'place-keeper', name: 'Place-Keeper', title: 'Save your favorite locations!', desc: 'You can choose favorite locations on the map and save them and choose the way the app looks', url: 'https://inbartamir.github.io/place-keeper/', publishedAt: Date.now(), labels: ['HTML', 'CSS', 'JS'] }
];

function getProjects() {
    return gProjects;
}

function getProjectById(projId) {
    var projects = gProjects.find((project) => project.id === projId);
    if (!projects) return;
    return projects;
}
