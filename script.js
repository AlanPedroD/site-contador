
function contar(){
    let inicio = document.getElementById ('input-inicio')
    let fim = document.getElementById ('input-fim')
    let passo = document.getElementById ('input-passo')
    let res = document.getElementById ('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        alert ('[ERRO] Faltam dados')
    } else{
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert ('Passo inválido! Considerando a contagem inicial')
            p = 1
        }


        if(i < f) {
            //Contagem crescente
            for (let contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador} \u{1F60A} `    		
            }
        } else{
            //Contagen decrescente
            for (let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F60A} `    		
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }

}


