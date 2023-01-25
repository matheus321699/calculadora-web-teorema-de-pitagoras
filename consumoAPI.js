function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    var triangulo = request.response
    var hipotenusa = triangulo['hipotenusa'];
    return hipotenusa
}

function fazCalculo() {

    event.preventDefault()
    let url = "localhost:5000/calculo"
    let catetoOposto = document.getElementById("catetoOposto").value
    let catetoAdjacente = document.getElementById("catetoAdjacente").value
    let hipotenusa = null
    
    console.log(catetoOposto)
    console.log(hipotenusa)

    body = {
        "catetoOposto": catetoOposto,
	    "catetoAdjacente": catetoAdjacente,
	    "hipotenusa": hipotenusa
    }

    alert("Hipotenusa = " +  fazPost(url, body))
}