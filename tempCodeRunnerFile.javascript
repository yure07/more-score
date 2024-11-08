fetch("http://127.0.0.1:8000/predict_emotions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        texts: ["Sunday fucks!", "I'm really sorry that I made you cry"]
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Erro:", error));
