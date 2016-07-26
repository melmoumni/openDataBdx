var http = require('http');
var parseString = require('xml2js').parseString;
var iconv = require('iconv-lite');




function openBdx(key){
	this.key = key;
}




openBdx.prototype.line = {
	getAllLines : function(){
		http.get({
    				host: 'data.bordeaux-metropole.fr',
    				path: '/wps?key=8PVVD8CAA8&service=WPS&version=1.0.0&request=Execute&Identifier=SV_LIGNE_A'
				},
   			 function(response) {
   			 }
   		);
		return null;
	},
	getLineInfo: function(id){
		return null;
	},
	getGeoPath: function(id, direction){
		return null;
	},
	getStations: function(id){
		return null;
	},
	getVehicules: function(id, direction){
		return null;
	}
};

openBdx.prototype.station = {
	getAllStations : function(){
		return null;
	},
	getStationInfo: function(id){
		return null;
	}
};

openBdx.prototype.vehicule = {
	timeUntilStation: function(id){
		return null;
	}
};

module.exports = openBdx; 