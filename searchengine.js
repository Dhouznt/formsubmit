const product=[
    {
        id: 0,
        image: 'img/product1.jpg',
        title: 'Blue Dress',
        price: 5,
    },
    {
        id: 1,
        image: 'img/product2.jpg',
        title: 'Handbag',
        price: 7.5,
    },
    {
        id: 2,
        image: 'img/product3.jpg',
        title: 'Children Dress',
        price: 10.5,
    },
    {
        id: 3,
        image: 'img/product4.jpg',
        title: 'Wedding veil',
        price: 106,
    },
    {
        id: 4,
        image: 'img/product5.jpg',
        title: 'Handbag',
        price: 8.4,
    },
    {
        id: 5,
        image: 'img/product6.jpg',
        title: 'Children boot',
        price: 7.3,
    },
]
const categories =[...new Set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${img}></img>
                    </div>
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>$ ${price}.00</h2>
                        <button>Add to cart</button>
                        </div>`
        )
    }).joi('')
};
displayItem(categories);