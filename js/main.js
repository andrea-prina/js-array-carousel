// Import the images that will be displayed in the carousel
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];


const carouselWrapper = document.getElementById("carousel-wrap");

// For each image in the list, create an img element and append it to the carousel

for (let i = 0; i < images.length; i++){

    // Create the image element and set the src attribute
    const carouselImage = document.createElement("img");
    carouselImage.setAttribute("src", images[i]);

    // Give the appropriate classes to the element
    // If the element is the first one, give it the additional "active" class
    carouselImage.classList.add("ms_carousel-imgs");
    if (i === 0){
        carouselImage.classList.add("active");
    }

    // Add the element to the carousel wrapper element
    carouselWrapper.append(carouselImage);

}

// Initialize the index and the buttons

let activeImageIndex = 0;
const imageList = carouselWrapper.children;
const nextButton = document.getElementById("button-next");
const prevButton = document.getElementById("button-prev");

nextButton.addEventListener("click", function(){
    
    // Remove the "active" class from the current image
    imageList[activeImageIndex].classList.remove("active");
    // Advanced the activeImage counter
    activeImageIndex++;
    // Add the "active" class to the following image
    imageList[activeImageIndex].classList.add("active");

})

prevButton.addEventListener("click", function(){
    // Remove the "active" class from the current image
    imageList[activeImageIndex].classList.remove("active");
    // Decrement the activeImage counter
    activeImageIndex--;
    // Add the "active" class to the previous image
    imageList[activeImageIndex].classList.add("active");
})



