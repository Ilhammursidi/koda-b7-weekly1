function printDelay(n) {
for(let i = 1;i <= n;i++) {
    setTimeout(()=>{
        console.log(i);
    },i * 1000)
}
}

printDelay(9);