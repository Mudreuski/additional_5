module.exports = function check(str, bracketsConfig) {
	
	let cache = str;
	let array = [];
	
	for(let subarray = 0; subarray < bracketsConfig.length; subarray++){
		
		array[subarray] = bracketsConfig[subarray][0] + bracketsConfig[subarray][1];	
	}
		
	for (;;) {	
		
		let comp = cache;
		
		for ( let i = 0; i < bracketsConfig.length; i++ ) {	
			
			for (;;) {	
				
				let search = cache.indexOf(array[i]);
				
				if ( search >= 0 ) {
					cache = cache.replace( array[i], "" );
				}
				else if ( search < 0) {
					break;
				}
			
			}
	
		}
		
		if ( comp === cache){
			
			if(cache == ""){
				return true;
			}
			else{
				return false;
			}
			
		}
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	for ( let b = 0; b < str.length/2; b++ ) {	
//		
//		for ( let i = 0; i < bracketsConfig.length; i++ ) {	
//		
//			for ( let j = 0; j < str.length/2; j++ ) {	
//		
//				if ( cache.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]) >= 0 ) {
//					cache = cache.replace( bracketsConfig[i][0] + bracketsConfig[i][1], "" );
//				}
//	
//			}
//	
//		}	
//		
//	}
//	
//	if ( cache == "" ) {
//		return true;	
//	}
//	else {
//		return false;	
//	}
	
}