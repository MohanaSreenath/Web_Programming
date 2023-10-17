const dishes = [
    { name: "Spaghetti Bolognese", ingredients: "Pasta, Ground Beef, Tomato Sauce, Garlic, Onion" },
    { name: "Grilled Salmon", ingredients: "Salmon, Lemon, Olive Oil, Salt, Pepper" },
    { name: "Chicken Alfredo", ingredients: "Chicken, Fettuccine, Alfredo Sauce, Garlic, Parmesan" },
    { name: "Caprese Salad", ingredients: "Tomatoes, Mozzarella, Basil, Olive Oil, Balsamic Vinegar" },
    { name: "Beef Stir-Fry", ingredients: "Beef, Bell Peppers, Soy Sauce, Ginger, Garlic" },
    { name: "Veggie Wrap", ingredients: "Tortilla, Hummus, Cucumber, Bell Peppers, Lettuce" },
    { name: "Tuna Salad", ingredients: "Tuna, Mayonnaise, Celery, Pickles, Onion" },
    { name: "Grilled Cheese", ingredients: "Bread, Cheese, Butter" },
    { name: "Waldorf Salad", ingredients: "Apples, Celery, Walnuts, Mayonnaise" },
    { name: "Beef Tacos", ingredients: "Ground Beef, Taco Seasoning, Tortillas, Lettuce, Tomato" },
];

const rollButton = document.getElementById("rollButton");
const dice = document.getElementById("dice");
const dishName = document.getElementById("dishName");
const ingredients = document.getElementById("ingredients");
const dishDetails = document.querySelector(".dish-details");

rollButton.addEventListener("click", () => {
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDish(randomDish);
});

dice.addEventListener("click", () => {
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDish(randomDish);
});

dice.addEventListener("click", () => {
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDish(randomDish);
});

function showDish(dish) {
    dishName.textContent = dish.name;
    ingredients.textContent = dish.ingredients;
    dishDetails.style.display = "block";
}
