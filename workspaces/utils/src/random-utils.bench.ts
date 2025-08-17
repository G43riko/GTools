const counts = [1, 10, 100, 1000, 10000, 16384];

counts.forEach((count) => {
    Deno.bench(`Math.random() and push -${count}`, { group: `random-${count}` }, () => {
        const arr = new Array(count)
        for(let i = 0; i < count ; i++) {
            arr[i] = Math.random();
        }
    });
    Deno.bench(`Math.random() and Array.from-${count}`, { group: `random-${count}` }, () => {
        Array.from({length: count}, () => Math.random());
    });
    Deno.bench(`Crypto.getRandomValues()-${count}`, { group: `random-${count}` }, () => {
       const array = new Uint32Array(count);
        self.crypto.getRandomValues(array);
    });

})