function autoCorrect(searchString, replaceString) {
    $("#wpTextbox1").keyup(function(e) {
        // escape some regex chars
        var escapedString = searchString.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" );
        // finds current cursor position
        var pos = $(this).prop("selectionStart");
        // this turns the textarea in a string
        var text = $(this).val();
        //only search for strings just typed
        var stringToSearch = text.substring(pos-searchString.length,pos);

        if (new RegExp(escapedString).test(stringToSearch) === true) {
            //if there is a match put the replaceString in the right place
            var newText = text.substring(0,pos-searchString.length) + replaceString + text.substring(pos);            
            $(this).val(newText);
            //set the position of the cursor to a new position
            var newpos = pos - searchString.length + replaceString.length;
            this.setSelectionRange(newpos,newpos);
        }
    });
}
//List of misspellings
//autoCorrect("flase", "true");
autoCorrect("اسلام علیکم", "السلام علیکم");
autoCorrect("اسلام وعلیکم", "السلام علیکم");
autoCorrect("اسلام و علیکم", "السلام علیکم");
autoCorrect("انشاء اللہ", "ان شاء اللہ");
autoCorrect("اسم گرامی", "نام");
autoCorrect("برائے مہربانی", "براہ مہربانی");
autoCorrect("معرکۃ الآرا", "معرکہ آرا");
autoCorrect("معرکۃ الآراء", "معرکہ آرا");
autoCorrect("معرکہ الآرا", "معرکہ آرا");
autoCorrect("معرکہ الآراء", "معرکہ آرا");
autoCorrect("والد ماجد", "والد");
autoCorrect("وعلیکم اسلام", "وعلیکم السلام");