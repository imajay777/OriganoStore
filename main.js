
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJgTqulenhqg-w2NpnevLo4g1qg97qozg",
    authDomain: "origano-1a760.firebaseapp.com",
    databaseURL: "https://origano-1a760.firebaseio.com",
    projectId: "origano-1a760",
    storageBucket: "origano-1a760.appspot.com",
    messagingSenderId: "150780361565"
  };
  firebase.initializeApp(config);
  //GLOBAL
  var products=[];
  var cartItems=[];
  var cart_n = document.getElementById('cart_n');
  //DIVS
  var fruitDIV= document.getElementById("fruitDIV");
  var juiceDIV = document.getElementById("juiceDIV");
  var saladDIV = document.getElementById("saladDIV");
  //INFORMATION
  var FRUIT=[
      {name:"Apple" , price:10},
      {name:"Orange" , price:10},
      {name:"Cherry" , price:10},
      {name:"Strawberry" , price:10},
      {name:"Kiwi" , price:10},
      {name:"Banana" , price:10}
    ];
  var JUICE=[
      {name:"Orange Juice" , price:100},
      {name:"Blackcurrant Juice " , price:110},
      {name:"Apple Juice" , price:120}
    ];
  var SALAD=[
    {name:"Organic Tomato" , price:110},
    {name:"Organic Carrot" , price:120},
    {name:"Organic Broccoli" , price:150} ];

    var SPICE=[
      {name:"Organic Bayleaf" , price:10},
      {name:"Organic Cinnamon" , price:10},
      {name:"Organic Garam Masala" , price:10} ];

    var FLOUR=[
        {name:"Besan Flour" , price:100},
        {name:"Maida Flour" , price:100},
        {name:"Rice Flour" , price:100} ];

     var RICE=[
          {name:"Basmati Rice" , price:100},
          {name:"Masoori Rice" , price:100},
          {name:"Brown Rice" , price:100} ];

      var OIL=[
            {name:"Groundnut Oil" , price:100},
            {name:"Sunflower Oil" , price:100},
            {name:"Olive Oil" , price:100} ];
  //HTML
function HTMLfruitProduct(con){
    let URL = `img/fruits/fruit${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
       <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${FRUIT[con].name}</p>
            <p class=""card-text">Price: ${FRUIT[con].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                 <button type="button" onclick="cart2('${FRUIT[con]
                    .name}','${FRUIT[con].price}','${URL}','${con}','${btn}')" 
                    class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

                 <button id="${btn}" type="button" onclick="cart('${FRUIT[con].name}',
                 '${FRUIT[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
               </div>
               <small class="text-muted">Free Shipping </small>
              </div>
            
            </div>
         </div>

       </div>
    `
}

