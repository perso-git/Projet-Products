<script>
export default {
    name: "Rating",
    props: {
        value: {
            type: Number,
            Required: true
        },
        max: {
            validator(value, props) {
                return value >= props.value;
            },
            default: 5
        }
    },
    computed: {
        numberOfPleinItem() {
            return this.value * 100 % 100 === 0 ? this.value : Math.floor(this.value);
        },
        numberOfEmptyItem() {
            return this.max - Math.floor(this.value);
        },
        numberOfHalfItem() {
            return this.value * 100 % 100 !== 0 ? 1 : 0;
        }
    }
}
</script>

<template>
    <div>
        <slot name="plein" v-for="n in numberOfPleinItem" :key="n">
            <i class="fa-solid fa-star"></i> <!-- par defaut-->
        </slot>
        <slot name="half" v-for="n in numberOfHalfItem" :key="n">
            <i class="fa-solid fa-star-half-stroke"></i> <!-- par defaut-->
        </slot>
        <slot name="empty" v-for="n in numberOfEmptyItem" :key="n">
            <i class="fa-sharp-duotone fa-solid fa-radiation"></i> <!-- par defaut-->
        </slot>
        <!--<i class="fa-solid fa-star-half-stroke" v-for="n in numberOfHalfItem" :key="n"></i>
        <i class="fa-regular fa-star" v-for="n in numberOfEmptyItem" :key="n"></i>-->

    </div>
</template>

<style scoped></style>