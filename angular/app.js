var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoMaterial = {};
   $scope.materialSelecionado = {};
   $scope.produtos = [{
     idProduto: '1', 
     produtoName: 'Rispalum®'},
     {
     idProduto: '2',
      
     produtoName: 'Rosulib'},
     {
     idProduto: '3',
      
     produtoName: 'Neotiapim'},
     {
     idProduto: '4',
      
     produtoName: 'Plagrel®'},
     {
     idProduto: '5',
      
     produtoName: 'Tegretol® / Tegretol® CR'},
     {
     idProduto: '6',
      
     produtoName: 'EXELON® PATCH'},
     {
     idProduto: '7',
      
     produtoName: 'RITALINA® LA'},
     {
     idProduto: '8',
      
     produtoName: 'RITALINA®'},
     {
     idProduto: '9',
      
     produtoName: 'STALEVO®'},
     {
     idProduto: '10',
      
     produtoName: 'TRILEPTAL®'},
     {
     idProduto: '11',
      
     produtoName: 'DIOVAN® HCT'},
     {
     idProduto: '12',
      
     produtoName: 'APRESOLINA®'},
     {
     idProduto: '13',
      
     produtoName: 'DIOVAN®'},
     {
     idProduto: '14',
      
     produtoName: 'COMTAN®'},
     {
     idProduto: '15',
      
     produtoName: 'Pidezot'},
     {
     idProduto: '16',
      
     produtoName: 'Lesdot'},
     {
     idProduto: '17',
      
     produtoName: 'Sandoz'}];

   $scope.materiais = [
    {
        materialName: 'Experiencia e Evidencia Ansiedade',
        linha: '1',
        tipo: '0',
        produto: '16',
        keyWord: 'ansiedade;neurologia;psiquiatria;',
        desc: 'Eficacia e tolerabilidade de escilatopram',
        link: 'https://www.w3schools.com/angular/angular_intro.asp'
    },
    {
        materialName: 'Mat2',
        linha: '2',
        tipo: '1',
        produto: '6',
        keyWord: 'ke1;key2;',
        desc: 'Descrição 1',
        link: 'https://www.w3schools.com/angular/angular_intro.asp'
    },
    {   
        materialName: 'Mat3',
        linha: '3',
        tipo: '1',
        produto: '6',
        keyWord: 'ke1;key2;',
        desc: 'Descrição 1',
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