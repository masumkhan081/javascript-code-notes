function get_discounted(price, discount) {
    return price - price * discount;
}
console.log(get_discounted(600, .1))

// applying currying
//
function discount(ten_percent) {
    return (price) => {
        return price - price * ten_percent;
    }
}

let partial_func_