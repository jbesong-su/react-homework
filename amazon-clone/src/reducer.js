export const initialState = {
    basket: [],
};

function reducer(state, action){

    console.log(action)
    switch(action.type){
        case 'Add_To_Basket':
            // Logic for add to basket
            return {
                ...state,
                basket:[...state.basket, action.element]
            }

        case 'Remove_From_Basket': 
        // Logic for remove item
        //Copied Basked
        let newBasket = [...state.basket];

        //Check to see if product exists in basket
        const index = state.basket.findIndex((basketItem) => basketItem.id == action.id)

        if(index >= 0){
            //item exists in basket, remove..
            newBasket.splice(index,1);

        }

        else{
            console.warn(
                "Can't remove product"
            )
        }
        return {...state, basket: newBasket,};

         default:
             return state;


    }
}

export default reducer;