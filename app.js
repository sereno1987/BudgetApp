
// Budget Controller
var budget_controller=(function () {

})();

//UI Controller
var UI_controller=(function () {
    //make the classes private: define a private variable and then access them
    var DOMStrings={
        input_type:".add__type",
        input_description:".add__description",
        input_value:".add__value",
        input_btn:".add__btn"
    };
    return{
        get_input:function () {
            // returining as an object. our method for get data from input
            return{
            value_type:document.querySelector(DOMStrings.input_type).value,
            value_dexc:document. querySelector(DOMStrings.input_description).value,
            value_amount:document.querySelector(DOMStrings.input_value).value
            };

        },
        // to pass the class to another controller module (btn)
        get_DOM_strings:function () {
            return DOMStrings;

        }

    }

})();

//App Controller
var App_controller=(function (budgetCtrl,UICtrl) {
     // to get DOM stings from
    var DOM = UICtrl.get_DOM_strings();
    // custome function for getting data, ad data to budget controller, add the item in UI and..
    // by clicking the button or pressing the enter
    var add_item =function () {
        //1- get the input
        var input=UICtrl.get_input();
        console.log(input);
        //2- add data to the budget controller
        //3- add the item to the UI
        //4- calculate the budjet
        //5- update the top part

    }
    document.querySelector(DOM.input_btn).addEventListener("click",add_item);

    // its global because its not related to any item which can be selected by quertSelector
    document.addEventListener("keypress",function (event) {
        //event.preventDefault();
        //which for older browsers
        if (event.keyCode === 13 || event.which===13) {
            add_item();
        }

    })
})(budget_controller,UI_controller);
