const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const genderInput = document.getElementById("genderInput");
const inputSection = document.getElementById("input-section");
const quizSection = document.getElementById("quiz-section");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultSection = document.getElementById("result-section");
const resultContent = document.getElementById("resultContent");

let currentQuestionIndex = 0;
let answers = [];
let selectedGender = "";

const questions = [
  { question: "Apa makanan favoritmu?", options: ["Manis", "Pedas", "Asin", "Asam", "Daging", "Sayur"] },
  { question: "Apa warna kesukaanmu?", options: ["Biru", "Merah", "Hitam", "Putih", "Hijau", "Ungu"] },
  { question: "Tempat favoritmu?", options: ["Gunung", "Pantai", "Kamar", "Hutan", "Kota", "Kafe"] },
  { question: "Apa hobimu?", options: ["Membaca", "Bertarung", "Menulis", "Menonton", "Musik", "Olahraga"] },
  { question: "Sifat utama kamu?", options: ["Pemalu", "Pemberani", "Ceria", "Serius", "Kreatif", "Analitis"] },
  { question: "Bagaimana kamu mengambil keputusan?", options: ["Logika", "Perasaan", "Intuisi", "Diskusi", "Analisis", "Spontan"] },
  { question: "Apa ketakutan terbesarmu?", options: ["Kegagalan", "Kesepian", "Kematian", "Kehilangan", "Kegelapan", "Ketidaktahuan"] },
  { question: "Kamu lebih suka?", options: ["Sendiri", "Berdua", "Kelompok kecil", "Keramaian", "Online", "Tergantung mood"] },
  { question: "Apa mimpi terbesarmu?", options: ["Ketenangan", "Kekuatan", "Cinta", "Kesuksesan", "Petualangan", "Kebahagiaan"] },
  { question: "Peran dalam kelompok?", options: ["Pemimpin", "Pengikut", "Pemikir", "Pelaksana", "Penengah", "Pengamat"] },
  { question: "Genre film favorit?", options: ["Action", "Romantis", "Misteri", "Komedi", "Drama", "Fantasi"] },
  { question: "Musim favorit?", options: ["Semi", "Panas", "Gugur", "Dingin", "Hujan", "Semua sama"] },
  { question: "Hewan favorit?", options: ["Serigala", "Kucing", "Burung", "Ular", "Harimau", "Anjing"] },
  { question: "Bagaimana menghadapi konflik?", options: ["Hadapi langsung", "Hindari", "Diskusi", "Cari bantuan", "Diam-diam", "Emosional"] },
  { question: "Kamu lebih mengandalkan?", options: ["Logika", "Perasaan", "Pengalaman", "Intuisi", "Fakta", "Keduanya"] },
  { question: "Pilihan karir ideal?", options: ["Pemimpin", "Seniman", "Ilmuwan", "Atlet", "Pengusaha", "Pahlawan"] },
  { question: "Elemen favorit?", options: ["Api", "Air", "Angin", "Tanah", "Petir", "Es"] },
  { question: "Waktu favorit?", options: ["Pagi", "Siang", "Sore", "Malam", "Subuh", "Tidak tentu"] },
  { question: "Kamu lebih suka?", options: ["Kota besar", "Desa", "Pinggiran kota", "Pulau terpencil", "Pegunungan", "Dimana saja"] },
  { question: "Pendekatan hidup?", options: ["Terencana", "Spontan", "Seimbang", "Berpetualang", "Hedonis", "Minimalis"] }
];

