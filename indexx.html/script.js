// Generate Certificate Name
document.getElementById("generateBtn").addEventListener("click", () => {
  const name = document.getElementById("studentName").value.trim();
  
  if (name === "") {
    alert("Please enter a student name.");
    return;
  }

  document.getElementById("certName").textContent = name;
  document.getElementById("downloadBtn").style.display = "inline-block";
});

// Download Certificate as Image
document.getElementById("downloadBtn").addEventListener("click", () => {
  const certificate = document.getElementById("certificate");

  html2canvas(certificate).then(canvas => {
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

// Load html2canvas library
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
document.body.appendChild(script);
