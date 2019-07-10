let projects = [
    {
        name: "GiphyAPI",
        image: "assets/images/giphy-logo.png",
        description: "A simple demonstration of my knowledge of using API keys. This app takes a user input and returns twenty gifs related to whatever the user searched for, and adds a button that saves the input data incase the user wants to revisit any previous searches.",
        link: "https://emalley.github.io/giphyAPI/",
    },

    {
        name: "LIRI Bot",
        image: "assets/images/LIRIBOT.png",
        description: "",
        link: "https://emalley.github.io/giphyAPI/",
    }
];

function createProjectCard(name, imgSrc, description) {
    var cardDiv = $('<div>', {
        class: 'card project-card',
        style: 'width:18rem'
    });
    var imageDiv = $('<img>', {
        class: 'project-image w-100',
        alt: `${name} image`,
        src: imgSrc
    });
    var cardBodyDiv = $('<div>', { class: 'card-body' });
    var nameDiv = $('<div>', {
        class: 'project-name text-center',
        html: `<h3 class="text-truncate">${name}</h3>`
    });
    var descDiv = $('<div>', {
        class: 'project-desc',
        html: `${description.substring(0, 150)}...`
    });

    cardBodyDiv.append(nameDiv, descDiv);
    cardDiv.append(imageDiv, cardBodyDiv);

    return cardDiv;
}


function displayCards() {
    for (var i = 0; i < projects.length; i++) {
        var name = projects[i].name;
        var imgSrc = projects[i].image;
        var description = projects[i].description
        var projectLink = $("<a>", {
            target: "_blank",
            href: projects[i].link
        });
        console.log(projects.length)
    }
    var projectCard = createProjectCard(name, imgSrc, description);
    $(".projects").append(projectLink.append(projectCard).attr('style', 'text-align:center; justify-content:center;'))
}

$(document).ready(function () {
    displayCards();
})