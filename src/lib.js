var lib = {
		selectItem: function(item, name, synthesisList, materials) {
    		var updateItem;
    		var updateItems;
    		var updateMaterial;
    		var requiredMat;
    		var state;
            let copy = {}
    		if(item.selected) {
    			for(requiredMat of item.matsRequired) {
    				copy[requiredMat.name] = materials[requiredMat.name];
    				copy[requiredMat.name].quantity += requiredMat.quantity;
    			}
    		} else {
    			for(requiredMat of item.matsRequired) {
    				copy[requiredMat.name] = materials[requiredMat.name];
    				copy[requiredMat.name].quantity -= requiredMat.quantity;
    			}
    		}
    		updateItem = Object.assign({}, item, {selected: !item.selected});
            updateItems = Object.assign({}, synthesisList, {[name]: updateItem})
    		updateMaterial = Object.assign({}, materials, copy);
			state = {
    			synthesisList: updateItems,
    			materials: updateMaterial
    		};
    		console.log(state)
    		return state;
    	}
}

module.exports = lib;