id="final-clean-js"
// BUTTON
const button = document.getElementById("generateBtn");

// OUTPUT DIV
const output = document.getElementById("roadmap-output");


// ROADMAP DATA
const roadmapData = {

    frontend: {

        beginner: [
            "HTML Basics",
            "CSS Basics",
            "Flexbox",
            "CSS Grid",
            "JavaScript Basics",
            "DOM Manipulation",
            "Responsive Design"
        ],

        intermediate: [
            "ES6 Concepts",
            "Async JavaScript",
            "APIs Integration",
            "Git & GitHub",
            "React Basics",
            "React Hooks",
            "Routing"
        ],

        advanced: [
            "Next.js",
            "Performance Optimization",
            "State Management",
            "Authentication",
            "Testing",
            "Frontend Architecture",
            "Deployment"
        ]
    },

    backend: {

        beginner: [
            "Java Basics",
            "OOP Concepts",
            "Collections",
            "Exception Handling",
            "JDBC",
            "MySQL Basics",
            "REST API Basics"
        ],

        intermediate: [
            "Spring Boot",
            "Spring MVC",
            "Hibernate",
            "Spring Data JPA",
            "JWT Authentication",
            "Postman",
            "API Validation"
        ],

        advanced: [
            "Microservices",
            "Docker",
            "Kafka Basics",
            "Redis",
            "System Design",
            "AWS Basics",
            "CI/CD"
        ]
    },

    fullstack: {

        beginner: [
            "HTML",
            "CSS",
            "JavaScript",
            "Java Basics",
            "MySQL",
            "REST APIs"
        ],

        intermediate: [
            "React",
            "Spring Boot",
            "Authentication",
            "API Integration",
            "Git",
            "Deployment Basics"
        ],

        advanced: [
            "Microservices",
            "Docker",
            "AWS",
            "System Design",
            "Caching",
            "CI/CD Pipelines"
        ]
    },

    sql: {

        beginner: [
            "SQL Basics",
            "CRUD Operations",
            "WHERE Clause",
            "ORDER BY",
            "GROUP BY",
            "Joins",
            "Functions"
        ],

        intermediate: [
            "Subqueries",
            "Indexes",
            "Normalization",
            "Views",
            "Stored Procedures",
            "Transactions"
        ],

        advanced: [
            "Query Optimization",
            "Partitioning",
            "Database Scaling",
            "Replication",
            "Performance Tuning",
            "Database Security"
        ]
    }

};


// BUTTON CLICK EVENT
button.addEventListener("click", function () {

    // SELECTED VALUES
    const technology = document.getElementById("technology").value;

    const level = document.getElementById("level").value;


    // VALIDATION
    if (!technology || !level) {

        output.innerHTML = `
            <p>Please select technology and level.</p>
        `;

        return;
    }


    // GET TOPICS
    const topics = roadmapData[technology][level];


    // HTML CREATION
    let roadmapHTML = `
        <h2>${technology.toUpperCase()} ${level.toUpperCase()} Roadmap</h2>

        <ul>
    `;


    // LOOP
    topics.forEach(topic => {

        roadmapHTML += `
            <li>${topic}</li>
        `;

    });


    roadmapHTML += `
        </ul>
    `;


    // DISPLAY
    output.innerHTML = roadmapHTML;

});

