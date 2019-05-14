let projects = [
    {
        name: "giphyAPI",
        img: "../images/giphy-logo.png",
        description: "A simple demonstration of my the basic knowledge of using API keys. This app takes a user input and returns twenty gifs related to whatever the user searched for, and adds a button that saves the input data incase the user wants to revisit any previous searches.",
        link: "https://emalley.github.io/giphyAPI/",
    },

    {
        name: "giphyAPI",
        img: "../images/giphy-logo.png",
        description: "A simple demonstration of my the basic knowledge of using API keys. This app takes a user input and returns twenty gifs related to whatever the user searched for, and adds a button that saves the input data incase the user wants to revisit any previous searches.",
        link: "https://emalley.github.io/giphyAPI/",
    }
];


function createProjectCard(name, img, description, link) {
    let card = $('<div>', {
        class: 'projectCard',
    });
    var imgDiv = $('<img>', {
        class: 'projectImg w-100',
        alt: `${name} image`,
        src: img
    });
    let cardBodyDiv = $('<div>',{class: 'card-body'});
    let nameDiv = $('<div>', {
        class:'projectName text-center',
        html:`<h3 class= "text-truncate">${name}</h3>`
    });
    let descriptionDiv = $('<div>', {
        class : 'projectDescription',
        text: '${description.substring(0,150)}...'
    });

    cardBodyDiv.append(nameDiv, descriptionDiv);
    card.append(imgDiv, cardBodyDiv);

    return card
}

function createCards () {
    for (var i = 0; i < projects.length; i++) {
        let name = projects[i].name;
        let image = projects[i].image;
        let description = projects[i].description;
        let link = $('<a>', {
            target: '_blank',
            href: projects[i].link
        });
        let projectCard = createProjectCard(name,image,description);
        $('.projects').append(link.append(projectCard)).attr('style', 'text-align:center; justify-content: center');
    };
}
$(document).ready(function(){
    createProjectCard();
    createCards();
})