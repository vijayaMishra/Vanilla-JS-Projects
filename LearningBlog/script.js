function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

let weeklyStudyData = [
    [
        {
            "date": "28-July-2025", "day": "Monday", "learnings": [
                "Added Beautiful red floral to the Learning Blog UI",
                "Redoing entire Learning Blog UI through more of JS instead of HTML"
            ]
        },
        {
            "date": "27-July-2025", "day": "Sunday", "learnings": [
                "No Learnings"
            ]
        }
    ],
    [
        {"date": "26-July-2025", "day": "Saturday", "learnings": [
        "No Learnings (Watched Mahaavtar Nrshimha movie)"
        ]
        },
        {"date": "25-July-2025", "day": "Friday", "learnings": [
            "Learnt a new property: position:fixed which made the scroll to bottom arrow stick to the right bottom size."
            ]
        },
        {"date": "24-July-2025", "day": "Thursday", "learnings": [
            "Learnt a new property: position:fixed which made the scroll to bottom arrow stick to the right bottom size."
            ]
        },
        {"date": "23-July-2025", "day": "Wednesday", "learnings": [
            "Started Mukund Mala Project"
            ]
        },
        {"date": "22-July-2025", "day": "Tuesday", "learnings": [
            "Learnt about display: inline element",
            "It flows with the text i.e., it appears within a line",
            "Only takes up as much width as its content i.e., It does not stretch to the full width of its container like a block element does."
            ]
        },
        {"date": "21-July-2025", "day": "Monday", "learnings": [
            "Create a promise that resolves with a string 'Loading finished' only if isLoaded is true, else reject with 'Loading failed', " +
            "Learnt about display: inline-flex, only takes up as much as width as its content and flex enables the element becomes a flex container, enabling flexbox layout for its children"
            ]
        },
        {"date": "20-July-2025", "day": "Sunday", "learnings": [
            "Creating promise to resolve with 'Task Completed' message",
            "Creating a promise that rejects after 3 seconds with the message 'Something went wrong'",
            "Create a Promise that resolves immediately with the number 42."
            ]
        }
    ]
];

console.log(weeklyStudyData);
const sunToSatContainerDivElement = document.createElement("div");
sunToSatContainerDivElement.classList.add("sunToSatContainer");

const h4Element = document.createElement("h4");
h4Element.classList.add("sunToSat");

const imgElement = document.createElement("img");
imgElement.classList.add("image");

sunToSatContainerDivElement.appendChild(h4Element);
sunToSatContainerDivElement.appendChild(imgElement);

const weeklyViewElement = document.createElement("div");
weeklyViewElement.classList.add("weeklyView");

function createDailyLearningDiv(date, day, learningContent) {
    const dailyDivElement = document.createElement("ul");
    dailyDivElement.classList.add("dailyDiv");

    const dateNDayDivElement = document.createElement("div");
    dateNDayDivElement.classList.add("dateNDayDiv");

    const dateDiv = document.createElement("p");
    dateDiv.classList.add("date")
    dateDiv.textContent = date;
    const dayDiv = document.createElement("p");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;

    const liElement = document.createElement("li");

    liElement.textContent = learningContent;

    weeklyViewElement.appendChild(dailyDivElement);
    dailyDivElement.appendChild(dateNDayDivElement);
    dailyDivElement.appendChild(liElement);
    dateNDayDivElement.appendChild(dateDiv);
    dateNDayDivElement.appendChild(dayDiv);
    document.body.appendChild(weeklyViewElement);
}

for(let i = 0; i < weeklyStudyData.length; i++) {
    for (let j = 0; j < weeklyStudyData.length; j++) {
        console.log(weeklyStudyData[i][j]);
        createDailyLearningDiv(weeklyStudyData[i][j].date, weeklyStudyData[i][j].day, weeklyStudyData[i][j].learnings);
    }
}

