var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoMaterial = {};
   $scope.materialSelecionado = {};
   $scope.materiais = [
    {
        materialName: 'Mat1',
        linha: '1',
        tipo: '1',
        produto: '6',
        keyWord: 'ke1;key2;',
        desc: 'Descrição 1',
        arquivo: '',
        link: 'https://www.w3schools.com/angular/angular_intro.asp'
    },
    {
        materialName: 'Mat2',
        linha: '2',
        tipo: '1',
        produto: '6',
        keyWord: 'ke1;key2;',
        desc: 'Descrição 1',
        arquivo: '',
        link: 'https://www.w3schools.com/angular/angular_intro.asp'
    },
    {   
        materialName: 'Mat3',
        linha: '3',
        tipo: '1',
        produto: '6',
        keyWord: 'ke1;key2;',
        desc: 'Descrição 1',
        arquivo: '',
        link: 'https://www.w3schools.com/angular/angular_intro.asp'
    },
   ];

   $scope.salvar = function () {
       $scope.materiais.push($scope.novoMaterial);
       $scope.novoMaterial = {};
   };

   $scope.selecionaMaterial = function (material) {
        $scope.materialSelecionado = material;
   };

   $scope.alterarMaterial = function () {

   };

   $scope.excluirMaterial = function(){
        $scope.materiais.splice($scope.materiais.indexOf($scope.materialSelecionado), 1);
   };

}); 