const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

ctx.moveTo(200, 200);
ctx.lineTo(400, 400);
ctx.stroke();
