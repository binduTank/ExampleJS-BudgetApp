// Budget controller
var budgetController = (function() {

})();

// UI controller
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		getinput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either ink or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value

			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};
})();


// Global app controller
var controller = (function(budgetctrl, UIctrl) {

	// set up event listener

	var setupEventListener = function() {

		var DOM = UIctrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	}

	var ctrlAddItem = function() {

	// Get the input data
		var input = UIctrl.getinput();


	// add item to budget controller
	// add item to UI
	// calculate the budget
	// display the budget

	};

	return {
		init: function() {
			console.log(' Application has started');
			setupEventListener();
		}
	}

})(budgetController, UIController);

controller.init();