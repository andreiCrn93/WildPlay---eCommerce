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
const infoButton = document.querySelector(".productInfoBox");

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
    let selectedColorIndex = 0;
    //asignare culoare
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chosenProduct.colors[index].code;
    });
});
});

// Adăugarea unui eveniment de click pentru fiecare element din lista de culori
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductColors.forEach((color) => {
            color.classList.remove("active");
        });
        color.classList.add("active");
        // Actualizarea imaginii produsului curent cu imaginea corespunzătoare culorii selectate
        currentProductImg.src = chosenProduct.colors[index].img;
        // Actualizarea numelui culorii produsului curent cu numele culorii selectate
        currentProductColorName.textContent = chosenProduct.colors[index].name;
        infoButton.style.color = chosenProduct.colors[index].code;
        infoButton.style.borderColor = chosenProduct.colors[index].code;
});
});

// const infoButton = document.querySelector(".productInfoBox");
const infos = document.querySelector(".infos");
const closeInfo = document.querySelector(".closeInfo");

infoButton.addEventListener("click",()=>{
    infos.style.display="flex"
})

closeInfo.addEventListener("click",()=>{
    infos.style.display="none"
})

    const emailModal = document.querySelector('.emailMd');
    const joinButton = document.querySelector('.fButton');
    const belowModalIcons = document.querySelector('.fIcons');
    const belowModalTitle = document.querySelector('#followUs');
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const modalMessage = document.querySelector('.emailMdContent');

    function openEmailModal() {
        setTimeout(function() {
            emailModal.style.display = 'block';
        }, 500);
      }
    
    function closeEmailModal(){
        emailModal.style.display = 'none';
    }
    
    let isSubscribed = false;

    joinButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if(isValidEmail(email)){
            modalMessage.textContent = 'Thanks for subscribing!';
            modalMessage.style.color = 'black';
            modalMessage.style.backgroundColor = 'rgb(92, 244, 153)';
            isSubscribed = true;
            openEmailModal();
            setTimeout(closeEmailModal,3000);
        } else {
            modalMessage.textContent = 'Invalid email adress!';
            modalMessage.style.color = 'rgb(145, 39, 13)';
            modalMessage.style.backgroundColor = 'white';
            openEmailModal();
            setTimeout(closeEmailModal,3000);
        };
        emailInput.value = '';
      });

  joinButton.addEventListener('click', function(event) {
    event.preventDefault();
    belowModalIcons.classList.add('transition-delay');
    belowModalTitle.classList.add('transition-delay');

    setTimeout(function() {
        belowModalIcons.classList.remove('transition-delay');
        belowModalTitle.classList.remove('transition-delay');
    },3000);
    // openModal();
  });

  function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  
  const addToCartButton = document.querySelector(".productButton");

  addToCartButton.addEventListener('click',addToCart);

    let productColorIndex = 0;
    menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        productColorIndex = 0;
        currentProductColors.forEach((color) => {
            color.classList.remove("active");
        });
});
});
let isCartOpen = false;
const closeCartButton = document.querySelector(".closeCart");
const cartMenu = document.querySelector(".cartMenu");
const openCartButton = document.querySelector(".cartButton");

function openCart(){
    cartMenu.style.display="block";
    isCartOpen = true;
}

function closeCart(){
    cartMenu.style.display="none";
    isCartOpen = false;
}

closeCartButton.addEventListener('click',closeCart);
openCartButton.addEventListener('click',openCart);

