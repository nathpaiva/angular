angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, opradorasAPI){
	$scope.app = "Lista telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function (){
		contatosAPI.getContatos().success(function ( data ){
			$scope.contatos = data;
		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};
	var carregarOperadoras = function (){
		opradorasAPI.getOperadoras().success(function ( data ){
			$scope.operadoras = data;
		});
	};

	$scope.addContact = function ( contato ){
		contato.data = new Date();

		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		// contatoAPI.postContatos(contato).success(function ( data ){
		// 	delete $scope.contato;
		// 	$scope.contatoForm.$setPristine();

		// 	carregarContatos();
		// 	// caro não queira recarregar
		// 	// $scope.contatos.push(angular.copy(contato));
		// });

	};
	$scope.apagarContact = function ( contatos ){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function ( contatos ){

		return contatos.some(function ( contato ){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function ( campo ){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});