/// <reference types="../@types/jquery" />
$('.open-close').on('click',function(){
  if($('.links-box').outerWidth(true)>0){
    $('.open-close').html('<i class="fa-solid fa-align-justify"></i>')
    $('.links-box').animate({width:'0px'},500);
    
    $('aside .links ul').animate({left:'-300px'},500)
    $(".links li").animate({top: '300px'}, 500);
    

  }
  else{
    $('.open-close').html('<i class="fa-solid fa-x"></i>')
    $('.links-box').animate({width:'100%'},500); 
    for (let i = 0; i < 5; i++) {
      $(".links li").eq(i).animate({
          top: 0
      }, (i + 5) * 100,function(){
      })
    }
    $('aside .links ul').animate({left:'0'},500)
  }
})

$('#search').on('click',function(){
  $('#searchByName').val('')
  $('#searchByFirstLitter').val('')
  $('.search').removeClass('d-none')
  closeNav()
  $('.meals').addClass('d-none')
  $('.contact').addClass('d-none')
})

$('#searchByName').on('keyup',function(){
  $('.inner-loading-screen').removeClass('d-none')
  $('#mealContainer').html('')
  getMealsByName($(this).val())
  $('.meals').removeClass('d-none')
})

$('#searchByFirstLitter').on('keyup',function(){
  $('.inner-loading-screen').removeClass('d-none')
  $('#mealContainer').html('')
  displayMealsBySearchFirstChr($(this).val())
  $('.meals').removeClass('d-none')
})

$('#categories').on('click',function(){
  $('.search').addClass('d-none')
  closeNav()
  $('.meals').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none');
  displayCategories()
  $('.meals').removeClass('d-none')
  $('.contact').addClass('d-none')
})

$('#area').on('click',function(){
  $('.search').addClass('d-none')
  closeNav()
  $('.meals').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none');
  displayAreas()
  $('.meals').removeClass('d-none')
  $('.contact').addClass('d-none')
})


$('#ingredients').on('click',function(){
  $('.search').addClass('d-none')
  closeNav()
  $('.meals').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none');
  displayIngredients()
  $('.meals').removeClass('d-none')
  $('.contact').addClass('d-none')
})

$('#contactUs').on('click',function(){
  closeNav()
  $('.search').addClass('d-none')
  $('.meals').addClass('d-none')
  $('.contact').removeClass('d-none')
  $('#nameInput').val('')
  $('#emailInput').val('')
  $('#phoneInput').val('')
  $('#ageInput').val('')
  $('#passwordInput').val('')
  $('#repasswordInput').val('')
  submitBtn.setAttribute("disabled", true)
})



$('#nameInput').on('keyup',function(){
  nameValidation()
  validateInputs()
})
$('#emailInput').on('keyup',function(){
  emailValidation()
  validateInputs()
})
$('#phoneInput').on('keyup',function(){
  phoneValidation()
  validateInputs()
})
$('#ageInput').on('keyup',function(){
  ageValidation()
  validateInputs()
})


$('#passwordInput').on('keyup',function(){
  passwordValidation()
  validateInputs()


})
$('#repasswordInput').on('keyup',function(){
  repasswordValidation()
  validateInputs()

})

function validateInputs(){
  if(nameV()&&emailV()&&phoneV()&&ageV()&&passwordV()&&rePassV()){
    submitBtn.removeAttribute("disabled")
  }
  else{
    submitBtn.setAttribute("disabled", true)
  }
}

function nameValidation() {
  if(/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value)){
    $('#nameAlert').addClass('d-none')
  }
  else{
    $('#nameAlert').removeClass('d-none')
  }
}

function nameV() {
  return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
  if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value)){
    $('#emailAlert').addClass('d-none')
  }else{
    $('#emailAlert').removeClass('d-none')
  }
}
function emailV(){
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
  if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value)){
    $('#phoneAlert').addClass('d-none')
  }
  else{
    $('#phoneAlert').removeClass('d-none')
  }
}
function phoneV(){
  return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
  if(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value)){
    $('#ageAlert').addClass('d-none')
  }else{
    $('#ageAlert').removeClass('d-none')
  }
}
function ageV(){
  return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
  if(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value)){
    $('#passwordAlert').addClass('d-none')
  }
  else{
    $('#passwordAlert').removeClass('d-none')
  }
  if(  document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value){
    $('#repasswordAlert').addClass('d-none')
  }else{
    $('#repasswordAlert').removeClass('d-none')
  }
}
function passwordV(){
  return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
  if(document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value){
    $('#repasswordAlert').addClass('d-none')
  }else{
    $('#repasswordAlert').removeClass('d-none')

  }
}
function rePassV(){
  return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}


$(function(){
  $('.loading-screen').fadeOut(500)
  $('body').css({'overflow':'auto'})
})

getMealsByName('')

async function getMealsByName(meal){

  closeNav()
  try {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    const response=await api.json()
    $('.inner-loading-screen').addClass('d-none')
    displayMeals(response.meals)
  } catch (error) {
    
  }
} 

function displayMeals(meals){
  let content=``
  for(let i=0;i<meals.length;i++){
    content+=`
      <div class="col-md-3 ">
        <div onclick="displayMealDetails('${meals[i].idMeal}')" class="meal rounded rounded-2 position-relative overflow-hidden">
          <div class='mymeal'>
            <img src=${meals[i].strMealThumb} class='w-100' alt="">
          </div>
          <div class="title position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center p-2">
            <h3>${meals[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `
  }
  $('#mealContainer').html(content)
}

