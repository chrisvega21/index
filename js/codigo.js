function mostrar(){
    let xv = document.getElementById("txtrut").value;
    let xpre = 0;
    switch (xv){
        case "1":
            xpre = 20.00;
            break;
        case "2":
            xpre = 25.00;
            break;
        case "3":
            xpre = 30.00;
            break;
        case "4":
            xpre = 40.00;
            break;
    }
    document.getElementById("txtpre").value = xpre;
}



function calcular(){
    let xcan = parseInt(document.getElementById("txtcan").value);
    let xprecio = parseInt(document.getElementById("txtpre").value);
    let xaumento = document.getElementById("txtser").value;
    let num = 0;
    switch (xaumento){
        case "1":
            num = 0;
            break;
        case "2":
            num = xprecio * 0.10;
            break;
        case "3":
            num = xprecio * 0.15;
            break;
    }
    
    if (xcan >= 3){
        xcan = xcan - 1;
    }
    
    let total = (xcan * xprecio + num);
    let dolares = (total / 3.15).toFixed(2);

    document.getElementById("txtsoles").value = total;
    document.getElementById("txtdolares").value = dolares;

}
function imprimir(){
    window.print();
}
function limpiar(){
    document.getElementById("txtfecha").value = "";
    document.getElementById("txtdni").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtrut").value = "";
    document.getElementById("txtpre").value = "";
    document.getElementById("txtcan").value = "";
    document.getElementById("txtser").value = "";
    document.getElementById("txtmet").value = "";
    document.getElementById("txtsoles").value = "";
    document.getElementById("txtdolares").value = "";
}