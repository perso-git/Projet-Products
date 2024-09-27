<script>
import ProductsFilter from '@/ProductsFilter.vue';
import Rating from '@/Rating.vue';

export default {
    components: {
        ProductsFilter,
        Rating
    },
    data() {
        return {
            products: [
                { 'id': 1, 'rating': 1.5, 'name': 'A', 'unit_price': 10, 'quantity': '62', 'description': '<b>geneial<b/>' },
                { 'id': 2, 'rating': 2, 'name': 'B', 'unit_price': 154, 'quantity': '33', 'description': '<b style=" color: green;">On valide<b/>' },
                { 'id': 3, 'rating': 3, 'name': 'C', 'unit_price': 13, 'quantity': '51', 'description': '<b>geneial<b/>' },
                { 'id': 4, 'rating': 1, 'name': 'D', 'unit_price': 20, 'quantity': '77', 'description': '<b>geneial<b/>' },
                { 'id': 5, 'rating': 3.5, 'name': 'E', 'unit_price': 30, 'quantity': '55', 'description': '<b>geneial<b/>' },
                { 'id': 6, 'rating': 2, 'name': 'F', 'unit_price': 40, 'quantity': '33', 'description': '<b>geneial<b/>' },
                { 'id': 7, 'rating': 1, 'name': 'G', 'unit_price': 150, 'quantity': '66', 'description': '<b>geneial<b/>' },
                { 'id': 8, 'rating': 4, 'name': 'H', 'unit_price': 60, 'quantity': '23', 'description': '<b>geneial<b/>' },
                { 'id': 9, 'rating': 2, 'name': 'I', 'unit_price': 7, 'quantity': '99', 'description': '<b>geneial<b/>' },
                { 'id': 10, 'rating': 3, 'name': 'J', 'unit_price': 80, 'quantity': '35', 'description': '<b>geneial<b/>' },
            ],
            productsToShow: []
        }
    },
    created() {
        this.productsToShow = [...this.products];// copier le tableau ...this.products

    },
    computed: {
        productsLength() {
            return this.products.length;
        },
        cheapestPrice() {
            return Math.min(...this.products.map(product => product.unit_price));

        },
        highestPrice() {
            return Math.max(...this.products.map(product => product.unit_price));
        }
    }
}

</script>

<template>
    <div>
        <h1 class="text-xl p-4 text-center uppercase mb-4 bg-sky-300 text-sky-800">
            Nos Produits<br>
            Nombre de produits: {{ productsLength }}
        </h1>

        <ProductsFilter :products="products" @change="productsToShow = $event"></ProductsFilter>

        <div class="container mx-auto flex flex-wrap" v-if="products.length > 0">

            <Product v-for="product in productsToShow" :key="product.id" :data="product" :cheapest-Price="cheapestPrice"
                cheapestPriceColor="bg-yellow-500" :highest-Price="highestPrice" highestPriceColor="bg-green-400">
            </Product>



        </div>
        <div v-else>
            <p> il n y a pas de produits ! </p>
        </div>
    </div>

</template>

<style scoped></style>
