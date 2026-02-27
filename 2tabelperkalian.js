function genMultiplicationTable(n) {
    for(let i = 1;i <= n;i++) {
        let baris = "";

        for(let j = 1; j <= n;j++){
            baris += (i*j) + " ";
        }
        console.log(baris);
    }
}


genMultiplicationTable(5);
