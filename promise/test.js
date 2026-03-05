

main();

async function main() {
   try {
      const result1 = await testPromise();
      console.log("result1:", JSON.stringify(result1));

      const result2 = await testPromise();
      console.log("result2:", JSON.stringify(result2));

   } catch (err) {
      console.log("result from catch::" + JSON.stringify(err.message));
   }

   testPromise().then((result3) => {
      console.log("result3:", JSON.stringify(result3));
   }).catch((err) => {
      console.log("result3:" + JSON.stringify(err));
   });

}

function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

// setTimeout-based "async work"
function testPromise() {
   const min = 900;  // ms
   const max = 1200; // ms
   const delay = getRandomArbitrary(min, max);

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (delay > 1050) {
            console.log("Long delay:", delay);
            resolve(delay); // resolve with the "result"
         }
         else {
            console.log("Short delay:", delay);
            reject(new Error("i am error")); // resolve with the "result"
         }

      }, delay);
   });
}