async function displayMealDetails(id){

  closeNav()
  $('.search').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none')
  try {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const response=await api.json()
    $('.inner-loading-screen').addClass('d-none')
    let recipes=``
    for(let i=1;i<100;i++){
      if(response.meals[0][`strIngredient${i}`]!=''){
        recipes+=`
          <li class="alert alert-info m-2 p-1">${response.meals[0][`strMeasure${i}`]} ${response.meals[0][`strIngredient${i}`]}</li>
        `
      }
      else{
        break
      }
    }
    let tagsArr=[]
    tagsArr=[...`${response.meals[0].strTags}`.split(',')]
    let tags=``
    if(tagsArr[0]=='null'){
      tagsArr=[]
    }
    for(let i=0;i<tagsArr.length;i++){
      tags+=`
        <li class="alert alert-danger m-2 p-1">${tagsArr[i]}</li>
      `
    };
    let content=``
    content+=`
      <div class="col-md-4 ">
          <img src=${response.meals[0].strMealThumb} class='w-100 rounded rounded-2'>
          <span class='text-white h2'>${response.meals[0].strMeal}</span>
      </div>
      <div class="col-md-8 text-white">
          <h2>Instructions</h2>
          <p>${response.meals[0].strInstructions}</p>
          <h3><span class="fw-bolder">Area : </span>${response.meals[0].strArea}</h3>
          <h3><span class="fw-bolder">Category : </span>${response.meals[0].strCategory}</h3>
          <h3><span class="fw-bolder">Recipes :</span></h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${recipes}
          </ul>
          <h3><span class="fw-bolder">Tags :</span></h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tags}
          </ul>
          <a target="_blank" href="${response.meals[0].strSource}" ><button class="btn btn-success">Source</button></a>
          <a target="_blank" href="${response.meals[0].strYoutube}" ><button class="btn btn-danger">Youtube</button> </a>
          
          
      </div>
    `
    $('#mealContainer').html(content) 
  } catch (error) {
    
  }
}

function closeNav(){
  $('.links-box').animate({width:'0px'},500);
  $('aside .links ul').animate({left:'-300px'},500)
  $(".links li").animate({top: '300px'}, 500);
  
  $('.open-close').html('<i class="fa-solid fa-align-justify"></i>')
}
async function displayMealsBySearchFirstChr(chr){

  closeNav()
  try {
    chr == "" ? chr = "a" : chr;
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${chr}`)
    const response=await api.json()
    console.log(response)
    displayMeals(response.meals)
    $('.inner-loading-screen').addClass('d-none')
  } catch (error) {
    $('.inner-loading-screen').addClass('d-none')
  }
} 

async function displayCategories(){

  const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  const response=await api.json()
  $('.inner-loading-screen').addClass('d-none')
  let content=``
  for(let i=0;i<response.categories.length;i++){
    content+=`
      <div class="col-md-3">
        <div  onclick="displayMealsInCategory('${response.categories[i].strCategory}')" class="meal rounded rounded-2 position-relative overflow-hidden">
          <div>
            <img src=${response.categories[i].strCategoryThumb} class='w-100' alt="">
          </div>
          <div class="title position-absolute top-0 start-0 end-0 bottom-0 text-center p-2">
            <h3>${response.categories[i].strCategory}</h3>
            <p>${response.categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
          </div>
        </div>
      </div>
    `
  }
  $('#mealContainer').html(content)
}

async function displayMealsInCategory(category){
  closeNav()
  $('.search').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none')
  try {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const response=await api.json()
    $('.inner-loading-screen').addClass('d-none')
    displayMeals(response.meals)
  } catch (error) {
    
  }

}

async function displayAreas(){

  const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  const response=await api.json()
  $('.inner-loading-screen').addClass('d-none')
  let content=``
  for(let i=0;i<response.meals.length;i++){
    content+=`
    <div onclick="displayMealsofArea('${response.meals[i].strArea}')"  class="col-md-3 text-white text-center cursor-pointer">
      <div class="rounded rounded-2 position-relative overflow-hidden">
        <div class='area-icon'>
          <span><i class="fa-solid fa-house-laptop fa-4x"></i></span>
        </div>
        <h3>${response.meals[i].strArea}</h3>
      </div>
    </div>
  `
  }
  $('#mealContainer').html(content)
}

async function displayMealsofArea(area){
  closeNav()
  $('.search').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none')
  try {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    const response=await api.json()
    displayMeals(response.meals)
    $('.inner-loading-screen').addClass('d-none')
  } catch (error) {
    
  }
}

async function displayIngredients(){

  const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  const response=await api.json()
  $('.inner-loading-screen').addClass('d-none')
  let content=``
  for(let i=0;i<20;i++){
    content+=`
      <div onclick="displayMealsOfIngrediant('${response.meals[i].strIngredient}')" class="col-md-3 text-white text-center cursor-pointer">
      <div class="rounded rounded-2 position-relative overflow-hidden">
        <div class='area-icon'>
          <span><i class="fa-solid fa-drumstick-bite fa-4x"></i></span>
        </div>
        <h3>${response.meals[i].strIngredient}</h3>
        <p>${response.meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
      </div>
    </div>
    `
  }
  $('#mealContainer').html(content)
}

async function displayMealsOfIngrediant(ingreduant){
  closeNav()
  $('.search').addClass('d-none')
  $('.inner-loading-screen').removeClass('d-none')
  try {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingreduant}`)
    const response=await api.json()
    displayMeals(response.meals)
    $('.inner-loading-screen').addClass('d-none')
  } catch (error) {
    
  }
}

