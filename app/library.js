'use strict';

	function Car(name, model, isTrailer){

		// instantiate the Car attributes

		// If the name of the car is not given, set default 'General'
		this.name = name || 'General';

		// If the model of the car is not given, set default 'GM'
		this.model = model || 'GM'

		// If car is not stated as trailer, assume it is not 
		if(isTrailer === 'trailer'){
			this.isTrailer = true;
			this.isSaloon = false;
			this.numOfWheels = 8;
			this.speed = '0 km/h';
		}else{
			this.isTrailer = false;
			this.isSaloon = true;
			this.numOfWheels = 4;
		}

		// Porsche's and Koenigsegg's have just 2 doors.
		if(name === 'Porshe' || name === 'Koenigsegg'){
			this.numOfDoors = 2;
		}else{
			this.numOfDoors = 4;
		}

		this.drive = function(speed){
			if (this.isTrailer){
			this.speed = 11 * speed +' km/h';
			return this;
			}else{
			this.speed = 50 * speed + ' km/h';
			return this;
		}

		};
	};

	// car driver function



	module.exports = Car;