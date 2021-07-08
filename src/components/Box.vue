<template>
    <button @click="$emit('pop')" :class="wrapperClasses">
        <slot></slot> &times;
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const wrapperClasses = [
    'px-3',
    'py-2',
    'ml-4',
    'mt-4',
    'rounded-md',
    'text-md',
];

const { index, length } = defineProps({
    index: Number,
    length: Number,
});

if (index > Math.floor(Math.random() * length))
    wrapperClasses.push('bg-yellow-200', 'hover:bg-yellow-300');
else wrapperClasses.push('bg-gray-200', 'hover:bg-gray-300');
</script>
