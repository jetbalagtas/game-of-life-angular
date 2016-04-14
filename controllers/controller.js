var golApp = angular.module('golApp.controller', ['golApp.service']);
golApp.controller('GolController', GolController);
GolController.$inject = ['$interval','board','life'];
function GolController($interval, board, life){
  var vm = this;

  vm.thumbs = [];
  vm.reset = reset;
  vm.interval = 300;
  vm.load = load;
  vm.togglePlay = togglePlay;
  vm.save = save;

  function togglePlay(){
    if(!vm.isStarted && vm.timer){
      $interval.cancel(vm.timer);
      vm.isStarted = false;
      return;
    }
    vm.isStarted = true;
    vm.timer = $interval(vm.life.next, vm.interval);
  }

  function save(){
    var board = angular.copy(vm.board);
    console.log(board);
    vm.thumbs.push(board);
  }

  function load(thumb){
    reset();
    vm.life = life.createNew(thumb);
    vm.board = vm.life.board;
  }

  function reset(){
    if(vm.isStarted) vm.togglePlay();
    var seed = board.createNew(15);
    vm.life = life.createNew(seed);
    vm.board = vm.life.board;
    vm.isStarted = false;
  }

  (function activate(){
    reset();
    vm.life = life.createNew(window.initialSeed);
    vm.board = vm.life.board;
    vm.togglePlay();
  }());
}