<template>
    <input
        class="border rounded-md border-gray-400 py-1 px-2 my-2 w-1/2 md:w-1/3"
        type="text"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    />
</template>

//
<script setup>
const { modelValue } = defineProps({
    modelValue: String,
});
</script>
