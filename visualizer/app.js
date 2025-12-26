const canvas = document.getElementById("mindmap");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = { x: canvas.width / 2, y: canvas.height / 2 };

const signature = {
  shape: "spiral-tree",
  density: "dense-core_sparse-periphery",
  motion: "expansion_then_compression"
};

function drawCore() {
  ctx.beginPath();
  ctx.arc(center.x, center.y, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#9aa4ff";
  ctx.fill();
}

function drawBranches() {
  for (let i = 0; i < 12; i++) {
    const angle = i * (Math.PI / 6);
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(
      center.x + Math.cos(angle) * 220,
      center.y + Math.sin(angle) * 220
    );
    ctx.strokeStyle = "rgba(200,200,255,0.35)";
    ctx.stroke();
  }
}
function handleLLMInput(rawText, filename) {
  if (filename.endsWith(".json")) {
    try {
      const data = JSON.parse(rawText);
      const extractedText = extractChatGPTText(data);
      handleLLMLog(extractedText);
    } catch (e) {
      alert("Invalid JSON file. Could not parse.");
    }
  } else {
    handleLLMLog(rawText);
  }
}

drawCore();
drawBranches();
