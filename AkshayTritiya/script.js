const knowMore = document.querySelector(".knowMoreBtn");
knowMore.addEventListener("click", function() {
    var moreContent = document.querySelector(".moreContent");

    if(moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
});
