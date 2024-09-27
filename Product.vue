<script>
import ProductsFilter from './ProductsFilter.vue';
import Rating from './Rating.vue';

export default {
    name: "Product",
    components: {
        Rating
    },
    props: {
        data: {
            type: Object,
            Required: true
        },
        cheapestPrice: {
            type: Number,
            default: null
        },
        highestPrice: {
            type: Number,
            default: null
        },
        cheapestPriceColor: {
            type: String,
            default: 'bg-cyan-500'
        }
    }

}
</script>

<template>
    <div class="mx-2 my-4 rounded shadow"
        :class="[data.unit_price === cheapestPrice ? cheapestPriceColor : 'bg-white']">
        <!--<div class="mx-2 my-4 rounded shadow" :class="[data.unit_price === highestPrice ? 'bg-red-500' : 'bg-white']">-->

        <h3 class="text-xl text-center bg-sky-200 text-sky-500">{{ data.name }}</h3>
        <img :src="'https://picsum.photos/140/100?random=' + data.id" class="w-full card-img-top" alt="..." />
        <div class="py-2 px-4">
            <p class="text-sm">
                <b>Prix Unitaire : </b> {{ data.unit_price }} € <br>
                <b>Quantité en Stock : </b> {{ data.quantity }}
            </p>
            <div class="text-sm" v-html="data.description">

            </div>
        </div>
        <Rating :value="data.rating">
            <template #plein>
                <i class="fa-solid fa-face-grin-stars"></i>
            </template>
        </Rating>
    </div>
</template>

<style scoped></style>