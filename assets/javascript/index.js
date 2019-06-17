let projects = [{
    name: "giphyAPI",
    image: "assets/images/giphy-logo.png",
    description: "A simple demonstration of my the basic knowledge of using API keys. This app takes a user input and returns twenty gifs related to whatever the user searched for, and adds a button that saves the input data incase the user wants to revisit any previous searches.",
    link: "https://emalley.github.io/giphyAPI/",
    github: "https://github.com/EMalley/giphyAPI"
},

{
    name: "API2",
    image: "assets/images/Eric.png",
    description: "A simple demonstration of my the basic knowledge of using API keys. This app takes a user input and returns twenty gifs related to whatever the user searched for, and adds a button that saves the input data incase the user wants to revisit any previous searches.",
    link: "https://emalley.github.io/giphyAPI/",
    github: "https://github.com/EMalley/giphyAPI"
}
];

function createProjectCard(projectId, imgSrc, name, desc) {
    let cardDiv = $("<div>", {
        class: 'card project-card',
        'data-projectID': projectId,
        style: 'width:18rem'
    });

    let imageDiv = $('<img>', {
        class: 'project-image',
        style:'width:18rem',
        alt: `${desc} image`,
        src: imgSrc
    });

    let cardBodyDiv = $('<div>', { class: 'card-body' });
    let projectNameDiv = $('<button>', {
        class: 'project-Name btn',
        text: 'Website',
    });

    let descDiv = $("<div>", {
        class: "project-Desc",
        text: desc
    })

    cardBodyDiv.append(projectNameDiv, descDiv);
    cardDiv.append(imageDiv, cardBodyDiv)

    return cardDiv;
}

function projectLoop () {
    for( var i =0; i < projects.length; i ++) {
        let name = projects[i].name;
        let img = projects[i].image;
        let desc = projects[i].description;
        let link = $("<a>",{href:projects[i].link})
        let projectCard= createProjectCard(name, img, desc);
        $('.projects').append(link.append(projectCard)).attr('style', 'text-align:center; justify-content:center')
    }
}

$(document).ready(function () {
    projectLoop();
})