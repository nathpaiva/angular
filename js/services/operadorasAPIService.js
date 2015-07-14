angular.module('listaTelefonica').service('opradorasAPI', function( $http, config ){
	this.getOperadoras = function (){
		return $http.get(config.baseUrlOperadoras);
	};
});