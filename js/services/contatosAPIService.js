angular.module('listaTelefonica').factory('contatosAPI', function($http){
	var _getContatos = function (){
		return $http.get("http://local.angular.js/js/json/contatos");
	};
	var _postContatos = function ( contato ){
		return $http.post("http://local.angular.js/js/json/contatos", contato);
	};
	return {
		getContatos : _getContatos,
		postContatos : _postContatos
	};
})