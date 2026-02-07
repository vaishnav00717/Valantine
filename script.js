// NO button running away 😏
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 80;
  const y = Math.random() * 80;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});

// YES button celebration ❤️
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#ffb6c1;
      text-align:center;
      font-family:Poppins,sans-serif;
    ">
      <h1>Yayyy Sreenandha 💕<br>I knew it 😘</h1>
    </div>
  `;
});