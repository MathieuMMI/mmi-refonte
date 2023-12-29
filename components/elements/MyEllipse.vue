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
        background: radial-gradient(circle at 50% 50%, #FFA51D 20%, transparent 50%);
    }


    &.-secondary {
        background: radial-gradient(circle at 50% 50%, #1818BB 20%, transparent 50%);

    }

    &.-black {
        background: radial-gradient(circle at 50% 50%, #010101 20%, transparent 50%);
    }



    &.-tri {
        background: radial-gradient(circle at 50% 50%, #1818BB 0%, #FFA51D 30%, transparent 50%);
    }

    &.-tiny {
        width: rem(104);
        height: rem(104);
    }

    &.-small {
        width: rem(159);
        height: rem(159);
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
        width: rem(1453);
        height: rem(1550);
    }

}
</style>
