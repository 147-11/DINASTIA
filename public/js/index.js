//club
var club = new Firebase("https://console.firebase.google.com/u/1/project/dinastiaclub-4a8fb/database/dinastiaclub-4a8fb-default-rtdb/data/index/club");
var data = snapshot.val();
document.getElementById("title").textContent = data.titulo;