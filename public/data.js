alert("Halo. Aku ada pertanyaan nih :)");
welcomeBox();

function welcomeBox() {
  const inputan = prompt("Kenalan dulu. Kamu siapa namanya?", "");
  if (inputan != NaN) {
    alert(`Oh, ${inputan}. Salam kenal ya!.`);
    questionBox();
  } else {
    alert("Kayaknya salah ya, coba lagi deh..");
    return;
  }
}

function questionBox() {
  alert("Oke, pertanyaannya tuh gini.");
  const q1 = prompt("Sayur-sayur apa yang dingin? ").toLowerCase();
  if (q1 == "kembang cold") {
    window.location.href = "./true.html";
    alert("Selamat!");
  } else {
    window.location.href = "./false.html";
    alert("Yah, jawabannya salah");
  }
}
