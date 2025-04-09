<template>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
        <template v-for="index in config.num_horses" :key="index">
            <HorseCard :index="index - 1"/>
        </template>
    </div>
</template>

<script setup>
import config from '../boot/config.json';
import HorseCard from 'components/HorseCard.vue'

defineOptions({
    name: 'HorseList'
});

// const props = defineProps({});

</script>