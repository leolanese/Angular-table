;(function () {
  'use strict';

  angular
    .module('customersApp')

    .controller('CustomersController', CustomersController);

    /* @ngInject */
    CustomersController.$inject = [
		'$scope'
	];

    function CustomersController(e) {

        var vm = this;
        vm.sortBy = 'name';
        vm.reverse = false;
        vm.caretDown = "caret-down";
		vm.id = "";

		// MOVE THIS TO A SERVICE
		vm.lastSelection = ''; // vm.lastSelection =  customerService.lastSelection;

        ////

		vm.turnOff = function(id){
		  // turn of the first  line
		  vm.off = 'off';
		  return '';
		};

		vm.firstClassHighligth = function(cust, index, n){
		if(index == 0){
		  return true;
		}
		return '';
		};

		vm.setSelected = function(id) {
			vm.id = id;

			console.log(id);

			// SAVE THE FIRST(latest) SELECTED on Service
			vm.lastSelection = vm.lastSelection || id;
		};

		vm.doColumnSort = function(propName) {
		  vm.caretDown = !vm.caretDown;

		  vm.sortBy = propName;
		  vm.reverse = !vm.reverse;
		};

		vm.branch = function(){
		  vm.branchClass=!vm.branchClass;
		};

		vm.price = function(){
		  vm.priceClass=!vm.priceClass;
		};

		vm.model = function(){
		  vm.modelClass=!vm.modelClass;
		};

		vm.country = function(){
		  vm.countryClass=!vm.countryClass;
		};


		vm.caret = function(e){
		 vm.index=!vm.index;
		 //event delegated
		 if (e === "branch" || vm.branchClass){
		   vm.branch();
		 }
		 if (e === "price" || vm.priceClass){
		   vm.price();
		 }
		 if (e === "model" || vm.modelClass){
		   vm.model();
		 }

		 if (e === "country" || vm.countryClass){
		   vm.country();
		 }

		};

		vm.customers= [
			{
				country: 'Germany',
				branch: 'Audi',
				model: 'Avanti',
				price: '1'
			},
			{
				country: 'Italy',
				branch: 'Fiat',
				model: '600',
				price: '2'
			},
			{
				country: 'France',
				branch: 'Peugeout',
				model: '450',
				price: '3'
			},
			{
				country: 'Italy',
				branch: 'Ferrari',
				model: 'Testarossa',
				price: '4'
			},
			{
				country: 'Germany',
				branch: 'Mercedes',
				model: 'M3',
				price: '5'
			},
			{
				country: 'Germany',
				branch: 'Audi',
				model: 'A3',
				price: '6'
			},
			{
				country: 'India',
				branch: 'Terrafugia',
				model: 'TF-X',
				price: '7'
			},
			{
				country: 'England',
				branch: 'Volvo',
				model: 'X3',
				price: '8'
			}];

	}

})();
