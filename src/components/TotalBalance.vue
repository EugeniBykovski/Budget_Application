<template>
    <div class="total-value">
        Balance: {{ total }}
    </div>
</template>

<script>
export default {
    name: 'TotalBalance',
    props: {
        total: {
            type: Number, // тип
            default: 0 // значение по дефолту
        }
    }
};
</script>

<style scoped>
    .total-value {
        font-size: 26px;
        text-transform: uppercase;
        padding: 20px;
        text-align: center;
    }
</style>