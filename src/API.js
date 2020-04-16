const baseURL = "http://localhost:3002"
const signInURL = `${baseURL}/sign-in`
const signUpURL = `${baseURL}/sign-up`
const validateURL = `${baseURL}/validate`
const fridgeItemsURL = `${baseURL}/fridge-items`
const saveRecipeURL = `${baseURL}/saved`
const savedRecipeURL = `${baseURL}/saved-recipes/`
const deleteRecipeURL = `${baseURL}/delete-recipe/`
const addIngredientURL = `${baseURL}/add-ingredient/`
const deleteIngredientURL = `${baseURL}/delete-ingredient/`
const addShoppingURL = `${baseURL}/add-shopping`
const shoppingItemsURL = `${baseURL}/shopping-items/`
const deleteShoppingItemURL = `${baseURL}/delete-shoppings/`


const post = (url, data) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(url, configurationObject)
}

const destroy = (url) => {
    return fetch(url, {
        method: "DELETE"
    })
}

const deleteFavourite = (id) => {
    return destroy(deleteRecipeURL + id)
}

const addIngredient = (data) => {
    return post(addIngredientURL, data).then(response => response.json())
}

const deleteIngredient = (id) => {
    return destroy(deleteIngredientURL + id)
}

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

const getRec = (url) => {
    return fetch(url)
}

const validate = token => {
    return get(validateURL, token).then(response => response.json())
}

const signIn = (data) => {
    return post(signInURL, data).then(response => response.json())
}

const saveRecipe = (data) => {
    return post(saveRecipeURL, data).then(resp => resp.json())
}

const getRecipes = (data) => {
    return getRec(savedRecipeURL + data).then(response => response.json())
}

const addShopping = (data) => {
    return post(addShoppingURL, data).then(response => response.json())
}

const getShopping = (data) => {
    return get(shoppingItemsURL + data ).then(response => response.json())
}

const deleteShoppingItem = (id) => {
    console.log(id)
    return destroy(deleteShoppingItemURL + id)
}

const signUp = (data) => {
    return post(signUpURL, data).then(response => response.json())
}

const fridgeItems = token => {
    return get(fridgeItemsURL, token).then(response => response.json())
}

export default { signIn, validate, signUp, fridgeItems, saveRecipe, getRecipes, deleteFavourite, addIngredient, deleteIngredient, addShopping, getShopping, deleteShoppingItem }


