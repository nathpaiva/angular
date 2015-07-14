angular.module('listaTelefonica').service('opradorasAPI', function( $http ){
	this.getOperadoras = function (){
		return $http.get("http://local.angular.js/js/json/operadoras");
	};
});