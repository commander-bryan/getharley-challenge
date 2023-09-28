import { createContext, useContext, useReducer } from 'react'

const OrderContext = createContext();

// This reducer will track the order as an object so its easier to manage count
// TODO: If new count is 0, remove from tracker
const orderReducer = (state, action) => {
    const { item, type } = action;
    switch (action.type) {
        case 'add': {
            return {
                items: {
                    ...state.items,
                    [item.id]: {
                        ...item,
                        count: state.items[item.id]?.count + 1 || 1,
                    }
                }
            }
        }
        case 'remove': {
            return {
                items: {
                    ...state.items,
                    [item.id]: {
                        ...item,
                        count: state.items[item.id]?.count > 0 ? state.items[item.id]?.count - 1 : 0,
                    }
                }
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    };
}

const OrderProvider = ({children}) => {
    const [state, update] = useReducer(orderReducer, { items: {}})

    const value = { 
        // TODO: investiagte whether its easier to work with a flat array when returning to consumers
        // // convert from state object to flat array when returning to components
        // order: Object.keys(state.items)
        //     // for each item id, we create a new array and fill it with copies of the product
        //     .map(id => new Array(state.items[id].count).fill(state.items[id]))
        //     // then flatten 
        //     .flat(),
        order: state.items,
        update,
    };

    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrder must be used within a OrderProvider')
  }
  return context
}

export { OrderProvider, useOrder }