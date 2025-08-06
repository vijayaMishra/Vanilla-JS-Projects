
const scrollToBottomBtnElement = document.querySelector(".scrollToBottomBtn");
scrollToBottomBtnElement.addEventListener("click", function handleArrowBtnClick(event) {
    if(event.target.innerText === "↓") { // go to bottom
        event.target.innerText = "↑";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    } else {
        event.target.innerText = "↓";  // go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

let weeklyStudyData = [
    [
        {
            "date": "6 August 2025",
            "day": "wednesday",
            "learnings": [
                "`There are ${eventCount} even numbers and ${oddCount} odd numbers` is correct. Earlier I wrote 'There are ${`eventCount`} even numbers and `${oddCount}` odd numbers'",
                "This will work: let evenCount = 0; let oddCount = 0; whereas let evenCount, oddCount = 0; won't work it takes oddCount as 0 but evenCount as NaN"
            ]
        },
        {
            "date": "5 August 2025",
            "day": "tuesday",
            "learnings": [
                "If two songs have the searched word present (hari) previous logic won't work, studying and building logic",
                "Feeling like newbie :P"
            ]
        },
        {
            "date": "4 August 2025",
            "day": "monday",
            "learnings": [
                "Search feature functional in Songs project",
                "passed to a function like displaySongsUI() which expects an array, JavaScript treats the string as iterable and loops over each character — so to avoid this, I need to wrap the string in square brackets like displaySongsUI([bhajanList[i]]) to pass it as a one-item array."
            ]
        },
        {
            "date": "3 August 2025",
            "day": "sunday",
            "learnings": [
                "Full KC Day"
            ]
        },
        {
            "date": "2 August 2025",
            "day": "saturday",
            "learnings": [
                "Worked on Sarjapur project website"
            ]
        },
        {
            "date": "1 August 2025",
            "day": "friday",
            "learnings": [
                "Q. What is onChange() and how to use it? A. When the value of an HTML element changes 'onchange' event handler runs a function. Used on form elements like <input>, <select> (dropdowns) etc.",
                "Started Search Song project",
                "IMPORTANT: when I was trying to create search song project, I was trying to do includes on array instead of doing it on array element."
            ]
        },
        {
            "date": "31-July-2025",
            "day": "thursday",
            "learnings": [
                "Refined the look and feel of section heading like Upcoming, Past, Donate, etc. and other small elements to enhance the overall visual appeal of the Sarjapur website that prji is working on.",
                "Added an image at the end of FantasticFonts&Colours website, increased font size for better readability."
            ]
        },
        {
            "date": "30-July-2025",
            "day": "wednesday",
            "learnings": [
                "Worked on Fonts&Colours Project",
                "Rendering Colours via an object of arrays which has colour details, similar to how Font styles are being rendered",
                "Added title, center-aligned images, updated order of fonts that appear on main screen "
            ]
        },
        {
            "date": "29-July-2025",
            "day": "tuesday",
            "learnings": [
                "Enhancing font styles to improve visual appeal on the Sarjapur Road site.",
                "If you created a new div element using JS and want to give it 'id' then it can be done using fontsContainerElement.id = 'fontsContainerClass'",
                "New command: git reset --hard HEAD",
                "Updating FontsAndColours project, re-doing it through JS instead of adding data in HTML ",
                "To do: Understand search feature in Fonts page",
                "To do: Create a custom font-family and add the necessary <link> tag in the Fonts project's homepage to apply it."
            ]
        },
        {
            "date": "28-July-2025", "day": "monday", "learnings": [
                "Added Beautiful red floral to the Learning Blog UI",
                "Created UI from 2D Array which has Weekly and Daily learning data",
                "Returning weekly element from a function and then reusing it in create daily div element",
                "Redoing entire Learning Blog UI through more of JS instead of HTML",
                "Added scroll-to-top button functionality when the user reaches the bottom of the page, complementing the existing scroll-to-bottom feature available at the top."
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

