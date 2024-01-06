<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    size: String,
    color: String,
});

const className = computed(() => ({
    '-giant': props.size === 'giant',
    '-big': props.size === 'big',
    '-medium': props.size === 'medium',
    '-regular': props.size === 'regular',
    '-small': props.size === 'small',
    '-tiny': props.size === 'tiny',
    '-primary': props.color === 'primary',
    '-primary2': props.color === 'primary2',
    '-secondary': props.color === 'secondary',
    '-black': props.color === 'black',
    '-tri': props.color === 'tri',
}));
</script>

<template>
    <div :class="['ellipse', className]"></div>
</template>

<style lang="scss" scoped>
.ellipse {
    border-radius: 50%;




    &.-primary {
        background: radial-gradient(circle at 50% 50%, #FFA51D 5%, #ffa51d8f 20%, transparent 45%);
    }

    &.-primary2 {
        background: radial-gradient(circle at 50% 50%, #FFA51D 1%, #ffb951b7 10%, transparent 45%);
    }


    &.-secondary {
        background: radial-gradient(circle at 50% 50%, #1818BB 20%, transparent 50%);

    }

    &.-black {
        background: radial-gradient(circle at 50% 50%, #010101 20%, transparent 50%);
    }



    &.-tri {
        background: radial-gradient(circle at 50% 50%, #1818BB 0%, #FFD15B 15%, #ffffff 45%);
    }

    &.-tiny {
        width: rem(104);
        height: rem(104);
    }

    &.-small {
        width: rem(138);
        height: rem(138);
    }

    &.-regular {
        width: rem(256);
        height: rem(256);
    }

    &.-medium {
        width: rem(334);
        height: rem(334);
    }

    &.-big {
        width: rem(602);
        height: rem(602);
    }

    &.-giant {
        width: rem(800);
        height: rem(800);
    }

}
</style>
