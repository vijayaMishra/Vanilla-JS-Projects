
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
            "date": "12 Sep 2025", "day": "fri", "learnings": [
                "RULE #1: useEffect ONLY Goes At Component Level",
                "Never use useEffect() in Event Handlers(), Never Use Inside Other Functions, No! Never Inside 'If/Else' statements, NO! Never Inside Loops",
                "What is Event Handler? For Eg., function handleClick() {}",
                "CORRECT PLACEMENT OF useEffect() is always at TOP LEVEL, AFTER State Declarations",
                "THE SIMPLE RULE: useEffect goes in the same place as useState - right at the top of your component function!"
            ]
        },
        {
            "date": "11 Sep 2025", "day": "thu", "learnings": [
                "localStorage basics revision about getItem, setItem",
                "studied how without using useEffect what loophole can come"
            ]
        },
        {
            "date": "10 Sep 2025", "day": "wed", "learnings": [
                "ND0B: SEP"
            ]
        },
        {
            "date": "09 Sep 2025", "day": "tues", "learnings": [
                "Revision of React concepts studied so far (useState etc.)",
                "Develop thorough understanding of localstorage",
                "updated schedule of second week of sept in sarjapur site"
            ]
        },
        {
            "date": "08 Sep 2025", "day": "mon", "learnings": [
                "Studied about local storage and with Pam's help added that part in Sacredly Free app"
            ]
        }
    ],
    [
        {
            "date": "07 Sep 2025", "day": "sun", "learnings": [
                "No study, got busy"
            ]
        },
        {
            "date": "06 Sep 2025", "day": "sat", "learnings": [
                "No study, got overly occupied"
            ]
        },
        {
            "date": "01 Sept 2025", "day": "wed", "learnings": [
                "... is a spread operator. It's like 'opening a box and pouring out all its items.",
                "for eg., arr1 = [1, 2, 3] arr2 = [...arr1, 4, 5] Here ...arr1 means: take all elements of arr1 and spread them inside arr2."
            ]
        },
    ],
    [
        {
            "date": "31 Aug 2025", "day": "sun", "learnings": [
                "ND0B, SEP"
            ]
        },
        {
            "date": "30 Aug 2025", "day": "sat", "learnings": [
                "👉 Imagine React is a notebook: 1). Without useState, you type something but nobody writes it down. 2). With useState, React writes everything you type into its notebook, so later (on submit, or API call) it knows exactly what you typed."
            ]
        },
        {
            "date": "29 Aug 2025", "day": "fri", "learnings": [
                ".filter() and .map() return a new array. They don't make changes in the same array."
            ]
        }
    ],
    [
        {
            "date": "20 Aug 2025", "day": "wed", "learnings": [
                "In JS, the 'style' property lets you change CSS styles of an element directly from the code.",
                "One of the most important properties is display. style.display controls how an element appears on the page. It's the JavaScript way of setting the CSS 'display' property. eg., document.getElementById('myPara').style.display = 'none', same as writing #myPara { display: none; };",
                "Common ways of display: none, block, inline, flex, grid",
                "In JS, every HTML element has a className property. It represents all CSS classes applied to that elements as a single string.",
                "I was doing  dots[i].classList = dots[i].classList.replace('active', ''); which is incorrect, instead do dots[i].classList.remove('active'); "
            ]
        },
        {
            "date": "19 Aug 2025", "day": "tues", "learnings": [
                "Sliders ongoing",
                "Each <span class='dot'> is a small clickable element (usually styled as a dot in a carousel/slider).",
                "onclick='currentSlide(1)' means: When you click that span, it will call the JavaScript function currentSlide() and pass the number inside the parentheses as an argument.",
                "&#10094; → ❮ (a left-pointing angle bracket / arrow), &#10095; → ❯ (a right-pointing angle bracket / arrow)",
                "Normally (default: content-box) If you set width: 200px on a div then content 200px and padding and border get added on top of it. -> actual elemment can be more than 200px. With box-sizing: border-box, now width includes content+padding+border",
                "margin: auto is usually used to center align elements horizontally inside their parent container",
                "auto tells the browser: distribute the leftover space equally on both sides.",
                "This only works if the element has a fixed width (or max-width). Otherwise, the element will just stretch to fill the parent, and there will be no 'leftover' space.",
                "Why use position: relative ?",
                "span {   display: inline;   height: 100px;  /* ❌ no effect */   width: 200px;   /* ❌ no effect */  } It should be block.",
                "Summary: inline ignores height/width. Use inline-block, block, or flex/grid if you need size control.",
                "transition: background-color 0.6s ease i) background-color is the property that will animate ii) It will take 0.6s for the color change to complete; ease: timing function, how the speed of the animation progresses over time",
                "linear : same speed throughout; ease-in : starts slow, ends fast ; ease-out : starts fast, ends slow, ease-in-out : slow -> fast -> slow",
                "ease: starts slow, speeds up in the middle then slows down at the end."
            ]
        },
        {
            "date": "18 August 2025", "day": "mon", "learnings": [
                "Started learning sliders from W3"
            ]
        }
    ],
    [
        {
            "date": "15, 16, 17 Aug 2025", "day": "fri, sat, sun", "learnings" : [
                "Janmashtami 2025 preps!!",
                "Sun rest from prev day work, broken toe, cough, finger cuts, knee scratch, rest!"
            ]
        },
        {
            "date": "14 August 2025", "day": "thursday", "learnings": [
                "Caraousels",
                "Object-fit: cover -> keeps the image ratio but fills the container\nObject-fit: contain -> keeps full image visible, might leave empty space.",
                "In a carousel, if you don’t set a fixed width & height (or at least a fixed width for the container), the image will just display at its natural size, which can be huge. So, i) Restrict the carousel container size ii) Make the image adapt to the container",
                "box-sizing: border-box -> eg., width: 200px; padding: 10px; border: 5px solid black; box-sizing: border-box; 200px is total width, content inside automatically shrinks to fit padding and border unlike content-box, which is by default",
                "overflow: hidden -> If content sticks out beyond the box, don’t show it. Cut it off.",
                "width: 500px -> The element’s width is fixed at exactly 500px, no matter what. Even if the screen is smaller, it will not shrink (it might overflow).",
                "max-width: 500px -> The element’s width can be smaller than 500px, but never larger. It’s more flexible and responsive — it can shrink if the screen is small.",
                "margin: auto -> Figure out the margin yourself so that the element is centered in the available space. (works only if block level eg., <div> or fixed width or max-width",
                "margin: auto -> gives equal left and right margins",
                "transition: transform 0.5s ease-in-out || tansition is a CSS shortcut that says -> When this property changes, animate the change smoothly instead of jumping instantly",
                "transform -> the property you want to animate, 0.5s -> duration of the animation, ease-in-out -> Starts slow → speeds up → slows down at the end. (the timing function, which controls the speed curve)",
                "Revision: background-size: contain works only for CSS background images (e.g., on a <div>), not <img> tags, and we use background-repeat: no-repeat to stop the default repeat.",
                "Updated Learnings project, divided into weekly data"
            ]
        },
        {
            "date": "13 August 2025", "day": "wednesday", "learnings": [
                "Learned that background-size: contain prevents an image from stretching.",
                "This property only applies to images set as a CSS background. (eg., on a <div>), not to images in an <img> tag.",
                "By default, background images repeat, so we usually use background-repeat: no repeat.",
                "Learnt about media query , using which changed Weekly Overview header for tablet and laptop view",
                "Also, fell off from scooty yesterday on the muddy, slippery road near home while returning "
            ]
        },
        {
            "date": "12 August 2025", "day": "tuesday", "learnings": [
                "Solved Reversing an array problem with 5 different ways."
            ]
        },
        {
            "date": "11 August 2025", "day": "monday", "learnings": [
                "Comp-off leave turned into catching up on weekend work—ended the day tired and upset as no study. :("
            ]
        }
    ],
    [
        {
            "date": "7, 8, 9, 10 August 2025", "day": "thu, fri, sat, sun", "learnings": [
                "7th Aug, THU - Office work and made a halfyear video",
                "8th Aug, FRI - Loads of ofc work and after returning couldn't study as gave time to fam gues",
                "9th Aug, SAT - It was Rakhi day, and somehow we ended up on a grand adventure, traveling through heavy pouring rain."
            ]
        },
        {
            "date": "6 August 2025", "day": "wednesday", "learnings": [
                "`There are ${eventCount} even numbers and ${oddCount} odd numbers` is correct. Earlier I wrote 'There are ${`eventCount`} even numbers and `${oddCount}` odd numbers'",
                "This will work: let evenCount = 0; let oddCount = 0; whereas let evenCount, oddCount = 0; won't work it takes oddCount as 0 but evenCount as NaN"
            ]
        },
        {
            "date": "5 August 2025", "day": "tuesday", "learnings": [
                "If two songs have the searched word present (hari) previous logic won't work, studying and building logic",
                "Feeling like newbie :P"
            ]
        },
        {
            "date": "4 August 2025", "day": "monday", "learnings": [
                "Search feature functional in Songs project",
                "passed to a function like displaySongsUI() which expects an array, JavaScript treats the string as iterable and loops over each character — so to avoid this, I need to wrap the string in square brackets like displaySongsUI([bhajanList[i]]) to pass it as a one-item array."
            ]
        },
    ],
    [
        {
            "date": "3 August 2025", "day": "sunday", "learnings": [
                "Full KC Day [1st Day of new center + Ramcharitmanas Path eve]"
            ]
        },
        {
            "date": "2 August 2025", "day": "saturday","learnings": [
                "Worked on Sarjapur project website"
            ]
        },
        {
            "date": "1 August 2025", "day": "friday", "learnings": [
                "Q. What is onChange() and how to use it? A. When the value of an HTML element changes 'onchange' event handler runs a function. Used on form elements like <input>, <select> (dropdowns) etc.",
                "Started Search Song project",
                "IMPORTANT: when I was trying to create search song project, I was trying to do includes on array instead of doing it on array element."
            ]
        },
        {
            "date": "31-July-2025", "day": "thursday","learnings": [
                "Refined the look and feel of section heading like Upcoming, Past, Donate, etc. and other small elements to enhance the overall visual appeal of the Sarjapur website that prji is working on.",
                "Added an image at the end of FantasticFonts&Colours website, increased font size for better readability."
            ]
        },
        {
            "date": "30-July-2025","day": "wednesday","learnings": [
                "Worked on Fonts&Colours Project",
                "Rendering Colours via an object of arrays which has colour details, similar to how Font styles are being rendered",
                "Added title, center-aligned images, updated order of fonts that appear on main screen "
            ]
        },
        {
            "date": "29-July-2025", "day": "tuesday", "learnings": [
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
    ],
    [
        {
            "date": "27-July-2025", "day": "sunday", "learnings": [
                "No Learnings"
            ]
        },
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
    ],
    [
        {
            "date": "20-July-2025", "day": "sunday", "learnings": [
                "Creating promise to resolve with 'Task Completed' message",
                "Creating a promise that rejects after 3 seconds with the message 'Something went wrong'",
                "Create a Promise that resolves immediately with the number 42."
            ]
        }
    ]
];
//console.log(weeklyStudyData);

function createMonthlyView() {

}

function createWeeklyView() {
    const weeklyOverviewContainerDivElement = document.createElement("div");
    weeklyOverviewContainerDivElement.classList.add("weeklyOverviewContainer");

    const h4Element = document.createElement("h4");
    h4Element.classList.add("sunToSat");
    h4Element.textContent = "Weekly Overview";

    const imgElement = document.createElement("img");
    imgElement.classList.add("image");
    imgElement.src = "border-redflower.png";

    const weeklyViewElement = document.createElement("div");
    weeklyViewElement.classList.add("weeklyView");

    weeklyOverviewContainerDivElement.appendChild(h4Element);
    weeklyOverviewContainerDivElement.appendChild(imgElement);

    weeklyViewElement.appendChild(weeklyOverviewContainerDivElement);

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
        //console.log(weeklyStudyData[i][j]);
        createDailyLearningDiv(weeklyStudyData[i][j].date, weeklyStudyData[i][j].day, weeklyStudyData[i][j].learnings, weeklyViewElement);
    }
}

