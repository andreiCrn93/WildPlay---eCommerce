const products = [
    {
        id:1,
        title:"ELEMENTAL THRONE",
        price:399,
        description:"Introducing the ELEMENTAL THRONE Gaming Chairs Collection – a trilogy of distinct chairs where nature, ice, and fire find individual expression, offering unparalleled gaming experiences tailored to your preferences.",
        colors:[
            {
                code:"green",
                img:"./Images/chair_green.png",
                name:"FOREST EMERALD"
            },
            {
                code:"blue",
                img:"./Images/chair_blue.png",
                name:"ARCTIC GLACIER"
            },
            {
                code:"red",
                img:"./Images/chair_redvolcano.png",
                name:"LAVA BLAZE"
            },
        ],
        info:[
            {
                title:"PREMIUM MATERIALS",
                img:"./Images/chair_info1.jpg",
                text:"Our gaming chairs are constructed using high-quality materials that prioritize comfort, durability, and style. From luxurious PU leather to breathable mesh fabric, these chairs are designed to withstand long gaming sessions while providing maximum comfort and support."
            },
            {
                title:"ADJUSTABLE FEATURES",
                img:"./Images/chair_info2.png",
                text:"Adjustable features offer unparalleled versatility and comfort, allowing users to personalize their gaming experience. With adjustable armrests, seat height, and reclining backrests, users can effortlessly customize the chair to their preferred seating position."
            },
        ],
    },
    {
        id:2,
        title:"ELEMENTAL SOUNDWAVE",
        price:199,
        description:"Elevate your gaming setup with the ELEMENTAL SOUNDWAVE Series Gaming Headset and embark on a journey into unparalleled audio immersion and visual splendor. Whether you're exploring vast virtual worlds, engaging in intense multiplayer battles, or immersing yourself in captivating narratives, the Spectrum Series is your ultimate companion for gaming greatness. Choose your color, dive into the action, and unleash the full potential of your gaming experience.",
        colors:[
            {
                code:"green",
                img:"./Images/headset_green.png",
                name:"FOREST EMERALD"
            },
            {
                code:"blue",
                img:"./Images/headset_blue.png",
                name:"ARCTIC GLACIER"
            },
            {
                code:"red",
                img:"./Images/headset_red.png",
                name:"LAVA BLAZE"
            },
        ],
        info:[
            {
                title:"HIGH QUALITY AUDIO",
                img:"./Images/headsets_info1.jpg",
                text:"Discover the headset's premium audio drivers, which are engineered to deliver crystal-clear sound with accurate highs, rich mid-tones, and powerful bass. These drivers ensure that every sound detail in the game is reproduced faithfully, enhancing immersion and gameplay experience."
            },
            {
                title:"COMFORTABLE DESIGN",
                img:"./Images/headsets_info2.jpg",
                text:"The headset is ergonomically designed to provide long-lasting comfort, featuring adjustable headbands and cushioned ear cups that conform to the shape of the user's head for a perfect fit. It uses breathable materials in the ear cups and headband padding."
            },
        ],
    },
    {
        id:3,
        title:"ELEMENTAL SCRIPT",
        price:139,
        description:"Transform your gaming setup with the ELEMENTAL SCRIPT Series Gaming Keyboard and unlock a new level of gaming prowess. Whether you're a casual gamer or a competitive esports enthusiast, this keyboard is your ticket to gaming greatness. Choose your color, unleash your potential, and dominate the competition with style and flair.",
        colors:[
            {
                code:"green",
                img:"./Images/keyboard_green.png",
                name:"FOREST EMERALD"
            },
            {
                code:"blue",
                img:"./Images/keyboard_blue.png",
                name:"ARCTIC GLACIER"
            },
            {
                code:"red",
                img:"./Images/keyboard_red.png",
                name:"LAVA BLAZE"
            },
        ],
        info:[
            {
                title:"DURABLE CONSTRUCTION",
                img:"./Images/keyboard_info1.jpg",
                text:"Our gaming keyboard is built to withstand the rigors of intense gaming sessions, featuring a robust construction that ensures long-lasting durability. With a reinforced frame and high-quality materials, this keyboard is engineered to endure the demands of competitive gaming without sacrificing performance."
            },
            {
                title:"CUSTOMIZABLE RGB LIGHTNING",
                img:"./Images/keyboard_info2.jpg",
                text:"Elevate your gaming experience with our keyboard's customizable RGB lighting, offering a spectrum of vibrant colors and dynamic lighting effects to suit your style. With intuitive software controls, you can effortlessly personalize every aspect of the keyboard's lighting."
            },
        ],
    },
    {
        id:4,
        title:"ELEMENTAL PATHFINDER",
        price:159,
        description:"Step into the realm of gaming excellence with the Spectrum Series Gaming Mouse and unlock the full extent of your gaming prowess. Whether you're a casual player seeking immersion or a competitive enthusiast chasing victory, this mouse is your key to gaming greatness. Select your color, define your style, and reign supreme on the battlefield with unmatched precision and flair.",
        colors:[
            {
                code:"green",
                img:"./Images/mouse_green.png",
                name:"FOREST EMERALD"
            },
            {
                code:"blue",
                img:"./Images/mouse_blue.png",
                name:"ARCTIC GLACIER"
            },
            {
                code:"red",
                img:"./Images/mouse_red.png",
                name:"LAVA BLAZE"
            },
        ],
        info:[
            {
                title:"HIGH PRECISION SENSORS",
                img:"./Images/mouse_info1.jpg",
                text:"Our gaming mouse is equipped with a cutting-edge high precision sensor, engineered to deliver unparalleled accuracy and responsiveness for competitive gaming. With advanced optical or laser technology, the sensor tracks even the slightest movement with pixel-perfect precision, ensuring your cursor follows your every command flawlessly."
            },
            {
                title:"EGRONOMIC DESIGN",
                img:"./Images/mouse_info2.jpg",
                text:"Designed with ergonomics in mind, our gaming mouse offers unparalleled comfort and usability, ensuring you can maintain peak performance during even the longest gaming sessions. Featuring a contoured shape and sculpted design, the mouse fits naturally in your hand, providing a comfortable grip that reduces strain and fatigue."
            },
        ],
    },
]
const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

