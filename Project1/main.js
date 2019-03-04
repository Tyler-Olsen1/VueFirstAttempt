Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true, 
        }
    },
    template: `
    <div class="navBar"></div>
    <p>User is premium: {{ premium }}</p>
    <div id="product">
    <div id="product" class="grid-container">
        <div class="product-image">
            <img :src="image" width="50%" />
        </div>

        <div class="product-info">
            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>

            <h1>{{ title }}</h1>
            <p>Shipping: {{ shippig n}}</p>

            <p v-if="inStock">InStock</p>
            <p v-else>Out of Stock</p>

            <h2>Details</h2>
            <ul>
                Details: <li v-for="detail in details">{{ detail }}</li>
                Sizes: <li v-for="size in sizes">{{ size }}</li>
            </ul>

        <h3>Colors:</h3>
        <div v-for="(variant, index) in variants" 
            :key="variant.variantId">
            <div class="color-box"
            :style="{ backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)">
        </div>
        </div>
        <button v-on:click="addToCart" :disabled='!inStock'  :click="console.log('The cart works ... !')" :class="{ disabledButton: !inStock }">Add to Cart</button>
    <p>Shipping: {{ shipping }}</p>


        </div>
        </div>
    </div>
    `,


data() {
    return{
        data: {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            sizes: ['small', 'medium', 'large', 'giant'],
            variants: [
                {
                    variantId: 1,
                    variantColor: "green",
                    variantImage: "./AdolphAndBurt.jpg",
                    variantQuantity: 15
                },
                {
                    variantId: 2,
                    variantColor: "blue",
                    variantImage: "./axe.jpg",
                    variantQuantity: 0
                }
            ],
            cart: 0,
             
        },
        methods: {
            addToCart() {
                this.cart +=1
            },
            updateProduct(index) {
                this.selectedVariant = index, 
                console.log(index)
            }
        },
        computed : {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock () {
                if (this.quantity > 0){
                    return true
                } else {
                    return false
                }
            },
            shipping() {
                if (this.premium) {
                    return "free"
                } else {
                return 2.99
                }
            }
            }            
        }
    })

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    } 
})