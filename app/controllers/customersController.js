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
          price: '90000'
        },
        {
          country: 'Italy',
          branch: 'Fiat',
          model: '600',
          price: '12000'
        },
        {
          country: 'France',
          branch: 'Peugeout',
          model: '450',
          price: '14000'
        },
        {
          country: 'Italy',
          branch: 'Ferrari',
          model: 'Testarossa',
          price: '45000'
        },
        {
          country: 'Germany',
          branch: 'Mercedes',
          model: 'M3',
          price: '67000'
        },
        {
          country: 'Germany',
          branch: 'Audi',
          model: 'A3',
          price: '27000'
        },
        {
          country: 'India',
          branch: 'Terrafugia',
          model: 'TF-X',
          price: '127000'
        },
        {
          country: 'England',
          branch: 'Volvo',
          model: 'X3',
          price: '16000'
        }];

  }

})();
