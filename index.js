async function hash(text){
    const msgUint8 = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// ANAHTAR DOSYANIN HASH'I
const dogruHash = "e5cdb64a2b6b182c50c3ef47740e2985606d075ea82b79788b2a66583cd2ccfb";

document.getElementById("fileInput").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const text = await file.text();
    const gelenHash = await hash(text);

    if(gelenHash === dogruHash){
        document.getElementById("Şifre").style.display = "none";
        document.getElementById("icerik").style.display = "block";
    } else {
        alert("Anahtar dosyası hatalı!");
    }
});







function NoteBookGit() {
    window.open("https://aras1669.github.io/Note-Book/")
}
 
function GoogleHızlıGit() {
    window.open("https://aras1669.github.io/Google-Hizli/")
}

/*
    window.open("http://127.0.0.1:5500/Google%20H%C4%B1zl%C4%B1/")
    window.open("http://127.0.0.1:5500/NoteBook/")
*/
