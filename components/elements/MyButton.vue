<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: String,
    href: String,
    size: String,
    label: String,
    font: String,
});

const className = computed(() => ({
    '-big': props.size === 'big',
    '-secondary': props.color === 'secondary',
    '-primary': props.color === 'primary',
    '-black': props.color === 'black',
    '-white': props.color === 'white',
    '-border': props.color === 'border',
    '-borderw': props.color === 'borderw',
    '-borderb': props.color === 'borderb',
    '-satoshi': props.font === 'satoshi',
    '-satoshib': props.font === 'satoshib',
    '-melodrama': props.font === 'melodrama',
    '-melodramab': props.font === 'melodramab',
}));
</script>

<template>
    <div>
        <a :href="href" :class="['button', className]">{{ label }}</a>
    </div>
</template>

<style lang="scss" scoped>
.button {
    align-items: center;
    border: none;
    border-radius: rem(30);
    color: $white;
    display: inline-flex;
    font-size: $body;
    text-decoration: none;
    padding: rem(10);

    &.-big {
        font-size: $body;
        padding: rem(16) rem(32);
        font-weight: 400;
    }

    &.-secondary {
        background: $secondary-color;
        color: $white;
    }

    &.-primary {
        background: $primary-color;
        color: $black;
    }

    &.-black {
        background: $black;
        color: $white;
    }

    &.-white {
        background: $white;
        color: $black;
    }

    &.-border {
        background: $white;
        color: $secondary-color;
        border: rem(3) solid $secondary-color;

    }

    &.-borderw {

        color: $white;
        border: rem(3) solid $white;

    }

    &.-borderb {

        color: $black;
        border: rem(3) solid $black;

    }

    &.-satoshi {
        font-family: $font-satoshi;
    }

    &.-satoshib {
        font-family: $font-satoshi-bold;
    }

    &.-melodrama {
        font-family: $font-melodrama;
    }

    &.-melodramab {
        font-family: $font-melodrama-bold;
    }
}
</style>