const ulElement = document.querySelector("ul");
const emptyMessage = document.querySelector(".emptyMessage");

  function addToCart(){
    const productName = currentProductTitle.textContent;
    const productPrice = currentProductPrice.textContent;
    productColorIndex = Array.from(currentProductColors).findIndex(color => color.classList.contains("active"));
    if (productColorIndex === -1) {
        productColorIndex = 0;
    }
    const productImage = chosenProduct.colors[productColorIndex].img;
    const productColorName = chosenProduct.colors[productColorIndex].name;
    const productImageColor = chosenProduct.colors[productColorIndex].code;

    const existingCartItem = document.querySelector(`.itemDesc .itemName[data-name="${productName}${productColorName}"]`);

    if(existingCartItem){
        const quantityElement = existingCartItem.parentElement.nextElementSibling.querySelector(".currentQty");
        const quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        const amountElement = existingCartItem.parentElement.nextElementSibling.nextElementSibling;
        const amountElementInt = parseInt(amountElement.textContent.substring(1,amountElement.textContent.length));
        const amountElement3 = productPrice.substring(1,productPrice.length);
        const newAmountElement = parseInt(amountElementInt) + parseInt(amountElement3);
        updateTotalPrice();
        amountElement.innerHTML = "$" + newAmountElement;
        const numberOfElements = document.querySelector('.itemsNumber');
        numberOfElements.innerHTML = parseInt(numberOfElements.textContent)+1;
    } else{
            const newItem = document.createElement("li");
            newItem.classList.add("item");
            newItem.setAttribute("data-name", productName);
            newItem.setAttribute("data-color", productColorName);
            let productImageBackground = '';
            if(productImageColor==="green"){
                productImageBackground = "rgba(0, 255, 0, 0.1)";
            } else if(productImageColor==="blue"){
                productImageBackground = "rgba(0, 0, 255, 0.1)";
            } else if(productImageColor==="red"){
                productImageBackground = "rgba(255, 0, 0, 0.1)";
            };
            newItem.innerHTML = `
                <div class="itemImage">
                    <img src="${productImage}" alt="" class="itemImg">
                </div>
                <div class="itemDesc" style="background-color:${productImageBackground}">
                    <div class="itemName" data-name="${productName}${productColorName}">${productName}</div>
                    <div class="itemColor" data-name="${productColorName}">${productColorName}</div>
                </div>
                <div class="qtyMenu">
                    <button class="minus">-</button>
                    <div class="currentQty">1</div>
                    <button class="plus">+</button>
                </div>
                <div class="amount">${productPrice}</div>
                <div class="bin">
                    <button class="binButton">
                        <img src="./Images/bin_icon.png" alt="" class="binIcon">
                    </button>
                </div>
            `;
            console.log(productImageColor);
            console.log(productImageBackground);
            document.querySelector(".list").appendChild(newItem);
                newItem.querySelector(".minus").addEventListener("click", decreaseQuantity);
                newItem.querySelector(".plus").addEventListener("click", increaseQuantity);
                newItem.querySelector(".binButton").addEventListener("click", removeItem);
                updateTotalPrice()
                const numberOfElements = document.querySelector('.itemsNumber');
                numberOfElements.innerHTML = parseInt(number2 = numberOfElements.textContent)+1;
    }
}

function increaseQuantity(event) {
    const quantityElement = event.target.parentElement.querySelector(".currentQty");
    const quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    const amountElement = event.target.parentElement.nextElementSibling;
    const amountElementInt = parseInt(amountElement.textContent.substring(1,amountElement.textContent.length));
    const productPrice = amountElementInt/quantity;
    const newAmountElement = parseInt(amountElementInt) + productPrice;
    amountElement.innerHTML = "$" + newAmountElement;
    const numberOfElements = document.querySelector('.itemsNumber');
    numberOfElements.innerHTML = parseInt(numberOfElements.textContent)+1;
    updateTotalPrice();
}

function decreaseQuantity(event) {
    const quantityElement = event.target.parentElement.querySelector(".currentQty");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    } else {
        event.target.closest(".item").remove();
    }

    const amountElement = event.target.parentElement.nextElementSibling;
    const amountElementInt = parseInt(amountElement.textContent.substring(1,amountElement.textContent.length));
    const productPrice = amountElementInt/quantity;
    const newAmountElement = parseInt(amountElementInt) - productPrice;
    amountElement.innerHTML = "$" + newAmountElement;
    const numberOfElements = document.querySelector('.itemsNumber');
    numberOfElements.innerHTML = parseInt(numberOfElements.textContent)-1;
    updateTotalPrice();
}

function removeItem(event) {
    event.target.closest(".item").remove();
    const numberElementsRemoved = parseInt(event.target.closest(".item").querySelector(".currentQty").textContent);
    const numberOfElements = document.querySelector('.itemsNumber');
    numberOfElements.innerHTML = parseInt(numberOfElements.textContent)-parseInt(numberElementsRemoved);
    updateTotalPrice();
}
const total = document.querySelector('.totalAmount');

function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll(".item").forEach(item => {
    const updatedPrice = parseInt(item.querySelector(".amount").textContent.substring(1,item.querySelector(".amount").textContent.length));
    totalPrice += updatedPrice;
    });
    total.innerHTML=totalPrice+"$";
}

const checkoutButton = document.querySelector('.checkoutButton');
const payment = document.querySelector(".payment");

