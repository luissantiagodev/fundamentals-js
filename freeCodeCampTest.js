	
	// Split all the sentence into an array
	// go into every array and modify the first letter of string
	// Return string 



	

	function titleCase(str){

		const changeCapitalWord = (arr) => {
				let finalword;
				let finalArray = [];
				arr.map(function(index){
					finalword = index.charAt(0).toUpperCase()+index.slice(1);
					finalArray.push(finalword);
				});	
				return finalArray;
			} 
	  let conversion  = str.toLowerCase();
	  let arrayOfWords = conversion.split(' ');
	  let finalArray = changeCapitalWord(arrayOfWords).join(' ');

	  return finalArray;
	}


