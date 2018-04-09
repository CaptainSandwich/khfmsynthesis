var heartlessLocations = {
	"Air Pirate": {
		worlds: ["Neverland", "Monstro"]
	},
	"Air Soldier": {
		worlds: ["Traverse Town", "Wonderland", "Agrabah", "Monstro"]
	},
	"Angel Star": {
		worlds: ["The End of the World"]
	},
	"Aquatank": {
		worlds: ["Atlantica"]
	},
	"Bandit": {
		worlds: ["Agrabah", "Monstro"]
	},
	"Barrel Spider": {
		worlds: ["Neverland", "Monstro"]
	},
	"Battleship": {
		worlds: ["Neverland"]
	},
	"Behemoth": {
		worlds: ["Hollow Bastion", "The End of the World"]
	},
	"Black Ballade": {
		worlds: ["Deep Jungle"]
	},
	"Black Fungus": {
		worlds: ["Agrabah", "Halloween Town", "Hollow Bastion", "The End of the World"]
	},
	"Blue Rhapsody": {
		worlds: ["Traverse Town", "Wonderland", "Monstro", "Hollow Bastion"]
	},
	"Bouncywild": {
		worlds: ["Deep Jungle", "Monstro"]
	},
	"Chimaera": {
		worlds: ["Halloween Town"]
	},
	"Darkball": {
		worlds: ["Traverse Town", "Wonderland", "Deep Jungle", "Agrabah", "Monstro", "Atlantica", "Halloween Town", "Neverland",
		 "Hollow Bastion", "The End of the World"]
	},
	"Defender": {
		worlds: ["Traverse Town", "Wonderland", "Hollow Bastion"]
	},
	"Fat Bandit": {
		worlds: ["Agrabah", "Monstro"]
	},
	"Gargoyle": {
		worlds: ["Halloween Town"]
	},
	"Giant Shadow": {
		worlds: ["Wonderland"]
	},
	"Grand Ghost": {
		worlds: ["Monstro"]
	},
	"Green Requiem": {
		worlds: ["Deep Jungle", "Hollow Bastion"]
	},
	"Invisible": {
		worlds: ["The End of the World"]
	},
	"Jet Balloon": {
		worlds: ["Neverland"]
	},
	"Large Body": {
		worlds: ["Traverse Town", "Wonderland", "Hollow Bastion"]
	},
	"Neoshadow": {
		worlds: ["The End of the world"]
	},
	"Pink Agaricus": {
		worlds: ["Atlantica", "Deep Jungle"]
	},
	"Pirate": {
		worlds: ["Neverland"]
	},
	"Pot Scorpion": {
		worlds: ["Agrabah"]
	},
	"Pot Spider": {
		worlds: ["Agrabah"]
	},
	"Powerwild": {
		worlds: ["Deep Jungle", "Monstro"]
	},
	"Rare Truffle": {
		worlds: ["Monstro", "Halloween Town", "Neverland", "The End of the World"]
	},
	"Red Nocturne": {
		worlds: ["Traverse Town", "Wonderland", "Agrabah", "Hollow Bastion"]
	},
	"Screwdiver": {
		worlds: ["Atlantica"]
	},
	"Sea Neon": {
		worlds: ["Atlantica"]
	},
	"Search Ghost": {
		worlds: ["Traverse Town", "Halloween Town", "Monstro", "Atlantica"]
	},
	"Shadow": {
		worlds: ["Traverse Town", "Wonderland", "Deep Jungle", "Agrabah", "Monstro", "Halloween Town", "Neverland",
		 "Hollow Bastion", "The End of the World"]
	},
	"Sheltering Zone": {
		worlds: ["Atlantica"]
	},
	"Sniperwild": {
		worlds: ["Traverse Town"]
	},
	"Soldier": {
		worlds: ["Traverse Town", "Wonderland", "Hollow Bastion"]
	},
	"Stealth Soldier": {
		worlds: ["Hollow Bastion"]
	},
	"Synthesis": {
		worlds: ["Traverse Town"]
	},
	"Treasure Chests": {
		worlds: ["?"]
	},
	"White Mushroom": {
		worlds: ["Traverse Town", "Wonderland", "Deep Jungle", "Agrabah", "Atlantica", "Halloween Town",
		 "The End of the World"]
	},
	"Wight Knight": {
		worlds: ["Halloween Town"]
	},
	"Wizard": {
		worlds: ["Traverse Town", "Wonderland", "Deep Jungle", "Agrabah", "Halloween Town", "Hollow Bastion"]
	},
	"Wyvern": {
		worlds: ["Traverse Town", "Deep Jungle", "Agrabah", "Hollow Bastion"]
	},
	"Yellow Opera": {
		worlds: ["Traverse Town", "Wonderland", "Agrabah", "Monstro", "Neverland", "Hollow Bastion"]
	}
}

