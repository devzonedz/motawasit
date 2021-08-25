const express = require("express");
const axios =require('axios')
const path = require("path");
const fs = require("fs");
const jsdom  = require("jsdom");
const PORT = process.env.PORT || 5003;

const app = express();
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/home", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/about", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/books", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/featured", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/books_by_category", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/books_by_series", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/furthercoming", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/ourWriters/writers", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/author/:id", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
            return console.log(err);
        }

        const dataR =  await axios
            .get(`https://elmutawassit.liverily.com/api/authors/${req.params.id}`, { headers })
            .then(result => {
                return result;
            })
        data = data
            .replace(/__TITLE__/g, dataR.data.name)
            .replace(/__DESCRIPTION__/g, dataR.data.author_bio)
            .replace(/__KEYWORDS__/g,dataR.data.name )
            .replace(/__IMAGE__/g, "https://elmutawassit.liverily.com/storage/"+dataR.data.image)
            .replace(/__URL__/g, "https://almutawassit.it/author/"+ dataR.data.id);

        res.send(data)
    });
});


app.get("/ourWriters/publishConditions", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/videos", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/podcast", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/events", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/blog", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/ourProjects/divineComedy", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/ourProjects/translationForum", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/ourProjects/arabCultureFestivalInMilan", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});

app.get("/ourProjects/literatureIsStronger", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "منشورات المتوسط")
            .replace(/__DESCRIPTION__/g, "دار نشر مستقلة ذات موقف جذري، وهي تؤسس ديناميكية في اختياراتها وآليات عملها انطلاقاً من موقفها. تنشط من مدينة ميلانو (معاً لنحارب طواحين الهواء).")
            .replace(/__KEYWORDS__/g,"منشورات المتوسط , إيطاليا , كتب , كتاب , دار نشر , بيع كتب , اقرأ , قراءة , مقتبسات , ثقافة , فلسفة , فكر , أدب , أدب مقارن , رواية , قصة , شعر , آداب , نقد , سيرة , نصوص , كتب للبيع , اقتناء كتب , ترجمة , أدب عالمي , أدب عربي , كتب قرأتها , مطالعة , مكتبة , ميلانو , كتب بالعربي , اللغة العربية , المتوسط , أدب إيطالي , الحياة الإيطالية , تعرف على إيطاليا , المطبخ الإيطالي , كرة القدم الإيطالية , أزياء إيطالية , وجبات إيطالية , عبد الفتاح كيليطو , عبد السلام بن عبد العالي , سعاد العامري , يارا الغضبان , ريكاردو بيجليا , دي لامبيدوزا , سامر أبو هواش , أمارجي , محمد الأشعري , خوان خوسيه مياس , بول أوستر , اختراع العزلة , جوزبه كاتوتسيلا , سلامة كيلة , فواز طرابلسي , أنطونيو غرامشي , إميليو سلغاري , كارل ماركس , لا تقولي إنك خائفة , المتن المجهول , أليساندرو باريكو , معرض الجثث , محمود درويش , حسن بلاسم , جون ريد , عشرة أيام هزت العالم , ثياب الإمبراطور , فوزي كريم , إدوارد سعيد , حميد دباشي , سيمفونية الموتى , نهر الزمن , القرصان الأسود , من الظل , بينوكيو , دون كيشوت ,Almutawassit Books  , almutawassit , Mediterraneo , casa editrice araba , editori arabi , mediterranean , mondo arabo , libri sul mondo arab")
            .replace(/__URL__/g, "https://almutawassit.it/")
            .replace(/__IMAGE__/g, "https://www.almutawassit.it/almutawassit.png");

        res.send(data)
    });
});


app.get("/book/:id",  (req, res) => {

    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
            return console.log(err);
        }

        const dataR =  await axios
            .get(`https://elmutawassit.liverily.com/api/books/${req.params.id}`, { headers })
            .then(result => {
                return result;
            })
        const desc = new jsdom.JSDOM(dataR.data.description)
        data = data
            .replace(/__TITLE__/g, dataR.data.title)
            .replace(/__DESCRIPTION__/g, desc.window.document.querySelector("p").textContent)
            .replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
                return  word.name.en
            }))
            .replace(/__IMAGE__/g, "https://elmutawassit.liverily.com/storage/"+dataR.data.cover)
            .replace(/__URL__/g, "https://almutawassit.it/book/"+ dataR.data.id);

        res.send(data)
    });

});



app.get("/singlePost",  (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
            return console.log(err);
        }

        const dataR =  await axios
            .get(`https://elmutawassit.liverily.com/api/articles/${req.query.id}`, { headers })
            .then(result => {
                return result;
            })
        const desc = new jsdom.JSDOM(dataR.data.body)

        data = data
            .replace(/__TITLE__/g, dataR.data.title)
            .replace(/__DESCRIPTION__/g, desc.window.document.querySelector("p").textContent)
            .replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
                return  word.name.en
            }))
            .replace(/__IMAGE__/g, "https://elmutawassit.liverily.com/storage/"+dataR.data.image)
            .replace(/__URL__/g, "https://almutawassit.it/singlePost=?/"+ dataR.data.id);

        res.send(data)
    });

});




app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
