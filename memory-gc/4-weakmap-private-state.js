const privateState = new WeakMap()

class Session {
  constructor(userId) {
    privateState.set(this, {
      userId,
      createdAt: Date.now()
    })
  }

  getUserId() {
    return privateState.get(this).userId
  }
}

const session = new Session("u-1")
console.log(session.getUserId())  // "u-1"

// WeakMap keys are held weakly — when the Session instance is garbage-collected,
// its entry in privateState is automatically removed. No memory leak.
// Regular Map would keep the entry alive forever (strong reference to the key).
//
// Alternative: ES2022 private class fields (#field) achieve the same privacy
// with less boilerplate and better performance.
//
// Interview: WeakMap vs Map — use WeakMap when the key lifetime should drive cleanup.
