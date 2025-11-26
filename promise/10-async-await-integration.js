// 💡 Case 10: Promise Inside Async Function

async function fetchData() {
  const data = await Promise.resolve("Async Resolved");
  console.log(data);
}
fetchData();

/*
Expected Output:
    
Async Resolved

✅ Note: await pauses the async function until the Promise resolves — syntactic sugar over .then().
*/