var synthesisList = {
	"Mega Potion": {
		matsRequired: [
			{name: "Spirit Shard", quantity: 1},
			{name: "Power Shard", quantity: 1},
			{name: "Mythril Shard", quantity: 1}
		],
		selected: false
	},
	"Cottage": {
		matsRequired: [
			{name: "Lucid Shard", quantity: 1},
			{name: "Bright Shard", quantity: 1}
		],
		selected: false
	},
	"Energy bangle": {
		matsRequired: [
			{name: "Spirit Shard", quantity: 2},
			{name: "Bright Shard", quantity: 1}
		],
		selected: false
	},
	"Power Chain": {
		matsRequired: [
			{name: "Power Shard", quantity: 2},
			{name: "Lucid Shard", quantity: 1}
		],
		selected: false
	},
	"Magic Armlet": {
		matsRequired: [
			{name: "Blaze Shard", quantity: 3},
			{name: "Frost Shard", quantity: 3},
			{name: "Thunder Shard", quantity: 3}
		],
		selected: false
	},
	"EXP Earring": {
		matsRequired: [
			{name: "Fury Stone", quantity: 1},
			{name: "Power Stone", quantity: 1},
			{name: "Mythril Stone", quantity: 1},
            {name: "Serenity Power", quantity: 1},
            {name: "Dark Matter", quantity: 3}
		],
		selected: false
	},
	"Mega Ether": {
		matsRequired: [
			{name: "Frost Shard", quantity: 1},
			{name: "Blaze Shard", quantity: 1},
			{name: "Thunder Shard", quantity: 1},
            {name: "Mythril", quantity: 2}
		],
		selected: false
	},
	"Guard Earring": {
		matsRequired: [
			{name: "Bright Shard", quantity: 3},
			{name: "Frost Shard", quantity: 1},
			{name: "Mythril Shard", quantity: 3}
		],
		selected: false
	},
	"Angel Bangle": {
		matsRequired: [
			{name: "Thunder Shard", quantity: 3},
			{name: "Bright Gem", quantity: 1},
		],
		selected: false
	},
	"Golem Chain": {
		matsRequired: [
			{name: "Blaze Shard", quantity: 3},
			{name: "Spirit Gem", quantity: 1},
		],
		selected: false
	},
	"Rune Armlet": {
		matsRequired: [
			{name: "Blaze Gem", quantity: 3},
			{name: "Frost Gem", quantity: 3},
			{name: "Thunder Gem", quantity: 3},
		],
		selected: false
	},
	"Moogle Badge": {
		matsRequired: [
			{name: "Blazing Stone", quantity: 1},
			{name: "Frost Stone", quantity: 1},
			{name: "Lightning Stone", quantity: 1},
            {name: "Mythril", quantity: 5},
            {name: "Orichalcum", quantity: 3}
		],
		selected: false
	},
	"AP Up": {
		matsRequired: [
			{name: "Blaze Gem", quantity: 2},
			{name: "Frost Gem", quantity: 2},
			{name: "Thunder Gem", quantity: 2},
            {name: "Mythril", quantity: 4}
		],
		selected: false
	},
	"Dark Ring": {
		matsRequired: [
			{name: "Lucid Gem", quantity: 2},
			{name: "Bright Gem", quantity: 2}
		],
		selected: false
	},
	"Master Earring": {
		matsRequired: [
			{name: "Spirit Shard", quantity: 5},
			{name: "Spirit Gem", quantity: 3},
			{name: "Fury Stone", quantity: 1}
		],
		selected: false
	},
	"Gaia Bangle": {
		matsRequired: [
			{name: "Lucid Shard", quantity: 5},
			{name: "Lucid Gem", quantity: 3},
			{name: "Lightning Stone", quantity: 1}
		],
		selected: false
	},
	"Titan Chain": {
		matsRequired: [
			{name: "Power Shard", quantity: 5},
			{name: "Power Gem", quantity: 3},
			{name: "Power Stone", quantity: 1}
		],
		selected: false
	},
	"Mythril": {
		matsRequired: [
			{name: "Mythril Shard", quantity: 5},
			{name: "Mythril Stone", quantity: 1},
			{name: "Mystery Goo", quantity: 1}
		],
		selected: false
	},
	"Elixir": {
		matsRequired: [
			{name: "Power Crystal", quantity: 1},
			{name: "Shiny Crystal", quantity: 1},
			{name: "Bright Crystal", quantity: 2},
            {name: "Orichalcum", quantity: 3}
		],
		selected: false
	},
	"Defense Up": {
		matsRequired: [
			{name: "Lucid Shard", quantity: 3},
			{name: "Bright Shard", quantity: 3},
			{name: "Bright Gem", quantity: 2},
            {name: "Power Crystal", quantity: 1},
            {name: "Orichalcum", quantity: 5}
		],
		selected: false
	},
	"Heartguard": {
		matsRequired: [
			{name: "Lucid Gem", quantity: 3},
			{name: "Lucid Crystal", quantity: 1},
			{name: "Bright Crystal", quantity: 1}
		],
		selected: false
	},
	"Three Stars": {
		matsRequired: [
			{name: "Power Gem", quantity: 1},
			{name: "Mystery Goo", quantity: 3},
			{name: "Shiny Crystal", quantity: 1}
		],
		selected: false
	},
	"Atlas Armlet": {
		matsRequired: [
			{name: "Blaze Shard", quantity: 5},
			{name: "Frost Shard", quantity: 5},
			{name: "Thunder Shard", quantity: 5},
            {name: "Mystery Goo", quantity: 1},
            {name: "Dark Matter", quantity: 3}
		],
		selected: false
	},
	"Crystal Crown": {
		matsRequired: [
			{name: "Lucid Crystal", quantity: 5},
			{name: "Power Crystal", quantity: 1},
			{name: "Shiny Crystal", quantity: 1},
            {name: "Blazing Stone", quantity: 3},
            {name: "Frost Stone", quantity: 3}
		],
		selected: false
	},
	"Dark Matter": {
		matsRequired: [
			{name: "Lucid Shard", quantity: 9},
			{name: "Gale", quantity: 1},
			{name: "Mythril", quantity: 2}
		],
		selected: false
	},
	"Megalixir": {
		matsRequired: [
			{name: "Lucid Gem", quantity: 5},
			{name: "Lucid Crystal", quantity: 3},
			{name: "Gale", quantity: 2},
            {name: "Dark Matter", quantity: 1}
		],
		selected: false
	},
	"Power Up": {
		matsRequired: [
			{name: "Spirit Shard", quantity: 5},
			{name: "Spirit Gem", quantity: 3},
			{name: "Power Shard", quantity: 5},
            {name: "Power Gem", quantity: 3},
            {name: "Dark Matter", quantity: 1}
		],
		selected: false
	},
	"Cosmic Arts": {
		matsRequired: [
			{name: "Bright Shard", quantity: 5},
			{name: "Bright Gem", quantity: 3},
			{name: "Bright Crystal", quantity: 1},
            {name: "Mythril Stone", quantity: 3}
		],
		selected: false
	},
	"EXP Bracelet": {
		matsRequired: [
			{name: "Energy Stone", quantity: 1},
			{name: "Dazzling Stone", quantity: 1},
			{name: "Stormy Stone", quantity: 1},
            {name: "Orichalcum", quantity: 8},
            {name: "Dark Matter", quantity: 3}
		],
		selected: false
	},
	"Ribbon": {
		matsRequired: [
			{name: "Blaze Gem", quantity: 5},
			{name: "Frost Gem", quantity: 5},
			{name: "Thunder Gem", quantity: 5},
            {name: "Gale", quantity: 1},
            {name: "Serenity Power", quantity: 3}
		],
		selected: false
	},
	"Fantasista": {
		matsRequired: [
			{name: "Fury Stone", quantity: 3},
			{name: "Power Stone", quantity: 3},
			{name: "Mythril Stone", quantity: 3},
            {name: "Energy Stone", quantity: 5}
		],
		selected: false
	},
	"Seven Elements": {
		matsRequired: [
			{name: "Blazing Stone", quantity: 3},
			{name: "Frost Stone", quantity: 3},
			{name: "Lightning Stone", quantity: 3},
            {name: "Dazzling Stone", quantity: 5}
		],
		selected: false
	},
	"Ultima Weapon": {
		matsRequired: [
			{name: "Thunder Gem", quantity: 5},
			{name: "Mystery Goo", quantity: 5},
			{name: "Serenity Power", quantity: 3},
            {name: "Stormy Stone", quantity: 3},
            {name: "Dark Matter", quantity: 3}
		],
		selected: false
	},
}

