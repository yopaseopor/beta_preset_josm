/**
 * Copyright (c) 2012 Amit Badkas <amit@sanisoft.com>
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses
 *
 * @URL https://github.com/sanisoft/jQuery-auto-correct
 *  
 * Modified for Urdu Wikipedia by [[User:Asadpg]], and fixed some bugs by [[User:ערן]]
 */
( function ( $ ) {
// Wrap in a closure
jQuery.fn.autocorrect = function(options)
{
  // If plugin attached to text/textarea field then don't need to proceed further
  if ("text" != jQuery(this).attr("type") && !jQuery(this).is("textarea"))
  {
      return;
  }

  // Default parameters for plugin with some default corrections
  var defaults = {
    corrections: {
      "آپکو": "آپ کو",
      "آپسے": "آپ سے",
      "آزمایشات": "آزمائشیں",
      "آزمایشیں": "آزمائشیں",
      "آجکل": "آج کل",
      "اعلی": "اعلیٰ",
      "اعلا": "اعلیٰ",
      "اھم": "اہم",
      "اھمیت": "اہمیت",
      "اسل": "اصل",
      "الغوزہ": "الغوزا",
      "الجبرہ": "الجبرا",
      "اسلاح": "اصلاح",
      "اسکا": "اس کا",
      "اسکی": "اس کی",
      "اسکو": "اس کو",
      "اسکے": "اس کے",
      "انکا": "ان کا",
      "انکو": "ان کو",
      "انکے": "ان کے",
      "اصلاع": "اصلاح",
      "اصتلاح": "اصطلاح",
      "اصتلاحات": "اصطلاحات",
      "اژدھا": "اژدہا",
      "اذدہا": "اژدہا",
      "اذدھا": "اژدہا",
      "اژدہام": "ازدحام",
      "ازدہام": "ازدحام",
      "اژدحام": "ازدحام",
      "بقایہ": "بقایا",
      "بھائ": "بھائی",
      "ترجیہ": "ترجیح",
      "توجیح": "توجیہ",
      "تمغہ": "تمغا",
      "تماشہ": "تماشا",
      "تقاضہ": "تقاضا",
      "تسنیف": "تصنیف",
      "تسانیف": "تصانیف",
      "تہا": "تھا",
      "تہی": "تھی",
      "جو کہ": "جو",
      "چاہیئے": "چاہیے",
      "دھائی": "دہائی",
      "درستگی": "درستی",
      "دئے": "دیے",
      "کررہے": "کر رہے",
      "گئ": "گئی",
      "متابادل": "متبادل",
      "مستفی": "مستعفی",
      "نھیں": "نہیں",
      "ھم": "ہم",
      "ھمیں": "ہمیں",
      "ھے": "ہے",
      "ھاں": "ہاں",
      "ھاتھ": "ہاتھ",
      "ۓ": "ہے",
      "ھیں": "ہیں",
      "ھی": "ہی",
      "ھوتا": "ہوتا",
      "دیکھئے": "دیکھیے",
      "ڈرامہ": "ڈراما",
      "چغہ": "چغا",
      "حیرانگی": "حیرانی",
      "حلواہ": "حلوا",
      "خرمہ": "خرما",
      "بھروسہ": "بھروسا",
      "بےخبری": "بے خبری",
      "سکول": "اسکول",
      "سقہ": "سقا",
      "سردست": "سر دست",
      "شمارندہ": "کمپیوٹر",
      "شفیعہ": "شفیعا",
      "شوربہ": "شوربا",
      "عاشورہ": "عاشورا",
      "قورمہ": "قورما",
      "کراب": "کر اب",
      "کردو": "کر دو",
      "کردیا": "کر دیا",
      "کردیے": "کر دیے",
      "کردی": "کر دی",
      "کردے": "کر دے",
      "کرلیا": "کر لیا",
      "کرچکا": "کر چکا",
      "کرچکی": "کر چکی",
      "کرچکے": "کر چکے",
      "کرکے": "کر کے",
      "کونسا": "کون سا",
      "کونسی": "کون سی",
      "کونسے": "کون سے",
      "کوکسی": "کو کسی",
      "کویہ": "کو یہ",
      "معمہ": "معما",
      "مچلکہ": "مچلکا",
      "ملغوبہ": "ملغوبا",
      "مربہ": "مربا",
      "وکیپیڈیا": "ویکیپیڈیا",
      "وکی": "ویکی",
      "ہوبہو": "ہو بہو",
      "ہوسکا": "ہو سکا",
      "ہوسکتا": "ہو سکتا",
      "ہوسکی": "ہو سکی",
      "ہوسکے": "ہو سکے",
      "ہوکر": "ہو کر",
      "ہوگا": "ہو گا",
      "ہوگی": "ہو گی",
      "توکیا": "تو کیا",
      "توپھر": "تو پھر",
      "ہوگئے": "ہو گئے",
      "ہوگیا": "ہو گیا",
      "ہوگئی": "ہو گئی",
      "جارہے": "جا رہے",
      "ملاکر": "ملا کر",
      "ہین": "ہیں",
      "بحرکیف": "بہر کیف",
      "حدف": "ہدف",
      "تقریبا": "تقریباً",
      "فورا": "فوراً",
      "مثلا": "مثلاً",
      "فوتگی": "وفات",
      "جسکا": "جس کا",
      "جسکی": "جس کی",
      "جسکے": "جسکے",
      "جسکو": "جس کو",
      "ہؤا": "ہوا",
      "بنالیا": "بنا لیا"
    }
  };

  // Merge corrections passed at run-time
  if (options && options.corrections)
  {
      options.corrections = jQuery.extend(defaults.corrections, options.corrections);
  }

  // Merge options passed at run-time
  var opts = jQuery.extend(defaults, options);

  // Function used to get caret's position
  getCaretPosition = function(oField)
  {
      // Initialize
      var iCaretPos = 0;

      // IE Support
      if (document.selection)
      {
          // To get cursor position, get empty selection range
          var oSel = document.selection.createRange();

          // Move selection start to 0th position
          oSel.moveStart("character", 0 - oField.value.length);

          // The caret position is selection length
          iCaretPos = oSel.text.length;
      }
      // Firefox support
      else if (oField.selectionStart || oField.selectionStart == "0")
      {
          iCaretPos = oField.selectionStart;
      }

      // Return results
      return (iCaretPos);
  };

  // Function used to set caret's position
  function setCaretPosition (oField, iCaretPos)
  {
      // IE Support
      if (document.selection)
      {
          // Create empty selection range
          var oSel = document.selection.createRange();

          // Move selection start and end to 0 position
          oSel.moveStart("character", 0 - oField.value.length);

          // Move selection start and end to desired position
          oSel.moveStart("character", iCaretPos);
          oSel.moveEnd("character", 0);
      }
      // Firefox support
      else if (oField.selectionStart || oField.selectionStart == "0")
      {
          oField.selectionStart = iCaretPos;
          oField.selectionEnd = iCaretPos;
      }
  }

  // Capture 'on key up' event for auto-correction
  this.keyup(function(e)
  {
      // If currently entered key is not 'space' then don't need to proceed further
      if (32 != e.keyCode)
      {
          return;
      }

      // Get caret's current position
      var caretPosition = (getCaretPosition(this) - 1);

      // If caret's current position is less than one then don't need to proceed further
      if (1 > caretPosition)
      {
          return;
      }

      // Value of current field
      var valueOfField = this.value;

      // Get value of field upto caret's current position from start
      var stringUptoCaretPosition = (valueOfField).substr(0, caretPosition);

      // If more than one 'space' continuously then don't need to proceed further
      if (" " == stringUptoCaretPosition.charAt(caretPosition - 1))
      {
          return;
      }

      // Split string into array using space
      var stringToArray = stringUptoCaretPosition.split(" ");

      // Get last index of array
      var lastIndexOfArray = (stringToArray.length - 1);

      // Get last element of array as string to search for correction
      var stringToSearch = stringToArray[lastIndexOfArray];

      // If string to search don't have any matching record in corrections then don't need to proceed further
      if (!opts.corrections[stringToSearch])
      {
          return;
      }

      // Build string to replace using correction
      var stringToReplace = opts.corrections[stringToSearch];

      // Store replaced string back to array as last element
      stringToArray[lastIndexOfArray] = stringToReplace;

      // Join the array to build new string
      stringUptoCaretPosition = stringToArray.join(" ");

      // Get value of field upto end from caret's current position
      var stringFromCaretPositionUptoEnd = (valueOfField).substr(caretPosition);

      // Set new value of field
      this.value = (stringUptoCaretPosition + stringFromCaretPositionUptoEnd);

      // Set caret's position
      setCaretPosition(this, stringUptoCaretPosition.length + 1);
  });
};

$("#wpTextbox1").autocorrect();
})( jQuery );