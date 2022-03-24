function kropkowanie(){
    let count = 0;
    let count2 = 0;
    let text = adres.value;
    for (i=0;i<=3;i++){
        let x = text[count2];
        if (x == "." && x == " ") {
            count = 0;
            break;
        }

        if(x >= 0 && x <= 9){
            count++;
        }
    }
    
    if (count == 3) {
        text = text + ".";
        count = 0;
    }
    count2++;
    licznik.innerHTML = count;
    adres.value = text;
    }