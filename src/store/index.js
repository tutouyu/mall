import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const store = new vuex.Store({
    state() {
        return {
            product: []
        }
    },
    mutations: {
        addCart(state, product) {
            let pro = state.product.find(item => {
                return item.iid == product.iid
            })
            if (pro) {
                pro.count++;
            } else {
                product.checked = true;
                product.count = 1;
                state.product.push(product)
            }
        },
        checkedchange(state, iid) {
            let changeitem = state.product.find(item => iid == item.iid)
            changeitem.checked = !changeitem.checked
            let data = JSON.parse(JSON.stringify(state.product))
            state.product = data
        },
        checkedall(state){
            state.product.forEach(item => {
                item.checked = true
            })
            let data = JSON.parse(JSON.stringify(state.product))
            state.product = data
        },
        notcheckedall(state){
            state.product.forEach(item => {
                item.checked = false
            })
            let data = JSON.parse(JSON.stringify(state.product))
            state.product = data
        }
    },
    getters: {
        cartList(state) {
            return state.product
        },
        checklen(state){
            return state.product.filter(item => item.checked==true).length
        }
    }
})
export default store