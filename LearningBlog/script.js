function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

let weeklyStudyData = [
    [
        {
            "date": "28-July-2025", "day": "monday", "learnings": [
                "Added Beautiful red floral to the Learning Blog UI",
                "Created UI from 2D Array which has Weekly and Daily learning data",
                "Returning weekly element from a function and then reusing it in create daily div element",
                "Redoing entire Learning Blog UI through more of JS instead of HTML"
            ]
        },
        {
            "date": "27-July-2025", "day": "sunday", "learnings": [
                "No Learnings"
            ]
        }
    ],
    [
        {
            "date": "26-July-2025", "day": "saturday", "learnings": [
                "No Learnings (Watched Mahavatar Narsimha movie)"
            ]
        },
        {
            "date": "25-July-2025", "day": "friday", "learnings": [
                "Learnt a new property: position:fixed which made the scroll to bottom arrow stick to the right bottom size."
            ]
        },
        {
            "date": "24-July-2025", "day": "thursday", "learnings": [
                "Learnt a new property: position:fixed which made the scroll to bottom arrow stick to the right bottom size."
            ]
        },
        {
            "date": "23-July-2025", "day": "wednesday", "learnings": [
                "Started Mukund Mala Project"
            ]
        },
        {
            "date": "22-July-2025", "day": "tuesday", "learnings": [
                "Learnt about display: inline element",
                "It flows with the text i.e., it appears within a line",
                "Only takes up as much width as its content i.e., It does not stretch to the full width of its container like a block element does."
            ]
        },
        {
            "date": "21-July-2025", "day": "monday", "learnings": [
                "Create a promise that resolves with a string 'Loading finished' only if isLoaded is true, else reject with 'Loading failed', " +
                "Learnt about display: inline-flex, only takes up as much as width as its content and flex enables the element becomes a flex container, enabling flexbox layout for its children"
            ]
        },
        {
            "date": "20-July-2025", "day": "sunday", "learnings": [
                "Creating promise to resolve with 'Task Completed' message",
                "Creating a promise that rejects after 3 seconds with the message 'Something went wrong'",
                "Create a Promise that resolves immediately with the number 42."
            ]
        }
    ]
];

console.log(weeklyStudyData);

function createWeeklyView() {
    const sunToSatContainerDivElement = document.createElement("div");
    sunToSatContainerDivElement.classList.add("sunToSatContainer");

    const h4Element = document.createElement("h4");
    h4Element.classList.add("sunToSat");
    h4Element.textContent = "Weekly Overview";

    const imgElement = document.createElement("img");
    imgElement.classList.add("image");
    imgElement.src = "border-redflower.png";

    const weeklyViewElement = document.createElement("div");
    weeklyViewElement.classList.add("weeklyView");

    sunToSatContainerDivElement.appendChild(h4Element);
    sunToSatContainerDivElement.appendChild(imgElement);

    weeklyViewElement.appendChild(sunToSatContainerDivElement);

    document.body.appendChild(weeklyViewElement);

    return weeklyViewElement;
}


function createDailyLearningDiv(date, day, learningContent, weeklyViewElement) {
    const dailyDivElement = document.createElement("div");
    dailyDivElement.classList.add("dailyDiv");
    weeklyViewElement.appendChild(dailyDivElement);


    const dateNDayDivElement = document.createElement("div");
    dateNDayDivElement.classList.add("dateNDayDiv");
    dailyDivElement.appendChild(dateNDayDivElement);


    const dateDiv = document.createElement("p");
    dateDiv.classList.add("date")
    dateDiv.textContent = date;
    dateNDayDivElement.appendChild(dateDiv);


    const dayDiv = document.createElement("p");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;
    dateNDayDivElement.appendChild(dayDiv);


    const ulElement = document.createElement("ul");
    dailyDivElement.appendChild(ulElement);


    for(let i = 0; i < learningContent.length; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = learningContent[i];
        ulElement.appendChild(liElement);
    }
}

for(let i = 0; i < weeklyStudyData.length; i++) {
    const weeklyViewElement = createWeeklyView();
    for (let j = 0; j < weeklyStudyData[i].length; j++) {
        console.log(weeklyStudyData[i][j]);
        createDailyLearningDiv(weeklyStudyData[i][j].date, weeklyStudyData[i][j].day, weeklyStudyData[i][j].learnings, weeklyViewElement);
    }
}

