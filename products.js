let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Blue Dress',
        image: 'p/product1.jpg',
        price: 5
    },
    {
        id: 2,
        image: 'p/product2.jpg',
        name: 'Handbag',
        price: 7.5
    },
    {
        id: 3,
        image: 'p/product3.jpg',
        name: 'Dress',
        price: 10.5
    },
    {
        id: 4,
        image: 'p/product4.jpg',
        name: 'Veil',
        price: 106
    },
    {
        id: 5,
        image: 'p/product5.jpg',
        name: 'Ketch',
        price: 8.4
    },
    {
        id: 6,
        image: 'p/product6.jpg',
        name: 'Boot',
        price: 7.3
    },
    {
        id: 7,
        image: 'p/product7.jpg',
        name: 'Ketch',
        price: 8.4
    },
    {
        id: 8,
        image: 'p/product8.jpg',
        name: 'Boot',
        price: 6.5
    },
    {
        id: 9,
        image: 'p/product9.jpg',
        name: 'Ketch',
        price: 10
    },
    {
        id: 10,
        image: 'p/product10.jpg',
        name: 'Ketch',
        price: 10
    },
    {
        id: 11,
        image: 'p/product11.jpg',
        name: 'Dress',
        price: 9
    },
    {
        id: 12,
        image: 'p/product12.jpg',
        name: 'Sandale',
        price: 6
    },
];
let listCards = [];
function iniApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class='box'>
            <div class='p-box'id='p-box'>
            <img class='p' src=${value.image}></img>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
iniApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class='p' src=${value.image}></img></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("p-box")
    const p = document.querySelectorAll(".p")
    const pname = storeitems.getElementsByTagName("title")

    for (var i=0; i < pname.length; i++){
        let match = p[i].getElementsByTagName('title')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}