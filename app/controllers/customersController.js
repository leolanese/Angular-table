;(function () {
  'use strict';

  angular
    .module('customersApp')

    .filter('customerFilter', function () {
      return function(item) {
        return item.toUpperCase();
      };
    })

    .controller('CustomersController', CustomersController);

    /* @ngInject */
    CustomersController.$inject = [
      'dialogService'
    ];

    CustomersController.$inject = ['$scope'];

    function CustomersController(e) {

        var vm = this;
        vm.sortBy = 'name';
        vm.reverse = false;
        vm.caretDown = "caret-down";

        ////

        vm.doSort = function(propName) {
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
