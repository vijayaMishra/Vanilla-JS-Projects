const moreBtnElement = document.querySelector(".moreBtn");
const moreDetails = document.querySelector(".moreDetails");

moreBtnElement.addEventListener("click", function() {
        // console.log("clicked");
        if(moreDetails.style.display === "none" || moreDetails.style.display === "") {
                moreDetails.style.display = "block";
                moreBtnElement.style.display = "none";
        } else {
                // moreDetails.style.display = "none";
        }

        
});
const lessBtnElement = document.querySelector(".lessBtn");
        lessBtnElement.addEventListener("click", function() {
                moreDetails.style.display = "none";
                moreBtnElement.style.display = "block";
        })
