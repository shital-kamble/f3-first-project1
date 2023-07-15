let items = document.getElementById('items')
items.innerHTML = "";

let topDiv = document.getElementById('top');
function getMenu(){
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        items.innerHTML = `
        <div class="item">
        <div class="image">
         <img src=${data[0].imgSrc} alt="">
        </div>
         <div class="desc">
             <div class="lef">
                 <p>${data[0].name}</p>
                 <p>$ ${data[0].price}/-</p>
             </div>
             <div class="right">
                 <i class="fa-solid fa-plus"></i>
             </div>
            
         </div> 
         
     </div> 


      <div class="item">
         <div class="image">
          <img src=${data[1].imgSrc} alt="">
         </div>
          <div class="desc">
              <div class="lef">
                  <p>${data[1].name}</p>
                  <p>$${data[1].price}/-</p>
              </div>
              <div class="right">
                  <i class="fa-solid fa-plus"></i>
              </div>
             
          </div> 
          
      </div> 
      
      <div class="item">
         <div class="image">
          <img src=${data[2].imgSrc} alt="">
         </div>
          <div class="desc">
              <div class="lef">
                  <p>${data[2].name}</p>
                  <p>$${data[2].price}/-</p>
              </div>
              <div class="right">
                  <i class="fa-solid fa-plus"></i>
              </div>
             
          </div> 
          
      </div> 
        `
    

    })
    
}
getMenu();

function takeOrder() {
    // console.log( window.location.href )
    window.location.href = "https://shiva-saini.github.io/f3_c1/index1.html";
    
}


// function orderPrep() {
//     return new Promise((resolve,reject) => {
//           setTimeout(() => {
//             resolve({order_statu:"true",paid:"false"});
//           },1500)
//     })
// }

// function payOrder() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({order_statu:"true",paid:"true"})  
//         },1000)
           
//      })
// }
function TakeOrderFunction() {
    return new Promise((resolve,reject) => {
           setTimeout(() => {
             takeOrder();
             resolve("success");
           },2500)
    })
}

let takeOrderData = TakeOrderFunction();

takeOrderData.then(data => {
  console.log(data);
})
// .then(data => {
//     return orderPrep();
// }).then(data => {
//     console.log("data after 1.5s is " ,data);
// }).then(data => {
//     return payOrder();
// }).then(data => {
//     console.log("data after 1s " , data);
// }).then(data => {
//     alert("Thanks for eathing with us");
// })



