// load Data
const loading = document.getElementById("loading");
const loadData = async (searchText) => {
    console.log(searchText);
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.meals);

        displayData(data.meals.slice(0, 6));

    }
    catch (eror) {
        console.log(console.error)
    }
}
// display every single meal 
displayData = (meals) => {
    console.log(meals);
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = "";
    meals.forEach(meal => {
        console.log(meal);
        const everyMealDiv = document.createElement("div");
        everyMealDiv.innerHTML = `
        <div class="card w-[80%] card-side bg-base-100 shadow-xl mx-auto">
           <figure><img class="w-60" src="${meal.strMealThumb}" /></figure>
           <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>Click the button to watch on netflix app.</p>
              <div class="card-actions justify-end">
              <label onclick="loadMeal(${meal.idMeal})" id="meal-details" for="my-modal" class="btn">Details</label>
              </div>
            </div>
        </div>
        `
        mealsContainer.appendChild(everyMealDiv);
    });

}

// every meal searchinput
const searchMeal = () => {
    const searchMeal = document.getElementById("meal-input").value;
    console.log(searchMeal);
    loadData(searchMeal);



}
//  search meal load
const loadMeal = async (idMeal) => {
    console.log(idMeal);
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("meal-img").innerHTML = "";
        displayMealDetails(data.meals[0]);
    }
    catch (error) {
        console.log(error);
    }

}
// search meal bt ID detail display out

const displayMealDetails = (meal) => {
    console.log(meal);
    const mealImgDiv = document.getElementById("meal-img");
    mealImgDiv.innerHTML = "";
    mealImgDiv.innerHTML = `
    <img class="w-72" src="${meal.strMealThumb}" alt="Shoes"/>
    `

}

// show all
const showAll = () => {
    const searchMeal = document.getElementById("meal-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}






// loadData call
loadData("chicken");