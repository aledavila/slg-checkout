var app = angular.module("checkout", []);

app.controller('CartCtrl', ['$scope', function($scope){
  var sum = 0;
  var discount = 0;
  function discountCheck(item){

        if (item.productID === 'FR1' && (item.quantity % 2 == 1) && item.quantity > 1) {
            discounted = item.quantity - 1;
            discount = (discounted / 2) + 1;
            sum += (item.price * discount);
            item.total = (item.price * discount);
        } else if (item.productID === 'FR1' && (item.quantity % 2 === 0)) {
            sum += (item.price * item.quantity) / 2;
            item.total = (item.price * item.quantity) / 2;
        } else if (item.productID === 'FR1' && item.quantity === 1) {
            sum += item.price;
            item.total = item.price;
        }
        if (item.productID === 'AP1' && item.quantity >= 3) {
            sum += 4.5 * item.quantity;
            item.total = 4.5 * item.quantity;
        } else if (item.productID === 'AP1' && item.quantity <= 2) {
            sum += item.price * item.quantity;
            item.total =  item.price * item.quantity;
        }
        if (item.productID === 'CF1') {
          sum += item.price * item.quantity;
          item.total =  item.price * item.quantity;
        }
    }
    $scope.products = [
    {
        productID: "FR1",
        name: "Fruit Tea",
        promo: "BOGO - Buy One Get One Free! **",
        price: 3.11,
        quantity: 0,
        total: 0
    },
    {
        productID: "AP1",
        name: "Apple",
        promo: "Only $4.50 when buying 3 or more! **",
        price: 5.00,
        quantity: 0,
        total: 0
    },
    {
        productID: "CF1",
        name: "Coffee",
        price: 11.23,
        quantity: 0,
        total: 0
    }
];
    $scope.items = [];
    $scope.add = function(item){
        if (item.quantity === 0){
            item.quantity += 1;
            // item.total += item.price;
            $scope.items.push(item);
        } else {
            item.quantity += 1;
            // item.total += item.price;
        }
    };
    $scope.total = function(){
        sum = 0;
        $scope.items.forEach(function(item){
            discountCheck(item);
        });
        return sum;
    };
    $scope.remove = function(index, item) {
      item.quantity = 0;
      item.total = 0;
      $scope.items.splice(index, 1);
    };
    $scope.clearItems = function() {
      $scope.items.forEach(function(item) {
        item.quantity = 0;
        item.total = 0;
      });
      $scope.items = [];
    };
    // $scope.discount = function(){
    //   var itemsTotal = 0;
    //   $scope.items.forEach(function(item){
    //       itemsTotal += item.total;
    //   })
    //   return itemsTotal - $scope.total();
    // }
}]);
