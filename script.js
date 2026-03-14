let currentLang = 'kk';

const translations = {
    'kk': { 'main_title': 'Асыл жандарға ақ тілек 🌸', 'welcome_1': '8 наурыз мерекесіне арналған тосынсыйымыз!', 'welcome_2': 'Есімдеріңізді басып, құттықтауларды оқыңыздар.', 'name_mom': 'Анашым', 'name_ruaida': 'Руайда Апа', 'name_amira': 'Амира Апа', 'name_hanin': 'Ханинтай', 'btn_back': '⬅ Артқа', 'btn_refresh': '🔄 Басқа тілек' },
    'tr': { 'main_title': 'Asil Kadınlara Tebrikler 🌸', 'welcome_1': '8 Mart için küçük bir sürprizimiz!', 'welcome_2': 'İsimlerinize tıklayarak dilekleri okuyabilirsiniz.', 'name_mom': 'Anneciğim', 'name_ruaida': 'Ruaida Abla', 'name_amira': 'Amira Abla', 'name_hanin': 'Hanincim', 'btn_back': '⬅ Geri', 'btn_refresh': '🔄 Başka Dilek' },
    'ar': { 'main_title': 'أجمل التهاني لأغلى الناس 🌸', 'welcome_1': 'مفاجأتنا بمناسبة 8 مارس!', 'welcome_2': 'اضغطوا على أسمائكم لقراءة التهاني.', 'name_mom': 'أمي الغالية', 'name_ruaida': 'رويدة أبلة', 'name_amira': 'أميرة أبلة', 'name_hanin': 'حنيني', 'btn_back': 'رجوع ➡', 'btn_refresh': 'أمنية أخرى 🔄' }
};

const wishes = {
    'Anashym': {
        'kk': ["Анашым, мерекеңізбен!", "Сіз біздің бағымызсыз!", "Жүзіңізден күлкі кетпесін!", "Әлемдегі ең сұлу ана!", "Деніңіз сау болсын!", "Бақытты болыңыз!", "Ақылшым анам!", "Мейірімді жан!", "Тірегіміз аман болсын!", "Біз сізді жақсы көреміз!"],
        'tr': ["Canım annem, bayramın kutlu olsun!", "Dünyanın en güzel annesi!", "Hep gülümse!", "Seni çok seviyoruz!", "Sağlıklı ömürler!", "Gönlün şen olsun!", "En kıymetlimiz!", "Bahar gibi neşeli kal!", "İyi ki varsın!", "Melek annem!"],
        'ar': ["أمي الغالية، عيد سعيد!", "أنتِ أجمل أم في العالم!", "لا تفارق الابتسامة وجهكِ!", "نحبكِ كثيراً!", "أتمنى لكِ دوام الصحة!", "دامت أفراحكِ!", "يا أغلى الناس!", "مثل زهور الربيع تظلين!", "أنتِ قدوتنا!", "حفظكِ الله لنا!"]
    },
    'Ruaida apa': {
        'kk': ["Руайда апа, мерекеңізбен!", "Ақылшым, тірегім!", "Жарқырап жүре беріңіз!", "Өмірдегі барлық жақсылықты тілеймін!", "Сұлулығыңыз талмас па!", "Жүзіңізден нұр кетпесін!", "Бақыттың базарында болыңыз!", "Әрқашан сәттілік серік болсын!", "Биік белестерді бағындырыңыз!", "Мерекеңіз құтты болсын!"],
        'tr': ["Ruaida abla, bayramın kutlu olsun!", "Her zaman ışılda!", "Başarıların daim olsun!", "En güzel günler seninle olsun!", "Gülüşün hiç solmasın!", "Harika bir yıl dilerim!", "Zarafetinle büyüle!", "Mutluluk hep kapında olsun!", "İyi ki varsın ablacım!", "Sevgilerimizле!"],
        'ar': ["الأخت رويدة، عيد سعيد!", "تألقي دائماً!", "أتمنى لكِ كل التوفيق!", "أجمل الأيام تنتظركِ!", "لا تذبل ابتسامتكِ أبداً!", "سنة رائعة لكِ!", "أنتِ رائعة دائماً!", "السعادة تطرق بابكِ!", "نحن فخورون بكِ!", "كل عام وأنتِ بخير!"]
    },
    'Amira apa': {
        'kk': ["Амира апа, құттықтаймын!", "Көктемгі гүлдей құлпырыңыз!", "Әр күніңіз қуанышқа толсын!", "Әлемдегі барлық сұлулық сізге!", "Мейірімді де сүйкімді болып қала беріңіз!", "Өміріңіз ертегідей болсын!", "Көздеріңіз тек бақыттан жарқырасын!", "Армандарыңыз орындалсын!", "Біз сізді мақтан тұтамыз!", "Мерекеңізбен!"],
        'tr': ["Amira abla, tebrikler!", "Bahar çiçeği gibi aç!", "Her günün neşeyле dolsun!", "Tüm güzellikler senin olsun!", "Hep böyle nazik kal!", "Hayatın masal gibi olsun!", "Gözlerin hep parlasın!", "Hayallerin gerçek olsun!", "Seninle gurur duyuyoruz!", "Mutlu bayramlar!"],
        'ar': ["الأخت أميرة، تهانينا!", "تفتحي مثل زهور الربيع!", "ليكن يومكِ مليئاً بالفرح!", "كل الجمال لكِ!", "تبقين دائماً لطيفة!", "لتكن حياتكِ مثل القصص الخيالية!", "لتلمع عيناكِ دائماً!", "لتتحقق أحلامكِ!", "نحن فخورون بكِ جداً!", "عيد سعيد!"]
    },
    'Hanin': {
        'kk': ["Ханинтай, мерекеңмен!", "Ақылды да әдемі бол!", "Сабағыңды жақсы оқы!", "Еркетайым, күліп жүр!", "Болашағың жарқын болсын!", "Арманыңдағы сыйлықтар көп болсын!", "Сен біздің мақтанышымызсың!", "Кішкентай ханшайым!", "Нәзік гүліміз!", "Бақытты бол!"],
        'tr': ["Hanincim, bayрамın kutlu olsun!", "Akıllı ve güzel ol!", "Derslerinde başarılar!", "Küçük prensesimiz!", "Geleceğin parlak olsun!", "Hediyelerin bol olsun!", "Gurur kaynağımızsın!", "Hep gülümse!", "Narin çiçeğimiz!", "Mutlu ol!"],
        'ar': ["حنيني، عيد سعيد!", "كوني ذكية وجميلة!", "بالتوفيق في دراستكِ!", "أميرتنا الصغيرة!", "ليكن مستقبلكِ مشرقاً!", "لتكن هداياكِ كثيرة!", "أنتِ فخرنا!", "ابتسمي دائماً!", "زهرتنا الرقيقة!", "كوني سعيدة!"]
    }
};