var Heartless = function(heartlessName) {
	return {name: heartlessName, worlds: heartlessLocations[heartlessName].worlds}
}

var materials = {
	"Lucid Shard": {quantity: 0, droppedBy: [Heartless("Shadow"), Heartless("Giant Shadow")]},
	"Lucid Gem": {quantity: 0, droppedBy: [Heartless("Wight Knight"), Heartless("Gargoyle")]},
	"Lucid Crystal": {quantity: 0, droppedBy: [Heartless("Darkball")]},
	"Spirit Shard": {quantity: 0, droppedBy: [Heartless("Soldier"), Heartless("Large Body")]},
	"Spirit Gem": {quantity: 0, droppedBy: [Heartless("Air Soldier")]},
	"Power Shard": {quantity: 0, droppedBy: [Heartless("Powerwild"), Heartless("Bouncywild")]},
	"Power Gem": {quantity: 0, droppedBy:[Heartless("Pirate"), Heartless("Air Pirate"), Heartless("Battleship")]},
	"Power Crystal": {quantity: 0, droppedBy:[Heartless("Wyvern")]},
	"Blaze Shard": {quantity: 0, droppedBy:[Heartless("Red Nocturne")]},
	"Blaze Gem": {quantity: 0, droppedBy:[Heartless("Bandit"), Heartless("Fat Bandit")]},
	"Frost Shard": {quantity: 0, droppedBy:[Heartless("Blue Rhapsody")]},
	"Frost Gem": {quantity: 0, droppedBy:[Heartless("Sea Neon"), Heartless("Sheltering Zone")]},
	"Thunder Shard": {quantity: 0, droppedBy:[Heartless("Yellow Opera")]},
	"Thunder Gem": {quantity: 0, droppedBy:[Heartless("Screwdiver"), Heartless("Aquatank")]},
	"Shiny Crystal": {quantity: 0, droppedBy:[Heartless("Wizard")]},
	"Bright Shard": {quantity: 0, droppedBy:[Heartless("Green Requiem")]},
	"Bright Gem": {quantity: 0, droppedBy:[Heartless("Search Ghost")]},
	"Bright Crystal": {quantity: 0, droppedBy:[Heartless("Defender")]},
	"Mystery Goo": {quantity: 0, droppedBy:[Heartless("White Mushroom"), Heartless("Black Fungus"), Heartless("Rare Truffle"), Heartless("Pink Agaricus")]},
	"Mythril Shard": {quantity: 0, droppedBy:[Heartless("Pot Spider"), Heartless("Barrel Spider")]},
	"Mythril": {quantity: 0, droppedBy:[Heartless("Synthesis"), Heartless("Treasure Chests")]},
	"Orichalcum": {quantity: 0, droppedBy:[Heartless("Treasure Chests")]},
	"Fury Stone": {quantity: 0, droppedBy: [Heartless("Giant Shadow")]},
	"Power Stone": {quantity: 0, droppedBy:[Heartless("Sniperwild")]},
	"Energy Stone": {quantity: 0, droppedBy:[Heartless("Stealth Soldier")]},
	"Blazing Stone": {quantity: 0, droppedBy:[Heartless("Chimaera")]},
	"Frost Stone": {quantity: 0, droppedBy:[Heartless("Grand Ghost")]},
	"Lightning Stone": {quantity: 0, droppedBy:[Heartless("Black Ballade")]},
	"Dazzling Stone": {quantity: 0, droppedBy:[Heartless("Jet Balloon")]},
	"Stormy Stone": {quantity: 0, droppedBy:[Heartless("Neoshadow")]},
	"Serenity Power": {quantity: 0, droppedBy:[Heartless("Pink Agaricus")]},
	"Mythril Stone": {quantity: 0, droppedBy:[Heartless("Pot Scorpion")]},
	"Dark Matter": {quantity: 0, droppedBy:[Heartless("Treasure Chests"), Heartless("Synthesis")]},
	"Gale": {quantity: 0, droppedBy:[Heartless("Invisible"), Heartless("Angel Star")]}
}

Object.entries(materials)
for(var item in synthesisList) {
	for(var mat of synthesisList[item].matsRequired) {
	console.log(mat.name, materials[mat.name])
		materials[mat.name].quantity += mat.quantity
	}
}

module.exports = {state: {synthesisList: synthesisList, materials: materials}, Heartless: Heartless}