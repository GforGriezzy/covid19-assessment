function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
let hasil;
    if(quiz.score < 7){
      hasil = "Rendah" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Pertahankan pola hidup dan teratur dengan memvariasikan aktivitas di dalam rumah agar tubuh terlatih juga ototnya. Sering berkomunikasi dengan teman atau keluarga secara online, agar imunitas tubuh bisa meningkat.</h2>"
    }else if (quiz.score < 15){
      hasil = "Sedang" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Cuci tangan sebelum dan sesudah melakukan suatu hal, biasakan langsung mandi dengan bersih setelah dari luar rumah, minimalisirkan berinteraksi secara langsung pada orang lain.</h2>"
    }else{
      hasil = "Tinggi" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Perketat social distancing, lebih sering mencuci tangan, jaga pola makan. Jika temperatur tubuh diatas rata - rata, lakukan medical check up ke rumah sakit terdekat atau bisa menghubungi layanan kesehatan."
    }
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + hasil + "<hr style='margin-bottom: 50px'><center><div class =buttons><a href=logout.php id=btn4>Logout</a><a href=homepage.php id=btn4>Repeat</a></div</center>";





    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Saya pergi keluar rumah", ["Yes", "No"], "Yes"),
    new Question("Saya menggunakan transportasi umum", ["Yes", "No"], "Yes"),
    new Question("Saya tidak memakai masker",  ["Yes", "No"], "Yes"),
    new Question("Saya berjabat tangan dengan orang lain",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak membersihkan tangan dengan hand sanitizer / tissue basah sebelum memegang kendali kendaraan",  ["Yes", "No"], "Yes"),    
    new Question("Saya menyentuh benda / uang yang juga disentuh orang lain",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak menerapkan social distancing ketika berbelanja, bekerja, belajar, ibadah",  ["Yes", "No"], "Yes"),
    new Question("Saya makan di warung / restaurant",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak minum air hangan dan mencuci tangan setelah tiba di tujuan",  ["Yes", "No"], "Yes"),
    new Question("Saya berada di wilayah kelurahan tempat pasien tertular",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak pasang hand sanitizer di depan pintu masuk rumah ",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak mencuci tangan dengan sabun setelah tiba dirumah",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak menyediakan tissue basah, masker, sabun antiseptic bagi keluarga di rumah",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak segera merendam baju & celana bekas pakai di luar rumah",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak segera mandi keramas setelah saya tiba dirumah",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak mensosialikan checklist penilaian resiko pribadi ini kepada keluarga",  ["Yes", "No"], "Yes"),
    new Question("Saya dalam sehari tidak kena cahaya matahari minimal 15 menit",  ["Yes", "No"], "Yes"),
    new Question("Saya tidak jalan kaki / berolahraga minimal 20 menit setiap hari",  ["Yes", "No"], "Yes"),
    new Question("Saya jarang minum vitamin C & E, dan kurang tidur",  ["Yes", "No"], "Yes"),
    new Question("Usia saya diatas 60 tahun",  ["Yes", "No"], "Yes"),
    new Question("Saya mempunyai penyakit jantung/diabetes/gangguan pernafasan kronis",  ["Yes", "No"], "Yes"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





