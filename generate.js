function generate(includeUppercase, includeNumbers, includeSpecial, includeMoreSpecial, defaultString, stringLength) {
  var characters    = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers       = '0123456789';
  var special       = '-._#$@%!';
  var moreSpecial   = '"+(){}[]?&,*<>|:;^';
  var chars         = characters;
  var aString       = '';

  if (includeUppercase) {
    chars += uppercase;
  }
  if (includeNumbers) {
    chars += numbers;
  }
  if (includeSpecial) {
    chars += special;
  }
  if (includeMoreSpecial) {
    chars += moreSpecial;
  }

  for (var i = 0; i < stringLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    aString += chars.charAt(randomIndex);
  }

  aString = defaultString + aString;
  return aString;
}



function needAccount() {
  var includeUppercase     = document.getElementById('AAincludeUppercase').checked;
  var includeNumbers       = document.getElementById('AAincludeNumbers').checked;
  var includeSpecial       = document.getElementById('AAincludeSpecial').checked;
  var includeMoreSpecial   = document.getElementById('AAincludeMoreSpecial').checked;
  var defaultString        = document.getElementById('AAdefultString').value;
  var stringLength         = parseInt(document.getElementById('AAstringLength').value);
  var actLikeEmailAddress  = document.getElementById('actLikeEmailAddress').checked;
  var accountString        = generate(includeUppercase, includeNumbers, includeSpecial, includeMoreSpecial, defaultString, stringLength)

  if (actLikeEmailAddress) {
    var emailAddress        = ['@gmail.com', '@live.com', '@outlook.com', '@msn.com', '@aol.com', '@yahoo', '@verizon.net', '@att.net', '@gmx.de', '@wanadoo.fr', '@yandex.ru',];
    var randomEmailAddress  = emailAddress[Math.floor(Math.random() * emailAddress.length)];
    accountString += randomEmailAddress
  }
  
  document.getElementById('output').innerHTML += "<p style='text-align:left;'>" + accountString + "</p>";
}



function needPassword() {
  var includeUppercase    = document.getElementById('PWincludeUppercase').checked;
  var includeNumbers      = document.getElementById('PWincludeNumbers').checked;
  var includeSpecial      = document.getElementById('PWincludeSpecial').checked;
  var includeMoreSpecial  = document.getElementById('PWincludeMoreSpecial').checked;
  var defaultString       = document.getElementById('PWdefultString').value;
  var stringLength        = parseInt(document.getElementById('PWstringLength').value);
  var passwordString      = generate(includeUppercase, includeNumbers, includeSpecial, includeMoreSpecial, defaultString, stringLength)
  
  document.getElementById('output').innerHTML += "<p style='text-align:right;'>" + passwordString + "</p>";
}