const characters = {
  male: [
    {
      id: 1,
      nama: "Kiyotaka Ayanokouji 🥶",
      image: "images/1.jpg",
      sifat: "tenang, cerdas, manipulatif",
      hobby: "Mengamati orang",
      makanan: "Makanan sederhana",
      tempat: "Perpustakaan",
      genre: "Misteri",
      karir: "Pemimpin"
    },
    {
      id: 2,
      nama: "Monkey D. Luffy",
      image: "images/2.jpg",
      sifat: "ceria, bebas, setia",
      hobby: "Berpetualang",
      makanan: "Daging",
      tempat: "Pantai",
      genre: "Action",
      karir: "Petualang"
    },
    {
      id: 3,
      nama: "Levi Ackerman",
      image: "images/3.jpg",
      sifat: "disiplin, kuat, pendiam",
      hobby: "Membersihkan",
      makanan: "Teh",
      tempat: "Kamar",
      genre: "Action",
      karir: "Pemimpin"
    },
    {
      id: 4,
      nama: "Naruto Uzumaki",
      image: "images/4.jpg",
      sifat: "ceria, pantang menyerah",
      hobby: "Berlatih",
      makanan: "Ramen",
      tempat: "Desa",
      genre: "Action",
      karir: "Pemimpin"
    },
    {
      id: 5,
      nama: "Light Yagami",
      image: "images/5.jpg",
      sifat: "jenius, ambisius",
      hobby: "Merencanakan",
      makanan: "Apel",
      tempat: "Kamar",
      genre: "Misteri",
      karir: "Ilmuwan"
    },
    {
      id: 6,
      nama: "Eren Yeager",
      image: "images/6.jpg",
      sifat: "emosional, bertekad",
      hobby: "Bertarung",
      makanan: "Steak",
      tempat: "Medan perang",
      genre: "Action",
      karir: "Pemimpin"
    },
    {
      id: 7,
      nama: "Lelouch Lamperouge",
      image: "images/7.jpg",
      sifat: "strategis, karismatik",
      hobby: "Bermain catur",
      makanan: "Teh",
      tempat: "Istana",
      genre: "Drama",
      karir: "Pemimpin"
    },
    {
      id: 8,
      nama: "Gintoki Sakata",
      image: "images/8.jpg",
      sifat: "santai, humoris",
      hobby: "Baca manga",
      makanan: "Parfait",
      tempat: "Kantor odd jobs",
      genre: "Komedi",
      karir: "Pengusaha"
    },
    {
      id: 9,
      nama: "Itachi Uchiha 👿",
      image: "images/9.jpg",
      sifat: "bijaksana, penyendiri",
      hobby: "Meditasi",
      makanan: "Dango",
      tempat: "Kuil",
      genre: "Drama",
      karir: "Pemimpin"
    },
    {
      id: 10,
      nama: "Beliau Aizen 💀",
      image: "images/10.jpg",
      sifat: "tenang, cerdas, manipulatif, karismatik",
      hobby: "Membaca dan merencanakan strategi",
      makanan: "Matcha dan makanan tradisional Jepang",
      tempat: "Hueco Mundo",
      genre: "Action, Supernatural",
      karir: "Mantan Kapten Gotei 13, Tokoh Antagonis"
    },
    {
      id: 11,
      nama: "Hikigaya Hachiman",
      image: "images/11.jpg",
      sifat: "sinis, jujur, logis",
      hobby: "Mengamati dan menyendiri",
      makanan: "Roti dan teh kaleng",
      tempat: "Ruang Klub",
      genre: "Slice of Life",
      karir: "Pengamat Sosial"
    },
    {
      id: 12,
      nama: "Oreki Houtarou",
      image: "images/12.jpg",
      sifat: "pendiam, logis, hemat energi",
      hobby: "Membaca, deduksi",
      makanan: "Apapun yang praktis",
      tempat: "Perpustakaan",
      genre: "Misteri",
      karir: "Detektif Sekolah"
    },
    {
      id: 13,
      nama: "L Lawliet",
      image: "images/13.jpg",
      sifat: "jenius, eksentrik",
      hobby: "Menyelidiki kasus",
      makanan: "Kue manis",
      tempat: "Tempat gelap",
      genre: "Misteri",
      karir: "Detektif"
    }
  ],
  female: [
    {
      id: 14,
      nama: "Mikasa Ackerman",
      image: "images/14.jpg",
      sifat: "kuat, protektif",
      hobby: "Bertarung",
      makanan: "Makanan sederhana",
      tempat: "Rumah",
      genre: "Action",
      karir: "Pemimpin"
    },
    {
      id: 15,
      nama: "Hinata Hyuga",
      image: "images/15.jpg",
      sifat: "pemalu, penyayang",
      hobby: "Berlatih",
      makanan: "Ramen",
      tempat: "Taman",
      genre: "Romantis",
      karir: "Seniman"
    },
    {
      id: 16,
      nama: "Zero Two",
      image: "images/16.jpg",
      sifat: "berani, genit",
      hobby: "Bertarung",
      makanan: "Permen",
      tempat: "Pangkalan",
      genre: "Action",
      karir: "Pahlawan"
    },
    {
      id: 17,
      nama: "Rem",
      image: "images/17.jpg",
      sifat: "setia, penyayang",
      hobby: "Membersihkan",
      makanan: "Makanan ringan",
      tempat: "Rumah besar",
      genre: "Drama",
      karir: "Pelindung"
    },
    {
      id: 18,
      nama: "Saber",
      image: "images/18.jpg",
      sifat: "bangsawan, kuat",
      hobby: "Bertarung",
      makanan: "Burger",
      tempat: "Istana",
      genre: "Fantasi",
      karir: "Pahlawan"
    },
    {
      id: 19,
      nama: "Yor Forger",
      image: "images/19.jpg",
      sifat: "pendiam, mematikan",
      hobby: "Bunuh diam-diam",
      makanan: "Masakan rumah",
      tempat: "Apartemen",
      genre: "Action",
      karir: "Pengawal"
    },
    {
      id: 20,
      nama: "Asuna Yuuki",
      image: "images/20.jpg",
      sifat: "penuh semangat, setia",
      hobby: "Bermain game",
      makanan: "Masakan Jepang",
      tempat: "Dunia virtual",
      genre: "Fantasi",
      karir: "Pahlawan"
    },
    {
      id: 21,
      nama: "Violet Evergarden",
      image: "images/21.jpg",
      sifat: "pendiam, penyayang",
      hobby: "Menulis surat",
      makanan: "Kue manis",
      tempat: "Kantor pos",
      genre: "Drama",
      karir: "Penulis"
    },
    {
      id: 22,
      nama: "Nezuko Kamado",
      image: "images/22.jpg",
      sifat: "tenang, protektif",
      hobby: "Tidur",
      makanan: "Manisan",
      tempat: "Rumah",
      genre: "Fantasi",
      karir: "Pelindung"
    },
    {
      id: 23,
      nama: "Shinobu Kocho",
      image: "images/23.jpg",
      sifat: "lembut, tajam",
      hobby: "Meneliti racun",
      makanan: "Dango",
      tempat: "Hutan",
      genre: "Action",
      karir: "Ilmuwan"
    },
    {
      id: 24,
      nama: "Misa Amane",
      image: "images/24.jpg",
      sifat: "ceria, obsesif",
      hobby: "Modeling",
      makanan: "Kue dan manisan",
      tempat: "Studio",
      genre: "Misteri",
      karir: "Model"
    }
  ]
};


