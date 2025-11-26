// 7. Game Development Example - Character Abilities

// Inheritance approach: Rigid hierarchy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  attack() { return `${this.name} attacks for 10 damage`; }
}

class Warrior extends Character {
  attack() { return `${this.name} swings sword for 20 damage`; }
  defend() { return `${this.name} raises shield`; }
}

class Mage extends Character {
  attack() { return `${this.name} casts fireball for 30 damage`; }
  castSpell() { return `${this.name} casts spell`; }
}

// Problem: What about a Warrior-Mage? Multiple inheritance not supported

// Composition approach: Flexible abilities
const abilities = {
  melee: {
    attack: (character) => `${character.name} swings for 15 damage`,
    defend: (character) => `${character.name} blocks with shield`
  },

  magic: {
    attack: (character) => `${character.name} casts spell for 25 damage`,
    castSpell: (character) => `${character.name} casts magic missile`
  },

  stealth: {
    attack: (character) => `${character.name} backstabs for 35 damage`,
    hide: (character) => `${character.name} vanishes into shadows`
  }
};

function createCharacter(name, abilityNames) {
  const character = { name, health: 100 };

  abilityNames.forEach(abilityName => {
    Object.assign(character, abilities[abilityName]);
  });

  return character;
}

// Now we can create any combination!
const warrior = createCharacter('Conan', ['melee']);
const mage = createCharacter('Merlin', ['magic']);
const assassin = createCharacter('Shadow', ['stealth']);
const battleMage = createCharacter('Gandalf', ['melee', 'magic']); // Flexible!

console.log(warrior.attack());     // Conan swings for 15 damage
console.log(battleMage.attack());  // Gandalf swings for 15 damage (melee wins)
console.log(battleMage.castSpell()); // Gandalf casts magic missile

/*
Edge Cases:
- Ability conflicts: Last assigned wins (can be feature or bug)
- Ability dependencies: Some abilities might need others
- Dynamic ability changes: Add/remove abilities at runtime

Interview Tip: Composition shines when you need flexible, runtime-configurable behavior
Real-world: Game development, plugin systems, user-customizable features
*/
