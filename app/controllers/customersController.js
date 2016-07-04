;(function () {
  'use strict';

  angular
    .module('customersApp')
    .controller('CustomersController', CustomersController);

  /* @ngInject */
  CustomersController.$inject = [
    'dialogService'
  ];

  CustomersController.$inject = ['$scope'];

  CustomersController.filter('customerFilter.name', function () {
    return function (item) {
      return item.toUpperCase();
    };
  });

  function CustomersController() {

      var vm = this;

      vm.sortBy = 'name';
      vm.reverse = false;

      vm.doSort = function(propName) {
        vm.sortBy = propName;
        vm.reverse = !vm.reverse;
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
