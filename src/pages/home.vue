<template>
    <div>这里是home.vue呢</div>
    <span>{{ counter.num }}</span>
    <button @click="counter.inc()">点我加1</button>
</template>

<script setup>
    import {useCounterStore} from "../stores/counter"
    const counter = useCounterStore()
</script>