document.body.addEventListener('click', function() {
    
if (ulElement.childElementCount === 0) {
    emptyMessage.style.display = 'flex';
    checkoutButton.style.backgroundColor = 'gray';
    checkoutButton.addEventListener('click', ()=>{
        payment.style.display='none';
        cartMenu.style.display="block";
        isCartOpen = true;
    })
} else {
    emptyMessage.style.display = 'none';
    checkoutButton.style.backgroundColor = 'greenyellow';
    checkoutButton.addEventListener('click', ()=>{
        payment.style.display='flex';
        cartMenu.style.display="none";
        isCartOpen = false;
    })
};
const numberOfElements = document.querySelector(".itemsNumber");
if(parseInt(numberOfElements.textContent)===0){
    numberOfElements.style.display="none";
} else{
    numberOfElements.style.display="block";
};

const discountedPrice = document.querySelector(".discountedAmount");
if(isSubscribed===true && ulElement.childElementCount !== 0){
    discountedPrice.innerHTML = parseInt(total.innerHTML.substring(0,total.length)) - 0.1*parseInt(total.innerHTML.substring(0,total.length)) + "$";
    discountedPrice.style.display = "block";
    total.style.textDecoration = "line-through";
} else{
    discountedPrice.style.display = "none";
    total.style.textDecoration = "none";
};


limitedOfferButton.addEventListener("mouseenter", () => {
    if(isCartOpen===false){
        offerMessage.style.display = "flex";
    } else{
        offerMessage.style.display = "none";
    }
})
limitedOfferButton.addEventListener("mouseleave", () => {
    offerMessage.style.display = "none";
})

});

const close = document.querySelector(".close");

close.addEventListener("click",()=>{
    payment.style.display="none";
})

const limitedOfferButton = document.querySelector(".limitedOffer");
const offerMessage = document.querySelector(".offer");


limitedOfferButton.addEventListener("mouseenter", () => {
    offerMessage.style.display = "flex";
})

limitedOfferButton.addEventListener("mouseleave", () => {
    offerMessage.style.display = "none";
})

const nameRegex = /[a-zA-Z]+(?:['-][a-zA-Z]+)?(?: [a-zA-Z]+(?:['-][a-zA-Z]+)?)+$/;
let isNameFilled = false;
let isNameFilledCorrectly = false;
function isValidName(name){
    return nameRegex.test(name);
}

function checkName(){
    const personName = document.getElementById('personName').value;
    if(personName===''){
        isNameFilled = false;
        isNameFilledCorrectly = false;
    } else if(isValidName(personName)){
        isNameFilled = true;
        isNameFilledCorrectly = true;
    } else {
        isNameFilled = true;
        isNameFilledCorrectly = false;
    }
}


const phoneRegex = /^\+407\d{8}$/;
let isPhoneFilled = false;
let isPhoneFilledCorrectly = false;

function isValidPhone(phone){
    return phoneRegex.test(phone);
}

function checkPhone(){
    const personPhone = document.getElementById('personPhone').value;
    if(personPhone===""){
        isPhoneFilled = false;
        isPhoneFilledCorrectly = false;
    } else if(isValidPhone(personPhone)) {
        isPhoneFilled = true;
        isPhoneFilledCorrectly = true;
    } else {
        isPhoneFilled = true;
        isPhoneFilledCorrectly = false;
    }
}

let isAddressFilled = false;

function checkAddress(){
    const personAddress = document.getElementById('personAddress').value;
    if(personAddress===""){
        isAddressFilled = false;
    } else{
        isAddressFilled = true;
    }
}

const cardRegex = /^\d{16}$/;
let isCardNumberFilled = false;
let isCardNumberFilledCorrectly = false;

function isValidCardNumber(cardNumber){
    return cardRegex.test(cardNumber);
}

function checkCardNumber(){
    const cardNumber = document.getElementById('cardNumber').value;
    if(cardNumber===''){
        isCardNumberFilled = false;
        isCardNumberFilledCorrectly = false;
    } else if(isValidCardNumber(cardNumber)){
        isCardNumberFilled = true;
        isCardNumberFilledCorrectly = true;
    } else {
        isCardNumberFilled = true;
        isCardNumberFilledCorrectly = false;
    }
}

let isMonthFilled = false;
let isMonthFilledCorrectly = false;
const monthRegex = /^(0[1-9]|1[0-2])$/;

function isValidMonth(month){
    return monthRegex.test(month);
}

function checkMonth(){
    const cardMonth = document.getElementById('monthCard').value;
    if(cardMonth===''){
        isMonthFilled = false;
        isMonthFilledCorrectly = false;
    } else if(isValidMonth(cardMonth)){
        isMonthFilled = true;
        isMonthFilledCorrectly = true;
    } else {
        isMonthFilled = true;
        isMonthFilledCorrectly = false;
    }
}


let isYearFilled = false;
let isYearFilledCorrectly = false;
const yearRegex = /^(19\d{2}|20\d{2}|21\d{2})$/;

function isValidYear(year){
    return yearRegex.test(year);
}

