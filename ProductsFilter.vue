<script>
export default {
    name: "ProductsFilter",
    emits: ['change'],
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            inStock: true,
            orderBy: null,
            search: "",
            sortColumn: "",
            order: "ASC",
        };
    },
    methods: {
        filterProductsByName(products) {
            //let products = [...this.productsFiltered];
            let searchLower = this.search.toLowerCase();
            return products.filter((product) =>
                product.name.toLowerCase().includes(searchLower)
            );
            //console.log(result);
        },
        orderProductsByName(is_up) {
            let products = [...this.productsFiltered];
            return products.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return is_up ? -1 : 1;
                }
                if (nameA > nameB) {
                    return is_up ? 1 : -1;
                }
                return 0;
            });
        },
        setSortColumn(column) {
            if (this.sortColumn === column) {
                this.order = this.order === "ASC" ? "DESC" : "ASC";
            } else {
                this.order = "ASC";
                this.sortColumn = column;
            }
        },
        orderProductsByPrice(is_up) {
            let products = [...this.productsFiltered];
            return products.sort((a, b) => {
                const priceA = a.unit_price;
                const priceB = b.unit_price;
                if (priceA < priceB) {
                    return is_up ? -1 : 1;
                }
                if (priceA > priceB) {
                    return is_up ? 1 : -1;
                }
                return 0;
            });
        },
        manageChange() {
            this.$emit('change', this.productsFilteredAndOredered);
        },
    },
    computed: {
        productsFiltered() {
            let products = [...this.products];
            let result = null;
            result = this.inStock
                ? this.products.filter((product) => product.quantity > 0)
                : this.products;

            // etape_2 on par le champ de rechere
            result = this.filterProductsByName(result);
            return result;
        },

        productsFilteredAndOredered() {
            let products = [...this.productsFiltered];

            switch (this.orderBy) {
                case "nameUp":
                    products = this.orderProductsByName(true);
                    break;
                case "nameDown":
                    products = this.orderProductsByName(false);
                    break;
                case "priceUp":
                    products = this.orderProductsByPrice(true);
                    break;
                case "priceDown":
                    products = this.orderProductsByPrice(false);
                    break;
            }
            return products;
        },
    },
};
</script>
<template>
    <aside>
        <h3 class="font-bold text-sky-500 text-xl text-center uppercase">Filtres</h3>
        <form class="p-4 m-2 bg-red-400">
            <div class="flex justify-center">
                <div class="text-center">
                    <label for="search" class="mr-3 text-center font-bold mb-2 text-sky-900">Recherche par
                        nom</label><br />
                    <input id="search" type="text" v-model="search" @change="manageChange" class="text-sky-700 p-1" />
                </div>
            </div>
            <div class="flex flex-wrap justify-evenly items-center">
                <div>
                    <h4 class="text-center font-bold mb-2 text-sky-900">En sotck ?</h4>
                    <div class="flex">
                        <div class="mx-1">
                            <input type="radio" v-model="inStock" @change="manageChange" name="in_stock"
                                id="inStockFalse" :value="false" />
                            <label for="inStockFalse">Non </label>
                        </div>
                        <div class="mx-1">
                            <input type="radio" v-model="inStock" @change="manageChange" name="in_stock"
                                id="inStockTrue" :value="true" />
                            <label for="inStockFalse">Oui</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="text-center font-bold- mb-2 text-sky-900">Ordonné Par</h4>
                    <select v-model="orderBy" @change="manageChange" classe="p-1">
                        <option value="nameDown">Nom décroissant</option>
                        <option value="setSortColumn('nameDown')">Nomdecroissant</option>
                        <option value="nameUp">Nom croissant</option>
                        <option value="priceDown">Prix décroissant</option>
                        <option value="priceUp">Prix croissant</option>
                    </select>
                </div>
            </div>
        </form>
    </aside>
</template>

<style scoped></style>
