function spacjowanie() {
    let dot = adres.value;
    dot = dot.replaceAll(" ",".");
    adres.value = dot;
}
function spacjowaniePoTrzechLiczbach(){
  let dot2 =
}




function Oblicz() {

    let _adres = adres.value;

    let q1 = _adres.slice(0,3);
    let q2 = _adres.slice(4,7);
    let q3 = _adres.slice(8,11);
    let q4 = _adres.slice(12,15);

    // var q1=document.getElementById('q1').value;
    // var q2=document.getElementById('q2').value;
    // var q3=document.getElementById('q3').value;
    // var q4=document.getElementById('q4').value;

    var _maska=document.getElementById('maska').value;
    //validate input value
    if(
        (q1>=0 && q1<=255) &&
        (q2>=0 && q2<=255) &&
        (q3>=0 && q3<=255) &&
        (q4>=0 && q4<=255) &&
        (_maska>=0 && _maska<=32)
    )
        {
        //display IP address
        document.getElementById('resIP').innerHTML=q1 + "." + q2 + "." + q3 + "." + q4;

        //get IP Address binaries
        var ipBin={};
        ipBin[1]=String("00000000"+parseInt(q1,10).toString(2)).slice(-8);
        ipBin[2]=String("00000000"+parseInt(q2,10).toString(2)).slice(-8);
        ipBin[3]=String("00000000"+parseInt(q3,10).toString(2)).slice(-8);
        ipBin[4]=String("00000000"+parseInt(q4,10).toString(2)).slice(-8);

        //decide standard class
        var standardClass="";
        if(q1<=126) {
            standardClass="A";
        } else if (q1==127) {
            standardClass="loopback IP"
        } else if (q1>=128 && q1<=191) {
            standardClass="B";
        }else if (q1>=192 && q1<=223) {
            standardClass="C";
        }else if (q1>=224 && q1<=239) {
            standardClass="D (Multicast Address)";
        }else if (q1>=240 && q1<=225) {
            standardClass="E (Experimental)";
        }else {
            standardClass="Out of range";
        }

        //netmask
        var mask=_maska;
        var importantBlock=Math.ceil(mask/8);
        var importantBlockBinary=ipBin[importantBlock];
        var maskBinaryBlockCount=mask%8;

        if(maskBinaryBlockCount==0)importantBlock++;

        var maskBinaryBlock="";
        var maskBlock="";

        for(var i=1;i<=8;i++){
            if(maskBinaryBlockCount>=i){
                maskBinaryBlock+="1";
            }else{
                maskBinaryBlock+="0";
            }
        }
        //convert binary mask block to decimal
        maskBlock=parseInt(maskBinaryBlock,2);

        //net & broadcast addr
        var netBlockBinary="";
        var bcBlockBinary="";

        for(var i=1;i<=8;i++){
            if(maskBinaryBlock.substr(i-1,1)=="1"){
                netBlockBinary+=importantBlockBinary.substr(i-1,1);
                bcBlockBinary+=importantBlockBinary.substr(i-1,1);
            }else{
                netBlockBinary+="0";
                bcBlockBinary+="1";
            }
        }

        //put everything together, create a string container variables
        var mask="";
        var maskBinary="";
        var net="";
        var bc="";
        var netBinary="";
        var bcBinary="";
        var rangeA="";
        var rangeB="";

        //loop to put whole strings block together
        for(var i=1;i<=4;i++){
            if(importantBlock>i) {
                //blocks before the important block.
                mask+="255";
                maskBinary+="11111111";
                netBinary+=ipBin[i];
                bcBinary+=ipBin[i];
                net+=parseInt(ipBin[i],2);
                bc+=parseInt(ipBin[i],2);
                rangeA+=parseInt(ipBin[i],2);
                rangeB+=parseInt(ipBin[i],2);
            } else if (importantBlock==i) {
            //the important block.
                mask+=maskBlock;
                maskBinary+=maskBinaryBlock;
                netBinary+=netBlockBinary;
                bcBinary+=bcBlockBinary;
                net+=parseInt(netBlockBinary,2);
                bc+=parseInt(bcBlockBinary,2);
                rangeA+=(parseInt(netBlockBinary,2)+1);
                rangeB+=(parseInt(bcBlockBinary,2)-1);
            } else {
            //block after the important block.
                mask+=0;
                maskBinary+="00000000";
                netBinary+="00000000";
                bcBinary+="11111111";
                net+="0";
                bc+="255";
                rangeA+=0;
                rangeB+=255;
            }
            //add . separator except the last block
            if(i<4){
                mask+=".";
                maskBinary+=".";
                netBinary+=".";
                bcBinary+=".";
                net+=".";
                bc+=".";
                rangeA+=".";
                rangeB+=".";
            }
        }
        //write the results to the page.
        document.getElementById('resMask').innerHTML=mask;
        document.getElementById('resNet').innerHTML=net;
        document.getElementById('resBC').innerHTML=bc;
        document.getElementById('resRange').innerHTML=rangeA + " - " + rangeB;
        document.getElementById('resBinIP').innerHTML=ipBin[1]+"."+ipBin[2]+"."+ipBin[3]+"."+ipBin[4];
        document.getElementById('resBinMask').innerHTML=maskBinary;
        document.getElementById('resBinNet').innerHTML=netBinary;
        document.getElementById('resBinBC').innerHTML=bcBinary;
        document.getElementById('resClass').innerHTML=standardClass;
    } else{
        alert("invalid value");
    }
}



// function zamiana(){
//     let tekst=pole.value;
//     const szukana=prompt("Podaj szukany wyraz");
//     const zmiana=prompt("Podaj na co zamienaimy");
//     tekst=tekst.replaceAll(szukana,zmiana);
//     pole.value=tekst;
//     }