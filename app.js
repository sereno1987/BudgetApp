
// Budget Controller**********************************************************************************
var budget_controller=(function () {
// constructors with capital Letter
    var Expense=function (id,description,value) {
        this.id=id;
        this. description=description;
        this.value=value;

    }
    var Income=function (id,description,value) {
        this.id=id;
        this. description=description;
        this.value=value;

    }
// data structure**in budget controller***********************************************************************************
    var data={
        all_items:{
            exp:[],
            inc:[],
        },
        totals:{
            exp:0,
            inc:0
        }
    }
    return{
        add_item: function (type,description,value) {
            var id=0;
            var new_item;

            // craete new ID
            if (data.all_items[type].length>0){
                id=data.all_items[type][data.all_items[type].length-1]+1;


            } else
            {
                id=0;
            }

            // create a new item
            if (type==="exp"){
                 new_item=new Expense(id,description,value);
            } else if (type==="inc"){
                 new_item=new Income(id,description,value);
            }

            //push the new item
            data.all_items[type].push(new_item);

            // return the new item
            return new_item;

        },
        testing: function () {
            console.log(data);

        }
    }


})();

//*********************************************UI Controller***********************************************
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
                type:document.querySelector(DOMStrings.input_type).value,
                desc:document. querySelector(DOMStrings.input_description).value,
                value:document.querySelector(DOMStrings.input_value).value
            };

        },
        // to pass the class to another controller module (btn)
        get_DOM_strings:function () {
            return DOMStrings;

        }

    }

})();

//*******************************************App Controller***********************************************
var app_controller=(function (budgetCtrl,UICtrl) {

    var set_event_listener=function () {
        // to get DOM stings from
        var DOM = UICtrl.get_DOM_strings();
        document.querySelector(DOM.input_btn).addEventListener("click",add_item);

        // its global because its not related to any item which can be selected by quertSelector
        document.addEventListener("keypress",function (event) {
            //event.preventDefault();
            //which for older browsers
            if (event.keyCode === 13 || event.which===13) {
                add_item();
            }
        })
    }
    // custome function for getting data, ad data to budget controller, add the item in UI and..
    // by clicking the button or pressing the enter
    var add_item =function () {
        var input,new_item;
        //1- get the input
        input=UICtrl.get_input();

        //2- add data to the budget controller
        new_item=budgetCtrl.add_item(input.type,input.desc,input.value);
        //3- add the item to the UI
        //4- calculate the budjet
        //5- update the top part

    }
    // public initialization function
    return{
        init:function () {
            console.log("helllllllllllllllll");
            set_event_listener();

        }
    };

})(budget_controller,UI_controller);

app_controller.init();