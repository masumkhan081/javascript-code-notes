const gems = [{
        type: 'Ruby',
        cut: false,
        value: 100,
        requiredSkill: 1
    },
    {
        type: 'Sapphire',
        cut: false,
        value: 200,
        requiredSkill: 2
    },
    {
        type: 'Opal',
        cut: false,
        value: 250,
        requiredSkill: 8
    },
    {
        type: 'Diamond',
        cut: false,
        value: 300,
        requiredSkill: 5
    }
]
const gemcuttingSkill = 4

const cutGem = gem => {
    if (gem.requiredSkill > gemcuttingSkill) {
        return
    }
    gem.value = gem.value * 3
    gem.cut = true
}

const cutGems = gems.reduce((acc, gem, index) => {
    print('Processing gem: ', gem.type)
    print('With index', index) 
    
    if (gem.type === 'Diamond') {
        // Leave Diamond uncut, and dont add it to the accumulator
        return acc
    }
    cutGem(gem)
    if (!gem.cut) {
        // The player wasnt able to cut it
        return acc
    }
    acc.push(gem)
    return acc
},[])

print(cutGems)