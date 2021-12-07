export const calkTotalPrice = (items) =>
    items.reduce((acc,item) => (acc += item.price), 0)