const cheatBtn = document.getElementById("cheatBtn");
const cheatModal = document.getElementById("cheatModal");
const cheatCode = document.getElementById("cheatCode");
const cheatOptions = document.getElementById("cheatOptions");
const submitCheatCode = document.getElementById("submitCheatCode");
const closeCheat = document.getElementById("closeCheat");


cheatBtn.addEventListener("click", () => {
  cheatModal.style.display = cheatModal.style.display === "block" ? "none" : "block";
});


closeCheat.addEventListener("click", () => {
  cheatModal.style.display = "none";
});


submitCheatCode.addEventListener("click", () => {
  if (cheatCode.value === "SayangNadira") {
    cheatOptions.style.display = "block";
    cheatCode.style.display = "none";
    submitCheatCode.style.display = "none";
    

    const cheatOptionsContainer = cheatOptions.querySelector("div");
    cheatOptionsContainer.innerHTML = "";
    

    const allCharacters = [...characters.male, ...characters.female]
      .filter(char => char.id <= 24)
      .sort((a, b) => a.id - b.id);
    
    allCharacters.forEach(char => {
      const btn = document.createElement("button");
      btn.textContent = char.id;
      btn.style.padding = "5px";
      btn.style.cursor = "pointer";
      btn.style.margin = "2px";
      btn.style.border = "1px solid #ccc";
      btn.style.borderRadius = "3px";
      
      btn.addEventListener("click", () => {

        inputSection.classList.add("hidden");
        quizSection.classList.add("hidden");
        resultSection.classList.remove("hidden");
        
        resultContent.innerHTML = `
          <div class="anime-card">
            <img src="${char.image}" alt="${char.nama}" class="character-image" onerror="this.src='https://via.placeholder.com/250x250?text=No+Image'" />
            <div class="anime-info">
              <h2>${nameInput.value || || "Anda"} mirip dengan:</h2>
              <div class="anime-title">${char.nama}</div>
              <div class="anime-details">
                <p><b>Sifat:</b> ${char.sifat}</p>
                <p><b>Hobi:</b> ${char.hobby}</p>
                <p><b>Makanan:</b> ${char.makanan}</p>
                <p><b>Tempat:</b> ${char.tempat}</p>
                ${char.genre ? `<p><b>Genre:</b> ${char.genre}</p>` : ''}
                ${char.karir ? `<p><b>Karir:</b> ${char.karir}</p>` : ''}
              </div>
              <button id="restartBtn" class="btn">Ulangi Tes</button>
            </div>
          </div>
        `;
        
        document.getElementById("restartBtn").addEventListener("click", () => {
          location.reload();
        });
        
        cheatModal.style.display = "none";
      });
      cheatOptionsContainer.appendChild(btn);
    });
  } else {
    alert("Kode cheat salah!");
  }
});

