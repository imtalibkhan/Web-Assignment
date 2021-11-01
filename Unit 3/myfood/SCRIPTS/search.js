
// let container =  document.getElementById("data");

// // let getfood = document.getElementById("getfood")



// async function getfood(){

//     let food = document.getElementById("food").value

// let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
//     //console.log(res);
    

//     let data = await res.json();
//     console.log("data:",data);
    

//    return data.meals
   
// }

// function showfood(weather){



//     container.innerHTML = null;

//    weather.forEach((el)=>{
//        let div = document.createElement("div")
//     let name = document.createElement("p")
//     name.innerText=el.strCategory;

   
//     let imgs = document.createElement("img")
//     imgs.src=el.strMealThumb

//     div.append(name,imgs);

//     container.append(div);

    

//    })

    
// }

// export {getfood,showfood} 



// let container =  document.getElementById("data");

// let getfood = document.getElementById("getfood")

// getfood.addEventListener("click",function(){

//     async function getfood(e){

//         e.preventDefault(e)



//     let food = document.getElementById("food").value

//     let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);

//     let data = await res.json();

//     return data.meals
//     }
//     getfood()    

// })


//  function showfood(weather){



//      container.innerHTML = null;

//     weather.forEach((el)=>{
//         let div = document.createElement("div")
//      let name = document.createElement("p")
//      name.innerText=el.strCategory;

   
//      let imgs = document.createElement("img")
//      imgs.src=el.strMealThumb

//      div.append(name,imgs);

//      container.append(div);

//     })

//  }
 
//  export {getfood,showfood} 



// let search = document.getElementById('search');
// let mealsEl = document.getElementById('meals');

// function searchMeal(e) {

//     e.preventDefault();


//     let term = search.value;
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//         .then(res => res.json())
//         .then(data => {

//             mealsEl.innerHTML = data.meals.map(meal => `
//             <div class="meal">
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//             <div class ="meal-info"data-mealID="${meal.idMeal}">
//             <h3>${meal.strMeal}
//             </div>
//             `
//             )

//         });

//     search.value = '';
// }
// submit.addEventListener('submit', searchMeal)



let container = document.getElementById("data")
let search = document.getElementById('food');
let tal = document.getElementById("submit")
async function getfood(e) {

     e.preventDefault();


    let food = search.value;
   let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)

   let data = await res.json();

   console.log(data);

   showfood(data.meals)
}

function showfood(val){
  container.innerHTML=null;

  val.forEach((el)=>{
      let div = document.createElement("div")

      let name = document.createElement("p");

      name.innerText=el.strCategory;

      let imgs = document.createElement("img")
      imgs.src=el.strMealThumb

      div.append(name,imgs);

      container.append(div);

  })
}


tal.addEventListener('submit', getfood)

export {getfood,showfood} 



