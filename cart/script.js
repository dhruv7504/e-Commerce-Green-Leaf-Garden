// Define constants
const itemList = document.querySelector('.items');
const cart = document.querySelector('.cart');
const cartList = document.querySelector('.cart-list');
const total = document.querySelector('.total');
const tax = document.querySelector('.tax');
const subtotal = document.querySelector('.subtotal');
const quantity = document.querySelector('.quantity');

// Define items
const items = [
    {
        id: 1,
        name: 'Office Area Plant',
        image: 'https://www.oberlo.com/media/1645674926-plantfea.jpeg',
        price: 50
    },
    {
        id: 2,
        name: 'Study Area Plant',
        image: 'https://www.thehandymansdaughter.com/wp-content/uploads/2021/05/IMG_7875-1488x1536.jpg',
        price: 150
    },
    {
        id: 3,
        name: 'Dining Table Plant',
        image: 'https://tohavetohost.com/wp-content/uploads/2020/06/succulent-plant-table-12-scaled.jpeg',
        price: 300
    },
    {
        id: 4,
        name: 'Balcony Area',
        image: 'https://greenkosh.com/wp-content/uploads/2021/12/20-Cozy-Indoor-Balcony-Garden-Ideas2-960x504.jpg',
        price: 20
    },
    {
        id: 5,
        name: 'Sunflower',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-illustration-of-sunflowers-in-a-pot-or-bowl-image_3792519.jpg',
        price: 200
    },
    {
        id: 6,
        name: 'Aparajita Plant',
        image: 'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/732cd2b9-1d06-421d-b4fd-cbc58f28995f/taa-vissnnukaantaa-kaa-paudhaa-onlineplantscart-in.png',
        price: 1000
    }
];

// Initialize item display
function initItem() {
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 15rem;');
        card.innerHTML = `
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title text-center">${item.name}</h4>
                <p class="card-text text-center">Price: ₹${item.price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${index})">Add to Cart</button>
            </div>`;
        itemList.appendChild(card);
    });
}

// Initialize the item display
initItem();

// Initialize cart list
let cartItems = [];

// Function to add item to cart
function addToCart(index) {
    const selectedItem = items[index];
    const existingItem = cartItems.find(item => item.id === selectedItem.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...selectedItem, quantity: 1 });
    }

    reloadCart();
}