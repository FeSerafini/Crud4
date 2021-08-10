var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoMaterial = {};
   $scope.materialSelecionado = {};
   $scope.tipos = [
       {idTipo : '0', tipoName :'Material Técnico'},
       {idTipo : '1', tipoName :'Podcast'},
       {idTipo : '2', tipoName :'Prestação de Serviço'},
       {idTipo : '3', tipoName :'Webinar'},
       {idTipo : '4', tipoName :'Sandoz Talks'}]
      
   $scope.linhas = [
        {idLinha : '0', linhaName :'CVM'},
        {idLinha : '1', linhaName :'SNC'},
        {idLinha : '2', linhaName :'Hibrido'},
        {idLinha : '3', linhaName :'Institucional'},
        ]
    
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
            linha: {idLinha : '1', linhaName:'SNC'},
            tipo: {idTipo : '0', tipoName:'Material Técnico'},
            produto: {idProduto: '16',produtoName: 'Lesdot'},
            keyWord: 'ansiedade;neurologia;psiquiatria;',
            desc: 'Eficacia e tolerabilidade de escilatopram',
            link: 'https://www.uol.com.br/vivabem/noticias/redacao/2018/07/17/ansiedade-o-que-e-quais-os-tipos-os-sintomas-e-tratamentos-mais-eficazes.htm',
        },
        {
            materialName: 'Paciente em foco',
            linha: {idLinha : '1', linhaName:'SNC'},
            tipo: {idTipo : '0', tipoName:'Material Técnico'},
            produto: {idProduto: '1', produtoName: 'Rispalum®'},
            keyWord: 'paciente em foco;neurologia;',
            desc: 'Estágio inicial da esquizofrenia',
            link: 'https://saude.abril.com.br/mente-saudavel/o-que-e-esquizofrenia-sintomas-diagnostico-e-tratamento/',
        },
        {   
            materialName: 'Score de Framingham',
            linha: {idLinha : '0', linhaName:'CVM'},
            tipo: {idTipo : '2', tipoName:'Prestação de Serviço'},
            produto: {idProduto: '4',produtoName: 'Plagrel®'},
            keyWord: 'cardiologia;',
            desc: 'Utilize para avaliar o risco de doença cardiovascular',
            link: 'https://www.rededorsaoluiz.com.br/especialidades/cardiologia',
        },
        {   
            materialName: 'Classificação Disturbius do Sono',
            linha: {idLinha : '0', linhaName:'CVM'},
            tipo: {idTipo : '2', tipoName:'Prestação de Serviço'},
            produto: {idProduto: '15',produtoName: 'Pidezot'},
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
    $scope.frm1.$setPristine();
    $scope.frm1.$setUntouched();
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