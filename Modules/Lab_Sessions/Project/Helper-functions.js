//* Group project - due date Nov 20
//* Ahsan's group -> Polina Howard, Kaan Altinova, Jomy Muttathil, Roman Iskandarov, Ronveer Chakraborty, Preeya Singh, Mashrur Elahi


class Helper_Functions {

static nameToTitleCase(sName) {
    var sentenceArray = sName.toLowerCase().split(' '); 
    var toTitleCase = '';
        for(var ind = 0; ind < sentenceArray.length; ind++) {
            toTitleCase += sentenceArray[ind].charAt(0).toUpperCase() + sentenceArray[ind].slice(1) + ' ';     
        }
    return toTitleCase = toTitleCase.trim();  
}

}
module.exports = Helper_Functions;