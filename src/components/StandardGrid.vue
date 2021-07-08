<template>
    <section class="grid cols-75-25 mb-2 pb-4 border-b">
        <div>
            <slot></slot>
        </div>
        <div v-if="$slots.sidebar">
            <slot name="sidebar"></slot>
        </div>
    </section>
</template>

<script setup></script>
