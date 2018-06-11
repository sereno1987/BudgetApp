
// Budget Controller
var budget_controller=(function () {

})();

//UI Controller
var UI_controller=(function () {


})();

//App Controller
var App_controller=(function (budgetCtrl,UICtrl) {
    // custome function for getting data, ad data to budget controller, add the item in UI and..
    // by clicking the button or pressing the enter
    var add_item =function () {
        //1- get the input
        //2- add data to the budget controller
        //3- add the item to the UI
        //4- calculate the budjet
        //5- update the top part
        console.log("it works");


    }
    document.querySelector(".add__btn").addEventListener("click",add_item);

    // its global because its not related to any item which can be selected by quertSelector
    document.addEventListener("keypress",function (event) {
        event.preventDefault();
        //which for older browsers
        if (event.keyCode === 13 || event.which===13) {
            add_item();
        }

    })
})(budget_controller,UI_controller);
