//Definindo area do controller do AngularJS.
var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

    //Define que as arrays novoMaterial e materialSelecionado são vazias.
   $scope.novoMaterial = {};
   $scope.materialSelecionado = {};
   
   //Array para associar os nomes aos numeros de identificação dos Tipos.
   $scope.tipos = [
    {Id: 0,Nome:'Material Técnico'},
    {Id: 1,Nome:'Podcast'},
    {Id: 2,Nome:'Prestação de Serviço'},
    {Id: 3,Nome:'Webinar'},
    {Id: 4,Nome:'Sandoz Talks'}
    ];
      
    //Array para associar os nomes aos numeros de identificação das Linhas.
   $scope.linhas = [
    {Id: 0,Nome:'CVM'},
    {Id: 1,Nome:'SNC'},
    {Id: 2,Nome:'Hibrido'},
    {Id: 3,Nome:'Institucional'},
    ];
    
    //Array de Produtos que serve de substituta para o banco de dados.
   $scope.produtos = [
    {Id: 1,Nome: 'Rispalum®'},
    {Id: 2,Nome: 'Rosulib'},
    {Id: 3,Nome: 'Neotiapim'},
    {Id: 4,Nome: 'Plagrel®'},
    {Id: 5,Nome: 'Tegretol® / Tegretol® CR'},
    {Id: 6,Nome: 'EXELON® PATCH'},
    {Id: 7,Nome: 'RITALINA® LA'},
    {Id: 8,Nome: 'RITALINA®'},
    {Id: 9,Nome: 'STALEVO®'},
    {Id: 10,Nome: 'TRILEPTAL®'},
    {Id: 11,Nome: 'DIOVAN® HCT'},
    {Id: 12,Nome: 'APRESOLINA®'},
    {Id: 13,Nome: 'DIOVAN®'},
    {Id: 14,Nome: 'COMTAN®'},
    {Id: 15,Nome: 'Pidezot'},
    {Id: 16,Nome: 'Lesdot'},
    {Id: 17,Nome: 'Sandoz'}
    ];

    //Array de Materiais que serve de substituta para o banco de dados.
   $scope.materiais = [
    {
     Id: 1,
     Material: 'Experiencia e Evidencia Ansiedade',
     Linha: 1,
     Tipo: 0,
     IdProduto: 16,
     PalavrasChave: 'ansiedade;neurologia;psiquiatria;',
     Descricao: 'Eficacia e tolerabilidade de escilatopram',
     Link: 'https://www.uol.com.br/vivabem/noticias/redacao/2018/07/17/ansiedade-o-que-e-quais-os-tipos-os-sintomas-e-tratamentos-mais-eficazes.htm',
     Ordem: 1,
    },
    {
     Id: 2,
     Material: 'Paciente em foco',
     Linha: 1,
     Tipo: 0,
     IdProduto: 1,
     PalavrasChave: 'paciente em foco;neurologia;',
     Descricao: 'Estágio inicial da esquizofrenia',
     Link: 'https://saude.abril.com.br/mente-saudavel/o-que-e-esquizofrenia-sintomas-diagnostico-e-tratamento/',
     Ordem: 2,
    },
    { 
     Id: 3,
     Material: 'Score de Framingham',
     Linha: 0,
     Tipo: 2,
     IdProduto: 4,
     PalavrasChave: 'cardiologia;',
     Descricao: 'Utilize para avaliar o risco de doença cardiovascular',
     Link: 'https://www.rededorsaoluiz.com.br/especialidades/cardiologia',
     Ordem: 3,
    },
    {  
     Id: 4, 
     Material: 'Classificação Disturbius do Sono',
     Linha: 0,
     Tipo: 2,
     IdProduto: 15,
     PalavrasChave: 'insonia;cardiologia;neurologia;',
     Descricao: 'Utilize para avaliar o risco de doença cardiovascular',
     Link: 'https://bvsms.saude.gov.br/disturbios-do-sono/',
     Ordem: 4,
    },
    ];
     
    //Selecionar um material para edição ou para excluir.
   $scope.selecionaMaterial = function (material) {
    $scope.materialSelecionado = material;
    $scope.editCopy = angular.copy($scope.materialSelecionado);};

   $scope.selecionaMaterialSubir = function (material) {
    $scope.materialSelecionadoSubir = material;
    console.log($scope.materialSelecionadoSubir.Ordem);}
    
   $scope.selecionaMaterialDescer = function (material) {
    $scope.materialSelecionadoDescer = material;
    console.log($scope.materialSelecionadoDescer.Ordem);}

   $scope.selecionarMateriais = function (materiais) {
    $scope.materiaisSelecionados = materiais;
    $scope.ordemCopy = angular.copy($scope.materiais);};

   $scope.subir = function () {
    console.log($scope.materialSelecionadoSubir.Ordem);
    if ($scope.materialSelecionadoSubir.Ordem >= 2 ) {
    for (let index = 0; index < $scope.ordemCopy.length; index++) {
    if ($scope.ordemCopy[index].Ordem == $scope.materialSelecionadoSubir.Ordem - 1) 
    {$scope.ordemCopy[index].Ordem = angular.copy($scope.ordemCopy[index].Ordem + 1);
    $scope.materialSelecionadoSubir.Ordem = angular.copy($scope.materialSelecionadoSubir.Ordem - 1);
     console.log($scope.ordemCopy[index].Ordem);};};};
    return $scope.maximo = true;};
    
    $scope.descer = function () {
    console.log($scope.materialSelecionadoDescer.Ordem);
    if ($scope.materialSelecionadoDescer.Ordem <= 10 ) {
    for (let index = 0; index < $scope.ordemCopy.length; index++) {
    if ($scope.ordemCopy[index].Ordem == $scope.materialSelecionadoDescer.Ordem + 1) 
    {$scope.ordemCopy[index].Ordem = angular.copy($scope.ordemCopy[index].Ordem - 1);
    $scope.materialSelecionadoDescer.Ordem = angular.copy($scope.materialSelecionadoDescer.Ordem + 1);
    console.log($scope.ordemCopy[index].Ordem);};};};
    return $scope.maximo = true;};   

   $scope.resetOrdem = function() {
    $scope.ordemCopy = angular.copy($scope.materiais);};
        
   $scope.updateOrdem = function(ordemCopy) {
    angular.copy(ordemCopy, $scope.materiais);};
   
    //Voltar o material para como estava antes da edição.
   $scope.resetEdit = function() {
    $scope.editCopy = angular.copy($scope.materialSelecionado);};
    
    //Salvar alterções feitas no editar.
   $scope.updateEdit = function(editCopy) {
    angular.copy(editCopy, $scope.materialSelecionado);};
   
    //Salvar novo material.
   $scope.salvar = function () {
    $scope.materiais.push($scope.novoMaterial);
    $scope.novoMaterial = {}; };

    //Gera um Id para um novo material.
   $scope.novoId = function() {
    $scope.novoMaterial.Id = $scope.materiais.length + 1};

   $scope.ordem = function() {
    $scope.novoMaterial.Ordem = $scope.materiais.length + 1};
   
    //Reset para novo material.
   $scope.reset = function() {
    $scope.novoMaterial = {};
    $scope.frm1.$setPristine();
    $scope.frm1.$setUntouched();};
  
    //Exclui um material.
   $scope.excluirMaterial = function(){
    $scope.materiais.splice($scope.materiais.indexOf($scope.materialSelecionado), 1);};

    //Exibir o nome da linha na tabela.
   $scope.displayLinha = function(dLinha){
    for (let index = 0; index < $scope.linhas.length; index++) {
        if ($scope.linhas[index].Id == dLinha) {
        return $scope.linhas[index].Nome;}}
    return "Linha não Encontrada"
    }

    //Exibir o nome do tipo na tabela.
   $scope.displayTipo = function(dTipo){
    for (let index = 0; index < $scope.tipos.length; index++) {
        if ($scope.tipos[index].Id == dTipo) {
        return $scope.tipos[index].Nome;}}
    return "Tipo não Encontrado"
    }
    
    //Exibir o nome do produto na tabela.
   $scope.displayProduto = function(dProduto){
    for (let index = 0; index < $scope.produtos.length; index++) {
        if ($scope.produtos[index].Id == dProduto) {
        return $scope.produtos[index].Nome;}}
    return "Produto não Encontrado"
    } 
}); 