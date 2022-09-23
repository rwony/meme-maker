const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(360, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 150, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(270, 150, 8, Math.PI, 2 * Math.PI);
ctx.arc(310, 150, 8, Math.PI, 2 * Math.PI);
ctx.fill();
