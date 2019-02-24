//<nowiki>
//from arabic wikiipedia
//Todo: enable for https
var General = "{{معلومات\n| وضاحت  =\n| ماخذ =\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = \n| دیگر_نسخے =\n}}";
var VideoGame = "{{معلومات\n| وضاحت  = یہ ویڈیو کھیل کا غلاف ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var Logo = "{{معلومات\n| وضاحت  = یہ لوگو ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var Poster = "{{معلومات\n| وضاحت  = یہ پوسٹر ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var AlbumCover = "{{معلومات\n| وضاحت  = یہ البم کا غلاف ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var Game = "{{معلومات\n| وضاحت  = یہ لوڈو کھیل کا غلاف ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز =\n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var MyWork = "{{معلومات\n| وضاحت  =\n| ماخذ = ذاتی کام \n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var BookCover = "{{معلومات\n| وضاحت  = یہ کتاب کا غلاف ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var TVShow = "{{معلومات\n| وضاحت  = یہ ٹیلی ویژن پروگرام کا ایک حصہ ہے  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var Film = "{{معلومات\n| وضاحت  = یہ فلم کا اسکرین شاٹ ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var Software = "{{معلومات\n| وضاحت  = یہ پروگرام کا اسکرین شاٹ ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں\n| دیگر_نسخے =\n}}";
var DVD = "{{معلومات\n| وضاحت  = یہ غلاف ہے:  \n| ماخذ = (ماخذ_یہاں_رکھیں)\n| تاریخ={{موجودہ تاریخ}}\n| تصویر ساز = \n| اجازت نامہ  = ذیل میں ملاحظہ کریں \n| دیگر_نسخے =\n}}";
 
if (mw.config.get('wgCanonicalSpecialPageName') == "Upload") {
 
    var LicenseADD = document.getElementById('mw-upload-permitted');
    document.getElementById("wpUploadDescription").value = General;
 
    LicenseADD.innerHTML += '<fieldset>\n' + '<legend><b>اجازت نامہ منتخب کریں:</b> (پھر ذیل میں موجود "خلاصہ" کے خانہ میں مطلوبہ معلومات پر کریں)</legend>\n' + '<table border="0">\n' + '<tr>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/4/44/P_writing.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(General);"/>غیر متعین</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/5/5e/Fair_use_icon_-_Movie_poster.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(Poster);"/>پوسٹر</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/9/93/Cdalbumicon.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(AlbumCover);"/>غلاف البم موسیقی</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(MyWork);"/>ذاتی کام</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/b/bb/Fair_use_icon_-_Book.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(BookCover);"/>کتاب کا سرورق/گردپوش</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/4/4e/TV-copyright.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(TVShow);"/>ٹی وی سکرین شاٹ</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/1/1d/Red_copyright.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(Logo);"/>لوگو</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/0/01/Nuvola_apps_package_games.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(VideoGame);"/>غلاف ویڈیو کھیل</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/5/56/Film_copyright.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(Film);"/>فلم سکرین شاٹ</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/a/af/Gnome-system-software-installer.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(Software);"/>پروگرام کا سکرین شاٹ</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/3/37/Dvdiconcover.png" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(DVD);"/>ڈی وی ڈی کا غلاف</td>\n' + '<td style="white-space: nowrap; padding: .5em;"><img src="//upload.wikimedia.org/wikipedia/commons/2/2c/P_game.svg" alt="X" height="20" width="20" /><input type="radio" name="rad" onclick="License(Game);"/>لوڈو کھیل کا غلاف</td>\n' + '</tr>\n' + '</table>\n' + '<table border="0">\n' + '<tr>\n' + '<td>اگر آپ کا مطلوبہ اجازت نامہ موجود نہ ہو تو ذیل میں موجود "اجازت نامہ" کی فہرست میں تلاش کریں</td>\n' + '</tr>\n' + '</table>\n' + '</fieldset>';
}
 
function License(LType) {
    document.getElementById("wpUploadDescription").value = LType;
    switch (LType) {
    case General:
        document.getElementById("wpLicense").value = "";
        break;
    case Logo:
        document.getElementById("wpLicense").value = "لوگو";
        break;
    case VideoGame:
        document.getElementById("wpLicense").value = "غلاف کھیل";
        break;
    case Poster:
        document.getElementById("wpLicense").value = "پوسٹر";
        break;
    case AlbumCover:
        document.getElementById("wpLicense").value = "غلاف البم";
        break;
    case MyWork:
        document.getElementById("wpLicense").value = "PD-self";
        break;
    case BookCover:
        document.getElementById("wpLicense").value = "کتاب کا سرورق/گردپوش";
        break;
    case TVShow:
        document.getElementById("wpLicense").value = "ٹی وی سکرین شاٹ";
        break;
    case Film:
        document.getElementById("wpLicense").value = "فلم سکرین شاٹ";
        break;
    case Software:
        document.getElementById("wpLicense").value = "پروگرام کا سکرین شاٹ";
        break;
    case DVD:
        document.getElementById("wpLicense").value = "ڈی وی ڈی کا غلاف";
        break;
    case Game:
        document.getElementById("wpLicense").value = "لوڈو کھیل کا غلاف";
        break;
    }
}
//</nowiki>