function HTMLjuiceProduct(con){
    let URL = `img/juice/juice${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `
       <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${JUICE[con].name}</p>
            <p class=""card-text">Price: ${JUICE[con].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                 <button type="button" onclick="cart2('${JUICE[con]
                    .name}','${JUICE[con].price}','${URL},'${con}','${btn}')" 
                    class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

                 <button id="${btn}" type="button" onclick="cart('${JUICE[con].name}',
                 '${JUICE[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
               </div>
               <small class="text-muted">Free Shipping </small>
              </div>
            
            </div>
         </div>

       </div>
    `
}


function HTMLsaladProduct(con){
    let URL = `img/salad/salad${con}.jpg`;
    let btn = `btnSalad${con}`;
    return `
       <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${SALAD[con].name}</p>
            <p class=""card-text">Price: ${SALAD[con].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                 <button type="button" onclick="cart2('${SALAD[con]
                    .name}','${SALAD[con].price}','${URL},'${con}','${btn}')" 
                    class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

                 <button id="${btn}" type="button" onclick="cart('${SALAD[con].name}',
                 '${JUICE[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
               </div>
               <small class="text-muted">Free Shipping </small>
              </div>
            
            </div>
         </div>

       </div>
    `
}

function HTMLspiceProduct(con){
  let URL = `img/spice/spice${con}.jpg`;
  let btn = `btnSpice${con}`;
  return `
     <div class="col-md-4">
       <div class="card mb-4 shadow-sm">
          <img class="card-img-top" style="height:16rem;" src="${URL}"
          alt="Card image cap">
          <div class="card-body">
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <p class="card-text">${SPICE[con].name}</p>
          <p class=""card-text">Price: ${SPICE[con].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
               <button type="button" onclick="cart2('${SPICE[con]
                  .name}','${SPICE[con].price}','${URL},'${con}','${btn}')" 
                  class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

               <button id="${btn}" type="button" onclick="cart('${SPICE[con].name}',
               '${SPICE[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
             </div>
             <small class="text-muted">Free Shipping </small>
            </div>
          
          </div>
       </div>

     </div>
  `
}

function HTMLflourProduct(con){
  let URL = `img/flour/flour${con}.jpg`;
  let btn = `btnFlour${con}`;
  return `
     <div class="col-md-4">
       <div class="card mb-4 shadow-sm">
          <img class="card-img-top" style="height:16rem;" src="${URL}"
          alt="Card image cap">
          <div class="card-body">
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <p class="card-text">${FLOUR[con].name}</p>
          <p class=""card-text">Price: ${FLOUR[con].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
               <button type="button" onclick="cart2('${FLOUR[con]
                  .name}','${FLOUR[con].price}','${URL},'${con}','${btn}')" 
                  class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

               <button id="${btn}" type="button" onclick="cart('${FLOUR[con].name}',
               '${FLOUR[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
             </div>
             <small class="text-muted">Free Shipping </small>
            </div>
          
          </div>
       </div>

     </div>
  `
}


function HTMLriceProduct(con){
  let URL = `img/rice/rice${con}.jpg`;
  let btn = `btnRice${con}`;
  return `
     <div class="col-md-4">
       <div class="card mb-4 shadow-sm">
          <img class="card-img-top" style="height:16rem;" src="${URL}"
          alt="Card image cap">
          <div class="card-body">
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <p class="card-text">${RICE[con].name}</p>
          <p class=""card-text">Price: ${RICE[con].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
               <button type="button" onclick="cart2('${RICE[con]
                  .name}','${RICE[con].price}','${URL},'${con}','${btn}')" 
                  class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

               <button id="${btn}" type="button" onclick="cart('${RICE[con].name}',
               '${RICE[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
             </div>
             <small class="text-muted">Free Shipping </small>
            </div>
          
          </div>
       </div>

     </div>
  `
}

function HTMLoilProduct(con){
  let URL = `img/oil/oil${con}.jpg`;
  let btn = `btnOil${con}`;
  return `
     <div class="col-md-4">
       <div class="card mb-4 shadow-sm">
          <img class="card-img-top" style="height:16rem;" src="${URL}"
          alt="Card image cap">
          <div class="card-body">
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <i style="color:orange;" class="fa fa-star" ></i>
          <p class="card-text">${OIL[con].name}</p>
          <p class=""card-text">Price: ${OIL[con].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
               <button type="button" onclick="cart2('${RICE[con]
                  .name}','${OIL[con].price}','${URL},'${con}','${btn}')" 
                  class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color: inherit">Buy</a></button>

               <button id="${btn}" type="button" onclick="cart('${OIL[con].name}',
               '${RICE[con].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
             </div>
             <small class="text-muted">Free Shipping </small>
            </div>
          
          </div>
       </div>

     </div>
  `
}
//ANIMATION
function animation() {
	// const toast = swal.mixin({
	// 	toast: true,
	// 	position: 'top-end',
	// 	showConfirmButton: false,
	// 	timer: 1000
	// });

	// toast({
	// 	type: 'success',
	// 	title: 'Added to Shopping Cart'
	// })

	Swal.fire({
  title: 'Added!',
  text: '',
  type: 'success',
  showConfirmButton: false,
  timer : 800
})

}

//CART FUNCTIONS

function cart(name, price, url, con, btncart) {
	var item = {
		name: name,
		price: price, 
		url: `'${url}'`
	};

	cartItems.push(item);
	let storage = JSON.parse(localStorage.getItem("cart"));
	if(storage == null) {
		products.push(item);
		localStorage.setItem("cart", JSON.stringify(products));
	}
	else {
		products = JSON.parse(localStorage.getItem("cart"));
		products.push(item);
		localStorage.setItem("cart", JSON.stringify(products));

	}

	cart_n.innerHTML = `[${products.length}]`;
	document.getElementById(btncart).style.display = "none";
	animation();


}

function cart2(name, price, url, con, btncart) {
	var item = {
		name: name,
		price: price, 
		url: `'${url}'`
	};

	cartItems.push(item);
}



//RENDER
function render(){
   for(let index = 0; index < 6; index++){
       fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
   }
   for(let index = 0; index < 3; index++){
    juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
	saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;

   }

   if(localStorage.getItem("cart") == null)
   {

   }
   else
   {
   		products = JSON.parse(localStorage.getItem("cart"));
   		cart_n.innerHTML = `[${products.length}]`;
   }


}


function render2(){
  
  for(let index = 0; index < 3; index++){
    spiceDIV.innerHTML+=`${HTMLspiceProduct(index)}`;
    flourDIV.innerHTML+=`${HTMLflourProduct(index)}`;
    riceDIV.innerHTML+=`${HTMLriceProduct(index)}`;
    oilDIV.innerHTML+=`${HTMLoilProduct(index)}`;


  }

  if(localStorage.getItem("cart") == null)
  {

  }
  else
  {
      products = JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML = `[${products.length}]`;
  }


}