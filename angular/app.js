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
        link: 'https://www.uol.com.br/vivabem/noticias/redacao/2018/07/17/ansiedade-o-que-e-quais-os-tipos-os-sintomas-e-tratamentos-mais-eficazes.htm',
    },
    {
        materialName: 'Paciente em foco',
        linha: '1',
        tipo: '0',
        produto: '1',
        keyWord: 'paciente em foco;neurologia;',
        desc: 'Estágio inicial da esquizofrenia',
        link: 'https://saude.abril.com.br/mente-saudavel/o-que-e-esquizofrenia-sintomas-diagnostico-e-tratamento/',
    },
    {   
        materialName: 'Score de Framingham',
        linha: '0',
        tipo: '2',
        produto: '4',
        keyWord: 'cardiologia;',
        desc: 'Utilize para avaliar o risco de doença cardiovascular',
        link: 'https://www.rededorsaoluiz.com.br/especialidades/cardiologia',
    },
    {   
        materialName: 'Classificação Disturbius do Sono',
        linha: '0',
        tipo: '2',
        produto: '15',
        keyWord: 'insonia;cardiologia;neurologia;',
        desc: 'Utilize para avaliar o risco de doença cardiovascular',
        link: 'https://bvsms.saude.gov.br/disturbios-do-sono/',
    },
   ];
   
  

   $scope.salvar = function () {
       $scope.materiais.push($scope.novoMaterial);
       $scope.novoMaterial = {};
   };
   
  $scope.reset = function() {
    $scope.novoMaterial = {};
    $scope.frm.$setPristine();
    $scope.frm.$setUntouched();
  }

   $scope.selecionaMaterial = function (material) {
        $scope.materialSelecionado = material;
   };

   $scope.alterarMaterial = function () {

   };

   $scope.excluirMaterial = function(){
        $scope.materiais.splice($scope.materiais.indexOf($scope.materialSelecionado), 1);
   };

}); 