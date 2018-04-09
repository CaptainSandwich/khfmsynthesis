var lib = require('./lib.js')
var data = require('./data.js')

test('Should update state on selection', () => {
	var state = data.state;
	var newState = lib.selectItem(state.synthesisList["Energy bangle"], state.synthesisList, state.materials);

	expect(newState.materials["Spirit shard"].quantity).toBe(0)
});

test('Heartless constructor', () => {
	var largeBody = data.Heartless("Large Body")
	expect(largeBody).toEqual({name: "Large Body", worlds: ["Traverse Town", "Wonderland", "Hollow Bastion"]})
});
