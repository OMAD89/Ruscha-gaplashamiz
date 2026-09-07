// Gaplashamiz — kundalik rus tilini noldan o'rganish, 15 dars
const LESSONS = [
{
  id:1, level:"A1", displayNum:1,
  title:"Rus alifbosi va talaffuz",
  topic:"33 harf, tovushlar, urg'u qoidasi",
  alphabet:{
    title:"Rus alifbosi (33 harf)",
    letters:[
      {l:"А а", s:"a"},{l:"Б б", s:"b"},{l:"В в", s:"v"},{l:"Г г", s:"g"},
      {l:"Д д", s:"d"},{l:"Е е", s:"ye"},{l:"Ё ё", s:"yo"},{l:"Ж ж", s:"j (yumshoq)"},
      {l:"З з", s:"z"},{l:"И и", s:"i"},{l:"Й й", s:"y (qisqa)"},{l:"К к", s:"k"},
      {l:"Л л", s:"l"},{l:"М м", s:"m"},{l:"Н н", s:"n"},{l:"О о", s:"o"},
      {l:"П п", s:"p"},{l:"Р р", s:"r"},{l:"С с", s:"s"},{l:"Т т", s:"t"},
      {l:"У у", s:"u"},{l:"Ф ф", s:"f"},{l:"Х х", s:"x"},{l:"Ц ц", s:"ts"},
      {l:"Ч ч", s:"ch"},{l:"Ш ш", s:"sh"},{l:"Щ щ", s:"shch"},{l:"Ъ ъ", s:"qattiq belgi"},
      {l:"Ы ы", s:"orqa i"},{l:"Ь ь", s:"yumshoq belgi"},{l:"Э э", s:"e"},{l:"Ю ю", s:"yu"},
      {l:"Я я", s:"ya"},
    ]
  },
  rules:[
    {h:"Unli va undosh harflar", t:"Rus tilida 10 ta unli (а,е,ё,и,о,у,ы,э,ю,я) va 21 ta undosh harf bor. Ba'zi harflar o'zbek tilidagi tovushlarga juda o'xshaydi, ba'zilari esa yangi.", ex:"мама — 'mama' (o'zbekchadagi kabi talaffuz qilinadi)"},
    {h:"Urg'u (ударение) qoidasi", t:"Rus tilida urg'u so'zning istalgan bo'g'inida bo'lishi mumkin va u yozuvda ko'rsatilmaydi — shuning uchun har bir yangi so'zning urg'usini lug'atdan o'rganish kerak.", ex:"молоко — malaKO (urg'u oxirgi bo'g'inda)"},
    {h:"Ъ va Ь — maxsus belgilar", t:"Bu ikki harf tovush bildirmaydi. «Ь» oldingi undoshni yumshatadi, «Ъ» esa undosh va unli orasida qattiq bo'linish yaratadi.", ex:"мать (ona) — oxiri yumshoq talaffuz qilinadi"},
    {h:"Е, Ё, Ю, Я — qo'sh tovushli harflar", t:"Bu harflar so'z boshida yoki unlidan keyin kelganda ikkita tovush beradi: е=ye, ё=yo, ю=yu, я=ya.", ex:"я — YA (men), моё — maYO (mening)"},
  ],
  exercises:[
    {type:"choice", q:"«Ё» harfi qanday talaffuz qilinadi?", options:["yo","o"], answer:"yo"},
    {type:"fill", q:"«Мама» so'zini talaffuz bo'yicha yozing (lotin harflarida)", answer:"mama"},
    {type:"choice", q:"Rus alifbosida nechta harf bor?", options:["33","28"], answer:"33"},
    {type:"choice", q:"«Ь» harfi qanday vazifani bajaradi?", options:["Oldingi undoshni yumshatadi","Tovush chiqaradi"], answer:"Oldingi undoshni yumshatadi"},
  ],
  dialogue:{
    title:"Birinchi so'zlar",
    lines:[
      {who:"A", side:"left", ru:"Мама", tr:"mama", uz:"ona"},
      {who:"B", side:"right", ru:"Папа", tr:"papa", uz:"ota"},
      {who:"A", side:"left", ru:"Дом", tr:"dom", uz:"uy"},
      {who:"B", side:"right", ru:"Вода", tr:"vaDA", uz:"suv"},
      {who:"A", side:"left", ru:"Хлеб", tr:"xlyeb", uz:"non"},
    ]
  },
  reading:{
    title:"Rus alifbosi haqida qisqacha",
    ru:"Русский алфавит состоит из 33 букв и основан на кириллице. Это письмо было создано более тысячи лет назад и используется во многих славянских языках.\n\nМногие буквы похожи на латинские, но произносятся по-другому. Например, буква «Р» выглядит как латинская «P», но читается как «р». А буква «В» выглядит как латинская «B», но читается как «в».\n\nОсвоив алфавит, вы сможете читать любые слова на русском языке, даже если сначала не будете понимать их значение. Это первый и самый важный шаг в изучении языка.",
    uz:"Rus alifbosi 33 harfdan iborat va kirill yozuviga asoslangan. Bu yozuv mingdan ortiq yil oldin yaratilgan va ko'plab slavyan tillarida qo'llaniladi.\n\nKo'p harflar lotin harflariga o'xshaydi, lekin boshqacha talaffuz qilinadi. Masalan, «Р» harfi lotincha «P» ga o'xshaydi, lekin «r» deb o'qiladi. «В» harfi esa lotincha «B» ga o'xshaydi, lekin «v» deb o'qiladi.\n\nAlifboni o'zlashtirgach, ma'nosini dastlab tushunmasangiz ham, rus tilidagi istalgan so'zni o'qiy olasiz. Bu tilni o'rganishdagi birinchi va eng muhim qadamdir."
  },
  vocab:[
    {ru:"алфавит", tr:"alfavit", uz:"alifbo"},
    {ru:"буква", tr:"bukva", uz:"harf"},
    {ru:"звук", tr:"zvuk", uz:"tovush"},
    {ru:"слово", tr:"slovo", uz:"so'z"},
    {ru:"читать", tr:"chitat", uz:"o'qimoq"},
    {ru:"писать", tr:"pisat", uz:"yozmoq"},
    {ru:"мама / папа", tr:"mama / papa", uz:"ona / ota"},
    {ru:"дом", tr:"dom", uz:"uy"},
    {ru:"вода", tr:"vada", uz:"suv"},
    {ru:"хлеб", tr:"xlyeb", uz:"non"},
  ]
},
{
  id:2, level:"A1", displayNum:2,
  title:"Salomlashish va tanishuv",
  topic:"Assalomu alaykum, ismingiz nima, xayr",
  rules:[
    {h:"Kun vaqtiga qarab salomlashish", t:"Rus tilida kun vaqtiga qarab turli salomlashish iboralari ishlatiladi: ertalab «Доброе утро», kunduzi «Добрый день», kechqurun «Добрый вечер».", ex:"Доброе утро! — Xayrli tong!"},
    {h:"«Здравствуйте» va «Привет»", t:"«Здравствуйте» — rasmiy, kattalarga yoki notanish odamlarga. «Привет» — norasmiy, do'stlarga.", ex:"Здравствуйте! (rasmiy) / Привет! (norasmiy)"},
    {h:"Ism so'rash", t:"«Как тебя зовут?» (senga — norasmiy) yoki «Как вас зовут?» (sizga — rasmiy) — ismingiz nima, deb so'raladi.", ex:"Как тебя зовут? — Меня зовут Али."},
    {h:"Xayrlashish", t:"«До свидания» — rasmiy xayrlashish, «Пока» — norasmiy, do'stona xayrlashish.", ex:"До свидания! / Пока!"},
  ],
  exercises:[
    {type:"choice", q:"Ertalabki salomlashish:", options:["Доброе утро","Добрый вечер"], answer:"Доброе утро"},
    {type:"fill", q:"«Как тебя ___?» — ismingiz nima? (zovut so'zi)", answer:"зовут"},
    {type:"choice", q:"Norasmiy xayrlashish:", options:["Пока","До свидания"], answer:"Пока"},
    {type:"fill", q:"«Меня ___ Алишер.» — Mening ismim Alisher. (zovut so'zi)", answer:"зовут"},
  ],
  dialogue:{
    title:"Ko'chada tanishuv",
    lines:[
      {who:"A", side:"left", ru:"Привет! Как тебя зовут?", tr:"privyet! kak tebya zavut?", uz:"Salom! Ismingiz nima?"},
      {who:"B", side:"right", ru:"Привет! Меня зовут Малика. А тебя?", tr:"privyet! menya zavut malika. a tebya?", uz:"Salom! Mening ismim Malika. Sizniki-chi?"},
      {who:"A", side:"left", ru:"Меня зовут Бекзод. Очень приятно!", tr:"menya zavut bekzod. ochen priyatna!", uz:"Mening ismim Bekzod. Juda xursandman!"},
      {who:"B", side:"right", ru:"Мне тоже приятно! Как дела?", tr:"mnye tozhe priyatna! kak dyela?", uz:"Menga ham xursand! Ishlaringiz qalay?"},
      {who:"A", side:"left", ru:"Хорошо, спасибо! А у тебя?", tr:"xarasho, spasiba! a u tebya?", uz:"Yaxshi, rahmat! Sizniki-chi?"},
      {who:"B", side:"right", ru:"Тоже хорошо. Ну, пока!", tr:"tozhe xarasho. nu, paka!", uz:"Yaxshi. Xo'sh, xayr!"},
    ]
  },
  reading:{
    title:"Rus tilida salomlashish odob-axloqi",
    ru:"Приветствие — это первое, с чего начинается любой разговор. В русском языке важно учитывать, с кем вы разговариваете: со старшими и незнакомыми людьми принято быть вежливым и использовать формальные фразы.\n\nСлово «привет» используется только с ровесниками, друзьями или детьми. Если вы разговариваете с учителем, начальником или пожилым человеком, лучше сказать «здравствуйте».\n\nПосле приветствия часто спрашивают «Как дела?» — это обычный вежливый вопрос, на который не обязательно давать длинный ответ. Достаточно сказать «Хорошо, спасибо» и продолжить разговор.",
    uz:"Salomlashish — har qanday suhbatning boshlanishi. Rus tilida kim bilan gaplashayotganingizni hisobga olish muhim: kattalar va notanish odamlar bilan xushmuomala bo'lish va rasmiy iboralardan foydalanish odat tusiga kirgan.\n\n«Привет» so'zi faqat tengdoshlar, do'stlar yoki bolalar bilan ishlatiladi. Agar o'qituvchi, rahbar yoki keksa odam bilan gaplashayotgan bo'lsangiz, «здравствуйте» deyish yaxshiroq.\n\nSalomlashgandan so'ng ko'pincha «Ishlaringiz qalay?» deb so'rashadi — bu oddiy xushmuomalalik savoli bo'lib, unga uzun javob berish shart emas. «Yaxshi, rahmat» deyish va suhbatni davom ettirish yetarli."
  },
  vocab:[
    {ru:"здравствуйте", tr:"zdrastvuyte", uz:"assalomu alaykum (rasmiy)"},
    {ru:"привет", tr:"privyet", uz:"salom"},
    {ru:"доброе утро", tr:"dobroye utro", uz:"xayrli tong"},
    {ru:"добрый день", tr:"dobriy dyen", uz:"xayrli kun"},
    {ru:"добрый вечер", tr:"dobriy vyecher", uz:"xayrli kech"},
    {ru:"как дела?", tr:"kak dyela?", uz:"ishlar qalay?"},
    {ru:"меня зовут", tr:"menya zavut", uz:"mening ismim"},
    {ru:"очень приятно", tr:"ochen priyatna", uz:"juda xursandman"},
    {ru:"до свидания", tr:"da svidaniya", uz:"xayr (rasmiy)"},
    {ru:"пока", tr:"paka", uz:"xayr (norasmiy)"},
  ]
},
{
  id:3, level:"A1", displayNum:3,
  title:"Sonlar va narxlar",
  topic:"1 dan 100 gacha sonlar, narx so'rash",
  rules:[
    {h:"1 dan 10 gacha sonlar", t:"один, два, три, четыре, пять, шесть, семь, восемь, девять, десять — bu sonlarni yod olish barcha sanash uchun asos bo'ladi.", ex:"один, два, три — bir, ikki, uch"},
    {h:"11 dan 20 gacha sonlar", t:"11-19 sonlar «-надцать» qo'shimchasi bilan yasaladi: одиннадцать (11), двенадцать (12) va h.k. 20 — двадцать.", ex:"пятнадцать — 15 (besh+o'n)"},
    {h:"O'nliklar (20, 30, 40...)", t:"двадцать (20), тридцать (30), сорок (40), пятьдесят (50) — bu so'zlarni alohida yodlash kerak, chunki qoidasi bir xil emas.", ex:"сорок — 40 (istisno so'z)"},
    {h:"Narx so'rash", t:"«Сколько это стоит?» — bu qancha turadi? Javobda son + so'm/rubl aytiladi.", ex:"Сколько это стоит? — Это стоит триста рублей."},
  ],
  exercises:[
    {type:"fill", q:"«5» soni rus tilida qanday yoziladi? (пять)", answer:"пять"},
    {type:"choice", q:"«20» soni:", options:["двадцать","десять"], answer:"двадцать"},
    {type:"choice", q:"Narx so'rash iborasi:", options:["Сколько это стоит?","Что это такое?"], answer:"Сколько это стоит?"},
    {type:"fill", q:"«40» soni istisno so'z — u qanday yoziladi? (сорок)", answer:"сорок"},
  ],
  dialogue:{
    title:"Bozorda narx so'rash",
    lines:[
      {who:"Покупатель", side:"right", ru:"Здравствуйте! Сколько стоят эти яблоки?", tr:"zdrastvuyte! skolka stoyat eti yabloki?", uz:"Assalomu alaykum! Bu olmalar qancha turadi?"},
      {who:"Продавец", side:"left", ru:"Десять тысяч сум за килограмм.", tr:"dyesyat tysyach sum za kilagram", uz:"Kilosi o'n ming so'm."},
      {who:"Покупатель", side:"right", ru:"Хорошо, дайте, пожалуйста, два килограмма.", tr:"xarasho, dayte, pazhalusta, dva kilagrama", uz:"Yaxshi, ikki kilogramm bering, iltimos."},
      {who:"Продавец", side:"left", ru:"Пожалуйста. С вас двадцать тысяч сум.", tr:"pazhalusta. s vas dvatsat tysyach sum", uz:"Marhamat. Sizdan yigirma ming so'm."},
      {who:"Покупатель", side:"right", ru:"Вот, возьмите. Спасибо большое!", tr:"vot, vazmitye. spasiba bal'shoye!", uz:"Mana, oling. Katta rahmat!"},
    ]
  },
  reading:{
    title:"Sonlarni kundalik hayotda qo'llash",
    ru:"Числа окружают нас повсюду: в магазине, на транспорте, при разговоре о времени. Освоив числа от одного до ста, вы сможете уверенно называть цены, номера телефонов и адреса.\n\nВ русском языке числа от 11 до 19 образуются добавлением суффикса «-надцать»: например, «тринадцать» — это «три» плюс «-надцать». А вот десятки — двадцать, тридцать, сорок — нужно запомнить отдельно, так как у них нет единого правила образования.\n\nПри покупках в магазине часто используется фраза «Сколько это стоит?». Полезно также знать слово «сдача» — деньги, которые продавец возвращает, если вы дали больше, чем нужно.",
    uz:"Sonlar bizni har yerda o'rab turadi: do'konda, transportda, vaqt haqida gaplashganda. Birdan yuzgacha sonlarni o'zlashtirgach, narxlarni, telefon raqamlarini va manzillarni ishonch bilan ayta olasiz.\n\nRus tilida 11 dan 19 gacha sonlar «-надцать» qo'shimchasini qo'shish orqali yasaladi: masalan, «тринадцать» — bu «три» (uch) va «-надцать» ning qo'shilishi. O'nliklar esa — yigirma, o'ttiz, qirq — alohida yodlanishi kerak, chunki ularning yagona yasalish qoidasi yo'q.\n\nDo'konda xarid qilishda ko'pincha «Bu qancha turadi?» iborasi ishlatiladi. «Сдача» (qaytim) so'zini bilish ham foydali — bu kerakligidan ko'proq pul bergan bo'lsangiz, sotuvchi qaytarib beradigan pul."
  },
  vocab:[
    {ru:"один, два, три", tr:"adin, dva, tri", uz:"bir, ikki, uch"},
    {ru:"десять", tr:"dyesyat", uz:"o'n"},
    {ru:"двадцать", tr:"dvatsat", uz:"yigirma"},
    {ru:"сто", tr:"sto", uz:"yuz"},
    {ru:"сколько стоит?", tr:"skolka stoit?", uz:"qancha turadi?"},
    {ru:"деньги", tr:"dengi", uz:"pul"},
    {ru:"сдача", tr:"sdacha", uz:"qaytim"},
    {ru:"дорого / дёшево", tr:"doraga / dyoshevo", uz:"qimmat / arzon"},
    {ru:"килограмм", tr:"kilagram", uz:"kilogramm"},
    {ru:"магазин", tr:"magazin", uz:"do'kon"},
  ]
},
{
  id:4, level:"A1", displayNum:4,
  title:"Oila va yaqinlar",
  topic:"Oila a'zolari, egalik olmoshlari",
  rules:[
    {h:"Oila a'zolari nomlari", t:"мама, папа, брат, сестра, бабушка, дедушка — oilaviy so'zlar suhbatning eng ko'p ishlatiladigan qismlaridan biri.", ex:"Это моя семья: мама, папа и брат."},
    {h:"Egalik olmoshlari (мой/моя/моё)", t:"Rus tilida egalik olmoshi otning jinsiga qarab o'zgaradi: erkak jinsi — мой, ayol jinsi — моя, o'rta jins — моё.", ex:"мой брат (aka/uka), моя сестра (opa/singil), моё имя (mening ismim)"},
    {h:"«У меня есть» — menda bor", t:"Biror narsaga egalikni bildirish uchun «У меня есть...» qurilmasi ishlatiladi, «иметь» fe'li kundalik nutqda kam ishlatiladi.", ex:"У меня есть старший брат. — Mening akam bor."},
    {h:"Yosh so'rash", t:"«Сколько тебе лет?» — necha yoshdasiz, deb so'rash. Javob: «Мне ... лет/года».", ex:"Мне двадцать пять лет. — Men yigirma besh yoshdaman."},
  ],
  exercises:[
    {type:"choice", q:"«Aka/uka» rus tilida:", options:["брат","сестра"], answer:"брат"},
    {type:"fill", q:"«Это ___ сестра.» — bu mening opam. (moya so'zi)", answer:"моя"},
    {type:"choice", q:"«Menda bor» iborasi:", options:["У меня есть","Я имею"], answer:"У меня есть"},
    {type:"fill", q:"«Сколько тебе ___?» — necha yoshdasiz? (lyet so'zi)", answer:"лет"},
  ],
  dialogue:{
    title:"Oila haqida suhbat",
    lines:[
      {who:"A", side:"left", ru:"Расскажи о своей семье. У тебя есть братья или сёстры?", tr:"raskazhi a svayey semye. u tebya yest bratya ili syostry?", uz:"Oilangiz haqida gapirib bering. Aka-uka yoki opa-singilingiz bormi?"},
      {who:"B", side:"right", ru:"Да, у меня есть старшая сестра и младший брат.", tr:"da, u menya yest starshaya sestra i mladshiy brat", uz:"Ha, mening katta opam va kichik ukam bor."},
      {who:"A", side:"left", ru:"А сколько лет твоей сестре?", tr:"a skolka lyet tvoyey sestrye?", uz:"Opangiz necha yoshda?"},
      {who:"B", side:"right", ru:"Ей двадцать восемь лет. А брату пятнадцать.", tr:"yey dvatsat vosyem lyet. a bratu pyatnatsat", uz:"U yigirma sakkiz yoshda. Ukam esa o'n besh yoshda."},
      {who:"A", side:"left", ru:"А твои родители где работают?", tr:"a tvai raditeli gdye rabotayut?", uz:"Ota-onangiz qayerda ishlaydi?"},
      {who:"B", side:"right", ru:"Папа — инженер, а мама — врач.", tr:"papa inzhenyer, a mama vrach", uz:"Otam — muhandis, onam esa — shifokor."},
    ]
  },
  reading:{
    title:"Rus tilida oila haqida gapirish",
    ru:"Семья — одна из самых важных тем в любом языке, потому что о ней мы говорим постоянно. В русском языке важно правильно использовать притяжательные местоимения — мой, моя, моё — в зависимости от рода существительного.\n\nПри разговоре о возрасте членов семьи используется конструкция «Мне (ей, ему) ... лет». Слово «лет» используется после чисел, которые оканчиваются на 5-20, а «года» — после чисел на 2, 3, 4.\n\nВ русской культуре принято интересоваться семьёй собеседника при знакомстве — это считается проявлением вежливости и искреннего интереса к человеку.",
    uz:"Oila — istalgan tildagi eng muhim mavzulardan biri, chunki biz u haqda doimo gapiramiz. Rus tilida otning jinsiga qarab egalik olmoshlarini — мой, моя, моё — to'g'ri qo'llash muhim.\n\nOila a'zolarining yoshi haqida gapirishda «Мне (ей, ему) ... лет» qurilmasi ishlatiladi. «Лет» so'zi 5-20 bilan tugaydigan sonlardan keyin, «года» esa 2, 3, 4 bilan tugaydigan sonlardan keyin ishlatiladi.\n\nRus madaniyatida tanishuvda suhbatdoshning oilasi bilan qiziqish odat tusiga kirgan — bu xushmuomalalik va insonga samimiy qiziqish ko'rsatish belgisi hisoblanadi."
  },
  vocab:[
    {ru:"семья", tr:"semya", uz:"oila"},
    {ru:"мама / папа", tr:"mama / papa", uz:"ona / ota"},
    {ru:"брат / сестра", tr:"brat / sestra", uz:"aka-uka / opa-singil"},
    {ru:"бабушка / дедушка", tr:"babushka / dedushka", uz:"buvi / bobo"},
    {ru:"сын / дочь", tr:"syn / doch", uz:"o'g'il / qiz"},
    {ru:"муж / жена", tr:"muzh / zhena", uz:"er / xotin"},
    {ru:"родители", tr:"raditeli", uz:"ota-ona"},
    {ru:"старший / младший", tr:"starshiy / mladshiy", uz:"katta / kichik"},
    {ru:"сколько тебе лет?", tr:"skolka tebye lyet?", uz:"necha yoshdasiz?"},
    {ru:"работать", tr:"rabotat", uz:"ishlamoq"},
  ]
},
{
  id:5, level:"A1", displayNum:5,
  title:"Kunlar, oylar va vaqt",
  topic:"Hafta kunlari, oylar, soat aytish",
  rules:[
    {h:"Hafta kunlari", t:"понедельник, вторник, среда, четверг, пятница, суббота, воскресенье — hafta kunlari kichik harf bilan yoziladi (o'zbek tilidan farqli).", ex:"Сегодня понедельник. — Bugun dushanba."},
    {h:"Oylar nomlari", t:"январь, февраль, март... — barcha oy nomlari lotincha ildizlarga o'xshaydi, shuning uchun eslab qolish nisbatan oson.", ex:"Мой день рождения в мае. — Tug'ilgan kunim mayda."},
    {h:"Soat so'rash va aytish", t:"«Который час?» — soat necha? Javob: «Сейчас три часа» (soat uch) kabi.", ex:"Который час? — Сейчас пять часов вечера."},
    {h:"Vaqt bildiruvchi so'zlar", t:"сегодня (bugun), завтра (ertaga), вчера (kecha) — kundalik rejalashuvda eng ko'p ishlatiladigan so'zlar.", ex:"Завтра я иду на работу. — Ertaga men ishga boraman."},
  ],
  exercises:[
    {type:"choice", q:"«Dushanba» rus tilida:", options:["понедельник","воскресенье"], answer:"понедельник"},
    {type:"fill", q:"«Который ___?» — soat necha? (chas so'zi)", answer:"час"},
    {type:"choice", q:"«Ertaga» so'zi:", options:["завтра","вчера"], answer:"завтра"},
    {type:"fill", q:"«Сегодня ___.» — bugun dushanba. (ponedelnik so'zi)", answer:"понедельник"},
  ],
  dialogue:{
    title:"Uchrashuvni rejalashtirish",
    lines:[
      {who:"A", side:"left", ru:"Какой сегодня день недели?", tr:"kakoy sevodnya dyen nedyeli?", uz:"Bugun hafta kuni qaysi?"},
      {who:"B", side:"right", ru:"Сегодня среда. А что?", tr:"sevodnya sreda. a shto?", uz:"Bugun chorshanba. Nega?"},
      {who:"A", side:"left", ru:"Хочу встретиться с тобой в пятницу. Ты свободен?", tr:"xachu vstretitsya s taboy v pyatnitsu. ty svaboden?", uz:"Sen bilan jumada uchrashmoqchiman. Bo'shmisan?"},
      {who:"B", side:"right", ru:"Да, свободен. В котором часу?", tr:"da, svaboden. v katorom chasu?", uz:"Ha, bo'shman. Soat nechada?"},
      {who:"A", side:"left", ru:"Давай в шесть часов вечера.", tr:"davay v shest chasov vyechera", uz:"Kelishuv, kechqurun soat oltida."},
      {who:"B", side:"right", ru:"Хорошо, договорились!", tr:"xarasho, dogovorilis!", uz:"Yaxshi, kelishdik!"},
    ]
  },
  reading:{
    title:"Vaqt haqida rus tilida gapirish",
    ru:"Умение говорить о времени — одна из базовых, но очень полезных тем. Дни недели в русском языке пишутся с маленькой буквы, в отличие от многих других языков, где они пишутся с заглавной.\n\nПри назывании времени часто используется 24-часовой формат в официальной речи, но в повседневном разговоре обычно говорят «утра», «дня», «вечера» или «ночи» после числа часов.\n\nСлова «сегодня», «завтра» и «вчера» одни из самых часто используемых в повседневной речи — с их помощью можно легко строить планы и договариваться о встречах.",
    uz:"Vaqt haqida gapira olish — asosiy, lekin juda foydali mavzulardan biri. Rus tilida hafta kunlari kichik harf bilan yoziladi, boshqa ko'plab tillardan farqli o'laroq, u yerda ular bosh harf bilan yoziladi.\n\nVaqtni aytishda rasmiy nutqda ko'pincha 24 soatlik format ishlatiladi, lekin kundalik suhbatda odatda soat sonidan keyin «утра» (tong), «дня» (kunduzi), «вечера» (kechqurun) yoki «ночи» (tunda) so'zlari qo'shiladi.\n\n«Сегодня» (bugun), «завтра» (ertaga) va «вчера» (kecha) so'zlari kundalik nutqda eng ko'p ishlatiladigan so'zlardan biri — ular yordamida rejalar tuzish va uchrashuvlar haqida kelishish oson bo'ladi."
  },
  vocab:[
    {ru:"понедельник", tr:"ponedelnik", uz:"dushanba"},
    {ru:"пятница", tr:"pyatnitsa", uz:"juma"},
    {ru:"воскресенье", tr:"voskresenye", uz:"yakshanba"},
    {ru:"январь", tr:"yanvar", uz:"yanvar"},
    {ru:"который час?", tr:"katoriy chas?", uz:"soat necha?"},
    {ru:"сегодня", tr:"sevodnya", uz:"bugun"},
    {ru:"завтра", tr:"zavtra", uz:"ertaga"},
    {ru:"вчера", tr:"vchera", uz:"kecha"},
    {ru:"утро / день / вечер / ночь", tr:"utro / dyen / vyecher / noch", uz:"tong / kun / kech / tun"},
    {ru:"встретиться", tr:"vstretitsya", uz:"uchrashmoq"},
  ]
},
{
  id:6, level:"A1", displayNum:6,
  title:"Ranglar va tasvirlash",
  topic:"Ranglar, sifatlar, narsalarni ta'riflash",
  rules:[
    {h:"Asosiy ranglar", t:"красный, синий, жёлтый, зелёный, чёрный, белый — ranglar ham otning jinsiga qarab oxiri o'zgaradi.", ex:"красный дом (uy — erkak jinsi), красная машина (mashina — ayol jinsi)"},
    {h:"Sifatlarning jinsga moslashuvi", t:"Sifatlar otning jinsiga mos kelishi kerak: erkak jinsida -ый/-ий, ayol jinsida -ая/-яя, o'rta jinsda -ое/-ее.", ex:"большой дом, большая книга, большое окно"},
    {h:"Taqqoslash: qanday?", t:"«Какой/какая/какое ...?» — qanday? so'rog'i narsani tasvirlashni so'raganda ishlatiladi.", ex:"Какая это машина? — Это красная машина."},
    {h:"Ko'p ishlatiladigan sifatlar", t:"большой/маленький (katta/kichik), новый/старый (yangi/eski), красивый (chiroyli) — tasvirlashda eng foydali so'zlar.", ex:"Это красивый и большой дом."},
  ],
  exercises:[
    {type:"choice", q:"«Qizil» rus tilida:", options:["красный","синий"], answer:"красный"},
    {type:"fill", q:"«Большой ___.» — katta uy (erkak jinsi, dom so'zi)", answer:"дом"},
    {type:"choice", q:"«Chiroyli» so'zi:", options:["красивый","дорогой"], answer:"красивый"},
    {type:"fill", q:"«Какая это ___?» — bu qanday mashina? (mashina so'zi)", answer:"машина"},
  ],
  dialogue:{
    title:"Yangi kiyim haqida",
    lines:[
      {who:"A", side:"left", ru:"Какого цвета твоя новая куртка?", tr:"kakova tsveta tvaya novaya kurtka?", uz:"Yangi kurtkangiz qanday rangda?"},
      {who:"B", side:"right", ru:"Она синяя, с чёрными пуговицами.", tr:"ana sinyaya, s chornymi pugavitsami", uz:"U ko'k rangda, qora tugmalar bilan."},
      {who:"A", side:"left", ru:"Красиво! А где ты её купил?", tr:"krasiva! a gdye ty yeyo kupil?", uz:"Chiroyli ekan! Uni qayerdan sotib oldingiz?"},
      {who:"B", side:"right", ru:"В большом магазине в центре города.", tr:"v balshom magazinye v tsentre goroda", uz:"Shahar markazidagi katta do'kondan."},
      {who:"A", side:"left", ru:"Она дорогая была?", tr:"ana daragaya byla?", uz:"U qimmat bo'ldimi?"},
      {who:"B", side:"right", ru:"Нет, не очень. Цена была хорошая.", tr:"nyet, ne ochen. tsena byla xaroshaya", uz:"Yo'q, unchalik emas. Narxi yaxshi edi."},
    ]
  },
  reading:{
    title:"Ranglar va sifatlarni to'g'ri qo'llash",
    ru:"Прилагательные в русском языке — как цвета, размер, качество — изменяются в зависимости от рода существительного, к которому они относятся. Это одна из особенностей, которую важно запомнить при изучении языка.\n\nНапример, слово «красивый» превращается в «красивая» перед словом женского рода и в «красивое» перед словом среднего рода. Это правило действует практически для всех прилагательных.\n\nПри описании предметов полезно комбинировать несколько прилагательных: цвет, размер, качество. Например: «Это маленький, но очень красивый дом» — такое описание звучит естественно и информативно.",
    uz:"Rus tilidagi sifatlar — rang, o'lcham, sifat kabi — ular tegishli bo'lgan otning jinsiga qarab o'zgaradi. Bu tilni o'rganishda eslab qolish muhim bo'lgan xususiyatlardan biri.\n\nMasalan, «красивый» (chiroyli) so'zi ayol jinsidagi so'zdan oldin «красивая» ga, o'rta jinsdagi so'zdan oldin esa «красивое» ga aylanadi. Bu qoida deyarli barcha sifatlar uchun amal qiladi.\n\nNarsalarni tasvirlashda bir nechta sifatni birlashtirib ishlatish foydali: rang, o'lcham, sifat. Masalan: «Bu kichik, lekin juda chiroyli uy» — bunday tasvir tabiiy va ma'lumotli eshitiladi."
  },
  vocab:[
    {ru:"красный / синий / жёлтый", tr:"krasniy / siniy / zholtiy", uz:"qizil / ko'k / sariq"},
    {ru:"зелёный / чёрный / белый", tr:"zelyoniy / chorniy / beliy", uz:"yashil / qora / oq"},
    {ru:"большой / маленький", tr:"balshoy / malenkiy", uz:"katta / kichik"},
    {ru:"новый / старый", tr:"noviy / stariy", uz:"yangi / eski"},
    {ru:"красивый", tr:"krasiviy", uz:"chiroyli"},
    {ru:"какой цвет?", tr:"kakoy tsvet?", uz:"qanday rang?"},
    {ru:"дорогой / дешёвый", tr:"daragoy / deshoviy", uz:"qimmat / arzon"},
    {ru:"куртка", tr:"kurtka", uz:"kurtka"},
    {ru:"цена", tr:"tsena", uz:"narx"},
    {ru:"качество", tr:"kachestvo", uz:"sifat"},
  ]
},
{
  id:7, level:"A1", displayNum:7,
  title:"Ovqat va restoranda",
  topic:"Taomlar, buyurtma berish, restoranda muloqot",
  rules:[
    {h:"Ovqat nomlari", t:"суп, мясо, рис, овощи, фрукты — asosiy ovqat toifalari. Milliy taomlar nomi ko'pincha o'zgarmasdan ishlatiladi.", ex:"Я люблю плов и суп. — Men palov va sho'rvani yaxshi ko'raman."},
    {h:"Buyurtma berish", t:"«Я хочу заказать...» yoki «Можно мне...» — restoranda buyurtma berishning ikki keng tarqalgan usuli.", ex:"Можно мне чай и лепёшку, пожalusta."},
    {h:"Ochlik va tashnalikni bildirish", t:"«Я хочу есть» (ochman) va «Я хочу пить» (chanqadim) — asosiy his-tuyg'ularni bildiruvchi iboralar.", ex:"Я очень хочу есть, пойдём в кафе."},
    {h:"Hisob-kitob so'rash", t:"«Можно счёт, пожалуйста?» — hisobni olib kelishni so'rash, restoranda oxirgi bosqich.", ex:"Можно счёт, пожалуйста? Спасибо за обед."},
  ],
  exercises:[
    {type:"choice", q:"«Men buyurtma qilmoqchiman»:", options:["Я хочу заказать","Я хочу спать"], answer:"Я хочу заказать"},
    {type:"fill", q:"«Можно мне ___, пожалуйста?» — choy so'rash (chay so'zi)", answer:"чай"},
    {type:"choice", q:"Hisob so'rash:", options:["Можно счёт, пожалуйста?","Где здесь туалет?"], answer:"Можно счёт, пожалуйста?"},
    {type:"fill", q:"«Я хочу ___.» — ochman. (yest so'zi)", answer:"есть"},
  ],
  dialogue:{
    title:"Kafeda buyurtma berish",
    lines:[
      {who:"Официант", side:"left", ru:"Здравствуйте! Что вы хотите заказать?", tr:"zdrastvuyte! shto vy xatitye zakazat?", uz:"Assalomu alaykum! Nima buyurtma qilmoqchisiz?"},
      {who:"Вы", side:"right", ru:"Здравствуйте! Можно мне суп и салат, пожалуйста.", tr:"zdrastvuyte! mozhna mnye sup i salat, pazhalusta", uz:"Assalomu alaykum! Menga sho'rva va salat bering, iltimos."},
      {who:"Официант", side:"left", ru:"Хорошо. А что будете пить?", tr:"xarasho. a shto budyete pit?", uz:"Yaxshi. Nima ichasiz?"},
      {who:"Вы", side:"right", ru:"Один чай, пожалуйста, без сахара.", tr:"adin chay, pazhalusta, byez saxara", uz:"Bir choy, iltimos, shakarsiz."},
      {who:"Официант", side:"left", ru:"Хорошо, сейчас принесу.", tr:"xarasho, seychas prinesu", uz:"Yaxshi, hozir olib kelaman."},
      {who:"Вы", side:"right", ru:"Спасибо! И можно счёт, когда будет готово.", tr:"spasiba! i mozhna schot, kagda budyet gotova", uz:"Rahmat! Va tayyor bo'lganda hisobni bering."},
    ]
  },
  reading:{
    title:"Restoranda o'zini tutish qoidalari",
    ru:"Посещение ресторана или кафе — отличная возможность практиковать разговорный русский язык в реальной ситуации. Официанты обычно вежливы и терпеливы к тем, кто изучает язык.\n\nПри заказе полезно использовать вежливые конструкции: «Можно мне...» звучит более естественно, чем прямое «Дайте мне...». Также принято говорить «пожалуйста» и «спасибо» на каждом этапе общения.\n\nЕсли вы не понимаете меню, можно смело спросить: «Что вы порекомендуете?» — официанты обычно с удовольствием советуют популярные блюда заведения.",
    uz:"Restoran yoki kafega borish — jonli vaziyatda so'zlashuv rus tilini mashq qilish uchun ajoyib imkoniyat. Ofitsiantlar odatda tilni o'rganayotganlarga nisbatan xushmuomala va sabrli bo'lishadi.\n\nBuyurtma berishda muloyim qurilmalardan foydalanish foydali: «Можно мне...» to'g'ridan-to'g'ri «Дайте мне...» dan ko'ra tabiiyroq eshitiladi. Shuningdek, muloqotning har bir bosqichida «пожалуйста» (iltimos) va «спасибо» (rahmat) deyish odat tusiga kirgan.\n\nAgar menyuni tushunmasangiz, dadil so'rashingiz mumkin: «Что вы порекомендуете?» (nimani tavsiya qilasiz?) — ofitsiantlar odatda muassasaning mashhur taomlarini xursandchilik bilan maslahat berishadi."
  },
  vocab:[
    {ru:"суп / мясо / рис", tr:"sup / myasa / ris", uz:"sho'rva / go'sht / guruch"},
    {ru:"овощи / фрукты", tr:"ovoshi / frukty", uz:"sabzavot / meva"},
    {ru:"я хочу есть/пить", tr:"ya xachu yest/pit", uz:"ochman / chanqadim"},
    {ru:"заказать", tr:"zakazat", uz:"buyurtma qilmoq"},
    {ru:"официант", tr:"afitsiant", uz:"ofitsiant"},
    {ru:"меню", tr:"menyu", uz:"menyu"},
    {ru:"счёт", tr:"schot", uz:"hisob"},
    {ru:"вкусно", tr:"vkusna", uz:"mazali"},
    {ru:"без сахара", tr:"byez saxara", uz:"shakarsiz"},
    {ru:"приятного аппетита", tr:"priyatnava apetita", uz:"yoqimli ishtaha"},
  ]
},
{
  id:8, level:"A1", displayNum:8,
  title:"Do'konda xarid qilish",
  topic:"Kiyim, o'lcham, xarid qilish suhbati",
  rules:[
    {h:"O'lcham so'rash", t:"«Какой у вас размер?» — o'lchamingiz qancha? Javob: «У меня ... размер» yoki oddiy raqam.", ex:"Какой у вас размер обуви? — У меня сорок второй."},
    {h:"Kiyib ko'rish", t:"«Можно это примерить?» — buni kiyib ko'rsam bo'ladimi? Do'konda kiyim tanlashda ishlatiladigan asosiy ibora.", ex:"Можно примерить эту рубашку?"},
    {h:"Mos kelish-kelmasligini bildirish", t:"«Это мне подходит» (menga mos keladi) yoki «Это мне мало/велико» (kichik/katta keladi).", ex:"Эти брюки мне немного велики."},
    {h:"Boshqa rang/o'lcham so'rash", t:"«У вас есть другой размер/цвет?» — boshqa o'lcham yoki rang bor-yo'qligini so'rash.", ex:"У вас есть этот свитер другого цвета?"},
  ],
  exercises:[
    {type:"choice", q:"«Kiyib ko'rsam bo'ladimi?»", options:["Можно это примерить?","Сколько это стоит?"], answer:"Можно это примерить?"},
    {type:"fill", q:"«Это мне ___.» — menga mos keladi. (podxodit so'zi)", answer:"подходит"},
    {type:"choice", q:"«Katta keladi» (kiyim haqida):", options:["велико","мало"], answer:"велико"},
    {type:"fill", q:"«У вас есть другой ___?» — boshqa rang bormi? (tsvet so'zi)", answer:"цвет"},
  ],
  dialogue:{
    title:"Kiyim do'konida",
    lines:[
      {who:"Продавец", side:"left", ru:"Здравствуйте! Могу я вам помочь?", tr:"zdrastvuyte! magu ya vam pamoch?", uz:"Assalomu alaykum! Yordam bera olamanmi?"},
      {who:"Покупатель", side:"right", ru:"Да, я ищу рубашку. Можно примерить вот эту?", tr:"da, ya ishu rubashku. mozhna primerit vot etu?", uz:"Ha, men ko'ylak izlayapman. Manavini kiyib ko'rsam bo'ladimi?"},
      {who:"Продавец", side:"left", ru:"Конечно! Примерочная вон там.", tr:"kanyeshno! primerachnaya von tam", uz:"Albatta! Kiyib ko'rish xonasi ana u yerda."},
      {who:"Покупатель", side:"right", ru:"Спасибо. Хм, она мне немного мала. Есть размер побольше?", tr:"spasiba. xm, ana mnye nemnoga mala. yest razmer pabolshe?", uz:"Rahmat. Hmm, bu menga biroz kichik keladi. Kattaroq o'lcham bormi?"},
      {who:"Продавец", side:"left", ru:"Да, сейчас принесу другой размер.", tr:"da, seychas prinesu drugoy razmer", uz:"Ha, hozir boshqa o'lchamini olib kelaman."},
    ]
  },
  reading:{
    title:"Do'konda xarid qilishning oson yo'llari",
    ru:"Поход по магазинам — отличная практика для тех, кто изучает русский язык, потому что диалоги с продавцами обычно короткие и предсказуемые. Зная несколько ключевых фраз, можно уверенно совершать покупки.\n\nВажно знать, как правильно спросить о размере и как объяснить, что вещь не подходит. Фразы «мне мало» и «мне велико» помогают быстро объяснить продавцу проблему без долгих объяснений.\n\nЕсли вы не уверены, что вам нужно, всегда можно сказать: «Я просто смотрю» — это вежливый способ отказаться от помощи продавца, продолжая осматривать товары.",
    uz:"Do'konlarga borish rus tilini o'rganayotganlar uchun ajoyib mashq, chunki sotuvchilar bilan dialoglar odatda qisqa va bashorat qilinadigan bo'ladi. Bir nechta asosiy iborani bilish orqali ishonch bilan xarid qilish mumkin.\n\nO'lcham haqida qanday to'g'ri so'rashni va narsa mos kelmayotganini qanday tushuntirishni bilish muhim. «Menga kichik keladi» va «menga katta keladi» iboralari sotuvchiga uzoq tushuntirishlarsiz muammoni tez tushuntirishga yordam beradi.\n\nAgar nima kerakligiga aniq ishonchingiz komil bo'lmasa, har doim «Men shunchaki ko'ryapman» deb aytishingiz mumkin — bu tovarlarni ko'rishda davom etib, sotuvchi yordamidan xushmuomala tarzda voz kechish usulidir."
  },
  vocab:[
    {ru:"размер", tr:"razmer", uz:"o'lcham"},
    {ru:"примерить", tr:"primerit", uz:"kiyib ko'rmoq"},
    {ru:"примерочная", tr:"primerachnaya", uz:"kiyib ko'rish xonasi"},
    {ru:"подходит / не подходит", tr:"padxodit / ne padxodit", uz:"mos keladi / mos kelmaydi"},
    {ru:"мало / велико", tr:"mala / velika", uz:"kichik keladi / katta keladi"},
    {ru:"рубашка / брюки", tr:"rubashka / bryuki", uz:"ko'ylak / shim"},
    {ru:"обувь", tr:"obuv", uz:"poyabzal"},
    {ru:"я просто смотрю", tr:"ya prosta smatryu", uz:"men shunchaki ko'ryapman"},
    {ru:"продавец", tr:"pradavets", uz:"sotuvchi"},
    {ru:"примерочная кабина", tr:"primerachnaya kabina", uz:"kiyinish kabinasi"},
  ]
},
{
  id:9, level:"A1", displayNum:9,
  title:"Shaharda yo'l so'rash",
  topic:"Yo'nalish so'rash, joy nomlari, harakat fe'llari",
  rules:[
    {h:"Yo'l so'rash", t:"«Скажите, пожалуйста, как пройти до...?» — iltimos, ... gacha qanday borish mumkin, degan muloyim so'rov.", ex:"Скажите, как пройти до вокзала?"},
    {h:"Yo'nalish so'zlari", t:"налево (chapga), направо (o'ngga), прямо (to'g'ri), назад (orqaga) — asosiy yo'nalish so'zlari.", ex:"Идите прямо, потом налево."},
    {h:"Masofani bildirish", t:"«Это далеко/близко» — bu uzoq/yaqin. «Пять минут пешком» — besh daqiqa piyoda.", ex:"Это недалеко, пять минут пешком."},
    {h:"Joy nomlariga ishora", t:"«Где находится...?» — ... qayerda joylashgan? Muassasa yoki joy nomini so'rashda ishlatiladi.", ex:"Где находится ближайшая аптека?"},
  ],
  exercises:[
    {type:"choice", q:"«O'ngga» rus tilida:", options:["направо","налево"], answer:"направо"},
    {type:"fill", q:"«Идите ___.» — to'g'ri boring. (pryamo so'zi)", answer:"прямо"},
    {type:"choice", q:"«Qayerda joylashgan?»", options:["Где находится?","Куда идти?"], answer:"Где находится?"},
    {type:"fill", q:"«Это ___, пять минут пешком.» — yaqin (nedaleko so'zi)", answer:"недалеко"},
  ],
  dialogue:{
    title:"Ko'chada yo'l so'rash",
    lines:[
      {who:"Вы", side:"right", ru:"Извините, скажите, пожалуйста, как пройти до метро?", tr:"izvinite, skazhite, pazhalusta, kak proyti do metro?", uz:"Kechirasiz, iltimos, metroga qanday borish mumkin?"},
      {who:"Прохожий", side:"left", ru:"Идите прямо, потом налево, и вы увидите метро.", tr:"idite pryamo, potom nalyevo, i vy uvidite metro", uz:"To'g'ri boring, keyin chapga, va metroni ko'rasiz."},
      {who:"Вы", side:"right", ru:"Спасибо! Это далеко отсюда?", tr:"spasiba! eta daleko otsyuda?", uz:"Rahmat! Bu yerdan uzoqmi?"},
      {who:"Прохожий", side:"left", ru:"Нет, недалеко. Минут десять пешком.", tr:"nyet, nedaleko. minut desyat peshkom", uz:"Yo'q, uzoq emas. O'n daqiqa piyoda."},
      {who:"Вы", side:"right", ru:"Отлично, спасибо большое за помощь!", tr:"otlichno, spasiba bal'shoye za pomosh!", uz:"Ajoyib, yordamingiz uchun katta rahmat!"},
    ]
  },
  reading:{
    title:"Notanish shaharda yo'l topish",
    ru:"Умение спросить дорогу — одна из самых практичных языковых тем, особенно если вы путешествуете. Люди на улице обычно рады помочь, если вы обращаетесь к ним вежливо.\n\nПри обращении к незнакомому человеку принято начинать фразу со слова «извините» — это привлекает внимание и звучит вежливо. После этого можно задать сам вопрос о дороге.\n\nПолезно также уметь понимать ответы: обычно люди используют простые слова — «прямо», «налево», «направо» — и указывают примерное время в пути. Если вы не поняли ответ, всегда можно вежливо переспросить: «Извините, повторите, пожалуйста».",
    uz:"Yo'l so'rashni bilish — eng amaliy til mavzularidan biri, ayniqsa sayohat qilayotgan bo'lsangiz. Ko'chadagi odamlar, agar ularga muloyim murojaat qilsangiz, odatda yordam berishdan mamnun bo'lishadi.\n\nNotanish odamga murojaat qilishda gapni «извините» (kechirasiz) so'zi bilan boshlash odat tusiga kirgan — bu diqqatni jalb qiladi va xushmuomala eshitiladi. Shundan so'ng yo'l haqidagi savolning o'zini berish mumkin.\n\nJavoblarni tushunishni bilish ham foydali: odatda odamlar oddiy so'zlarni — «to'g'ri», «chapga», «o'ngga» — ishlatishadi va yo'ldagi taxminiy vaqtni ko'rsatishadi. Agar javobni tushunmagan bo'lsangiz, har doim muloyimlik bilan qayta so'rashingiz mumkin: «Kechirasiz, takrorlang, iltimos»."
  },
  vocab:[
    {ru:"извините", tr:"izvinite", uz:"kechirasiz"},
    {ru:"как пройти до...?", tr:"kak proyti do...?", uz:"...gacha qanday borish mumkin?"},
    {ru:"налево / направо", tr:"nalyevo / napravo", uz:"chapga / o'ngga"},
    {ru:"прямо", tr:"pryamo", uz:"to'g'ri (yo'nalish)"},
    {ru:"далеко / близко", tr:"daleko / blizko", uz:"uzoq / yaqin"},
    {ru:"где находится?", tr:"gdye naxoditsya?", uz:"qayerda joylashgan?"},
    {ru:"пешком", tr:"peshkom", uz:"piyoda"},
    {ru:"вокзал", tr:"vakzal", uz:"vokzal"},
    {ru:"аптека", tr:"apteka", uz:"dorixona"},
    {ru:"помощь", tr:"pomosh", uz:"yordam"},
  ]
},
{
  id:10, level:"A1", displayNum:10,
  title:"Ob-havo va fasllar",
  topic:"Fasllar, ob-havo haqida gapirish",
  rules:[
    {h:"To'rt fasl", t:"зима, весна, лето, осень — qish, bahor, yoz, kuz. Fasllar haqida gapirish kundalik suhbatning muhim qismi.", ex:"Я люблю лето. — Men yozni yaxshi ko'raman."},
    {h:"Ob-havo haqida gapirish", t:"«Сегодня тепло/холодно» — bugun issiq/sovuq. «Идёт дождь/снег» — yomg'ir/qor yog'moqda.", ex:"Сегодня очень холодно, идёт снег."},
    {h:"Harorat aytish", t:"«Сколько градусов?» — necha darajа? Javob: «Двадцать градусов тепла/мороза».", ex:"Сегодня двадцать пять градусов тепла."},
    {h:"Ob-havo bashorati", t:"«Завтра будет солнечно» — ertaga quyoshli bo'ladi. Kelasi zamon fe'l shakli bilan bashorat qilinadi.", ex:"Завтра будет дождливо, возьми зонт."},
  ],
  exercises:[
    {type:"choice", q:"«Qish» rus tilida:", options:["зима","лето"], answer:"зима"},
    {type:"fill", q:"«Идёт ___.» — yomg'ir yog'moqda. (dozhd so'zi)", answer:"дождь"},
    {type:"choice", q:"«Necha daraja?»", options:["Сколько градусов?","Какой день?"], answer:"Сколько градусов?"},
    {type:"fill", q:"«Сегодня очень ___.» — bugun juda sovuq. (xoladno so'zi)", answer:"холодно"},
  ],
  dialogue:{
    title:"Ob-havo haqida suhbat",
    lines:[
      {who:"A", side:"left", ru:"Какая сегодня погода?", tr:"kakaya sevodnya pagoda?", uz:"Bugun ob-havo qanday?"},
      {who:"B", side:"right", ru:"Сегодня солнечно, но немного холодно.", tr:"sevodnya solnechna, no nemnoga xolodna", uz:"Bugun quyoshli, lekin biroz sovuq."},
      {who:"A", side:"left", ru:"А завтра будет тепло?", tr:"a zavtra budyet teplo?", uz:"Ertaga issiq bo'ladimi?"},
      {who:"B", side:"right", ru:"Да, завтра будет плюс двадцать градусов.", tr:"da, zavtra budyet plyus dvatsat gradusov", uz:"Ha, ertaga yigirma daraja issiq bo'ladi."},
      {who:"A", side:"left", ru:"Отлично! Тогда пойдём гулять в парк.", tr:"otlichno! togda poydyom gulyat v park", uz:"Ajoyib! Unda parkga sayr qilgani boramiz."},
    ]
  },
  reading:{
    title:"Rus tilida ob-havo haqida suhbat qilish",
    ru:"Разговор о погоде — один из самых универсальных способов начать беседу в любой культуре, и русский язык не исключение. Это безопасная и нейтральная тема, подходящая практически для любой ситуации.\n\nВ России четыре ярко выраженных сезона, и погода сильно меняется в течение года — от морозной зимы до жаркого лета. Поэтому русские часто и подробно обсуждают погоду, планируя одежду и активности на день.\n\nПри описании погоды полезно знать не только температуру, но и явления: дождь, снег, ветер, солнце. Комбинируя эти слова, можно точно описать любую погодную ситуацию.",
    uz:"Ob-havo haqida suhbat — istalgan madaniyatda suhbatni boshlashning eng universal usullaridan biri, va rus tili bundan mustasno emas. Bu deyarli har qanday vaziyat uchun mos keladigan xavfsiz va neytral mavzu.\n\nRossiyada to'rtta aniq ifodalangan fasl bor, va ob-havo yil davomida — sovuq qishdan issiq yozgacha — kuchli o'zgaradi. Shuning uchun ruslar ko'pincha kunlik kiyim va faoliyatni rejalashtirib, ob-havoni batafsil muhokama qilishadi.\n\nOb-havoni tasvirlashda nafaqat haroratni, balki hodisalarni ham bilish foydali: yomg'ir, qor, shamol, quyosh. Bu so'zlarni birlashtirib, istalgan ob-havo vaziyatini aniq tasvirlash mumkin."
  },
  vocab:[
    {ru:"зима / весна / лето / осень", tr:"zima / vesna / leto / osen", uz:"qish / bahor / yoz / kuz"},
    {ru:"тепло / холодно", tr:"teplo / xolodno", uz:"issiq / sovuq"},
    {ru:"идёт дождь", tr:"idyot dozhd", uz:"yomg'ir yog'moqda"},
    {ru:"идёт снег", tr:"idyot sneg", uz:"qor yog'moqda"},
    {ru:"солнечно", tr:"solnechno", uz:"quyoshli"},
    {ru:"облачно", tr:"oblachno", uz:"bulutli"},
    {ru:"ветер", tr:"veter", uz:"shamol"},
    {ru:"градус", tr:"gradus", uz:"daraja"},
    {ru:"зонт", tr:"zont", uz:"soyabon"},
    {ru:"погода", tr:"pagoda", uz:"ob-havo"},
  ]
},
{
  id:11, level:"A1", displayNum:11,
  title:"Uy-joy va xonalar",
  topic:"Uy qismlari, jihozlar, «bor/yo'q» qurilmasi",
  rules:[
    {h:"Uy xonalari", t:"кухня, спальня, ванная, гостиная — oshxona, yotoq xona, hammom, mehmonxona. Uy haqida gapirishning asosi.", ex:"Моя спальня маленькая, но уютная."},
    {h:"«Есть» va «нет» — bor va yo'q", t:"«В доме есть...» — uyda ... bor. Yo'qlikni bildirish uchun «нет» + ot родительный kelishigida.", ex:"В квартире есть балкон. В доме нет лифта."},
    {h:"Joylashuvni bildirish (в, на)", t:"«В комнате» (xonada) — ichkarida, «на столе» (stolda) — ustida. «В» va «на» predloglari joylashuvni aniqlashtiradi.", ex:"Книга лежит на столе, а ручка в сумке."},
    {h:"Mebel nomlari", t:"стол, стул, кровать, шкаф, диван — asosiy mebel nomlari, uy tasvirlashda tez-tez ishlatiladi.", ex:"В гостиной есть диван и телевизор."},
  ],
  exercises:[
    {type:"choice", q:"«Oshxona» rus tilida:", options:["кухня","спальня"], answer:"кухня"},
    {type:"fill", q:"«В доме ___ балкон.» — uyda balkon bor. (yest so'zi)", answer:"есть"},
    {type:"choice", q:"«Stolda» (ustida):", options:["на столе","в столе"], answer:"на столе"},
    {type:"fill", q:"«В гостиной есть ___.» — divan bor. (divan so'zi)", answer:"диван"},
  ],
  dialogue:{
    title:"Yangi kvartira haqida",
    lines:[
      {who:"A", side:"left", ru:"Расскажи о своей новой квартире. Сколько там комнат?", tr:"raskazhi a svoyey novoy kvartire. skolka tam komnat?", uz:"Yangi kvartirangiz haqida gapirib bering. Necha xona bor?"},
      {who:"B", side:"right", ru:"У меня две комнаты: спальня и гостиная. Ещё есть маленькая кухня.", tr:"u menya dvye komnaty: spalnya i gostinaya. yesho yest malenkaya kuxnya", uz:"Menda ikkita xona bor: yotoq xona va mehmonxona. Yana kichkina oshxona ham bor."},
      {who:"A", side:"left", ru:"А балкон есть?", tr:"a balkon yest?", uz:"Balkon bormi?"},
      {who:"B", side:"right", ru:"Да, есть небольшой балкон с видом на парк.", tr:"da, yest nebolshoy balkon s vidom na park", uz:"Ha, parkka qaragan kichik balkon bor."},
      {who:"A", side:"left", ru:"Звучит очень уютно!", tr:"zvuchit ochen uyutno!", uz:"Juda qulay eshitilyapti!"},
    ]
  },
  reading:{
    title:"Uy va uy-joy haqida gapirish",
    ru:"Тема дома и жилья часто встречается в повседневных разговорах — при переезде, поиске квартиры или просто в беседе с друзьями. Важно знать названия комнат и базовой мебели.\n\nКонструкция «в доме есть...» используется для описания того, что находится в доме, а «в доме нет...» — для того, чего там не хватает. После «нет» существительное меняет форму — это называется родительным падежом.\n\nПредлоги «в» и «на» помогают точно указать местоположение предмета: «в шкафу» (внутри), но «на столе» (сверху). Разница между этими предлогами — одна из первых грамматических тонкостей, которую стоит запомнить.",
    uz:"Uy va uy-joy mavzusi ko'chib o'tishda, kvartira qidirishda yoki shunchaki do'stlar bilan suhbatda kundalik suhbatlarda tez-tez uchraydi. Xonalar va asosiy mebel nomlarini bilish muhim.\n\n«В доме есть...» (uyda ... bor) qurilmasi uyda nima borligini tasvirlash uchun, «в доме нет...» (uyda ... yo'q) esa nima yetishmasligini bildirish uchun ishlatiladi. «Нет» dan keyin ot shaklini o'zgartiradi — bu qaratqich kelishigi deb ataladi.\n\n«В» va «на» predloglari narsaning joylashuvini aniq ko'rsatishga yordam beradi: «shkafda» (ichkarida), lekin «stolda» (ustida). Bu predloglar orasidagi farq — eslab qolish kerak bo'lgan birinchi grammatik nozikliklardan biri."
  },
  vocab:[
    {ru:"квартира / дом", tr:"kvartira / dom", uz:"kvartira / uy"},
    {ru:"кухня / спальня", tr:"kuxnya / spalnya", uz:"oshxona / yotoq xona"},
    {ru:"гостиная / ванная", tr:"gostinaya / vannaya", uz:"mehmonxona / hammom"},
    {ru:"стол / стул", tr:"stol / stul", uz:"stol / stul"},
    {ru:"кровать / шкаф", tr:"krovat / shkaf", uz:"karavot / shkaf"},
    {ru:"диван", tr:"divan", uz:"divan"},
    {ru:"балкон", tr:"balkon", uz:"balkon"},
    {ru:"уютный", tr:"uyutniy", uz:"qulay, shinam"},
    {ru:"этаж", tr:"etazh", uz:"qavat"},
    {ru:"окно / дверь", tr:"okno / dver", uz:"deraza / eshik"},
  ]
},
{
  id:12, level:"A1", displayNum:12,
  title:"Kundalik kun tartibi",
  topic:"Fe'llarning hozirgi zamon shakli, kunlik faoliyat",
  rules:[
    {h:"Fe'l tuslanishi — hozirgi zamon", t:"Rus tilida fe'llar shaxsga qarab tuslanadi. Masalan «делать» (qilmoq): я делаю, ты делаешь, он делает, мы делаем.", ex:"Я делаю зарядку каждое утро."},
    {h:"Kundalik faoliyat fe'llari", t:"вставать (turmoq), завтракать (nonushta qilmoq), работать (ishlamoq), спать (uxlamoq) — kun tartibini tasvirlashning asosiy fe'llari.", ex:"Я встаю в семь часов утра."},
    {h:"Vaqt bilan fe'lni bog'lash", t:"«В (soат) я...» qurilmasi orqali kunlik reja vaqt bilan bog'lanadi.", ex:"В восемь часов я иду на работу."},
    {h:"Tez-tezlik so'zlari", t:"всегда (doim), обычно (odatda), иногда (ba'zan), никогда (hech qachon) — harakatning qanchalik tez-tez sodir bo'lishini bildiradi.", ex:"Я обычно завтракаю дома."},
  ],
  exercises:[
    {type:"choice", q:"«Men turaman» — «вставать» fe'lidan:", options:["Я встаю","Я встаёшь"], answer:"Я встаю"},
    {type:"fill", q:"«Я ___ на работу в восемь.» — men ishga boraman. (idu so'zi)", answer:"иду"},
    {type:"choice", q:"«Odatda» so'zi:", options:["обычно","никогда"], answer:"обычно"},
    {type:"fill", q:"«Я ___ зарядку каждое утро.» — mashq qilaman. (delayu so'zi)", answer:"делаю"},
  ],
  dialogue:{
    title:"Kun tartibi haqida",
    lines:[
      {who:"A", side:"left", ru:"Расскажи, что ты делаешь утром?", tr:"raskazhi, shto ty delayesh utrom?", uz:"Ertalab nima qilasiz, gapirib bering."},
      {who:"B", side:"right", ru:"Я встаю в семь, потом завтракаю и иду на работу.", tr:"ya vstayu v syem, patom zavtrakayu i idu na rabotu", uz:"Men soat yettida turaman, keyin nonushta qilib, ishga ketaman."},
      {who:"A", side:"left", ru:"А во сколько ты возвращаешься домой?", tr:"a va skolka ty vazvrashayeshsya domoy?", uz:"Uyga soat nechada qaytasiz?"},
      {who:"B", side:"right", ru:"Обычно в шесть вечера. Потом я ужинаю и отдыхаю.", tr:"obychno v shest vyechera. patom ya uzhinayu i atdyxayu", uz:"Odatda kechqurun soat oltida. Keyin kechki ovqat yeb, dam olaman."},
      {who:"A", side:"left", ru:"А во сколько ложишься спать?", tr:"a va skolka lozhishsya spat?", uz:"Soat nechada uxlashga yotasiz?"},
      {who:"B", side:"right", ru:"Обычно в одиннадцать часов вечера.", tr:"obychno v adinnatsat chasov vyechera", uz:"Odatda kechqurun soat o'n birda."},
    ]
  },
  reading:{
    title:"Kun tartibi haqida gapirish nima uchun muhim",
    ru:"Описание распорядка дня — одна из самых полезных тем для практики глаголов в настоящем времени. Она позволяет использовать множество разных слов в естественном контексте.\n\nВажно запомнить, что глаголы в русском языке спрягаются, то есть меняют окончание в зависимости от того, кто выполняет действие. Это требует практики, но со временем становится автоматическим.\n\nСлова частоты — «всегда», «обычно», «иногда», «никогда» — обычно ставятся перед глаголом и помогают точнее описать привычки. Регулярная практика описания своего дня — отличный способ закрепить новую лексику и грамматику.",
    uz:"Kun tartibini tasvirlash — hozirgi zamon fe'llarini mashq qilish uchun eng foydali mavzulardan biri. Bu tabiiy kontekstda ko'plab turli so'zlarni ishlatish imkonini beradi.\n\nRus tilida fe'llar tuslanishini, ya'ni harakatni kim bajarayotganiga qarab oxiri o'zgarishini eslab qolish muhim. Bu mashq qilishni talab qiladi, lekin vaqt o'tishi bilan avtomatik bo'lib qoladi.\n\nTez-tezlik so'zlari — «всегда» (doim), «обычно» (odatda), «иногда» (ba'zan), «никогда» (hech qachon) — odatda fe'ldan oldin qo'yiladi va odatlarni aniqroq tasvirlashga yordam beradi. Kunni muntazam tasvirlash — yangi leksika va grammatikani mustahkamlashning ajoyib usuli."
  },
  vocab:[
    {ru:"вставать", tr:"vstavat", uz:"turmoq"},
    {ru:"завтракать / ужинать", tr:"zavtrakat / uzhinat", uz:"nonushta qilmoq / kechki ovqat yemoq"},
    {ru:"идти на работу", tr:"idti na rabotu", uz:"ishga bormoq"},
    {ru:"возвращаться домой", tr:"vazvrashatsya damoy", uz:"uyga qaytmoq"},
    {ru:"отдыхать", tr:"atdyxat", uz:"dam olmoq"},
    {ru:"ложиться спать", tr:"lazhitsya spat", uz:"uxlashga yotmoq"},
    {ru:"всегда / иногда", tr:"vsegda / inagda", uz:"doim / ba'zan"},
    {ru:"обычно", tr:"obychno", uz:"odatda"},
    {ru:"никогда", tr:"nikagda", uz:"hech qachon"},
    {ru:"каждый день", tr:"kazhdiy dyen", uz:"har kuni"},
  ]
},
{
  id:13, level:"A1", displayNum:13,
  title:"Transport va sayohat",
  topic:"Jamoat transporti, chipta olish, sayohat rejalashtirish",
  rules:[
    {h:"Transport turlari", t:"автобус, метро, такси, поезд, самолёт — asosiy transport vositalari nomlari.", ex:"Я езжу на работу на метро."},
    {h:"«Ехать» va «идти» farqi", t:"«Идти» — piyoda yurmoq, «ехать» — transportda yurmoq. Ikkalasi ham «bormoq» ma'nosini beradi, lekin usuli farq qiladi.", ex:"Я иду в магазин пешком. Я еду в аэропорт на такси."},
    {h:"Chipta olish", t:"«Мне нужен билет до...» — menga ...gacha chipta kerak. Yo'nalishni aniqlashtirish uchun ishlatiladi.", ex:"Мне нужен билет до Ташкента на завтра."},
    {h:"Sayohat rejalashtirish", t:"«Во сколько отправляется...?» — ... qachon jo'nab ketadi? Poyezd/samolyot vaqtini so'rashda ishlatiladi.", ex:"Во сколько отправляется поезд в Самарканд?"},
  ],
  exercises:[
    {type:"choice", q:"«Piyoda yurmoq» rus tilida:", options:["идти","ехать"], answer:"идти"},
    {type:"fill", q:"«Мне нужен ___ до Ташкента.» — chipta (bilyet so'zi)", answer:"билет"},
    {type:"choice", q:"«Poyezd» so'zi:", options:["поезд","самолёт"], answer:"поезд"},
    {type:"fill", q:"«Во сколько ___ поезд?» — jo'nab ketadi (otpravlyaetsya so'zi)", answer:"отправляется"},
  ],
  dialogue:{
    title:"Chipta kassasida",
    lines:[
      {who:"Вы", side:"right", ru:"Здравствуйте! Мне нужен билет до Самарканда на завтра.", tr:"zdrastvuyte! mnye nuzhen bilyet do samarkanda na zavtra", uz:"Assalomu alaykum! Menga ertagaga Samarqandgacha chipta kerak."},
      {who:"Кассир", side:"left", ru:"Есть поезд в девять утра и в три дня. Какой вам удобнее?", tr:"yest poyezd v devyat utra i v tri dnya. kakoy vam udobneye?", uz:"Ertalab soat to'qqizda va kunduzi soat uchda poyezd bor. Qaysi biri sizga qulay?"},
      {who:"Вы", side:"right", ru:"Утренний, пожалуйста. Сколько стоит билет?", tr:"utrenniy, pazhalusta. skolka stoit bilyet?", uz:"Ertalabkisi, iltimos. Chipta qancha turadi?"},
      {who:"Кассир", side:"left", ru:"Сто двадцать тысяч сум.", tr:"sto dvatsat tysyach sum", uz:"Bir yuz yigirma ming so'm."},
      {who:"Вы", side:"right", ru:"Хорошо, вот деньги. Спасибо!", tr:"xarasho, vot dengi. spasiba!", uz:"Yaxshi, mana pul. Rahmat!"},
    ]
  },
  reading:{
    title:"Rus tilida transport haqida gaplashish",
    ru:"Тема транспорта особенно полезна для тех, кто планирует путешествовать по русскоязычным странам. Знание нескольких ключевых фраз поможет уверенно покупать билеты и ориентироваться в расписании.\n\nВажно различать глаголы «идти» и «ехать» — это частая ошибка у изучающих язык. «Идти» используется, когда человек передвигается пешком, а «ехать» — когда на любом виде транспорта.\n\nПри покупке билетов кассиры часто говорят быстро, поэтому полезно заранее знать основные слова: «билет», «отправление», «прибытие», «место». Если что-то непонятно, всегда можно попросить повторить помедленнее.",
    uz:"Transport mavzusi rus tilida so'zlashadigan mamlakatlar bo'ylab sayohat qilishni rejalashtirayotganlar uchun alohida foydali. Bir nechta asosiy iborani bilish chiptalarni ishonch bilan sotib olish va jadvalda mo'ljal olishga yordam beradi.\n\n«Идти» va «ехать» fe'llarini farqlash muhim — bu tilni o'rganayotganlarda tez-tez uchraydigan xato. «Идти» inson piyoda harakatlanganda, «ехать» esa istalgan transport turida ishlatiladi.\n\nChipta sotib olishda kassirlar ko'pincha tez gapirishadi, shuning uchun asosiy so'zlarni oldindan bilish foydali: «chipta», «jo'nash», «yetib kelish», «o'rin». Agar biror narsa tushunarsiz bo'lsa, har doim sekinroq takrorlashni so'rash mumkin."
  },
  vocab:[
    {ru:"автобус / метро", tr:"aftobus / metro", uz:"avtobus / metro"},
    {ru:"такси / поезд", tr:"taksi / poyezd", uz:"taksi / poyezd"},
    {ru:"самолёт", tr:"samalyot", uz:"samolyot"},
    {ru:"билет", tr:"bilyet", uz:"chipta"},
    {ru:"расписание", tr:"raspisaniye", uz:"jadval"},
    {ru:"отправление / прибытие", tr:"otpravleniye / pribytiye", uz:"jo'nash / yetib kelish"},
    {ru:"место", tr:"mesto", uz:"o'rin"},
    {ru:"идти / ехать", tr:"idti / yekhat", uz:"piyoda bormoq / transportda bormoq"},
    {ru:"вокзал / аэропорт", tr:"vakzal / aeraport", uz:"vokzal / aeroport"},
    {ru:"путешествие", tr:"puteshestviye", uz:"sayohat"},
  ]
},
{
  id:14, level:"A1", displayNum:14,
  title:"Sog'liq va shifokorga borish",
  topic:"Kasallik haqida gapirish, shifokorda muloqot",
  rules:[
    {h:"O'zini yomon his qilishni bildirish", t:"«Я плохо себя чувствую» — o'zimni yomon his qilyapman. Umumiy holatni bildirishning eng oddiy usuli.", ex:"Я плохо себя чувствую сегодня, у меня температура."},
    {h:"Og'riqni bildirish", t:"«У меня болит...» + tana a'zosi — ...m og'riyapti. Tana a'zosi kelishik shaklida keladi.", ex:"У меня болит голова и горло."},
    {h:"Shifokorga tashrif", t:"«Мне нужно записаться к врачу» — shifokorga yozilishim kerak. Poliklinikaga murojaat qilishning standart iborasi.", ex:"Мне нужно записаться к врачу на завтра."},
    {h:"Dori haqida gapirish", t:"«Врач прописал мне лекарство» — shifokor menga dori yozib berdi. Davolanish haqida gapirishda ishlatiladi.", ex:"Врач прописал мне лекарство от кашля."},
  ],
  exercises:[
    {type:"choice", q:"«Boshim og'riyapti»:", options:["У меня болит голова","У меня болит нога"], answer:"У меня болит голова"},
    {type:"fill", q:"«Я плохо себя ___.» — o'zimni yomon his qilyapman. (chuvstvuyu so'zi)", answer:"чувствую"},
    {type:"choice", q:"«Shifokorga yozilishim kerak»:", options:["Мне нужно записаться к врачу","Мне нужно поспать"], answer:"Мне нужно записаться к врачу"},
    {type:"fill", q:"«У меня ___.» — haroratim bor. (temperatura so'zi)", answer:"температура"},
  ],
  dialogue:{
    title:"Shifokor qabulida",
    lines:[
      {who:"Врач", side:"left", ru:"Здравствуйте! Что вас беспокоит?", tr:"zdrastvuyte! shto vas bespokoit?", uz:"Assalomu alaykum! Nima bezovta qilyapti?"},
      {who:"Пациент", side:"right", ru:"Здравствуйте, доктор. У меня болит горло и температура.", tr:"zdrastvuyte, doktar. u menya bolit gorlo i temperatura", uz:"Assalomu alaykum, doktor. Tomog'im og'riyapti va haroratim bor."},
      {who:"Врач", side:"left", ru:"Как давно это началось?", tr:"kak davno eta nachalos?", uz:"Bu qachondan boshlangan?"},
      {who:"Пациент", side:"right", ru:"Со вчерашнего дня. Ещё немного кашляю.", tr:"sa vcherashnyeva dnya. yesho nemnoga kashlyayu", uz:"Kechadan beri. Yana biroz yo'talyapman."},
      {who:"Врач", side:"left", ru:"Понятно. Я пропишу вам лекарство. Пейте много воды и отдыхайте.", tr:"panyatna. ya prapishu vam lekarstvo. peyte mnogo vody i atdyxayte", uz:"Tushunarli. Sizga dori yozib beraman. Ko'p suv iching va dam oling."},
    ]
  },
  reading:{
    title:"Shifokorga murojaat qilishda foydali iboralar",
    ru:"Умение объяснить своё самочувствие врачу — крайне важный навык, особенно если вы живёте в русскоязычной стране. В таких ситуациях лучше говорить просто и по существу, не пытаясь строить сложные предложения.\n\nКонструкция «у меня болит...» — одна из самых полезных для описания симптомов. После неё название части тела ставится в именительном падеже, если она в единственном числе: «болит голова», «болит нога».\n\nВрачи обычно задают уточняющие вопросы: как давно начались симптомы, есть ли температура, что именно беспокоит. Полезно заранее подготовить простые ответы на эти вопросы, чтобы разговор прошёл легче.",
    uz:"O'z holatini shifokorga tushuntira olish — juda muhim ko'nikma, ayniqsa rus tilida so'zlashadigan davlatda yashasangiz. Bunday vaziyatlarda murakkab gaplar qurishga urinmasdan, sodda va aniq gapirish yaxshiroq.\n\n«У меня болит...» (mening ... og'riyapti) qurilmasi belgilarni tasvirlashning eng foydali usullaridan biri. Undan keyin tana a'zosi nomi, agar birlikda bo'lsa, bosh kelishik shaklida qo'yiladi: «bosh og'riyapti», «oyoq og'riyapti».\n\nShifokorlar odatda aniqlashtiruvchi savollar berishadi: belgilar qachondan boshlangan, harorat bormi, aynan nima bezovta qilyapti. Suhbat osonroq o'tishi uchun bu savollarga oddiy javoblarni oldindan tayyorlab qo'yish foydali."
  },
  vocab:[
    {ru:"болеть (у меня болит)", tr:"balet (u menya bolit)", uz:"og'rimoq (...m og'riyapti)"},
    {ru:"голова / горло", tr:"galava / gorlo", uz:"bosh / tomoq"},
    {ru:"температура", tr:"temperatura", uz:"harorat"},
    {ru:"кашель", tr:"kashel", uz:"yo'tal"},
    {ru:"врач / доктор", tr:"vrach / doktar", uz:"shifokor / doktor"},
    {ru:"лекарство", tr:"lekarstvo", uz:"dori"},
    {ru:"записаться к врачу", tr:"zapisatsya k vrachu", uz:"shifokorga yozilmoq"},
    {ru:"аптека", tr:"apteka", uz:"dorixona"},
    {ru:"плохо себя чувствовать", tr:"ploxo sebya chuvstvovat", uz:"o'zini yomon his qilmoq"},
    {ru:"здоровье", tr:"zdorovye", uz:"sog'liq"},
  ]
},
{
  id:15, level:"A1", displayNum:15,
  title:"His-tuyg'ular va bo'sh vaqt",
  topic:"Kayfiyat, hobbi, umumlashtiruvchi suhbat",
  rules:[
    {h:"Kayfiyatni bildirish", t:"«Я рад(а)» (xursandman), «мне грустно» (g'amginman), «я устал(а)» (charchadim) — his-tuyg'ularni bildiruvchi asosiy iboralar.", ex:"Я очень рад тебя видеть!"},
    {h:"Hobbi haqida gapirish", t:"«Я люблю...» + fe'l infinitiv shaklida — sevimli mashg'ulot haqida gapirish.", ex:"Я люблю читать книги и смотреть фильмы."},
    {h:"Taklif qilish", t:"«Давай(те)...» — keling, ...ylik. Birgalikda biror narsa qilishni taklif qilishning eng keng tarqalgan usuli.", ex:"Давай пойдём в кино в субботу!"},
    {h:"Rozilik va rad javobi", t:"«С удовольствием!» (mamnuniyat bilan) — rozilik, «К сожалению, не могу» (afsuski, qila olmayman) — rad javobi.", ex:"С удовольствием! Во сколько встретимся?"},
  ],
  exercises:[
    {type:"choice", q:"«Men xursandman»:", options:["Я рад","Я устал"], answer:"Я рад"},
    {type:"fill", q:"«Я ___ читать книги.» — sevaman (lyublyu so'zi)", answer:"люблю"},
    {type:"choice", q:"Taklif qilish so'zi:", options:["Давай","Может быть"], answer:"Давай"},
    {type:"fill", q:"«С ___!» — mamnuniyat bilan (udovolstviyem so'zi)", answer:"удовольствием"},
  ],
  dialogue:{
    title:"Do'stlar bilan reja tuzish",
    lines:[
      {who:"A", side:"left", ru:"Как ты себя чувствуешь? Ты выглядишь уставшим.", tr:"kak ty sebya chuvstvuyesh? ty vyglyadish ustavshim", uz:"O'zingizni qanday his qilyapsiz? Charchagandek ko'rinasiz."},
      {who:"B", side:"right", ru:"Да, немного устал на этой неделе. Но сегодня чувствую себя лучше.", tr:"da, nemnoga ustal na etoy nedele. no sevodnya chuvstvuyu sebya luchshe", uz:"Ha, bu hafta biroz charchadim. Lekin bugun o'zimni yaxshiroq his qilyapman."},
      {who:"A", side:"left", ru:"Давай сходим в парк на выходных? Это поможет расслабиться.", tr:"davay sxodim v park na vyxodnyx? eta pomozhet rasslabitsya", uz:"Dam olish kunlari parkga borsakmi? Bu bo'shashishga yordam beradi."},
      {who:"B", side:"right", ru:"С удовольствием! Я люблю гулять на свежем воздухе.", tr:"s udovolstviyem! ya lyublyu gulyat na svezhem vozduxe", uz:"Mamnuniyat bilan! Men ochiq havoda sayr qilishni yaxshi ko'raman."},
      {who:"A", side:"left", ru:"Отлично, договорились! До субботы!", tr:"otlichno, dogovorilis! do subboty!", uz:"Ajoyib, kelishdik! Shanbagacha!"},
    ]
  },
  reading:{
    title:"Til o'rganishni davom ettirish uchun maslahatlar",
    ru:"Поздравляем с завершением базового курса! Вы освоили алфавит, научились здороваться, говорить о числах, семье, времени, покупках, транспорте и здоровье. Это отличная основа для дальнейшего изучения языка.\n\nСледующий шаг — регулярная практика. Смотрите фильмы и сериалы на русском с субтитрами, слушайте музыку, читайте простые тексты. Чем больше живого языка вы слышите, тем быстрее развивается понимание на слух.\n\nНе бойтесь ошибаться — это естественная часть изучения любого языка. Каждый разговор, даже с ошибками, делает вас увереннее. Главное — практиковаться регулярно, а не идеально.",
    uz:"Asosiy kursni tugatganingiz bilan tabriklaymiz! Siz alifboni o'zlashtirdingiz, salomlashishni, sonlar, oila, vaqt, xarid, transport va sog'liq haqida gapirishni o'rgandingiz. Bu tilni keyingi o'rganish uchun ajoyib asos.\n\nKeyingi qadam — muntazam mashq qilish. Rus tilida subtitr bilan film va seriallar tomosha qiling, musiqa tinglang, oddiy matnlar o'qing. Qancha ko'p jonli tilni eshitsangiz, tinglab tushunish qobiliyati shunchalik tez rivojlanadi.\n\nXato qilishdan qo'rqmang — bu istalgan tilni o'rganishning tabiiy qismi. Har bir suhbat, hatto xatolar bilan bo'lsa ham, sizni ishonchliroq qiladi. Asosiysi — mukammal emas, balki muntazam mashq qilish."
  },
  vocab:[
    {ru:"рад(а) / грустно", tr:"rad(a) / grustno", uz:"xursand / g'amgin"},
    {ru:"устал(а)", tr:"ustal(a)", uz:"charchagan"},
    {ru:"я люблю", tr:"ya lyublyu", uz:"men sevaman/yaxshi ko'raman"},
    {ru:"свободное время", tr:"svobodnoye vremya", uz:"bo'sh vaqt"},
    {ru:"давай(те)", tr:"davay(te)", uz:"keling"},
    {ru:"с удовольствием", tr:"s udovolstviyem", uz:"mamnuniyat bilan"},
    {ru:"к сожалению", tr:"k sozhaleniyu", uz:"afsuski"},
    {ru:"отдыхать", tr:"otdyxat", uz:"dam olmoq"},
    {ru:"расслабиться", tr:"rasslabitsya", uz:"bo'shashmoq"},
    {ru:"практика", tr:"praktika", uz:"amaliyot, mashq"},
  ]
},
{
  id:16, level:"A2", displayNum:1,
  title:"O'tgan zamon",
  topic:"Fe'llarning o'tgan zamon shakli, jins bo'yicha o'zgarish",
  rules:[
    {h:"O'tgan zamon yasalishi", t:"Rus tilida o'tgan zamon fe'l infinitividan -ть ni olib tashlab, -л (erkak), -ла (ayol), -ло (o'rta), -ли (ko'plik) qo'shish orqali yasaladi.", ex:"делать → он делал, она делала, они делали"},
    {h:"Jinsga qarab o'zgarish", t:"O'tgan zamonda fe'l shaxsga emas, balki eganing jinsiga qarab o'zgaradi — bu hozirgi zamondan asosiy farq.", ex:"Я делал (erkak aytsa), Я делала (ayol aytsa)"},
    {h:"Bo'lishsiz shakl", t:"«Не» yuklamasi fe'ldan oldin qo'yiladi va inkorni bildiradi.", ex:"Я не понял вопрос. — Men savolni tushunmadim."},
    {h:"«Был/была/было» — edi", t:"«Быть» fe'lining o'tgan zamon shakli holatni tasvirlashda ishlatiladi.", ex:"Вчера погода была холодная."},
  ],
  exercises:[
    {type:"choice", q:"«Delat» fe'lining o'tgan zamoni (ayol uchun):", options:["делала","делал"], answer:"делала"},
    {type:"fill", q:"«Я не ___ вопрос.» — tushunmadim (ponyal so'zi)", answer:"понял"},
    {type:"choice", q:"«Edi» (ob-havo haqida, ayol jinsi):", options:["была","был"], answer:"была"},
    {type:"fill", q:"«Они ___ в парке вчера.» — bo'lishdi (byli so'zi)", answer:"были"},
  ],
  dialogue:{
    title:"Kecha nima qildingiz",
    lines:[
      {who:"A", side:"left", ru:"Что ты делал вчера вечером?", tr:"shto ty delal vchera vyechyerom?", uz:"Kecha kechqurun nima qildingiz?"},
      {who:"B", side:"right", ru:"Я смотрел фильм и потом читал книгу.", tr:"ya smatryel film i patom chital knigu", uz:"Men film ko'rdim, keyin kitob o'qidim."},
      {who:"A", side:"left", ru:"А твоя сестра что делала?", tr:"a tvaya sestra shto delala?", uz:"Opangiz nima qildi?"},
      {who:"B", side:"right", ru:"Она готовила ужин и слушала музыку.", tr:"ana gatovila uzhin i slushala muzyku", uz:"U kechki ovqat tayyorladi va musiqa tingladi."},
      {who:"A", side:"left", ru:"Звучит как хороший вечер!", tr:"zvuchit kak xaroshiy vyechyer!", uz:"Yaxshi kech bo'lganga o'xshaydi!"},
    ]
  },
  reading:{
    title:"O'tgan zamonni to'g'ri qo'llash",
    ru:"Прошедшее время в русском языке образуется гораздо проще, чем настоящее — не нужно запоминать окончания для каждого лица. Главное правило: глагол меняется в зависимости от рода и числа, а не от того, кто говорит — я, ты или он.\n\nЭто означает, что мужчина скажет «я делал», а женщина — «я делала», хотя оба говорят о себе. Множественное число всегда имеет окончание «-ли», независимо от рода: «мы делали», «они делали».\n\nПри изучении прошедшего времени полезно сразу практиковать рассказ о своём дне — что вы делали утром, днём и вечером. Это закрепляет форму и помогает говорить более свободно.",
    uz:"Rus tilida o'tgan zamon hozirgi zamonga qaraganda ancha oson yasaladi — har bir shaxs uchun oxirlarni yodlash shart emas. Asosiy qoida: fe'l gapiruvchi kim ekaniga (men, sen, u) emas, balki jins va songa qarab o'zgaradi.\n\nBu shuni anglatadiki, erkak «men qildim» deganda «делал», ayol esa «делала» deydi, garchi ikkalasi ham o'zi haqida gapirsa ham. Ko'plik doim «-ли» bilan tugaydi, jinsdan qat'i nazar: «biz qildik», «ular qildi».\n\nO'tgan zamonni o'rganishda darhol o'z kuningiz haqida hikoya qilishni mashq qilish foydali — ertalab, kunduzi va kechqurun nima qilganingiz. Bu shaklni mustahkamlaydi va erkinroq gapirishga yordam beradi."
  },
  vocab:[
    {ru:"делал / делала", tr:"delal / delala", uz:"qildi (erkak/ayol)"},
    {ru:"смотреть — смотрел", tr:"smatret — smatrel", uz:"ko'rmoq — ko'rdi"},
    {ru:"читать — читал", tr:"chitat — chital", uz:"o'qimoq — o'qidi"},
    {ru:"готовить — готовил", tr:"gatovit — gatovil", uz:"tayyorlamoq — tayyorladi"},
    {ru:"слушать — слушал", tr:"slushat — slushal", uz:"tinglamoq — tingladi"},
    {ru:"был / была / было / были", tr:"byl / byla / bylo / byli", uz:"edi (jins/son bo'yicha)"},
    {ru:"вчера вечером", tr:"vchera vyechyerom", uz:"kecha kechqurun"},
    {ru:"не понял", tr:"ne panyal", uz:"tushunmadi"},
    {ru:"фильм", tr:"film", uz:"film"},
    {ru:"музыка", tr:"muzyka", uz:"musiqa"},
  ]
},
{
  id:17, level:"A2", displayNum:2,
  title:"Kelasi zamon",
  topic:"Oddiy va murakkab kelasi zamon shakllari",
  rules:[
    {h:"Murakkab kelasi zamon", t:"«Быть» fe'lining kelasi zamon shakli + infinitiv — davomiy harakatlar uchun ishlatiladi: буду, будешь, будет, будем, будете, будут.", ex:"Я буду работать завтра. — Men ertaga ishlayman."},
    {h:"Oddiy kelasi zamon", t:"Ba'zi fe'llar (mukammal ko'rinish) hozirgi zamon shaklida tuslanib, lekin kelasi zamon ma'nosini beradi.", ex:"Я сделаю это завтра. — Men buni ertaga qilaman (tugallangan harakat)."},
    {h:"Reja va niyatni bildirish", t:"«Я планирую...» yoki «Я собираюсь...» — rejalashtirilgan harakatni bildirish uchun ishlatiladi.", ex:"Я собираюсь поехать в Москву в следующем месяце."},
    {h:"Kelasi zamon bilan vaqt so'zlari", t:"завтра, на следующей неделе, в будущем году — kelasi zamon bilan birga ishlatiladigan vaqt ko'rsatkichlari.", ex:"На следующей неделе я буду в отпуске."},
  ],
  exercises:[
    {type:"choice", q:"«Men ishlayman» (kelasi, davomiy):", options:["Я буду работать","Я работал"], answer:"Я буду работать"},
    {type:"fill", q:"«Я ___ это завтра.» — qilaman (tugallangan, sdelayu so'zi)", answer:"сделаю"},
    {type:"choice", q:"Reja bildirish:", options:["Я собираюсь","Я делал"], answer:"Я собираюсь"},
    {type:"fill", q:"«На следующей ___ я буду в отпуске.» — haftada (nedele so'zi)", answer:"неделе"},
  ],
  dialogue:{
    title:"Kelgusi rejalar haqida",
    lines:[
      {who:"A", side:"left", ru:"Что ты будешь делать на выходных?", tr:"shto ty budesh delat na vyxodnyx?", uz:"Dam olish kunlari nima qilasiz?"},
      {who:"B", side:"right", ru:"Я собираюсь поехать к родителям в другой город.", tr:"ya sabirayus payexat k raditelyam v drugoy gorad", uz:"Men boshqa shahardagi ota-onamnikiga bormoqchiman."},
      {who:"A", side:"left", ru:"Здорово! А когда ты вернёшься?", tr:"zdorova! a kagda ty vernyoshsya?", uz:"Ajoyib! Qachon qaytasiz?"},
      {who:"B", side:"right", ru:"Я вернусь в воскресенье вечером.", tr:"ya vyernus v vaskresenye vyechyerom", uz:"Yakshanba kechqurun qaytaman."},
      {who:"A", side:"left", ru:"Хорошо, тогда увидимся в понедельник на работе.", tr:"xarasho, togda uvidimsya v ponyedyelnik na rabotye", uz:"Yaxshi, unda dushanba kuni ishda ko'rishamiz."},
    ]
  },
  reading:{
    title:"Kelasi zamonning ikki shakli",
    ru:"В русском языке будущее время имеет две формы, и это часто вызывает трудности у изучающих язык. Составное будущее время (буду + инфинитив) используется для описания процесса или повторяющегося действия.\n\nПростое будущее время образуется от глаголов совершенного вида и обозначает завершённое действие в будущем. Например, «я буду читать» означает процесс чтения, а «я прочитаю» — что чтение будет завершено.\n\nВыбор между этими формами зависит от того, что вы хотите подчеркнуть: сам процесс или результат. Со временем, при регулярной практике, интуитивное понимание разницы приходит само собой.",
    uz:"Rus tilida kelasi zamon ikki shaklga ega, va bu tilni o'rganayotganlar uchun ko'pincha qiyinchilik tug'diradi. Murakkab kelasi zamon (буду + infinitiv) jarayon yoki takrorlanuvchi harakatni tasvirlash uchun ishlatiladi.\n\nOddiy kelasi zamon mukammal ko'rinishdagi fe'llardan yasaladi va kelajakdagi tugallangan harakatni bildiradi. Masalan, «men o'qiyman» (буду читать) o'qish jarayonini, «men o'qib chiqaman» (прочитаю) esa o'qish tugallanishini anglatadi.\n\nBu shakllar orasidan tanlash nimani ta'kidlamoqchi ekanligingizga bog'liq: jarayonning o'zimi yoki natijami. Vaqt o'tishi bilan, muntazam mashq qilish orqali, farqni intuitiv tushunish o'z-o'zidan keladi."
  },
  vocab:[
    {ru:"буду / будешь / будет", tr:"budu / budesh / budyet", uz:"bo'laman/bo'lasan/bo'ladi (kelasi)"},
    {ru:"собираться (что-то делать)", tr:"sabiratsya", uz:"niyat qilmoq, rejalashtirmoq"},
    {ru:"планировать", tr:"planiravat", uz:"rejalashtirmoq"},
    {ru:"вернуться", tr:"vernutsya", uz:"qaytmoq"},
    {ru:"выходные", tr:"vyxadnyye", uz:"dam olish kunlari"},
    {ru:"отпуск", tr:"otpusk", uz:"ta'til"},
    {ru:"следующая неделя", tr:"sleduyushaya nedelya", uz:"keyingi hafta"},
    {ru:"увидимся", tr:"uvidimsya", uz:"ko'rishguncha"},
    {ru:"в будущем году", tr:"v budushem gadu", uz:"kelasi yili"},
    {ru:"процесс / результат", tr:"protses / rezultat", uz:"jarayon / natija"},
  ]
},
{
  id:18, level:"A2", displayNum:3,
  title:"Tushum kelishigi (винительный падеж)",
  topic:"To'g'ridan-to'g'ri to'ldiruvchi, «kim/nima»ni ko'rmoq",
  rules:[
    {h:"Tushum kelishigi vazifasi", t:"Винительный падеж fe'lning to'g'ridan-to'g'ri ta'sir etuvchi ob'ektini bildiradi — «kimni?», «nimani?» savoliga javob beradi.", ex:"Я вижу книгу. — Men kitobni ko'ryapman."},
    {h:"Ayol jinsidagi otlar", t:"-а bilan tugagan ayol jinsidagi otlar tushum kelishigida -у ga o'zgaradi.", ex:"машина → Я вижу машину."},
    {h:"Erkak jinsidagi jonli/jonsiz otlar", t:"Jonsiz erkak otlar o'zgarmaydi, lekin jonli otlar (odam/hayvon) qaratqich kelishigi shakliga o'xshaydi.", ex:"Я читаю журнал (jonsiz). Я вижу брата (jonli — o'zgargan)."},
    {h:"Fe'llar bilan qo'llanishi", t:"видеть, читать, любить, покупать kabi fe'llar odatda tushum kelishigidagi to'ldiruvchini talab qiladi.", ex:"Я люблю музыку. Я покупаю хлеб."},
  ],
  exercises:[
    {type:"choice", q:"«Men mashinani ko'ryapman»:", options:["Я вижу машину","Я вижу машина"], answer:"Я вижу машину"},
    {type:"fill", q:"«Я читаю ___.» — jurnal (zhurnal so'zi, o'zgarmaydi)", answer:"журнал"},
    {type:"choice", q:"«Я вижу ___.» — akamni (jonli, brata so'zi)", options:["брата","брат"], answer:"брата"},
    {type:"fill", q:"«Я люблю ___.» — musiqa (muzyku so'zi)", answer:"музыку"},
  ],
  dialogue:{
    title:"Do'konda nima ko'ryapsiz",
    lines:[
      {who:"A", side:"left", ru:"Что ты покупаешь на рынке?", tr:"shto ty pakupayesh na rynke?", uz:"Bozorda nima sotib olyapsiz?"},
      {who:"B", side:"right", ru:"Я покупаю хлеб, молоко и яблоки.", tr:"ya pakupayu xlyeb, malako i yabloki", uz:"Non, sut va olma sotib olyapman."},
      {who:"A", side:"left", ru:"А я хочу купить новую книгу.", tr:"a ya xachu kupit novuyu knigu", uz:"Men esa yangi kitob sotib olmoqchiman."},
      {who:"B", side:"right", ru:"Какую книгу ты хочешь купить?", tr:"kakuyu knigu ty xochesh kupit?", uz:"Qanday kitob sotib olmoqchisiz?"},
      {who:"A", side:"left", ru:"Я люблю читать романы, поэтому куплю роман.", tr:"ya lyublyu chitat ramany, paetamu kuplyu raman", uz:"Men romanlarni o'qishni yaxshi ko'raman, shuning uchun roman sotib olaman."},
    ]
  },
  reading:{
    title:"Tushum kelishigini tushunish",
    ru:"Винительный падеж — один из самых важных падежей в русском языке, потому что он используется практически в каждом предложении с глаголом действия. Он показывает, на кого или на что направлено действие.\n\nОсновная сложность — различие между одушевлёнными и неодушевлёнными существительными мужского рода. Неодушевлённые существительные в винительном падеже выглядят так же, как в именительном, а одушевлённые меняются, как в родительном падеже.\n\nЛучший способ освоить этот падеж — практиковаться с частыми глаголами: видеть, любить, покупать, читать, смотреть. Составляя простые предложения с этими глаголами, вы быстро запомните правильные окончания.",
    uz:"Vинительный падеж (tushum kelishigi) rus tilidagi eng muhim kelishiklardan biri, chunki u harakat fe'li bo'lgan deyarli har bir gapda ishlatiladi. U harakat kimga yoki nimaga qaratilganini ko'rsatadi.\n\nAsosiy qiyinchilik — erkak jinsidagi jonli va jonsiz otlar orasidagi farq. Jonsiz otlar tushum kelishigida bosh kelishikdagidek ko'rinadi, jonli otlar esa qaratqich kelishigidagi kabi o'zgaradi.\n\nBu kelishikni o'zlashtirishning eng yaxshi usuli — tez-tez ishlatiladigan fe'llar bilan mashq qilish: ko'rmoq, sevmoq, sotib olmoq, o'qimoq, tomosha qilmoq. Shu fe'llar bilan oddiy gaplar tuzish orqali to'g'ri oxirlarni tezda yodlab olasiz."
  },
  vocab:[
    {ru:"видеть", tr:"vidyet", uz:"ko'rmoq"},
    {ru:"покупать", tr:"pakupat", uz:"sotib olmoq"},
    {ru:"любить", tr:"lyubit", uz:"sevmoq, yaxshi ko'rmoq"},
    {ru:"журнал", tr:"zhurnal", uz:"jurnal"},
    {ru:"роман", tr:"raman", uz:"roman"},
    {ru:"молоко", tr:"malako", uz:"sut"},
    {ru:"яблоко", tr:"yabloka", uz:"olma"},
    {ru:"кого? что?", tr:"kavo? shto?", uz:"kimni? nimani? (savol)"},
    {ru:"одушевлённый", tr:"odushevlyonniy", uz:"jonli (grammatik atama)"},
    {ru:"неодушевлённый", tr:"neodushevlyonniy", uz:"jonsiz (grammatik atama)"},
  ]
},
{
  id:19, level:"A2", displayNum:4,
  title:"Qaratqich kelishigi (родительный падеж)",
  topic:"Yo'qlik, miqdor, egalik bildirish",
  rules:[
    {h:"Yo'qlikni bildirish", t:"«Нет» so'zidan keyin ot qaratqich kelishigida keladi — bu «yo'q» ma'nosini bildirish uchun eng muhim qoida.", ex:"У меня нет времени. — Mening vaqtim yo'q."},
    {h:"Miqdorni bildirish", t:"Ko'p, oz, bir nechta kabi miqdor so'zlaridan keyin ot qaratqich kelishigida keladi.", ex:"У меня много книг. — Mening ko'p kitobim bor."},
    {h:"Egalikni bildirish", t:"«Kimning?» savolining javobi ham qaratqich kelishigida beriladi — bu ot yoki ism egasini ko'rsatadi.", ex:"Это дом моего друга. — Bu mening do'stimning uyi."},
    {h:"Otlar oxirining o'zgarishi", t:"Erkak jinsi -а/-я qo'shadi, ayol jinsi -а→-ы, -я→-и ga o'zgaradi, o'rta jins -о→-а, -е→-я ga o'zgaradi.", ex:"брат → брата, сестра → сестры, окно → окна"},
  ],
  exercises:[
    {type:"choice", q:"«Vaqtim yo'q»:", options:["У меня нет времени","У меня есть время"], answer:"У меня нет времени"},
    {type:"fill", q:"«У меня много ___.» — kitoblarim ko'p (knig so'zi)", answer:"книг"},
    {type:"choice", q:"«Do'stimning uyi»:", options:["дом моего друга","дом мой друг"], answer:"дом моего друга"},
    {type:"fill", q:"«Брат» so'zi qaratqich kelishigida qanday bo'ladi? (brata)", answer:"брата"},
  ],
  dialogue:{
    title:"Vaqt va imkoniyat haqida",
    lines:[
      {who:"A", side:"left", ru:"У тебя есть время сегодня вечером?", tr:"u tebya yest vremya sevodnya vyechyerom?", uz:"Bugun kechqurun vaqtingiz bormi?"},
      {who:"B", side:"right", ru:"К сожалению, у меня нет времени. Много работы.", tr:"k sazhaleniyu, u menya nyet vremeni. mnoga raboty", uz:"Afsuski, vaqtim yo'q. Ish ko'p."},
      {who:"A", side:"left", ru:"Понятно. А у твоего брата есть свободное время?", tr:"panyatna. a u tvayevo brata yest svabodnoye vremya?", uz:"Tushunarli. Akangizning bo'sh vaqti bormi?"},
      {who:"B", side:"right", ru:"Думаю, да. У него сегодня нет работы.", tr:"dumayu, da. u nyevo sevodnya nyet raboty", uz:"O'ylaymanki, ha. Bugun uning ishi yo'q."},
      {who:"A", side:"left", ru:"Хорошо, тогда я позвоню ему.", tr:"xarasho, togda ya pazvanyu yemu", uz:"Yaxshi, unda men unga qo'ng'iroq qilaman."},
    ]
  },
  reading:{
    title:"Qaratqich kelishigining uch asosiy vazifasi",
    ru:"Родительный падеж — один из самых часто используемых падежей в русском языке. Он выполняет три главные функции: обозначает отсутствие чего-либо, указывает на количество и показывает принадлежность.\n\nПри обозначении отсутствия конструкция «нет + родительный падеж» — одна из первых грамматических тем, которую стоит выучить наизусть, потому что она используется буквально каждый день: «нет денег», «нет времени», «нет вопросов».\n\nПри указании количества родительный падеж используется после слов «много», «мало», «несколько». А для обозначения принадлежности этот падеж отвечает на вопрос «чей?» — «дом брата», «книга сестры».",
    uz:"Rodительный падеж (qaratqich kelishigi) rus tilida eng ko'p ishlatiladigan kelishiklardan biri. U uchta asosiy vazifani bajaradi: biror narsaning yo'qligini bildiradi, miqdorni ko'rsatadi va egalikni namoyish etadi.\n\nYo'qlikni bildirishda «нет + qaratqich kelishigi» qurilmasi — yod olish kerak bo'lgan birinchi grammatik mavzulardan biri, chunki u har kuni ishlatiladi: «pul yo'q», «vaqt yo'q», «savol yo'q».\n\nMiqdorni ko'rsatishda qaratqich kelishigi «ko'p», «oz», «bir nechta» so'zlaridan keyin ishlatiladi. Egalikni bildirish uchun esa bu kelishik «kimning?» savoliga javob beradi — «akaning uyi», «opaning kitobi»."
  },
  vocab:[
    {ru:"нет времени", tr:"nyet vremeni", uz:"vaqt yo'q"},
    {ru:"нет денег", tr:"nyet dyenyeg", uz:"pul yo'q"},
    {ru:"много / мало", tr:"mnoga / mala", uz:"ko'p / oz"},
    {ru:"несколько", tr:"nyeskolka", uz:"bir nechta"},
    {ru:"чей? чья?", tr:"chey? chya?", uz:"kimning?"},
    {ru:"свободное время", tr:"svabodnoye vremya", uz:"bo'sh vaqt"},
    {ru:"позвонить", tr:"pazvanit", uz:"qo'ng'iroq qilmoq"},
    {ru:"работа", tr:"rabota", uz:"ish"},
    {ru:"вопрос", tr:"vapros", uz:"savol"},
    {ru:"принадлежность", tr:"prinadlezhnost", uz:"egalik"},
  ]
},
{
  id:20, level:"A2", displayNum:5,
  title:"O'rin-payt kelishigi (предложный падеж)",
  topic:"Joylashuv va mavzu haqida chuqurroq",
  rules:[
    {h:"«В» va «на» bilan joylashuv", t:"Predложный падеж «в» (ichida) va «на» (ustida/hududda) predloglari bilan joylashuvni bildiradi.", ex:"Я живу в Ташкенте. Книга лежит на столе."},
    {h:"Mavzu haqida gapirish («o» predlogi)", t:"«О» predlogi predложный падеж bilan «...haqida» ma'nosini beradi.", ex:"Мы говорим о работе. — Biz ish haqida gapiryapmiz."},
    {h:"Otlar oxirining o'zgarishi", t:"Ko'pchilik ot -e qo'shimchasini oladi predложный падежda, ba'zi -ий/-ие bilan tugaganlar -ии ga o'zgaradi.", ex:"город → в городе, здание → в здании"},
    {h:"Fe'l + predложный падеж", t:"думать о, говорить о, рассказывать о kabi fe'llar doimo predложный падеж bilan qo'llaniladi.", ex:"Я думаю о будущем."},
  ],
  exercises:[
    {type:"choice", q:"«Toshkentda yashayman»:", options:["Я живу в Ташкенте","Я живу в Ташкент"], answer:"Я живу в Ташкенте"},
    {type:"fill", q:"«Мы говорим ___ работе.» — haqida (o so'zi)", answer:"о"},
    {type:"choice", q:"«Kitob stolda»:", options:["Книга на столе","Книга в столе"], answer:"Книга на столе"},
    {type:"fill", q:"«Я думаю о ___.» — kelajak (budushem so'zi)", answer:"будущем"},
  ],
  dialogue:{
    title:"Shahar va mavzular haqida",
    lines:[
      {who:"A", side:"left", ru:"Где ты живёшь?", tr:"gdye ty zhivyosh?", uz:"Qayerda yashaysiz?"},
      {who:"B", side:"right", ru:"Я живу в Самарканде, в центре города.", tr:"ya zhivu v samarkande, v tsentre gorada", uz:"Men Samarqandda, shahar markazida yashayman."},
      {who:"A", side:"left", ru:"А о чём вы с друзьями говорили вчера?", tr:"a o chyom vy s druzyami govarili vchera?", uz:"Do'stlaringiz bilan kecha nima haqida gaplashdingiz?"},
      {who:"B", side:"right", ru:"Мы говорили о новой работе и о планах на лето.", tr:"my govarili o novoy rabote i o planax na leto", uz:"Yangi ish va yoz uchun rejalar haqida gaplashdik."},
      {who:"A", side:"left", ru:"Интересно! Расскажи подробнее о планах.", tr:"interesna! raskazhi padrobneye o planax", uz:"Qiziq! Rejalar haqida batafsilroq gapiring."},
    ]
  },
  reading:{
    title:"Predложный padej va uning ikki asosiy holati",
    ru:"Предложный падеж получил своё название потому, что всегда используется с предлогами и никогда — без них. Это единственный падеж в русском языке с такой особенностью.\n\nОн выполняет две основные функции: указывает место (с предлогами «в» и «на») и обозначает тему разговора или мысли (с предлогом «о»). Эти два значения совершенно разные, но используют одну и ту же падежную форму существительного.\n\nПри изучении этого падежа полезно сразу заучивать целые фразы, а не только окончания: «в городе», «на работе», «о жизни». Так грамматика запоминается естественнее, через готовые речевые блоки.",
    uz:"Predложный padej shunday nomlangan, chunki u har doim predloglar bilan ishlatiladi va ularsiz hech qachon qo'llanilmaydi. Bu rus tilida shunday xususiyatga ega yagona kelishik.\n\nU ikkita asosiy vazifani bajaradi: joyni ko'rsatadi («в» va «на» predloglari bilan) va suhbat yoki fikr mavzusini bildiradi («о» predlogi bilan). Bu ikki ma'no butunlay boshqacha, lekin otning bir xil kelishik shaklidan foydalanadi.\n\nBu kelishikni o'rganishda faqat oxirlarni emas, balki butun iboralarni yodlash foydali: «shaharda», «ishda», «hayot haqida». Shunday qilib grammatika tabiiyroq, tayyor nutq bloklari orqali yodda qoladi."
  },
  vocab:[
    {ru:"жить (где?)", tr:"zhit", uz:"yashamoq"},
    {ru:"город", tr:"gorad", uz:"shahar"},
    {ru:"говорить о...", tr:"gavarit o...", uz:"...haqida gapirmoq"},
    {ru:"думать о...", tr:"dumat o...", uz:"...haqida o'ylamoq"},
    {ru:"центр города", tr:"tsentr gorada", uz:"shahar markazi"},
    {ru:"планы на лето", tr:"plany na leto", uz:"yoz uchun rejalar"},
    {ru:"подробнее", tr:"padrobneye", uz:"batafsilroq"},
    {ru:"жизнь", tr:"zhizn", uz:"hayot"},
    {ru:"будущее", tr:"budushee", uz:"kelajak"},
    {ru:"здание", tr:"zdaniye", uz:"bino"},
  ]
},
{
  id:21, level:"A2", displayNum:6,
  title:"Odamlarni tasvirlash",
  topic:"Tashqi ko'rinish va xarakter haqida gapirish",
  rules:[
    {h:"Tashqi ko'rinishni tasvirlash", t:"«У него/неё ...» qurilmasi orqali tashqi belgilar tasvirlanadi: ko'z rangi, soch, bo'y.", ex:"У неё длинные тёмные волосы. — Uning uzun qora sochi bor."},
    {h:"Xarakter sifatlari", t:"добрый, весёлый, серьёзный, умный — xarakterni tasvirlovchi eng ko'p ishlatiladigan sifatlar.", ex:"Мой друг очень добрый и весёлый человек."},
    {h:"«Выглядеть» fe'li", t:"«Выглядеть» — tashqi ko'rinishga ega bo'lmoq, kimningdir qanday ko'rinishi haqida gapirishda ishlatiladi.", ex:"Ты сегодня хорошо выглядишь!"},
    {h:"Taqqoslash orqali tasvirlash", t:"«Он похож на...» — u ...ga o'xshaydi, deb tasvirlashning yana bir usuli.", ex:"Он похож на своего отца."},
  ],
  exercises:[
    {type:"choice", q:"«Uning uzun sochi bor»:", options:["У неё длинные волосы","Она длинные волосы"], answer:"У неё длинные волосы"},
    {type:"fill", q:"«Мой друг очень ___.» — mehribon (dobriy so'zi)", answer:"добрый"},
    {type:"choice", q:"«Bugun yaxshi ko'rinasiz»:", options:["Ты хорошо выглядишь","Ты хорошо смотришь"], answer:"Ты хорошо выглядишь"},
    {type:"fill", q:"«Он похож ___ отца.» — otasiga (na so'zi)", answer:"на"},
  ],
  dialogue:{
    title:"Yangi hamkasb haqida",
    lines:[
      {who:"A", side:"left", ru:"Какой он, твой новый коллега?", tr:"kakoy on, tvoy noviy kalyega?", uz:"U qanday odam, yangi hamkasbingiz?"},
      {who:"B", side:"right", ru:"Он высокий, у него короткие тёмные волосы. Очень серьёзный человек.", tr:"on vysokiy, u nyevo karotkiye tyomnyye volasy. ochen seryozniy chelavek", uz:"U baland bo'yli, uning qisqa qora sochi bor. Juda jiddiy odam."},
      {who:"A", side:"left", ru:"А характер у него какой?", tr:"a xarakter u nyevo kakoy?", uz:"Xarakteri qanday?"},
      {who:"B", side:"right", ru:"На самом деле он добрый, просто выглядит строгим.", tr:"na samam dyele on dobriy, prosta vyglyadit strogim", uz:"Aslida u mehribon, shunchaki qattiqqo'l ko'rinadi."},
      {who:"A", side:"left", ru:"Понятно, приятно познакомиться с ним будет.", tr:"panyatna, priyatna paznakomitsya s nim budyet", uz:"Tushunarli, u bilan tanishish yoqimli bo'ladi."},
    ]
  },
  reading:{
    title:"Odamni qanday tasvirlash mumkin",
    ru:"Описание внешности и характера человека — важная тема, которая часто встречается в разговорах о новых знакомых, коллегах или друзьях. В русском языке для этого используются разные грамматические конструкции.\n\nДля внешности часто используется конструкция «у него/неё есть...» или просто «у него/неё...»: «у неё голубые глаза», «у него высокий рост». Прилагательные при этом согласуются с описываемым существительным.\n\nПри описании характера важно помнить, что одно и то же поведение можно интерпретировать по-разному — человек может выглядеть строгим, но на самом деле быть добрым. Эта тонкость особенно полезна для более естественной, живой речи.",
    uz:"Insonning tashqi ko'rinishi va xarakterini tasvirlash — yangi tanishlar, hamkasblar yoki do'stlar haqidagi suhbatlarda tez-tez uchraydigan muhim mavzu. Rus tilida buning uchun turli grammatik qurilmalar ishlatiladi.\n\nTashqi ko'rinish uchun ko'pincha «у него/неё есть...» yoki shunchaki «у него/неё...» qurilmasi ishlatiladi: «uning ko'zlari ko'k», «uning bo'yi baland». Bunda sifatlar tasvirlanayotgan ot bilan moslashadi.\n\nXarakterni tasvirlashda bir xil xulq-atvorni turlicha talqin qilish mumkinligini yodda tutish muhim — inson qattiqqo'l ko'rinishi mumkin, lekin aslida mehribon bo'lishi mumkin. Bu nozik jihat tabiiyroq, jonli nutq uchun ayniqsa foydali."
  },
  vocab:[
    {ru:"высокий / низкий", tr:"vysokiy / nizkiy", uz:"baland bo'yli / past bo'yli"},
    {ru:"волосы (тёмные/светлые)", tr:"volasy (tyomnyye/svetlyye)", uz:"soch (qora/och rang)"},
    {ru:"глаза", tr:"glaza", uz:"ko'zlar"},
    {ru:"добрый / злой", tr:"dobriy / zloy", uz:"mehribon / yovuz"},
    {ru:"весёлый / серьёзный", tr:"vesyoliy / seryozniy", uz:"quvnoq / jiddiy"},
    {ru:"выглядеть", tr:"vyglyadet", uz:"ko'rinmoq"},
    {ru:"похож на", tr:"paxozh na", uz:"...ga o'xshaydi"},
    {ru:"строгий", tr:"strogiy", uz:"qattiqqo'l"},
    {ru:"характер", tr:"xarakter", uz:"xarakter"},
    {ru:"внешность", tr:"vneshnost", uz:"tashqi ko'rinish"},
  ]
},
{
  id:22, level:"A2", displayNum:7,
  title:"Taqqoslash darajalari",
  topic:"Sifatlarning solishtirma va orttirma darajasi",
  rules:[
    {h:"Solishtirma daraja (-ee/-ей)", t:"Ko'pchilik sifat solishtirma darajada -ee yoki -ей qo'shimchasini oladi.", ex:"быстрый → быстрее (tezroq), красивый → красивее (chiroyliroq)"},
    {h:"«Чем» bilan taqqoslash", t:"«Чем» so'zi «-dan» ma'nosini beradi, ikki narsani taqqoslashda ishlatiladi.", ex:"Он выше, чем я. — U mendan baland."},
    {h:"Istisno so'zlar", t:"хороший→лучше, плохой→хуже, большой→больше, маленький→меньше — bu sifatlar qoidadan tashqari o'zgaradi.", ex:"Этот фильм лучше, чем тот."},
    {h:"Orttirma daraja (самый)", t:"«Самый» so'zi sifatdan oldin qo'yilib, eng yuqori darajani bildiradi.", ex:"Это самый красивый город. — Bu eng chiroyli shahar."},
  ],
  exercises:[
    {type:"choice", q:"«Tezroq» so'zi:", options:["быстрее","быстрый"], answer:"быстрее"},
    {type:"fill", q:"«Он выше, ___ я.» — mendan (chem so'zi)", answer:"чем"},
    {type:"choice", q:"«Yaxshiroq» (istisno so'z):", options:["лучше","хорошее"], answer:"лучше"},
    {type:"fill", q:"«Это ___ красивый город.» — eng (samyy so'zi)", answer:"самый"},
  ],
  dialogue:{
    title:"Ikki shaharni taqqoslash",
    lines:[
      {who:"A", side:"left", ru:"Какой город тебе нравится больше — Ташкент или Самарканд?", tr:"kakoy gorad tebye nravitsya bolshye — tashkent ili samarkand?", uz:"Qaysi shahar sizga ko'proq yoqadi — Toshkentmi yoki Samarqandmi?"},
      {who:"B", side:"right", ru:"Мне кажется, Самарканд красивее, но Ташкент больше и современнее.", tr:"mnye kazhetsya, samarkand krasiveye, no tashkent bolshye i savremenneye", uz:"Menimcha, Samarqand chiroyliroq, lekin Toshkent kattaroq va zamonaviyroq."},
      {who:"A", side:"left", ru:"А какой город самый древний?", tr:"a kakoy gorad samyy drevniy?", uz:"Qaysi shahar eng qadimiy?"},
      {who:"B", side:"right", ru:"Конечно, Самарканд — один из самых древних городов в мире.", tr:"kanyeshno, samarkand — adin iz samyx drevnix garadov v mire", uz:"Albatta, Samarqand — dunyodagi eng qadimiy shaharlardan biri."},
      {who:"A", side:"left", ru:"Интересно! Надо будет там побывать.", tr:"interesna! nada budyet tam pabyvat", uz:"Qiziq! U yerga borish kerak."},
    ]
  },
  reading:{
    title:"Rus tilida taqqoslash",
    ru:"Умение сравнивать предметы, людей и места делает речь гораздо более выразительной. В русском языке для этого есть два основных инструмента: сравнительная и превосходная степень прилагательных.\n\nСравнительная степень чаще всего образуется добавлением суффикса «-ее» к основе прилагательного: быстрый → быстрее, интересный → интереснее. Однако несколько очень частых слов — хороший, плохой, большой, маленький — меняются не по правилам, и их нужно запомнить отдельно.\n\nПревосходная степень образуется с помощью слова «самый»: самый большой, самый интересный. Это один из самых простых способов выразить превосходство чего-либо на русском языке.",
    uz:"Narsalarni, odamlarni va joylarni taqqoslay olish nutqni ancha ifodali qiladi. Rus tilida buning uchun ikkita asosiy vosita bor: sifatlarning solishtirma va orttirma darajasi.\n\nSolishtirma daraja ko'pincha sifat asosiga «-ee» qo'shimchasini qo'shish orqali yasaladi: tez → tezroq, qiziqarli → qiziqarliroq. Biroq bir nechta juda tez-tez ishlatiladigan so'z — yaxshi, yomon, katta, kichik — qoidadan tashqari o'zgaradi va ularni alohida yodlash kerak.\n\nOrttirma daraja «самый» (eng) so'zi yordamida yasaladi: eng katta, eng qiziqarli. Bu rus tilida biror narsaning ustunligini ifodalashning eng oddiy usullaridan biri."
  },
  vocab:[
    {ru:"быстрее / медленнее", tr:"bystreye / medlenneye", uz:"tezroq / sekinroq"},
    {ru:"больше / меньше", tr:"bolshye / menshye", uz:"kattaroq / kichikroq"},
    {ru:"лучше / хуже", tr:"luchshe / xuzhe", uz:"yaxshiroq / yomonroq"},
    {ru:"чем", tr:"chem", uz:"...dan (taqqoslashda)"},
    {ru:"самый", tr:"samyy", uz:"eng"},
    {ru:"современный", tr:"savremenniy", uz:"zamonaviy"},
    {ru:"древний", tr:"drevniy", uz:"qadimiy"},
    {ru:"нравится", tr:"nravitsya", uz:"yoqmoq"},
    {ru:"мне кажется", tr:"mnye kazhetsya", uz:"menimcha"},
    {ru:"побывать", tr:"pabyvat", uz:"bo'lib kelmoq (tashrif)"},
  ]
},
{
  id:23, level:"A2", displayNum:8,
  title:"Modal fe'llar",
  topic:"Mumkin, kerak, xohlash, qobiliyat",
  rules:[
    {h:"«Можно» — mumkin", t:"«Можно» shaxssiz qurilma bo'lib, ruxsat yoki imkoniyatni bildiradi.", ex:"Можно войти? — Kirsam bo'ladimi?"},
    {h:"«Нужно/надо» — kerak", t:"Zaruratni bildirish uchun ishlatiladi, infinitiv bilan birga keladi.", ex:"Мне нужно идти. — Menga borish kerak."},
    {h:"«Хотеть» — xohlamoq", t:"Shaxsga qarab tuslanadi: хочу, хочешь, хочет, хотим, хотите, хотят.", ex:"Я хочу пить. — Men ichgim keladi."},
    {h:"«Мочь» — qila olmoq", t:"Qobiliyat yoki imkoniyatni bildiradi: могу, можешь, может, можем, можете, могут.", ex:"Я не могу сегодня прийти. — Bugun kela olmayman."},
  ],
  exercises:[
    {type:"choice", q:"«Kirsam bo'ladimi?»", options:["Можно войти?","Нужно войти?"], answer:"Можно войти?"},
    {type:"fill", q:"«Мне ___ идти.» — kerak (nuzhno so'zi)", answer:"нужно"},
    {type:"choice", q:"«Ichgim keladi»:", options:["Я хочу пить","Я могу пить"], answer:"Я хочу пить"},
    {type:"fill", q:"«Я не ___ сегодня прийти.» — kela olmayman (magu so'zi)", answer:"могу"},
  ],
  dialogue:{
    title:"Ruxsat va imkoniyat haqida",
    lines:[
      {who:"A", side:"left", ru:"Можно задать вопрос?", tr:"mozhna zadat vapros?", uz:"Savol bersam bo'ladimi?"},
      {who:"B", side:"right", ru:"Да, конечно, спрашивай.", tr:"da, kanyeshno, sprashivay", uz:"Ha, albatta, so'rang."},
      {who:"A", side:"left", ru:"Мне нужно уйти пораньше сегодня. Это возможно?", tr:"mnye nuzhna uyti paranshye sevodnya. eta vazmozhna?", uz:"Menga bugun ertaroq ketish kerak. Bu mumkinmi?"},
      {who:"B", side:"right", ru:"Да, можешь уйти в четыре, если закончишь работу.", tr:"da, mozhesh uyti v chyetyrye, yesli zakonchish rabotu", uz:"Ha, agar ishni tugatsangiz, soat to'rtda keta olasiz."},
      {who:"A", side:"left", ru:"Спасибо, я постараюсь!", tr:"spasiba, ya postarayus!", uz:"Rahmat, harakat qilaman!"},
    ]
  },
  reading:{
    title:"Modal fe'llarni to'g'ri qo'llash",
    ru:"Модальные слова и глаголы — можно, нужно, хотеть, мочь — используются в русском языке практически ежедневно, потому что они выражают разрешение, необходимость, желание и способность.\n\n«Можно» и «нужно» — это безличные конструкции, они не меняются по лицам и всегда используются с инфинитивом глагола. Это делает их относительно простыми для изучения по сравнению с обычными глаголами.\n\n«Хотеть» и «мочь», напротив, спрягаются по лицам, и у «хотеть» неправильное спряжение — важно выучить обе формы отдельно. Практика в диалогах — лучший способ автоматизировать использование этих слов.",
    uz:"Modal so'z va fe'llar — mumkin, kerak, xohlamoq, qila olmoq — rus tilida deyarli har kuni ishlatiladi, chunki ular ruxsat, zarurat, istak va qobiliyatni ifodalaydi.\n\n«Можно» va «нужно» — shaxssiz qurilmalar, ular shaxslarga qarab o'zgarmaydi va har doim fe'l infinitivi bilan ishlatiladi. Bu ularni oddiy fe'llarga nisbatan o'rganish uchun nisbatan osonroq qiladi.\n\n«Хотеть» va «мочь» esa, aksincha, shaxslarga qarab tuslanadi, va «хотеть» noto'g'ri tuslanishga ega — ikkala shaklni ham alohida yodlash muhim. Dialoglarda mashq qilish — bu so'zlarni ishlatishni avtomatlashtirishning eng yaxshi usuli."
  },
  vocab:[
    {ru:"можно", tr:"mozhna", uz:"mumkin"},
    {ru:"нужно / надо", tr:"nuzhna / nada", uz:"kerak"},
    {ru:"хотеть — хочу", tr:"xatyet — xachu", uz:"xohlamoq — xohlayman"},
    {ru:"мочь — могу", tr:"moch — magu", uz:"qila olmoq — qila olaman"},
    {ru:"нельзя", tr:"nelzya", uz:"mumkin emas"},
    {ru:"возможно", tr:"vazmozhna", uz:"ehtimol, mumkin"},
    {ru:"задать вопрос", tr:"zadat vapros", uz:"savol bermoq"},
    {ru:"постараться", tr:"pastaratsya", uz:"harakat qilmoq"},
    {ru:"разрешение", tr:"razresheniye", uz:"ruxsat"},
    {ru:"способность", tr:"sposobnost", uz:"qobiliyat"},
  ]
},
{
  id:24, level:"A2", displayNum:9,
  title:"Telefon suhbati va uchrashuv belgilash",
  topic:"Uchrashuvga kelishish, vaqt va joyni belgilash",
  rules:[
    {h:"Uchrashuv taklif qilish", t:"«Давай встретимся...» — keling uchrashaylik. Vaqt yoki joy qo'shib aytiladi.", ex:"Давай встретимся завтра в кафе."},
    {h:"Vaqtni tasdiqlash", t:"«Тебе удобно в...?» — senga ... vaqt qulaymi? Vaqtni kelishishda ishlatiladi.", ex:"Тебе удобно в шесть часов?"},
    {h:"Kelishuvni tasdiqlash", t:"«Договорились!» — kelishdik! Suhbatni yakunlashda ishlatiladigan qisqa ibora.", ex:"Хорошо, договорились! До встречи!"},
    {h:"Rejani o'zgartirish", t:"«Можем перенести на...?» — ...ga ko'chirsak bo'ladimi? Uchrashuvni qayta rejalashtirish uchun.", ex:"Можем перенести встречу на пятницу?"},
  ],
  exercises:[
    {type:"choice", q:"Uchrashuv taklif qilish:", options:["Давай встретимся","Давай поедем"], answer:"Давай встретимся"},
    {type:"fill", q:"«Тебе ___ в шесть?» — qulaymi (udobno so'zi)", answer:"удобно"},
    {type:"choice", q:"Kelishuvni tasdiqlash:", options:["Договорились!","Не знаю"], answer:"Договорились!"},
    {type:"fill", q:"«Можем ___ на пятницу?» — ko'chirsak (perenesti so'zi)", answer:"перенести"},
  ],
  dialogue:{
    title:"Telefon orqali uchrashuvni rejalashtirish",
    lines:[
      {who:"A", side:"left", ru:"Алло! Давай встретимся на этой неделе.", tr:"alo! davay vstretimsya na etoy nedele", uz:"Alo! Shu hafta uchrashaylik."},
      {who:"B", side:"right", ru:"Хорошо, а когда тебе удобно?", tr:"xarasho, a kagda tebye udobna?", uz:"Yaxshi, sizga qachon qulay?"},
      {who:"A", side:"left", ru:"Может, в четверг вечером? Тебе удобно в семь?", tr:"mozhet, v chetverg vyechyerom? tebye udobna v syem?", uz:"Balki, payshanba kechqurunmi? Sizga soat yettida qulaymi?"},
      {who:"B", side:"right", ru:"К сожалению, в четверг я занят. Можем перенести на пятницу?", tr:"k sazhaleniyu, v chetverg ya zanyat. mozhem perenesti na pyatnitsu?", uz:"Afsuski, payshanba kuni bandman. Jumaga ko'chirsak bo'ladimi?"},
      {who:"A", side:"left", ru:"Да, конечно! Договорились, до пятницы!", tr:"da, kanyeshno! dagavarilis, do pyatnitsy!", uz:"Ha, albatta! Kelishdik, jumagacha!"},
    ]
  },
  reading:{
    title:"Telefon orqali kelishuvlar qanday olib boriladi",
    ru:"Договориться о встрече по телефону — очень практичный навык, который пригодится в повседневной жизни. Обычно такой разговор состоит из нескольких простых шагов: предложение встретиться, обсуждение времени и подтверждение договорённости.\n\nЕсли предложенное время не подходит, вежливо предложить альтернативу — это нормальная часть разговора. Фраза «можем перенести на...» звучит гораздо вежливее, чем прямой отказ.\n\nВ конце разговора принято чётко подтвердить договорённость словом «договорились» — это помогает избежать недопонимания о том, когда и где состоится встреча.",
    uz:"Telefon orqali uchrashuv haqida kelishish — kundalik hayotda kerak bo'ladigan juda amaliy ko'nikma. Odatda bunday suhbat bir necha oddiy bosqichdan iborat: uchrashuvni taklif qilish, vaqtni muhokama qilish va kelishuvni tasdiqlash.\n\nAgar taklif qilingan vaqt mos kelmasa, muloyimlik bilan muqobil variant taklif qilish — suhbatning oddiy qismi. «...ga ko'chirsak bo'ladimi» iborasi to'g'ridan-to'g'ri rad javobidan ancha muloyimroq eshitiladi.\n\nSuhbat oxirida kelishuvni «kelishdik» so'zi bilan aniq tasdiqlash odat tusiga kirgan — bu uchrashuv qachon va qayerda bo'lishi haqida tushunmovchiliklarning oldini olishga yordam beradi."
  },
  vocab:[
    {ru:"алло", tr:"alo", uz:"alo (telefonda)"},
    {ru:"встретиться", tr:"vstretitsya", uz:"uchrashmoq"},
    {ru:"удобно / неудобно", tr:"udobna / neudobna", uz:"qulay / noqulay"},
    {ru:"занят / свободен", tr:"zanyat / svaboden", uz:"band / bo'sh"},
    {ru:"перенести", tr:"perenesti", uz:"ko'chirmoq (vaqtni)"},
    {ru:"договорились", tr:"dagavarilis", uz:"kelishdik"},
    {ru:"четверг", tr:"chetverg", uz:"payshanba"},
    {ru:"до встречи", tr:"do vstrechi", uz:"uchrashguncha"},
    {ru:"расписание", tr:"raspisaniye", uz:"jadval"},
    {ru:"подтвердить", tr:"pattverdit", uz:"tasdiqlamoq"},
  ]
},
{
  id:25, level:"A2", displayNum:10,
  title:"Fikr bildirish, rozilik va norozilik",
  topic:"O'z fikrini ifodalash, kelishmaslik, munozara",
  rules:[
    {h:"Fikr bildirish", t:"«Я думаю, что...» va «По-моему...» — mening fikrimcha, deb fikr bildirishning ikki keng tarqalgan usuli.", ex:"Я думаю, что это хорошая идея."},
    {h:"Rozilik bildirish", t:"«Я согласен(-на)» — men roziman. «Точно!» — aynan shunday! kabi qisqa rozilik iboralari.", ex:"Я полностью согласна с тобой."},
    {h:"Norozilik bildirish (muloyim)", t:"«Я не совсем согласен» — men to'liq rozi emasman. To'g'ridan-to'g'ri rad etishdan ko'ra muloyimroq.", ex:"Я не совсем согласен, у меня другое мнение."},
    {h:"Muqobil fikr taklif qilish", t:"«А что, если...» — nima bo'ladi agar...? Boshqa yechim yoki fikrni taklif qilishda ishlatiladi.", ex:"А что, если мы попробуем по-другому?"},
  ],
  exercises:[
    {type:"choice", q:"Fikr bildirish:", options:["Я думаю, что...","Я иду в..."], answer:"Я думаю, что..."},
    {type:"fill", q:"«Я полностью ___ с тобой.» — roziman (soglasna so'zi)", answer:"согласна"},
    {type:"choice", q:"Muloyim norozilik:", options:["Я не совсем согласен","Ты неправ"], answer:"Я не совсем согласен"},
    {type:"fill", q:"«А что, ___ мы попробуем по-другому?» (yesli so'zi)", answer:"если"},
  ],
  dialogue:{
    title:"Fikr almashish",
    lines:[
      {who:"A", side:"left", ru:"По-моему, нам стоит поехать на море в отпуск.", tr:"pa-moyemu, nam stoit payexat na more v otpusk", uz:"Menimcha, ta'tilda dengizga borishimiz kerak."},
      {who:"B", side:"right", ru:"Я согласна, это отличная идея!", tr:"ya soglasna, eta atlichnaya ideya!", uz:"Roziman, bu ajoyib fikr!"},
      {who:"A", side:"left", ru:"А может, поедем в горы вместо моря?", tr:"a mozhet, payedem v gory vmesta morya?", uz:"Balki dengiz o'rniga tog'larga borarmiz?"},
      {who:"B", side:"right", ru:"Я не совсем согласна, я больше люблю море.", tr:"ya ne sovsem soglasna, ya bolshye lyublyu more", uz:"Men to'liq rozi emasman, men dengizni ko'proq yaxshi ko'raman."},
      {who:"A", side:"left", ru:"Хорошо, а что, если мы поедем на море в этот раз, а в горы — в следующий?", tr:"xarasho, a shto, yesli my payedem na more v etat raz, a v gory — v sleduyushiy?", uz:"Yaxshi, nima bo'ladi, agar bu safar dengizga, keyingi safar tog'larga borsak?"},
      {who:"B", side:"right", ru:"Отличный план! Я согласна.", tr:"otlichniy plan! ya soglasna", uz:"Ajoyib reja! Men roziman."},
    ]
  },
  reading:{
    title:"Rus tilida muloyim tarzda bahslashish",
    ru:"Умение выражать согласие и несогласие вежливо — важный социальный навык в любом языке. В русском языке, как и во многих других, прямое «нет» или «ты неправ» может показаться грубым.\n\nВместо этого носители языка часто используют смягчающие фразы: «я не совсем согласен», «может быть, но...», «а что, если...». Эти конструкции позволяют выразить своё мнение, не создавая конфликта.\n\nВажно также активно слушать собеседника и предлагать компромиссы, как в примере с морем и горами. Такой подход к общению делает разговор более приятным и продуктивным для обеих сторон.",
    uz:"Rozilik va norozilikni muloyim tarzda ifodalay olish — istalgan tildagi muhim ijtimoiy ko'nikma. Rus tilida ham, ko'plab boshqa tillar kabi, to'g'ridan-to'g'ri «yo'q» yoki «siz noto'g'risiz» qo'pol tuyulishi mumkin.\n\nBuning o'rniga, ona tilida so'zlashuvchilar ko'pincha yumshatuvchi iboralarni ishlatishadi: «men to'liq rozi emasman», «balki, lekin...», «nima bo'ladi agar...». Bu qurilmalar ziddiyat yaratmasdan o'z fikrini bildirish imkonini beradi.\n\nSuhbatdoshni faol tinglash va dengiz-tog' misolidagi kabi kompromisslar taklif qilish ham muhim. Bunday muloqot yondashuvi suhbatni ikkala tomon uchun ham yoqimliroq va samaraliroq qiladi."
  },
  vocab:[
    {ru:"я думаю, что...", tr:"ya dumayu, shto...", uz:"men o'ylaymanki..."},
    {ru:"по-моему", tr:"pa-moyemu", uz:"menimcha"},
    {ru:"согласен / согласна", tr:"soglasen / soglasna", uz:"rozi (erkak/ayol)"},
    {ru:"не совсем согласен", tr:"ne sovsem soglasen", uz:"to'liq rozi emas"},
    {ru:"мнение", tr:"mneniye", uz:"fikr"},
    {ru:"а что, если...", tr:"a shto, yesli...", uz:"nima bo'ladi agar..."},
    {ru:"идея", tr:"ideya", uz:"fikr, g'oya"},
    {ru:"компромисс", tr:"kompromiss", uz:"murosa"},
    {ru:"отличная идея", tr:"atlichnaya ideya", uz:"ajoyib fikr"},
    {ru:"вместо", tr:"vmesta", uz:"o'rniga"},
  ]
},
{
  id:26, level:"B1", displayNum:1,
  title:"Jo'nalish kelishigi (дательный падеж)",
  topic:"Kimga/nimaga qaratilgan harakat, yosh bildirish",
  rules:[
    {h:"Jo'nalish kelishigi vazifasi", t:"Дательный падеж harakat kimga qaratilganini bildiradi — «kimga?», «nimaga?» savoliga javob beradi.", ex:"Я звоню другу. — Men do'stimga qo'ng'iroq qilyapman."},
    {h:"Yoshni bildirish", t:"Yoshni aytishda shaxs дательный падежda keladi: «Мне двадцать лет» — men yigirma yoshdaman (so'zma-so'z: menga yigirma yil).", ex:"Ей тридцать лет. — U o'ttiz yoshda."},
    {h:"«Нравиться» fe'li bilan", t:"«Yoqmoq» fe'li rus tilida teskari qurilishga ega — yoqqan narsa bosh kelishikda, yoqqan shaxs esa дательный падежda keladi.", ex:"Мне нравится этот фильм. — Menga bu film yoqadi."},
    {h:"Fe'llar bilan qo'llanishi", t:"звонить, писать, говорить, помогать, давать kabi fe'llar odatda дательный падежdagi to'ldiruvchi bilan keladi.", ex:"Я помогаю маме. Учитель объясняет ученикам."},
  ],
  exercises:[
    {type:"choice", q:"«Do'stimga qo'ng'iroq qilyapman»:", options:["Я звоню другу","Я звоню друга"], answer:"Я звоню другу"},
    {type:"fill", q:"«___ двадцать лет.» — men yigirma yoshdaman (Mnye so'zi)", answer:"Мне"},
    {type:"choice", q:"«Menga bu film yoqadi»:", options:["Мне нравится этот фильм","Я нравлюсь этот фильм"], answer:"Мне нравится этот фильм"},
    {type:"fill", q:"«Я помогаю ___.» — onamga (mame so'zi)", answer:"маме"},
  ],
  dialogue:{
    title:"Yordam va yoqtirish haqida",
    lines:[
      {who:"A", side:"left", ru:"Тебе нравится твоя новая работа?", tr:"tebye nravitsya tvaya novaya rabota?", uz:"Yangi ishingiz yoqyaptimi?"},
      {who:"B", side:"right", ru:"Да, очень! Мне нравится помогать людям.", tr:"da, ochyen! mnye nravitsya pamagat lyudyam", uz:"Ha, juda! Odamlarga yordam berish menga yoqadi."},
      {who:"A", side:"left", ru:"А сколько лет твоему начальнику?", tr:"a skolka lyet tvayemu nachalniku?", uz:"Rahbaringiz necha yoshda?"},
      {who:"B", side:"right", ru:"Ему, кажется, сорок пять лет. Он часто помогает новым сотрудникам.", tr:"yemu, kazhetsya, sorak pyat lyet. on chasto pamagayet novym satrudnikam", uz:"U, chamasi, qirq besh yoshda. U yangi xodimlarga tez-tez yordam beradi."},
      {who:"A", side:"left", ru:"Здорово, что у вас такая хорошая команда.", tr:"zdorova, shto u vas takaya xaroshaya kamanda", uz:"Sizda shunday yaxshi jamoa borligi ajoyib."},
    ]
  },
  reading:{
    title:"Jo'nalish kelishigining amaliy qo'llanilishi",
    ru:"Дательный падеж часто недооценивают начинающие изучать русский язык, хотя он используется в одних из самых частых конструкций — при выражении возраста, симпатии и адресата действия.\n\nОсобенность конструкции «нравиться» в том, что грамматический субъект в русском предложении — это то, что нравится, а не тот, кому нравится. Поэтому «мне нравится книга» дословно означает «книга нравится мне».\n\nЭтот же падеж используется с глаголами, которые предполагают адресата: звонить, писать, помогать, объяснять. Практикуя эти глаголы вместе с дательным падежом, вы значительно расширите разговорные возможности.",
    uz:"Dательный падеж (jo'nalish kelishigi) rus tilini o'rganayotgan boshlovchilar tomonidan ko'pincha kam baholanadi, garchi u yosh, yoqtirish va harakat qaratilgan shaxsni ifodalashda eng tez-tez ishlatiladigan qurilmalardan birida qo'llanilsa ham.\n\n«Нравиться» (yoqmoq) qurilmasining o'ziga xosligi shundaki, rus gapidagi grammatik subyekt — bu yoqqan narsa, yoqqan shaxs emas. Shuning uchun «menga kitob yoqadi» so'zma-so'z «kitob menga yoqadi» degani.\n\nShu kelishik qaratilgan shaxsni nazarda tutuvchi fe'llar bilan ham ishlatiladi: qo'ng'iroq qilmoq, yozmoq, yordam bermoq, tushuntirmoq. Bu fe'llarni jo'nalish kelishigi bilan birga mashq qilish orqali suhbatlashish imkoniyatlaringizni sezilarli kengaytirasiz."
  },
  vocab:[
    {ru:"звонить (кому?)", tr:"zvanit", uz:"qo'ng'iroq qilmoq (kimga?)"},
    {ru:"нравиться", tr:"nravitsya", uz:"yoqmoq"},
    {ru:"помогать", tr:"pamagat", uz:"yordam bermoq"},
    {ru:"объяснять", tr:"abyasnyat", uz:"tushuntirmoq"},
    {ru:"мне ... лет", tr:"mnye ... lyet", uz:"men ... yoshdaman"},
    {ru:"начальник", tr:"nachalnik", uz:"rahbar"},
    {ru:"сотрудник", tr:"satrudnik", uz:"xodim"},
    {ru:"кому? чему?", tr:"kamu? chemu?", uz:"kimga? nimaga? (savol)"},
    {ru:"давать", tr:"davat", uz:"bermoq"},
    {ru:"адресат", tr:"adresat", uz:"qaratilgan shaxs"},
  ]
},
{
  id:27, level:"B1", displayNum:2,
  title:"Qurol-vosita kelishigi (творительный падеж)",
  topic:"Kim/nima bilan, kasb bildirish, «bo'lmoq» fe'li bilan",
  rules:[
    {h:"Vosita bildirish", t:"Творительный падеж harakat qanday vosita bilan bajarilganini bildiradi — «kim bilan?», «nima bilan?».", ex:"Я пишу ручкой. — Men ruchka bilan yozaman."},
    {h:"«С» predlogi bilan birgalik", t:"«С» + творительный падеж — biror kishi bilan birga bo'lishni bildiradi.", ex:"Я иду с другом в кино. — Men do'stim bilan kinoga boryapman."},
    {h:"Kasb bildirish («быть» bilan)", t:"«Работать кем?» yoki «быть кем?» qurilmasida kasb nomi творительный падежda keladi.", ex:"Она работает врачом. — U shifokor bo'lib ishlaydi."},
    {h:"«Стать» fe'li bilan", t:"«Становиться/стать» — bo'lib qolmoq fe'li ham творительный падеж bilan qo'llaniladi.", ex:"Он хочет стать инженером. — U muhandis bo'lishni xohlaydi."},
  ],
  exercises:[
    {type:"choice", q:"«Ruchka bilan yozaman»:", options:["Я пишу ручкой","Я пишу ручка"], answer:"Я пишу ручкой"},
    {type:"fill", q:"«Я иду ___ другом.» — bilan (s so'zi)", answer:"с"},
    {type:"choice", q:"«U shifokor bo'lib ishlaydi»:", options:["Она работает врачом","Она работает врач"], answer:"Она работает врачом"},
    {type:"fill", q:"«Он хочет стать ___.» — muhandis (inzhenerom so'zi)", answer:"инженером"},
  ],
  dialogue:{
    title:"Kasb va rejalar haqida",
    lines:[
      {who:"A", side:"left", ru:"Кем ты работаешь?", tr:"kyem ty rabotayesh?", uz:"Kim bo'lib ishlaysiz?"},
      {who:"B", side:"right", ru:"Я работаю учителем в школе. А ты?", tr:"ya rabotayu uchitelem v shkole. a ty?", uz:"Men maktabda o'qituvchi bo'lib ishlayman. Sizchi?"},
      {who:"A", side:"left", ru:"Я пока студент, но хочу стать программистом.", tr:"ya paka student, no xachu stat pragrammistam", uz:"Men hozircha talabaman, lekin dasturchi bo'lishni xohlayman."},
      {who:"B", side:"right", ru:"Это отличная цель! С кем ты учишься?", tr:"eta atlichnaya tsel! s kem ty uchishsya?", uz:"Bu ajoyib maqsad! Kim bilan o'qiysiz?"},
      {who:"A", side:"left", ru:"Я учусь с друзьями из моего города.", tr:"ya uchus s druzyami iz mayevo gorada", uz:"Men shahrimdagi do'stlarim bilan o'qiyman."},
    ]
  },
  reading:{
    title:"Творительный падежning uch asosiy vazifasi",
    ru:"Творительный падеж выполняет несколько важных функций в русском языке. Во-первых, он обозначает инструмент или средство действия: «писать ручкой», «резать ножом».\n\nВо-вторых, с предлогом «с» этот падеж выражает совместность — с кем или с чем происходит действие: «идти с другом», «пить чай с молоком».\n\nВ-третьих, и это часто удивляет изучающих язык, творительный падеж используется для обозначения профессии после глаголов «быть», «работать» и «стать»: «работать врачом», «стать учителем». Это отличается от многих языков, где профессия просто называется в базовой форме.",
    uz:"Творительный падеж (qurol-vosita kelishigi) rus tilida bir nechta muhim vazifani bajaradi. Birinchidan, u harakat vositasini yoki qurolini bildiradi: «ruchka bilan yozmoq», «pichoq bilan kesmoq».\n\nIkkinchidan, «с» predlogi bilan bu kelishik birgalikni ifodalaydi — harakat kim bilan yoki nima bilan sodir bo'lishini: «do'st bilan bormoq», «sut bilan choy ichmoq».\n\nUchinchidan, va bu ko'pincha tilni o'rganayotganlarni hayratga soladi, творительный падеж «bo'lmoq», «ishlamoq» va «bo'lib qolmoq» fe'llaridan keyin kasbni bildirish uchun ishlatiladi: «shifokor bo'lib ishlamoq», «o'qituvchi bo'lmoq». Bu ko'plab tillardan farq qiladi, u yerda kasb shunchaki asosiy shaklda ataladi."
  },
  vocab:[
    {ru:"кем ты работаешь?", tr:"kyem ty rabotayesh?", uz:"kim bo'lib ishlaysiz?"},
    {ru:"стать (кем?)", tr:"stat", uz:"bo'lib qolmoq"},
    {ru:"учитель / врач", tr:"uchitel / vrach", uz:"o'qituvchi / shifokor"},
    {ru:"программист", tr:"pragrammist", uz:"dasturchi"},
    {ru:"инженер", tr:"inzhener", uz:"muhandis"},
    {ru:"с другом", tr:"s drugom", uz:"do'st bilan"},
    {ru:"цель", tr:"tsel", uz:"maqsad"},
    {ru:"студент", tr:"student", uz:"talaba"},
    {ru:"писать ручкой", tr:"pisat ruchkoy", uz:"ruchka bilan yozmoq"},
    {ru:"профессия", tr:"prafessiya", uz:"kasb"},
  ]
},
{
  id:28, level:"B1", displayNum:3,
  title:"Fe'l aspekti: mukammal va nomukammal ko'rinish",
  topic:"Совершенный va несовершенный вид farqi",
  rules:[
    {h:"Ikki aspekt nima uchun kerak", t:"Rus tilidagi har bir fe'l ikki shaklga ega: несовершенный (jarayon/takrorlanish) va совершенный (tugallangan, bir martalik harakat).", ex:"делать (jarayon) — сделать (tugallangan natija)"},
    {h:"Nomukammal ko'rinish qachon ishlatiladi", t:"Davomiy, takrorlanuvchi yoki umumiy harakatlarni bildirishda, shuningdek barcha zamonlarda ishlatiladi.", ex:"Я читал книгу два часа. — Men kitobni ikki soat o'qidim (jarayon)."},
    {h:"Mukammal ko'rinish qachon ishlatiladi", t:"Tugallangan, natijaga ega bo'lgan bir martalik harakatni bildiradi. Faqat o'tgan va kelasi zamonda bo'ladi.", ex:"Я прочитал книгу. — Men kitobni o'qib bo'ldim (natija)."},
    {h:"Prefiks orqali yasalish", t:"Ko'pchilik mukammal fe'llar nomukammal fe'lga prefiks qo'shish orqali yasaladi: писать→написать, делать→сделать, читать→прочитать.", ex:"писать → написать (yozmoq → yozib bo'lmoq)"},
  ],
  exercises:[
    {type:"choice", q:"«Kitobni o'qib bo'ldim» (natija):", options:["Я прочитал книгу","Я читал книгу"], answer:"Я прочитал книгу"},
    {type:"fill", q:"«Я ___ книгу два часа.» — jarayon (chital so'zi)", answer:"читал"},
    {type:"choice", q:"«Delat» fe'lining mukammal juftligi:", options:["сделать","поделать"], answer:"сделать"},
    {type:"fill", q:"«Писать» fe'lining mukammal shakli qanday? (napisat)", answer:"написать"},
  ],
  dialogue:{
    title:"Ish qanday bajarildi",
    lines:[
      {who:"A", side:"left", ru:"Ты написал отчёт?", tr:"ty napisal atchyot?", uz:"Hisobotni yozib bo'ldingizmi?"},
      {who:"B", side:"right", ru:"Да, я писал его весь день и наконец закончил.", tr:"da, ya pisal yevo vyes dyen i nakanets zakonchil", uz:"Ha, uni kun bo'yi yozdim va nihoyat tugatdim."},
      {who:"A", side:"left", ru:"Отлично! А ты читал новые инструкции?", tr:"otlichna! a ty chital novyye instruktsii?", uz:"Ajoyib! Yangi ko'rsatmalarni o'qidingizmi?"},
      {who:"B", side:"right", ru:"Ещё нет, но я прочитаю их завтра утром.", tr:"yesho nyet, no ya prachitayu ix zavtra utram", uz:"Hali yo'q, lekin ertaga ertalab o'qib chiqaman."},
      {who:"A", side:"left", ru:"Хорошо, дай знать, когда сделаешь это.", tr:"xarasho, day znat, kagda sdelayesh eta", uz:"Yaxshi, buni qilib bo'lganingizda xabar bering."},
    ]
  },
  reading:{
    title:"Fe'l aspekti — rus grammatikasining kaliti",
    ru:"Категория вида — одна из самых сложных, но и самых важных тем русской грамматики. Без понимания разницы между совершенным и несовершенным видом трудно точно выразить свою мысль.\n\nНесовершенный вид отвечает на вопрос «что делать?» и обозначает процесс, повторение или факт действия без акцента на результат. Совершенный вид отвечает на вопрос «что сделать?» и всегда подразумевает завершённость и результат.\n\nЛучший способ освоить эту тему — учить глаголы сразу парами: делать/сделать, писать/написать, читать/прочитать. Со временем интуиция подскажет, какой вид нужен в конкретной ситуации.",
    uz:"Fe'l ko'rinishi (vid) kategoriyasi — rus grammatikasining eng murakkab, lekin eng muhim mavzularidan biri. Mukammal va nomukammal ko'rinish orasidagi farqni tushunmasdan, o'z fikringizni aniq ifodalash qiyin.\n\nNomukammal ko'rinish «nima qilmoq?» savoliga javob beradi va natijaga urg'u bermasdan jarayon, takrorlanish yoki harakat faktini bildiradi. Mukammal ko'rinish «nima qilib bo'lmoq?» savoliga javob beradi va har doim tugallanish va natijani nazarda tutadi.\n\nBu mavzuni o'zlashtirishning eng yaxshi usuli — fe'llarni darhol juftlikda o'rganish: qilmoq/qilib bo'lmoq, yozmoq/yozib bo'lmoq, o'qimoq/o'qib chiqmoq. Vaqt o'tishi bilan intuitsiya qaysi ko'rinish kerakligini o'zi ko'rsatadi."
  },
  vocab:[
    {ru:"вид глагола", tr:"vid glagola", uz:"fe'l ko'rinishi (aspekt)"},
    {ru:"совершенный вид", tr:"savershenniy vid", uz:"mukammal ko'rinish"},
    {ru:"несовершенный вид", tr:"nesavershenniy vid", uz:"nomukammal ko'rinish"},
    {ru:"закончить", tr:"zakonchit", uz:"tugatmoq"},
    {ru:"наконец", tr:"nakanets", uz:"nihoyat"},
    {ru:"отчёт", tr:"atchyot", uz:"hisobot"},
    {ru:"инструкция", tr:"instruktsiya", uz:"ko'rsatma"},
    {ru:"процесс", tr:"protses", uz:"jarayon"},
    {ru:"результат", tr:"rezultat", uz:"natija"},
    {ru:"дать знать", tr:"dat znat", uz:"xabar bermoq"},
  ]
},
{
  id:29, level:"B1", displayNum:4,
  title:"Refleksiv fe'llar (-ся)",
  topic:"O'ziga qaratilgan harakatlar, -ся qo'shimchasi",
  rules:[
    {h:"«-Ся» qo'shimchasining ma'nosi", t:"«-Ся» (undoshdan keyin) yoki «-сь» (unlidan keyin) fe'lga qo'shilib, harakat egaga qaytishini yoki o'zaro bo'lishini bildiradi.", ex:"мыть (yuvmoq) → мыться (yuvinmoq)"},
    {h:"O'zaro harakat bildirish", t:"Ba'zi «-ся» fe'llar ikki yoki undan ortiq kishi orasidagi o'zaro harakatni bildiradi.", ex:"встречаться — uchrashmoq (bir-biri bilan)"},
    {h:"Doimiy holat bildirish", t:"Ba'zi «-ся» fe'llar doimiy xususiyat yoki holatni bildiradi va «-ся»siz shakli boshqa ma'noda ishlatiladi.", ex:"начинаться (boshlanmoq) — Урок начинается в девять."},
    {h:"Eng ko'p ishlatiladigan «-ся» fe'llar", t:"учиться (o'qimoq), нравиться (yoqmoq), заниматься (shug'ullanmoq), одеваться (kiyinmoq), волноваться (xavotirlanmoq).", ex:"Я учусь в университете. Я волнуюсь перед экзаменом."},
  ],
  exercises:[
    {type:"choice", q:"«Yuvinmoq» rus tilida:", options:["мыться","мыть"], answer:"мыться"},
    {type:"fill", q:"«Урок ___ в девять.» — boshlanadi (nachinayetsya so'zi)", answer:"начинается"},
    {type:"choice", q:"«Universitetda o'qiyman»:", options:["Я учусь в университете","Я учу в университете"], answer:"Я учусь в университете"},
    {type:"fill", q:"«Я ___ перед экзаменом.» — xavotirlanaman (volnuyus so'zi)", answer:"волнуюсь"},
  ],
  dialogue:{
    title:"Ertalabki reja va imtihon oldidan",
    lines:[
      {who:"A", side:"left", ru:"Во сколько ты обычно просыпаешься?", tr:"va skolka ty abychno prasypayeshsya?", uz:"Odatda soat nechada uyg'onasiz?"},
      {who:"B", side:"right", ru:"Я просыпаюсь в семь, потом умываюсь и одеваюсь.", tr:"ya prasypayus v syem, patom umyvayus i adevayus", uz:"Men soat yettida uyg'onaman, keyin yuvinaman va kiyinaman."},
      {who:"A", side:"left", ru:"А ты готовишься к экзамену?", tr:"a ty gatovishsya k ekzamenu?", uz:"Imtihonga tayyorlanyapsizmi?"},
      {who:"B", side:"right", ru:"Да, немного волнуюсь, но занимаюсь каждый день.", tr:"da, nemnoga volnuyus, no zanimayus kazhdiy dyen", uz:"Ha, biroz xavotirlanaman, lekin har kuni shug'ullanyapman."},
      {who:"A", side:"left", ru:"Не волнуйся, у тебя всё получится!", tr:"nye valnuysya, u tebya vsyo paluchitsya!", uz:"Xavotirlanmang, hammasi bo'ladi!"},
    ]
  },
  reading:{
    title:"«-Ся» qo'shimchasi orqasidagi mantiq",
    ru:"Возвратные глаголы с частицей «-ся» часто вызывают затруднения, потому что они не всегда буквально переводятся как «действие на себя». Важно понимать разные значения этой частицы.\n\nВ некоторых случаях «-ся» действительно указывает на возвратное действие: мыть кого-то → мыться (мыть себя). В других случаях он обозначает взаимность: встречать кого-то → встречаться (встречать друг друга).\n\nЕсть также глаголы, где «-ся» просто меняет значение слова или делает его непереходным: начинать что-то → начинаться (само по себе). Такие глаголы лучше запоминать как отдельные слова, а не пытаться логически выводить их значение каждый раз.",
    uz:"«-Ся» zarrachasi bilan qaytish (refleksiv) fe'llar ko'pincha qiyinchilik tug'diradi, chunki ular har doim ham so'zma-so'z «o'ziga qaratilgan harakat» deb tarjima qilinmaydi. Bu zarrachaning turli ma'nolarini tushunish muhim.\n\nBa'zi hollarda «-ся» haqiqatan ham qaytish harakatini bildiradi: kimnidir yuvmoq → yuvinmoq (o'zini yuvmoq). Boshqa hollarda u o'zarolikni bildiradi: kimnidir kutib olmoq → uchrashmoq (bir-birini kutib olmoq).\n\nShuningdek, «-ся» shunchaki so'zning ma'nosini o'zgartiradigan yoki uni o'timsiz qiladigan fe'llar ham bor: biror narsani boshlamoq → boshlanmoq (o'zi bilan). Bunday fe'llarni har safar ma'nosini mantiqiy chiqarishga urinishdan ko'ra, alohida so'z sifatida yodlash yaxshiroqdir."
  },
  vocab:[
    {ru:"просыпаться", tr:"prasypatsya", uz:"uyg'onmoq"},
    {ru:"одеваться", tr:"adevatsya", uz:"kiyinmoq"},
    {ru:"учиться", tr:"uchitsya", uz:"o'qimoq (ta'lim olmoq)"},
    {ru:"заниматься", tr:"zanimatsya", uz:"shug'ullanmoq"},
    {ru:"волноваться", tr:"valnavatsya", uz:"xavotirlanmoq"},
    {ru:"встречаться", tr:"vstrechatsya", uz:"uchrashmoq"},
    {ru:"готовиться", tr:"gatovitsya", uz:"tayyorgarlik ko'rmoq"},
    {ru:"начинаться / заканчиваться", tr:"nachinatsya / zakanchivatsya", uz:"boshlanmoq / tugamoq"},
    {ru:"экзамен", tr:"ekzamen", uz:"imtihon"},
    {ru:"получится", tr:"paluchitsya", uz:"bo'ladi, chiqadi (natija)"},
  ]
},
{
  id:30, level:"B1", displayNum:5,
  title:"Bilvosita nutq (kimdir aytdi, ki...)",
  topic:"Boshqa odam so'zlarini uzatish, savollarni bilvosita berish",
  rules:[
    {h:"«Что» bilan bilvosita gap", t:"«Он сказал, что...» — u aytdi, ki... Kesim gap boshqa odam gapini uzatishda ishlatiladi.", ex:"Она сказала, что придёт завтра. — U aytdi, ki ertaga keladi."},
    {h:"Bilvosita savol («ли» bilan)", t:"Ha/yo'q savolini bilvosita berishda «ли» yuklamasi ishlatiladi.", ex:"Я спросил, придёт ли он. — Men u kelar-kelmasligini so'radim."},
    {h:"Savol so'zlari bilan bilvosita savol", t:"Kim, nima, qachon kabi savol so'zlari bilvosita savolda o'zgarishsiz saqlanadi.", ex:"Я не знаю, когда начинается фильм."},
    {h:"Zamon mosligi", t:"Rus tilida, ingliz tilidan farqli o'laroq, bilvosita nutqda zamon o'zgarmaydi — asl gapdagi zamon saqlanadi.", ex:"Он сказал: «Я работаю» → Он сказал, что он работает."},
  ],
  exercises:[
    {type:"choice", q:"«U ertaga kelishini aytdi»:", options:["Она сказала, что придёт завтра","Она сказала придёт завтра"], answer:"Она сказала, что придёт завтра"},
    {type:"fill", q:"«Я спросил, придёт ___ он.» — -mikan (li so'zi)", answer:"ли"},
    {type:"choice", q:"«Film qachon boshlanishini bilmayman»:", options:["Я не знаю, когда начинается фильм","Я не знаю когда фильм"], answer:"Я не знаю, когда начинается фильм"},
    {type:"fill", q:"Rus tilida bilvosita nutqda zamon o'zgaradimi yoki saqlanadimi?", answer:"saqlanadi"},
  ],
  dialogue:{
    title:"Xabarni uzatish",
    lines:[
      {who:"A", side:"left", ru:"Ты видел Анну? Она сказала, что хочет с тобой поговорить.", tr:"ty vidyel annu? ana skazala, shto xochet s taboy pagavarit", uz:"Annani ko'rdingizmi? U siz bilan gaplashmoqchi ekanini aytdi."},
      {who:"B", side:"right", ru:"Нет, не видел. А она сказала, о чём хочет поговорить?", tr:"nyet, ne vidyel. a ana skazala, o chyom xochet pagavarit?", uz:"Yo'q, ko'rmadim. U nima haqida gaplashmoqchi ekanini aytdimi?"},
      {who:"A", side:"left", ru:"Она не сказала точно, но спросила, свободен ли ты завтра.", tr:"ana ne skazala tochno, no sprasila, svaboden li ty zavtra", uz:"U aniq aytmadi, lekin ertaga bo'shmisiz deb so'radi."},
      {who:"B", side:"right", ru:"Хорошо, я напишу ей и спрошу, во сколько ей удобно.", tr:"xarasho, ya napishu yey i sprashu, va skolka yey udobna", uz:"Yaxshi, unga yozib, soat nechada unga qulayligini so'rayman."},
    ]
  },
  reading:{
    title:"Bilvosita nutqning oson qoidalari",
    ru:"Косвенная речь — важная тема для тех, кто хочет свободно пересказывать чужие слова. Хорошая новость в том, что в русском языке эта тема проще, чем во многих других европейских языках.\n\nГлавное правило — время глагола не меняется, в отличие от английского языка. Если человек сказал «я работаю», в косвенной речи это остаётся «он сказал, что работает», а не превращается в прошедшее время.\n\nДля передачи вопросов без вопросительного слова используется частица «ли», которая ставится после глагола. Вопросы со словами «что», «когда», «где» просто переносятся в косвенную речь без изменений структуры.",
    uz:"Bilvosita nutq — boshqalarning gaplarini erkin qayta hikoya qilishni istaganlar uchun muhim mavzu. Yaxshi xabar shundaki, rus tilida bu mavzu ko'plab boshqa yevropa tillariga qaraganda osonroq.\n\nAsosiy qoida — fe'l zamoni o'zgarmaydi, ingliz tilidan farqli o'laroq. Agar odam «men ishlayapman» desa, bilvosita nutqda bu «u ishlayotganini aytdi» bo'lib qoladi, o'tgan zamonga aylanmaydi.\n\nSavol so'zisiz savollarni uzatish uchun fe'ldan keyin qo'yiladigan «ли» zarrachasi ishlatiladi. «Nima», «qachon», «qayerda» kabi so'zli savollar esa tuzilishni o'zgartirmasdan bilvosita nutqqa shunchaki ko'chiriladi."
  },
  vocab:[
    {ru:"сказать, что...", tr:"skazat, shto...", uz:"...ligini aytmoq"},
    {ru:"спросить, ли...", tr:"sprasit, li...", uz:"...mikan deb so'ramoq"},
    {ru:"пересказать", tr:"pereskazat", uz:"qayta hikoya qilmoq"},
    {ru:"косвенная речь", tr:"kosvennaya rech", uz:"bilvosita nutq"},
    {ru:"точно", tr:"tochna", uz:"aniq"},
    {ru:"свободен ли", tr:"svaboden li", uz:"bo'sh yoki yo'q"},
    {ru:"передать", tr:"peredat", uz:"yetkazmoq, uzatmoq"},
    {ru:"вопрос", tr:"vapros", uz:"savol"},
    {ru:"структура", tr:"struktura", uz:"tuzilma"},
    {ru:"поговорить", tr:"pagavarit", uz:"gaplashmoq"},
  ]
},
{
  id:31, level:"B1", displayNum:6,
  title:"Shart mayli",
  topic:"Agar... bo'lsa qurilmasi, orzu va faraz bildirish",
  rules:[
    {h:"Real shart («если» + hozirgi/kelasi)", t:"Amalga oshishi mumkin bo'lgan shartlarda «если» oddiy hozirgi yoki kelasi zamon bilan ishlatiladi.", ex:"Если будет время, я приду. — Agar vaqt bo'lsa, kelaman."},
    {h:"Norealal shart («бы» zarrachasi)", t:"Amalga oshmagan yoki oshmaydigan shartlarda fe'l o'tgan zamon shaklida + «бы» zarrachasi ishlatiladi.", ex:"Если бы у меня было время, я бы пришёл. — Agar vaqtim bo'lganida, kelgan bo'lardim."},
    {h:"Orzu bildirish («хотел(а) бы»)", t:"«Бы» zarrachasi orzu yoki muloyim so'rov bildirishda ham ishlatiladi.", ex:"Я хотел бы поехать в Москву. — Men Moskvaga borishni xohlagan bo'lardim."},
    {h:"Maslahat berish («на твоём месте»)", t:"«На твоём месте я бы...» — sening o'rningda bo'lganimda men... — maslahat berishning muloyim usuli.", ex:"На твоём месте я бы отдохнул."},
  ],
  exercises:[
    {type:"choice", q:"Real shart:", options:["Если будет время, я приду","Если бы было время, я бы пришёл"], answer:"Если будет время, я приду"},
    {type:"fill", q:"«Если ___ у меня было время, я бы пришёл.» (by so'zi)", answer:"бы"},
    {type:"choice", q:"Muloyim orzu bildirish:", options:["Я хотел бы поехать","Я хочу поехать сейчас"], answer:"Я хотел бы поехать"},
    {type:"fill", q:"«На твоём ___ я бы отдохнул.» — o'ringda (meste so'zi)", answer:"месте"},
  ],
  dialogue:{
    title:"Faraz va maslahat",
    lines:[
      {who:"A", side:"left", ru:"Если у тебя будет свободное время в субботу, давай сходим в музей.", tr:"yesli u tebya budyet svabodnoye vremya v subbotu, davay sxodim v muzey", uz:"Agar shanba kuni bo'sh vaqtingiz bo'lsa, muzeyga borsak."},
      {who:"B", side:"right", ru:"С удовольствием. Если бы не работа, я бы уже давно там побывал.", tr:"s udavolstviyem. yesli by nye rabota, ya by uzhye davno tam pabyval", uz:"Mamnuniyat bilan. Agar ish bo'lmaganida, allaqachon u yerga borgan bo'lardim."},
      {who:"A", side:"left", ru:"Понимаю. Кстати, я хотел бы посоветоваться с тобой кое о чём.", tr:"panimayu. kstati, ya xatyel by pasavetavatsya s taboy koye o chyom", uz:"Tushunaman. Aytgancha, siz bilan bir narsa haqida maslahatlashmoqchi edim."},
      {who:"B", side:"right", ru:"Конечно, слушаю тебя.", tr:"kanyeshna, slushayu tebya", uz:"Albatta, sizni eshityapman."},
      {who:"A", side:"left", ru:"На твоём месте, ты бы сменил работу или остался?", tr:"na tvayom myeste, ty by smenil rabotu ili astalsya?", uz:"Sizning o'rningizda bo'lsam, ishni almashtirar edingizmi yoki qolar edingizmi?"},
    ]
  },
  reading:{
    title:"Shart mayli qanday farq qiladi",
    ru:"Условное наклонение в русском языке образуется на удивление просто по сравнению с некоторыми другими языками — используется всего одна форма прошедшего времени с частицей «бы», независимо от того, о каком времени идёт речь.\n\nВажно различать реальные и нереальные условия. Реальное условие — то, что вполне может произойти — выражается без «бы»: «если будет время, я приду». Нереальное условие — то, что не произошло или вряд ли произойдёт — требует «бы»: «если бы было время, я бы пришёл».\n\nЧастица «бы» также широко используется для вежливых просьб и советов: «я хотел бы», «не могли бы вы», «на твоём месте я бы». Это придаёт речи мягкость и вежливость.",
    uz:"Rus tilida shart mayli boshqa ba'zi tillarga qaraganda ajablanarli darajada oddiy yasaladi — qaysi zamon haqida gap ketayotganidan qat'i nazar, faqat bitta o'tgan zamon shakli «бы» zarrachasi bilan ishlatiladi.\n\nReal va norealal shartlarni farqlash muhim. Real shart — sodir bo'lishi mumkin bo'lgan narsa — «бы»siz ifodalanadi: «agar vaqt bo'lsa, kelaman». Norealal shart — sodir bo'lmagan yoki sodir bo'lishi dargumon bo'lgan narsa — «бы»ni talab qiladi: «agar vaqt bo'lganida, kelgan bo'lardim».\n\n«Бы» zarrachasi muloyim so'rovlar va maslahatlar uchun ham keng qo'llaniladi: «xohlagan bo'lardim», «mumkinmi», «sening o'rningda men». Bu nutqqa yumshoqlik va xushmuomalalik beradi."
  },
  vocab:[
    {ru:"если бы", tr:"yesli by", uz:"agar...bo'lganida"},
    {ru:"хотел(а) бы", tr:"xatyel(a) by", uz:"xohlagan bo'lardim"},
    {ru:"на твоём месте", tr:"na tvayom myeste", uz:"sening o'rningda"},
    {ru:"посоветоваться", tr:"pasavetavatsya", uz:"maslahatlashmoq"},
    {ru:"сменить работу", tr:"smenit rabotu", uz:"ishni almashtirmoq"},
    {ru:"остаться", tr:"astatsya", uz:"qolmoq"},
    {ru:"кое о чём", tr:"koye o chyom", uz:"bir narsa haqida"},
    {ru:"условие", tr:"usloviye", uz:"shart"},
    {ru:"реальный / нереальный", tr:"realniy / nerealniy", uz:"real / norealal"},
    {ru:"вежливо", tr:"vezhliva", uz:"muloyimlik bilan"},
  ]
},
{
  id:32, level:"B1", displayNum:7,
  title:"Maqsad va sabab bildirish",
  topic:"Чтобы, потому что, поэтому qurilmalari",
  rules:[
    {h:"«Потому что» — sababni bildirish", t:"«Потому что» — chunki, sababni bildiruvchi bog'lovchi, savol «почему?» ga javob beradi.", ex:"Я не пришёл, потому что был болен. — Kelmadim, chunki kasal edim."},
    {h:"«Поэтому» — natijani bildirish", t:"«Поэтому» — shuning uchun, oldingi gapning natijasini bildiradi.", ex:"Я был болен, поэтому не пришёл. — Kasal edim, shuning uchun kelmadim."},
    {h:"«Чтобы» — maqsadni bildirish", t:"«Чтобы» + infinitiv (bir xil subyekt) yoki + o'tgan zamon (turli subyekt) — maqsadni bildiradi.", ex:"Я учу русский, чтобы работать в России."},
    {h:"«Чтобы» ikki subyekt bilan", t:"Agar harakat qiluvchi va maqsad egasi turli shaxs bo'lsa, «чтобы»dan keyin fe'l o'tgan zamon shaklida keladi.", ex:"Я дал ему книгу, чтобы он прочитал её."},
  ],
  exercises:[
    {type:"choice", q:"Sababni bildirish:", options:["потому что","поэтому"], answer:"потому что"},
    {type:"fill", q:"«Я был болен, ___ не пришёл.» — shuning uchun (poetomu so'zi)", answer:"поэтому"},
    {type:"choice", q:"«Rus tilini o'rganyapman, Rossiyada ishlash uchun»:", options:["Я учу русский, чтобы работать в России","Я учу русский, потому что работать в России"], answer:"Я учу русский, чтобы работать в России"},
    {type:"fill", q:"«Я дал ему книгу, чтобы он ___ её.» — o'qishi uchun (prochital so'zi)", answer:"прочитал"},
  ],
  dialogue:{
    title:"Sabab va maqsad haqida suhbat",
    lines:[
      {who:"A", side:"left", ru:"Почему ты изучаешь русский язык?", tr:"pachemu ty izuchayesh russkiy yazyk?", uz:"Nega rus tilini o'rganyapsiz?"},
      {who:"B", side:"right", ru:"Я изучаю его, чтобы найти хорошую работу в IT-компании.", tr:"ya izuchayu yevo, shtoby nayti xaroshuyu rabotu v ay-ti kampanii", uz:"Men IT kompaniyasida yaxshi ish topish uchun o'rganyapman."},
      {who:"A", side:"left", ru:"Понятно. А почему ты выбрал именно эту профессию?", tr:"panyatna. a pachemu ty vybral imenna etu prafessiyu?", uz:"Tushunarli. Nega aynan shu kasbni tanladingiz?"},
      {who:"B", side:"right", ru:"Потому что мне нравится решать сложные задачи, поэтому я выбрал программирование.", tr:"patamu shto mnye nravitsya reshat slozhnyye zadachi, poetamu ya vybral pragrammiravaniye", uz:"Chunki menga murakkab masalalarni yechish yoqadi, shuning uchun dasturlashni tanladim."},
      {who:"A", side:"left", ru:"Отличный выбор!", tr:"otlichniy vybar!", uz:"Ajoyib tanlov!"},
    ]
  },
  reading:{
    title:"Sabab-natija va maqsad qurilmalarini farqlash",
    ru:"Различие между «потому что» и «поэтому» — базовая, но важная грамматическая тема. «Потому что» вводит причину и отвечает на вопрос «почему», а «поэтому» вводит следствие и переводится как «поэтому, из-за этого».\n\nЧастая ошибка — путать порядок этих слов в предложении. «Потому что» ставится перед причиной, а «поэтому» — перед следствием, поэтому их нельзя менять местами без изменения смысла.\n\nКонструкция «чтобы» немного сложнее, потому что после неё используется либо инфинитив, либо прошедшее время глагола — в зависимости от того, один и тот же субъект выполняет оба действия или разные. Эта конструкция особенно полезна для выражения целей и мотивации.",
    uz:"«Потому что» (chunki) va «поэтому» (shuning uchun) orasidagi farq — asosiy, lekin muhim grammatik mavzu. «Потому что» sababni kiritadi va «nega» savoliga javob beradi, «поэтому» esa natijani kiritadi va «shuning uchun, shu sababli» deb tarjima qilinadi.\n\nTez-tez uchraydigan xato — bu so'zlarning gapdagi tartibini aralashtirib yuborish. «Потому что» sababdan oldin, «поэтому» esa natijadan oldin qo'yiladi, shuning uchun ularning o'rnini almashtirib bo'lmaydi, aks holda ma'no o'zgaradi.\n\n«Чтобы» qurilmasi biroz murakkabroq, chunki undan keyin infinitiv yoki fe'lning o'tgan zamon shakli ishlatiladi — bu ikkala harakatni bir xil subyekt bajarayotganiga yoki turli subyektlarga bog'liq. Bu qurilma maqsad va motivatsiyani ifodalash uchun ayniqsa foydali."
  },
  vocab:[
    {ru:"потому что", tr:"patamu shto", uz:"chunki"},
    {ru:"поэтому", tr:"paetamu", uz:"shuning uchun"},
    {ru:"чтобы", tr:"shtoby", uz:"...uchun (maqsad)"},
    {ru:"причина", tr:"prichina", uz:"sabab"},
    {ru:"следствие", tr:"sledstviye", uz:"natija, oqibat"},
    {ru:"изучать", tr:"izuchat", uz:"o'rganmoq"},
    {ru:"найти работу", tr:"nayti rabotu", uz:"ish topmoq"},
    {ru:"решать задачи", tr:"reshat zadachi", uz:"masalalarni yechmoq"},
    {ru:"выбрать", tr:"vybrat", uz:"tanlamoq"},
    {ru:"мотивация", tr:"motivatsiya", uz:"motivatsiya"},
  ]
},
{
  id:33, level:"B1", displayNum:8,
  title:"Sifatdoshlar (причастие) — tanishuv",
  topic:"Fe'l va sifat xususiyatlarini birlashtiruvchi so'z shakli",
  rules:[
    {h:"Причастие nima", t:"Причастие — fe'ldan yasalgan, lekin sifat kabi otni aniqlaydigan so'z shakli. «Qilayotgan», «qilingan» kabi ma'nolarni beradi.", ex:"читающий человек — o'qiyotgan odam"},
    {h:"Harakatchi причастие (-ущий/-ющий)", t:"Hozirgi zamonda harakatni bajarayotgan shaxs/narsani bildiradi.", ex:"работающий — ishlayotgan, читающий — o'qiyotgan"},
    {h:"Passiv причастие (-нный/-тый)", t:"Harakat ta'sirida bo'lgan, tugallangan narsani bildiradi — o'zbekchadagi «-lgan» ga mos keladi.", ex:"написанный — yozilgan, сделанный — qilingan"},
    {h:"Kundalik nutqda soddalashtirish", t:"So'zlashuv nutqida причастие o'rniga ko'pincha «который» bilan ergash gap ishlatiladi — bu osonroq va tabiiyroq.", ex:"человек, который читает (o'qiydigan odam) = читающий человек"},
  ],
  exercises:[
    {type:"choice", q:"«Ishlayotgan odam»:", options:["работающий человек","работал человек"], answer:"работающий человек"},
    {type:"fill", q:"«___ книга» — yozilgan kitob (napisannaya so'zi)", answer:"написанная"},
    {type:"choice", q:"Sodda so'zlashuv shakli:", options:["человек, который читает","читающий человек"], answer:"человек, который читает"},
    {type:"fill", q:"«Сделанный» so'zi qanday ma'noni beradi?", answer:"qilingan"},
  ],
  dialogue:{
    title:"Loyiha haqida (причастие bilan va soddalashtirilgan)",
    lines:[
      {who:"A", side:"left", ru:"Ты видел отчёт, написанный вчера?", tr:"ty vidyel atchyot, napisanniy vchera?", uz:"Kecha yozilgan hisobotni ko'rdingizmi?"},
      {who:"B", side:"right", ru:"Ты имеешь в виду отчёт, который написала Марина?", tr:"ty imyeyesh v vidu atchyot, katoriy napisala marina?", uz:"Marina yozgan hisobotni nazarda tutyapsizmi?"},
      {who:"A", side:"left", ru:"Да, именно его. Там интересующие нас цифры.", tr:"da, imenna yevo. tam interesuyushiye nas tsifry", uz:"Ha, aynan o'shani. U yerda bizni qiziqtirgan raqamlar bor."},
      {who:"B", side:"right", ru:"Хорошо, я найду человека, работающего над этим проектом, и спрошу у него.", tr:"xarasho, ya naydu chelaveka, rabotayushevo nad etim proyektam, i sprashu u nyevo", uz:"Yaxshi, men shu loyiha ustida ishlayotgan odamni topib, undan so'rayman."},
    ]
  },
  reading:{
    title:"Причастиени qachon ishlatish kerak",
    ru:"Причастия часто встречаются в письменной и официальной речи, но в повседневном разговоре носители языка предпочитают более простую конструкцию с «который».\n\nПричастия настоящего времени (работающий, читающий) образуются от несовершенного вида и описывают текущее действие. Страдательные причастия прошедшего времени (написанный, сделанный) описывают результат завершённого действия.\n\nДля начинающих изучать этот уровень языка важно в первую очередь научиться понимать причастия при чтении, а активно использовать в речи — конструкцию с «который», которая звучит естественнее в разговоре и не требует запоминания сложных окончаний.",
    uz:"Причастиe (sifatdosh)lar yozma va rasmiy nutqda tez-tez uchraydi, lekin kundalik suhbatda ona tilida so'zlashuvchilar «который» bilan soddaroq qurilmani afzal ko'rishadi.\n\nHozirgi zamon sifatdoshlari (ishlayotgan, o'qiyotgan) nomukammal ko'rinishdan yasaladi va joriy harakatni tasvirlaydi. O'tgan zamon passiv sifatdoshlari (yozilgan, qilingan) tugallangan harakat natijasini tasvirlaydi.\n\nBu darajani o'rganayotganlar uchun birinchi navbatda o'qishda sifatdoshlarni tushunishni o'rganish muhim, nutqda esa faol ravishda «который» bilan qurilmadan foydalanish kerak — bu suhbatda tabiiyroq eshitiladi va murakkab oxirlarni yodlashni talab qilmaydi."
  },
  vocab:[
    {ru:"причастие", tr:"prichastiye", uz:"sifatdosh"},
    {ru:"который", tr:"katoriy", uz:"...gan/...ydigan (qaysi)"},
    {ru:"работающий", tr:"rabotayushiy", uz:"ishlayotgan"},
    {ru:"написанный", tr:"napisanniy", uz:"yozilgan"},
    {ru:"сделанный", tr:"sdelanniy", uz:"qilingan"},
    {ru:"интересующий", tr:"interesuyushiy", uz:"qiziqtiruvchi"},
    {ru:"иметь в виду", tr:"imyet v vidu", uz:"nazarda tutmoq"},
    {ru:"именно", tr:"imenna", uz:"aynan"},
    {ru:"проект", tr:"prayekt", uz:"loyiha"},
    {ru:"цифры", tr:"tsifry", uz:"raqamlar"},
  ]
},
{
  id:34, level:"B1", displayNum:9,
  title:"Ravishdoshlar (деепричастие) — tanishuv",
  topic:"Ikki harakatni bir gapda bog'lash",
  rules:[
    {h:"Деепричастие nima", t:"Деепричастие — asosiy harakat bilan bir vaqtda yoki undan oldin sodir bo'lgan qo'shimcha harakatni bildiradi, o'zbekchadagi «-b/-ib» ravishdoshiga mos keladi.", ex:"читая книгу — kitob o'qib (o'qiyotib)"},
    {h:"Nomukammal ko'rinishdan yasalishi (-я/-а)", t:"Nomukammal fe'llardan -я yoki -а qo'shimchasi bilan yasaladi, bir vaqtdagi harakatni bildiradi.", ex:"работать → работая (ishlab, ishlayotib)"},
    {h:"Mukammal ko'rinishdan yasalishi (-в/-вши)", t:"Mukammal fe'llardan -в qo'shimchasi bilan yasaladi, asosiy harakatdan oldin sodir bo'lgan harakatni bildiradi.", ex:"сделать → сделав — qilib bo'lgach"},
    {h:"So'zlashuv nutqida soddalashtirish", t:"Kundalik nutqda деепричастие o'rniga ko'pincha ikkita alohida gap yoki «и» bog'lovchisi bilan ishlatiladi.", ex:"Слушая музыку, я готовлю ужин. = Я слушаю музыку и готовлю ужин."},
  ],
  exercises:[
    {type:"choice", q:"«Ishlab» (jarayon, bir vaqtda):", options:["работая","работав"], answer:"работая"},
    {type:"fill", q:"«___ книгу, я отдыхаю.» — o'qib (chitaya so'zi)", answer:"Читая"},
    {type:"choice", q:"«Qilib bo'lgach» (avval tugagan):", options:["сделав","делая"], answer:"сделав"},
    {type:"fill", q:"Деепричастие asosiy harakat bilan qanday munosabatda bo'ladi — bir vaqtda yoki undan oldin?", answer:"oldin yoki bir vaqtda"},
  ],
  dialogue:{
    title:"Ikkita harakatni bog'lash",
    lines:[
      {who:"A", side:"left", ru:"Что ты обычно делаешь, слушая музыку?", tr:"shto ty abychna delayesh, slushaya muzyku?", uz:"Musiqa tinglab, odatda nima qilasiz?"},
      {who:"B", side:"right", ru:"Читая книгу, я часто слушаю спокойную музыку.", tr:"chitaya knigu, ya chasta slushayu spakoynuyu muzyku", uz:"Kitob o'qib, ko'pincha xotirjam musiqa tinglayman."},
      {who:"A", side:"left", ru:"А закончив работу, что ты делаешь вечером?", tr:"a zakonchiv rabotu, shto ty delayesh vyechyeram?", uz:"Ishni tugatgach, kechqurun nima qilasiz?"},
      {who:"B", side:"right", ru:"Придя домой, я обычно готовлю ужин и отдыхаю.", tr:"pridya damoy, ya abychna gatovlyu uzhin i atdyxayu", uz:"Uyga kelib, odatda kechki ovqat tayyorlayman va dam olaman."},
    ]
  },
  reading:{
    title:"Деепричастие qanday ish ko'radi",
    ru:"Деепричастие позволяет объединить два действия в одном предложении, показывая, что они происходят одновременно или одно после другого. Это делает речь более компактной и литературной.\n\nВажно различать два типа: деепричастия несовершенного вида (читая, работая) описывают действие, происходящее одновременно с главным, а деепричастия совершенного вида (сделав, прочитав) описывают действие, которое произошло раньше главного.\n\nВ разговорной речи деепричастия используются реже, чем в письменной, потому что носители языка часто предпочитают просто два отдельных предложения или конструкцию с «и». Тем не менее, понимание деепричастий важно для чтения книг, статей и официальных текстов.",
    uz:"Ravishdosh (деепричастие) bir gapda ikkita harakatni birlashtirish imkonini beradi, ular bir vaqtda yoki biri ikkinchisidan keyin sodir bo'lganini ko'rsatadi. Bu nutqni ixchamroq va adabiyroq qiladi.\n\nIkki turini farqlash muhim: nomukammal ko'rinish ravishdoshlari (o'qib, ishlab) asosiy harakat bilan bir vaqtda sodir bo'layotgan harakatni tasvirlaydi, mukammal ko'rinish ravishdoshlari (qilib bo'lgach, o'qib bo'lgach) esa asosiy harakatdan oldin sodir bo'lgan harakatni tasvirlaydi.\n\nSo'zlashuv nutqida ravishdoshlar yozma nutqqa qaraganda kamroq ishlatiladi, chunki ona tilida so'zlashuvchilar ko'pincha shunchaki ikkita alohida gap yoki «и» bilan qurilmani afzal ko'rishadi. Shunga qaramay, ravishdoshlarni tushunish kitoblar, maqolalar va rasmiy matnlarni o'qish uchun muhim."
  },
  vocab:[
    {ru:"деепричастие", tr:"deyeprichastiye", uz:"ravishdosh"},
    {ru:"слушая", tr:"slushaya", uz:"tinglab (jarayon)"},
    {ru:"читая", tr:"chitaya", uz:"o'qib (jarayon)"},
    {ru:"сделав", tr:"sdyelav", uz:"qilib bo'lgach"},
    {ru:"придя", tr:"pridya", uz:"kelib (avval tugagan)"},
    {ru:"закончив", tr:"zakonchiv", uz:"tugatgach"},
    {ru:"одновременно", tr:"odnovremenno", uz:"bir vaqtda"},
    {ru:"спокойный", tr:"spakoyniy", uz:"xotirjam"},
    {ru:"литературный", tr:"literaturniy", uz:"adabiy"},
    {ru:"компактный", tr:"kompaktniy", uz:"ixcham"},
  ]
},
{
  id:35, level:"B1", displayNum:10,
  title:"Murakkab muhokama va bahs yuritish",
  topic:"Dalil keltirish, qarshi fikr bildirish, uzr so'rash",
  rules:[
    {h:"Dalil keltirish", t:"«Во-первых..., во-вторых..., наконец...» — birinchidan, ikkinchidan, nihoyat — fikrlarni tartib bilan ifodalash.", ex:"Во-первых, это дорого. Во-вторых, это долго."},
    {h:"Qarshi dalil keltirish", t:"«С одной стороны..., с другой стороны...» — bir tomondan..., ikkinchi tomondan... — ikki xil nuqtai nazarni taqqoslash.", ex:"С одной стороны, это удобно, с другой — дорого."},
    {h:"Rasmiy uzr so'rash", t:"«Приношу свои извинения за...» — ...uchun uzr so'rayman, rasmiy va chuqur uzrni bildiradi.", ex:"Приношу свои извинения за задержку ответа."},
    {h:"Muzokarada murosaga kelish", t:"«Давайте найдём золотую середину» — kelinglar oltin o'rtachani topaylik — murosaga chorlash iborasi.", ex:"Может, найдём золотую середину в этом вопросе?"},
  ],
  exercises:[
    {type:"choice", q:"Fikrlarni tartib bilan aytish:", options:["Во-первых... во-вторых...","Может быть... не знаю..."], answer:"Во-первых... во-вторых..."},
    {type:"fill", q:"«С одной ___, это удобно.» — tomondan (storony so'zi)", answer:"стороны"},
    {type:"choice", q:"Rasmiy uzr so'rash:", options:["Приношу свои извинения","Извини, я забыл"], answer:"Приношу свои извинения"},
    {type:"fill", q:"«Давайте найдём золотую ___.» — o'rtacha (seredinu so'zi)", answer:"середину"},
  ],
  dialogue:{
    title:"Ish yig'ilishida munozara",
    lines:[
      {who:"A", side:"left", ru:"Я считаю, что нам стоит изменить стратегию. Во-первых, рынок изменился.", tr:"ya schitayu, shto nam stoit izmenit strategiyu. va-pyervyx, rynak izmenilsya", uz:"Menimcha, strategiyani o'zgartirishimiz kerak. Birinchidan, bozor o'zgardi."},
      {who:"B", side:"right", ru:"С одной стороны, я согласен. С другой — изменения потребуют больших затрат.", tr:"s adnoy staranay, ya saglasen. s drugoy — izmeneniya patrebuyut bal'shix zatrat", uz:"Bir tomondan, roziman. Ikkinchi tomondan — o'zgarishlar katta xarajat talab qiladi."},
      {who:"A", side:"left", ru:"Понимаю ваши опасения. Может, найдём золотую середину?", tr:"panimayu vashi opaseniya. mozhet, naydyom zalatuyu seredinu?", uz:"Xavotirlaringizni tushunaman. Balki oltin o'rtachani topamiz?"},
      {who:"B", side:"right", ru:"Хорошая идея. Давайте обсудим конкретные шаги.", tr:"xaroshaya ideya. davayte absudim kanketnyye shagi", uz:"Yaxshi fikr. Keling, aniq qadamlarni muhokama qilamiz."},
    ]
  },
  reading:{
    title:"Samarali muhokama olib borish san'ati",
    ru:"Умение вести аргументированную дискуссию — важный навык не только в бизнесе, но и в повседневной жизни. Структурированная речь с чёткими аргументами звучит убедительнее и профессиональнее.\n\nКонструкция «во-первых, во-вторых» помогает организовать мысли и облегчает собеседнику восприятие информации. А фраза «с одной стороны... с другой стороны...» показывает, что вы рассмотрели вопрос с разных точек зрения, что придаёт аргументации вес.\n\nВ споре важно уметь находить компромисс, а не настаивать только на своей позиции. Фраза «найти золотую середину» стала устойчивым выражением именно потому, что отражает ценность баланса между крайностями.",
    uz:"Dalillangan munozara olib bora olish — nafaqat biznesda, balki kundalik hayotda ham muhim ko'nikma. Aniq dalillar bilan tuzilgan nutq ishonarli va professional eshitiladi.\n\n«Birinchidan, ikkinchidan» qurilmasi fikrlarni tartibga solishga yordam beradi va suhbatdoshga ma'lumotni idrok etishni osonlashtiradi. «Bir tomondan... ikkinchi tomondan...» iborasi esa savolni turli nuqtai nazardan ko'rib chiqqaningizni ko'rsatadi, bu dalillarga vazn qo'shadi.\n\nBahsda faqat o'z pozitsiyasida turib olish emas, balki murosa topa olish muhim. «Oltin o'rtachani topish» iborasi aynan shuning uchun barqaror ifodaga aylangan, chunki u haddan tashqarilik orasidagi muvozanat qadriyatini aks ettiradi."
  },
  vocab:[
    {ru:"во-первых / во-вторых", tr:"va-pyervyx / va-vtaryx", uz:"birinchidan / ikkinchidan"},
    {ru:"с одной стороны", tr:"s adnoy staranay", uz:"bir tomondan"},
    {ru:"приносить извинения", tr:"prinasit izvineniya", uz:"uzr so'ramoq (rasmiy)"},
    {ru:"золотая середина", tr:"zalataya seredina", uz:"oltin o'rtacha"},
    {ru:"аргумент", tr:"argument", uz:"dalil"},
    {ru:"опасение", tr:"apaseniye", uz:"xavotir"},
    {ru:"стратегия", tr:"strategiya", uz:"strategiya"},
    {ru:"затраты", tr:"zatraty", uz:"xarajatlar"},
    {ru:"конкретный шаг", tr:"kankretniy shag", uz:"aniq qadam"},
    {ru:"дискуссия", tr:"diskussiya", uz:"munozara"},
  ]
},
];