function checkYear(){
    const cardYear = document.getElementById('yearCard').value;
    if(cardYear===''){
        isYearFilled = false;
        isYearFilledCorrectly = false;
    } else if(isValidYear(cardYear)){
        isYearFilled = true;
        isYearFilledCorrectly = true;
    } else {
        isYearFilled = true;
        isYearFilledCorrectly = false;
    }
}



let isCvvFilled = false;
let isCvvFilledCorrectly = false;
const cvvRegex = /^\d{3,4}$/;

function isValidCvv(cvv){
    return cvvRegex.test(cvv);
}

function checkCvv(){
    const cardCvv = document.getElementById('cvvCard').value;
    if(cardCvv===''){
        isCvvFilled = false;
        isCvvFilledCorrectly = false;
    } else if(isValidCvv(cardCvv)){
        isCvvFilled = true;
        isCvvFilledCorrectly = true;
    } else {
        isCvvFilled = true;
        isCvvFilledCorrectly = false;
    }
}

const finalCheckoutButton = document.getElementById('finalCheckout');
const processedMessage = document.querySelector('.checkoutMessage');
const alertMessage = document.querySelector('.alertMessage');

finalCheckoutButton.addEventListener('click', ()=> {
    checkName();
    checkPhone();
    checkAddress();
    checkCardNumber();
    checkMonth();
    checkYear();
    checkCvv();

    if(!isNameFilled || !isPhoneFilled || !isAddressFilled || !isCardNumberFilled || !isMonthFilled || !isYearFilled || !isCvvFilled){
        alertMessage.innerHTML = "PLEASE FILL ALL THE FIELDS IN ORDER TO CONTINUE.";
        alertMessage.style.fontSize = "20px";
        alertMessage.style.display = "block";
        function closeAlertMessage(){
            alertMessage.style.display = "none";
        }
        setTimeout(closeAlertMessage,2000);
    } else if (isNameFilledCorrectly && isPhoneFilledCorrectly && isAddressFilled && isCardNumberFilledCorrectly && isMonthFilledCorrectly && isYearFilledCorrectly && isCvvFilledCorrectly){
        payment.style.display = "none";
        document.querySelector(".list").innerHTML = "";
        document.querySelector(".totalAmount").innerHTML ="0$";
        document.querySelector(".itemsNumber").innerHTML = "0";
        processedMessage.style.display = "block";
        function closeProcessedMessage(){
            processedMessage.style.display ="none";
        }
        setTimeout(closeProcessedMessage,3000);
    }
        else{
            document.querySelector(".alertMessage").innerHTML = "PLEASE CHECK AGAIN THE FIELDS MARKED WITH RED";
            const nameField = document.getElementById('personName');
            if(!isNameFilledCorrectly){
                nameField.classList.add("redBorder");
                function resetNameField(){
                    nameField.value = "";
                }
                setTimeout(resetNameField,2000);
            } else{
                nameField.classList.remove("redBorder");
            }

            const phoneField = document.getElementById('personPhone');
            if(!isPhoneFilledCorrectly){
                phoneField.classList.add("redBorder");
                function resetPhoneField(){
                    phoneField.value = "";
                }
                setTimeout(resetPhoneField,2000);
            } else{
                phoneField.classList.remove("redBorder");
            }
            
            const cardNumberField = document.getElementById('cardNumber');
            if(!isCardNumberFilledCorrectly){
                cardNumberField.classList.add("redBorder");
                function resetCardNumberField(){
                    cardNumberField.value = "";
                }
                setTimeout(resetCardNumberField,2000);
            } else{
                cardNumberField.classList.remove("redBorder");
            }

            const monthField = document.getElementById('monthCard');
            if(!isMonthFilledCorrectly){
                monthField.classList.add("redBorder");
                function resetMonthField(){
                    monthField.value = "";
                }
                setTimeout(resetMonthField,2000);
            } else{
                monthField.classList.remove("redBorder");
            }

            const yearField = document.getElementById('yearCard');
            if(!isYearFilledCorrectly){
                yearField.classList.add("redBorder");
                function resetYearField(){
                    yearField.value = "";
                }
                setTimeout(resetYearField,2000);
            } else{
                yearField.classList.remove("redBorder");
            }

            const cvvField = document.getElementById('cvvCard');
            if(!isCvvFilledCorrectly){
                cvvField.classList.add("redBorder");
                function resetCvvField(){
                    cvvField.value = "";
                }
                setTimeout(resetCvvField,2000);
            } else{
                cvvField.classList.remove("redBorder");
            }

            alertMessage.style.display = "block";
            function closeAlertMessage(){
                alertMessage.style.display = "none";
            }
            setTimeout(closeAlertMessage,4000);
        }
    }
)