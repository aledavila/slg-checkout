var app = angular.module("checkout", []);

app.controller('CartCtrl', ['$scope', function($scope){
  function discountCheck(item){

    if (item.productID === 'FR1' && (item.quantity === 2)) {
            discount = item.price;
            sum += item.price - discount;
        } else {
            sum += (item.quantity - 1) * item.price;
        };
        if (item.productID === 'AP1' && item.quantity >= 3){
            discount = (item.price * 0.1) * item.quantity;
            sum += item.price - discount;
        } else {
            sum += item.price
        };
    }
    $scope.products = [
    {
        productID: "FR1",
        name: "Fruit Tea",
        promo: "BOGO - Buy One Get One Free!",
        price: 3.11,
        quantity: 0
    },
    {
        productID: "AP1",
        name: "Apple",
        promo: "Only $4.50 when buying 3 or more!",
        price: 5.00,
        quantity: 0
    },
    {
        productID: "CF1",
        name: "Coffee",
        price: 11.23,
        quantity: 0
    }
];
    $scope.items = [];
    $scope.add = function(item){
        if (item.quantity === 0){
            item.quantity += 1;
            $scope.items.push(item);
        } else {
            item.quantity += 1;
        }
    };
    $scope.total = function(){
        sum = 0;
        $scope.items.forEach(function(item){
            discountCheck(item);
        })
        return sum
    };
    $scope.remove = function(item) {
      if (item.quantity >= 1) {
          item.quantity -= 1;
      } else {
          $scope.items -= item;
      }
    };
    $scope.clearItems = function() {
      $scope.items = [];
    };
}])
