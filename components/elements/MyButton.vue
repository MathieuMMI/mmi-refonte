<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: String,
    href: String,
    size: String,
    label: String,
});

const className = computed(() => ({
    '-big': props.size === 'big',
    '-secondary': props.color === 'secondary',
    '-primary': props.color === 'primary',
    '-black': props.color === 'black',
    '-border': props.color === 'border',
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
        padding: rem(14) rem(29);
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

    &.-border {
        background: $white;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
    }
}
</style>