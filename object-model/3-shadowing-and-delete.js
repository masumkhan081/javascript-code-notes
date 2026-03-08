const proto = { role: "user" }
const account = Object.create(proto)

console.log(account.role)   // "user"  <- inherited from proto

account.role = "admin"
console.log(account.role)   // "admin" <- own property shadows proto

delete account.role
console.log(account.role)   // "user"  <- own property gone, proto visible again

// Shadowing: own property hides inherited property of the same name.
// Deleting the own property un-shadows the prototype value.
// Interview trap: delete does NOT remove the prototype property.
//   delete proto.role would remove it from the prototype.
// Real-world: prototype pollution attacks create shadow properties on Object.prototype.