const musicTracks = { 'home': 'music/basty.mp3', 'Anashym': 'music/anashym.mp3', 'Ruaida apa': 'music/apa1.mp3', 'Amira apa': 'music/apa2.mp3', 'Hanin': 'music/karyndasym.mp3' };
const photoTracks = { 'Anashym': 'images/anashym.jpg', 'Ruaida apa': 'images/ruaida.jpg', 'Amira apa': 'images/amira.jpg', 'Hanin': 'images/hanin.jpg' };

function changeLanguage(lang) {
    currentLang = lang;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[lang][el.getAttribute('data-key')];
    });
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen.id !== 'home') refreshWish(activeScreen.id);
}

function refreshWish(pageId) {
    const target = document.getElementById(pageId);
    if (target && wishes[pageId]) {
        const wishList = wishes[pageId][currentLang];
        const wishElement = target.querySelector('.wish-text');
        
        wishElement.style.opacity = 0;
        setTimeout(() => {
            wishElement.innerText = wishList[Math.floor(Math.random() * wishList.length)];
            wishElement.style.opacity = 1;
        }, 200);
        
        // БАТЫРМАНЫ БАСҚАНДА ГҮЛДЕРДІ КӨБЕЙТУ (25 гүл)
        for(let i = 0; i < 25; i++) {
            setTimeout(createPetal, i * 40);
        }
    }
}

function openPage(pageId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        if (pageId !== 'home') {
            refreshWish(pageId);
            if (photoTracks[pageId]) document.getElementById(`img-${pageId}`).src = photoTracks[pageId];
        }
    }
    const audio = document.getElementById('bgMusic');
    if (musicTracks[pageId]) {
        audio.src = musicTracks[pageId];
        audio.play().catch(e => console.log("Play error"));
    }
}

function createPetal() {
    const icons = ['🌸', '🌷', '🌹', '🌺', '✨', '💖'];
    const p = document.createElement('div');
    p.className = 'petal';
    p.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (Math.random() * 20 + 20) + 'px';
    const dur = Math.random() * 3 + 3;
    p.style.animationDuration = dur + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000);
}

setInterval(createPetal, 1200);
window.addEventListener('load', () => openPage('home'));