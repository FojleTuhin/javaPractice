


const addProduct = () =>{
    const productName= document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    

    const nameValue= productName.value;
    const quantityValue= productQuantity.value;

   productName.value="";
   productQuantity.value="";

    console.log(nameValue, quantityValue)

    displayProduct(nameValue, quantityValue)
    saveProductToLocalStorage(nameValue, quantityValue)
}


const displayProduct= (nameValue, quantityValue) =>{

    const ul=document.getElementById('product-container');
    const li= document.createElement('li')

    li.innerText= `${ nameValue} : ${quantityValue}`;
    ul.appendChild(li)

}

const getStoredShoppingCard = () =>{
    let cart={};
    const storedCart =localStorage.getItem('cart')
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
} 

const saveProductToLocalStorage = (nameValue, quantityValue) =>{
    const cart = getStoredShoppingCard();
    cart[nameValue]=quantityValue;
    const cartStringField= JSON.stringify(cart);
    localStorage.setItem('cart', cartStringField)
}

const displayProductsFromLocalStorage= ()=>{
    const savedCart =getStoredShoppingCard();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity )
        displayProduct(product, quantity)
    }
}
displayProductsFromLocalStorage();

