/*
async function hash(text){
    const msgUint8 = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
*/

const dogruHash = "Aras";

function ParolaDeneme() {
    const gelenHash = document.getElementById("Parola").value;

    if(gelenHash === dogruHash){
        document.getElementById("Sifre").style.display = "none";
        document.getElementById("İcerik").style.display = "block";
    } else {
        alert("Şifre hatalı!");
    }
};







function NoteBookGit() {
    window.open("https://aras1669.github.io/Note-Book/")
}
 
function GoogleHızlıGit() {
    window.open("https://aras1669.github.io/Google-Hizli/")
}

/*
    window.open("http://127.0.0.1:5500/Google%20H%C4%B1zl%C4%B1/")
    window.open("http://127.0.0.1:5500/NoteBook/")
0225-221224062812-01210122-2801202411
*/
