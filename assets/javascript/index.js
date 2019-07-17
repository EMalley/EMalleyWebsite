let projects = [
    {
        name: "Wall-IT",
        image: "assets/images/WallItLogo.png",
        description: "Built using React.js, Wall-IT is financing program that organizes all of your personal Finances, from monthly bills, stock holdings, and mortages rates.",
        link: "https://github.com/EMalley/wall-it",
    },
    {
        name: "Spice It Recipes",
        image: "assets/images/SpiceItLogo.png",
        description: "A great recipe guide for anyone who loves to cook. This project was built using HTML5,CSS3, and JavaScript to dynamically create content based on the users search result. Spice It offers the services of AmazonFresh to order all the ingredients you need to make your next homecooked meal! ",
        link: "https://github.com/EMalley/spiceIt",
    },
    {
        name: "Eat the Burger",
        image: "assets/images/burger.jpg",
        description: "A app that follows OOP and CRUD principles by ordering burgers, where the user can the eat, and then delete their burger data. The database is a MySQL sever using Sequelize.",
        link: "https://github.com/EMalley/spiceIt",
    },
    {
        name: "React Memory Game",
        image: "assets/images/memory.jpg",
        description: "A React.js built game designed to test your memory. Good Luck!",
        link: "https://github.com/EMalley/clickyGame",
    },

    {
        name: "LIRI Bot",
        image: "assets/images/LIRIBOT.png",
        description: "A Language Interpretation and Recognition Interface. LIRI bot is a command line script that runs specific commands and update the user with a response.",
        link: "https://github.com/EMalley/Liri-Node-App",
    },
    {
        name: "Giphy API",
        image: "assets/images/giphy-logo.png",
        description: "A demonstration of my knowledge of APIs, using the giphy API. The user can search for any kind of image and have the images be saved to a button, which then can be revisited later.",
        link: "https://github.com/EMalley/giphyAPI",
    }
];

function createProjectCard(name, imgSrc, description, linktorepo) {
    var cardDiv = $('<div>', {
        class: 'card projectCard',
        style: 'width:18rem'
    });
    var imageDiv = $('<img>', {
        class: 'projectImage w-100',
        alt: `${name} image`,
        src: imgSrc
    });
    var cardBodyDiv = $('<div>', { class: 'card-body' });
    var nameDiv = $('<div>', {
        class: 'projectName text-center',
        html: `<a class="text-truncate projectLink" href=${linktorepo}>${name}</h3>`,
    });
    var descDiv = $('<div>', {
        class: 'projectDesc',
        html: `${description.substring(0, 200)}`
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
            class: "projectLink",
            style: "z-index:2",
            href: projects[i].link
        });

        var projectCard = createProjectCard(name, imgSrc, description, projects[i].link);
        projectCard.children(".project-name").append(projectLink)
        $(".projects").append(projectCard)
    }
}

$(document).ready(function () {
    displayCards();
})