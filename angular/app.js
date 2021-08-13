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
    },
    ];
     
    //Selecionar um material para edição ou para excluir.
   $scope.selecionaMaterial = function (material) {
    $scope.materialSelecionado = material;
    $scope.edit = angular.copy($scope.materialSelecionado);};
   
    //Voltar o material para como estava antes da edição.
   $scope.resete = function() {
    $scope.edit = angular.copy($scope.materialSelecionado);};
    
    //Salvar alterções feitas no editar.
   $scope.update = function(edit) {
    angular.copy(edit, $scope.materialSelecionado);};
   
    //Salvar novo material.
   $scope.salvar = function () {
    $scope.materiais.push($scope.novoMaterial);
    $scope.novoMaterial = {}; };

    //Gera um Id para um novo material.
   $scope.novoId = function() {
    $scope.novoMaterial.Id = $scope.materiais.length + 1};
   
    //Reset para novo material.
   $scope.reset = function() {
    $scope.novoMaterial = {};
    $scope.frm1.$setPristine();
    $scope.frm1.$setUntouched();};
  
    //Exclui um material.
   $scope.excluirMaterial = function(){
    $scope.materiais.splice($scope.materiais.indexOf($scope.materialSelecionado), 1);};

    

}); 