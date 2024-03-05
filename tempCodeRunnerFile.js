


const addProduct = () =>{
    const productName= document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    

    const nameValue= productName.value;
    const quantityValue= productQuantity.value;

   productName.value="";
   productQuantity.value="";

    console.log(nameValue, quantityValue)
}
