<template>
    <q-card v-if="data" style="width: 250px">
        <q-card-section class="q-py-sm">
            <div class="text-h6">
                {{ data.name }}
            </div>
            <div class="text-subtitle1">
                {{ data.sponsor }}
            </div>
        </q-card-section>

        <q-card-section>
            <q-img :src="'avatar/' + data.sponsor + '.webp'"/>
        </q-card-section>

        <q-card-section>
            <q-item-label class="text-right">
                {{ data.price }} {{ config.symbol }}
            </q-item-label>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn
                color="green"
                label="Buy"
                @click="emit('buy', data.index)"
            />
            <q-btn
                color="red"
                label="Sell"
                @click="emit('sell', data.index)"
            />
        </q-card-actions>
    </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'boot/axios'
import config from '../boot/config.json';
import { get_horse_info } from '../utils/horses.js';

defineOptions({
    name: 'HorseCard'
});

const emit = defineEmits(['buy', 'sell']);

const props = defineProps({
    index: {
        type: Number,
        required: true
    }
});

const data = ref(get_horse_info(props.index));

function update() {
    api.post('/contract/call?id=' + config.contract + '&method=get_price', {args: [props.index]})
        .then(res => {
            data.value.price = (res.data / Math.pow(10, config.decimals)).toPrecision(config.precision);
        }).catch(err => {
            data.value.price = "?";
            console.error(err);
        });
    setTimeout(update, 60 * 1000);
}
update();

</script>