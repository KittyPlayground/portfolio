// Select the particle container
const particleContainer = document.querySelector('.cute-particles');

// Create soft, floating particles (hearts/bubbles)
for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particleContainer.appendChild(particle);
}
// Navigation toggle for mobile
window.addEventListener('load', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    toggleBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
    closeBtn.addEventListener('click', function () {
        mobileNav.classList.remove('show');
    });
});
const projects = [
    {
        title: "VeggiePop - POS System",
        description: "The POS Management System is a robust tool for efficiently handling Point of Sale tasks, enabling" +
            " users to create, read, search, update, and delete records for customers, items, and orders through" +
            " a user-friendly interface.",
        technologies: "JakartaEE,Fetch,MySQL,HTML, CSS,JavaScript,Bootstrap",
        image: "../images/veggie.png",
        github: "https://github.com/yourusername/project-2"
    },
    {
        title: "Book Worm - Library Management System",
        description: "This app simplifies library operations for admins and users, managing books, users, borrowing, " +
            "and offering a smooth access experience.",
        technologies: "JavaFX,Hibernate,SMTP,Regex,CSS",
        image: "../images/bookworm.png",
        github: "https://github.com/kawodyaarachchige/library-management-system.git"
    },
    {
        title: "FuelBee - Fuel Management System",
        description: "PFuel Inventory Management System is a JavaFX application designed for managing fuel inventory in a " +
            "structured and organized manner. The application follows a layered architecture.",
        technologies: "JavaFX,MySQL,QRCode Generator,SMTP",
        image: "../images/fuelbee.png",
        github: "https://github.com/kawodyaarachchige/projectFuelBee-layerd.git"
    },
    {
        title: "MediPro - POS System",
        description: "A POS system for efficiently managing customer information, medicines, and orders. Built with" +
            " Python Flask, it offers a robust API for handling operations and includes email functionality for sending " +
            "order confirmations to customers",
        technologies: "Python, Flask,MySQL,SMTP",
        image: "../images/medipro.png",
        github: "https://github.com/yourusername/project-3"
    },
    {
        title: "Tenvo - Online Clothing Website",
        description: "An online clothing store built with HTML, CSS, and JavaScript, featuring a responsive design for " +
            "seamless browsing on any device. Users can view product listings with images, prices, and descriptions," +
            " easily search and filter items, and complete purchases for direct shipping.",
        technologies: "HTML, CSS, JavaScript",
        image: "../images/tenvo.png",
        github: "https://github.com/kawodyaarachchige/Tenvo_web.git"
    },
    {
        title: "Project 6",
        description: "Project 6 description highlighting its purpose and features.",
        technologies: "Python, Flask, SQL",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-6"
    },
    {
        title: "Project 7",
        description: "Project 7 description highlighting its purpose and features.",
        technologies: "JavaScript, React, Node.js",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-7"
    },
    {
        title: "Project 8",
        description: "Project 8 description highlighting its purpose and features.",
        technologies: "Python, Flask, SQL",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-8"
    },
    {
        title: "Project 9",
        description: "Project 9 description highlighting its purpose and features.",
        technologies: "JavaScript, React, Node.js",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-9"
    },
    {
        title: "Project 10",
        description: "Project 10 description highlighting its purpose and features.",
        technologies: "Python, Flask, SQL",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-10"
    },
    {
        title: "Project 11",
        description: "Project 11 description highlighting its purpose and features.",
        technologies: "JavaScript, React, Node.js",
        image: "../images/c.jpg",
        github: "https://github.com/yourusername/project-11"
    }
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <a href="${project.github}" class="github-btn" target="_blank">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    `;
    projectList.appendChild(projectCard);
});
