angular.module('ecej.controllers', ['Devise'])

  .controller ('LoginCtrl', function (Auth, $scope) {
    var credentials = {
      email: 'example@mail.com',
      password: ''
    };
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
    //Variável utilizada para esconder mensagem de erro
    $scope.loginError = false;
    $scope.autenticar = function (email, senha) {
      credentials.email = email;
      credentials.password = senha;
      Auth.login(credentials, config).then(function (user) {
        //VERIFICAR O OBJETO RECEBIDO, ANALISAR COMO VAI FUNCIONAR A PÁGINA DE CADA USUÁRIO, ACRESCENTAR REDIRECIONAMENTO PARA PÁGINA INICIAL
        $scope.usuario = user;
        $scope.loginError = false;
      }, function (error) {
        //QUANDO TIVER A API TESTAR O ERROR COM CONSOLE.LOG()
        $scope.loginError = true;
      });
      credentials.email = '';
      credentials.password = '';
    };

  })

  .controller('SideController', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });
