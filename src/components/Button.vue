<template>
    <button :class="classList">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const { type, disabled } = defineProps({
    type: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
});

const classList = ref([
    'border',
    'rounded-md',
    'py-1',
    'px-3',
    'min-w-4/5',
    'font-heading',
]);

const typeColourMap = {
    success: 'green',
    primary: 'blue',
    default: 'blue',
    secondary: 'indigo',
    caution: 'yellow',
    danger: 'red',
};

// I had a switch statement with all the classes, that got silly.
const addColourClasses = (colour) => {
    const stateMap = {
        default: {
            bg: { colour, weight: 400 },
            border: { colour, weight: 400 },
        },
        hover: {
            bg: { colour, weight: 500 },
            border: { colour, weight: 600 },
        },
        active: {
            bg: { colour, weight: 800 },
            border: { colour, weight: 800 },
        },
    };

    const classes = [];

    Object.entries(stateMap).forEach(([state, settings]) => {
        let prefix = '';
        if (state !== 'default') prefix = state + ':';

        Object.entries(settings).forEach(([setting, { colour, weight }]) => {
            classes.push(`${prefix}${setting}-${colour}-${weight}`);
        });
    });

    return classes;
};

// Disabled style overrides others
if (disabled) classList.value.push(['bg-gray-400', 'border-gray-400']);
else classList.value.push(...addColourClasses(typeColourMap[type]));
</script>