function fadeOutIn(element, callback) {
  element.style.opacity = 0;
  setTimeout(() => {
    callback();
    element.style.opacity = 1;
  }, 500);
}

function showQuestion(index) {
  fadeOutIn(questionContainer, () => {
    const q = questions[index];
    questionEl.textContent = `${index + 1}. ${q.question}`;
    optionsEl.innerHTML = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.className = "option-btn";
      btn.onclick = () => {
        answers[index] = opt;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion(currentQuestionIndex);
        } else {
          showResult();
        }
      };
      optionsEl.appendChild(btn);
    });
  });
}

function getBestMatch() {
  const pool = characters[selectedGender === "male" ? "male" : "female"];
  const scores = pool.map(char => {
    let score = 0;
    

    answers.forEach((answer, index) => {
      const ans = answer.toLowerCase();
      const question = questions[index].question.toLowerCase();

      if (question.includes("sifat") || question.includes("keputusan") || 
          question.includes("konflik") || question.includes("mengandalkan") || 
          question.includes("pendekatan")) {
        if (char.sifat.toLowerCase().includes(ans)) score += 3;
      }
      

      if (question.includes("hobi") && char.hobby.toLowerCase().includes(ans)) score += 2;
      if (question.includes("makanan") && char.makanan.toLowerCase().includes(ans)) score += 2;
      if (question.includes("tempat") && char.tempat.toLowerCase().includes(ans)) score += 2;

      if (question.includes("genre") && char.genre && char.genre.toLowerCase().includes(ans)) score += 2;
      if (question.includes("karir") && char.karir && char.karir.toLowerCase().includes(ans)) score += 2;

      if (index === 10 && char.genre && char.genre.toLowerCase().includes(ans)) score += 1;
      if (index === 15 && char.karir && char.karir.toLowerCase().includes(ans)) score += 1;
    });
    
    return { char, score };
  });

  scores.sort((a, b) => b.score - a.score);
  

  console.log("Top 3 Matches:", scores.slice(0, 3));
  

  if (scores.length > 2 && scores[0].score - scores[2].score < 3) {
    const topMatches = scores.slice(0, 3);
    return topMatches[Math.floor(Math.random() * topMatches.length)].char;
  }
  
  return scores[0].char;
}

async function showResult() {
  inputSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const match = getBestMatch();

  // Gunakan gambar lokal terlebih dahulu
  resultContent.innerHTML = `
    <div class="anime-card">
      <img src="${match.image}" alt="${match.nama}" class="character-image" 
           onerror="this.src='https://via.placeholder.com/250x250?text=No+Image'" />
      <div class="anime-info">
        <h2>${nameInput.value || "Anda"} mirip dengan:</h2>
        <div class="anime-title">${match.nama}</div>
        <div class="anime-details">
          <p><b>Sifat:</b> ${match.sifat}</p>
          <p><b>Hobi:</b> ${match.hobby}</p>
          <p><b>Makanan:</b> ${match.makanan}</p>
          <p><b>Tempat:</b> ${match.tempat}</p>
          ${match.genre ? `<p><b>Genre:</b> ${match.genre}</p>` : ''}
          ${match.karir ? `<p><b>Karir:</b> ${match.karir}</p>` : ''}
        </div>
        <button id="restartBtn" class="btn">Ulangi Tes</button>
      </div>
    </div>
  `;

  try {
    const apiUrl = `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(match.nama)}&limit=1`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.data && data.data[0]) {
      const charData = data.data[0];
      const malLink = `<a href="${charData.url}" target="_blank" class="mal-link">Lihat di MyAnimeList</a>`;
      document.querySelector(".anime-info").insertAdjacentHTML('beforeend', malLink);
    }
  } catch (error) {
    console.log("Gagal mengambil data MAL:", error);
  }

  document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
  });
}

function checkStartBtn() {
  startBtn.disabled = !(nameInput.value.trim() && genderInput.value);
}

nameInput.addEventListener("input", checkStartBtn);
genderInput.addEventListener("change", checkStartBtn);

startBtn.addEventListener("click", () => {
  selectedGender = genderInput.value;
  if (!selectedGender) {
    alert("Silakan pilih gender terlebih dahulu!");
    return;
  }
  
  answers = [];
  currentQuestionIndex = 0;
  inputSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  showQuestion(currentQuestionIndex);
});

checkStartBtn();