// Inițializarea variabilei chosenProduct cu primul produs din array-ul products
let chosenProduct = products[0];

// Selectarea elementelor HTML relevante pentru produsul curent
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductColorName = document.querySelector(".colorName"); 
const currentProductInfoTitle1 = document.querySelector("#infoTitle1");
const currentProductInfoTitle2 = document.querySelector("#infoTitle2");
const currentProductInfoImg1 = document.querySelector("#infoImg1");
const currentProductInfoImg2 = document.querySelector("#infoImg2");
const currentProductInfoText1 = document.querySelector("#infoText1");
const currentProductInfoText2 = document.querySelector("#infoText2");

menuItems.forEach((item,index) => {
item.addEventListener("click",()=>{
    //schimbarea slide-ului curent
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //schimbarea produsului selectat
    chosenProduct = products[index];

    //schimbarea elementelor produsului curent
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductDescription.textContent = chosenProduct.description;
    currentProductImg.src = chosenProduct.colors[0].img;
    currentProductColorName.textContent = chosenProduct.colors[0].name;
    currentProductInfoTitle1.textContent = chosenProduct.info[0].title;
    currentProductInfoTitle2.textContent = chosenProduct.info[1].title;
    currentProductInfoImg1.src = chosenProduct.info[0].img;
    currentProductInfoImg2.src = chosenProduct.info[1].img;
    currentProductInfoText1.textContent = chosenProduct.info[0].text;
    currentProductInfoText2.textContent = chosenProduct.info[1].text;

    //asignare culoare
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chosenProduct.colors[index].code;
    });
});
});

// Adăugarea unui eveniment de click pentru fiecare element din lista de culori
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        // Actualizarea imaginii produsului curent cu imaginea corespunzătoare culorii selectate
        currentProductImg.src = chosenProduct.colors[index].img;
        // Actualizarea numelui culorii produsului curent cu numele culorii selectate
        currentProductColorName.textContent = chosenProduct.colors[index].name;
});
});

// Selectarea elementelor HTML relevante pentru afișarea/ascunderea secțiunii de plată
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Adăugarea unui eveniment de click pentru butonul de produs pentru a deschide secțiunea de plată
productButton.addEventListener("click",()=>{
    payment.style.display="flex" /*Afișarea secțiunii de plată prin setarea stilului "display:flex"*/
})
// Adăugarea unui eveniment de click pentru butonul de închidere pentru a ascunde secțiunea de plată
close.addEventListener("click",()=>{
    payment.style.display="none" /*Ascunderea secțiunii de plată prin setarea stilului "display:none"*/
})

const infoButton = document.querySelector(".productInfoBox");
const infos = document.querySelector(".infos");
const closeInfo = document.querySelector(".closeInfo");

infoButton.addEventListener("click",()=>{
    infos.style.display="flex"
})

closeInfo.addEventListener("click",()=>{
    infos.style.display="none"
})