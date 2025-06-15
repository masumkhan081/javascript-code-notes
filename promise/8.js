


// 🔄 Case 8: Recursively Waiting with Promises
    
function countDown(n) {
  if (n < 0) return Promise.resolve();
  return new Promise(resolve => {
    console.log(n);
    setTimeout(() => resolve(countDown(n - 1)), 500);
  });
}

countDown(3);

/*
Expected Output (1s intervals):
        
3
2
1
0

🧠 Note: You can use recursion with Promises to create delay-based logic or animations.
*/