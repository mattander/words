<template>
    <main class="container mx-auto px-24 py-4">
        <Heading level="1">Words</Heading>
        <standard-grid>
            <p>Hello, and welcome to my Ted-oh wrong thing.</p>
            <p>
                This is words. Words is the most useless thing I've ever built.
            </p>
            <p>
                Why did I make it? I wanted to learn Tailwind and mess around
                with Vue 3 so I made something stupid but fun.
            </p>
            <Heading class="h3" level="2">What do you do?</Heading>
            <p>
                Not much really. Type words in, hit enter or add, they go in the
                list.
            </p>
            <p>You can type sentences and they get split into words.</p>
            <p>
                If there are duplicates, you can see the count and remove all
                but the first instance of the word.
            </p>
        </standard-grid>
        <Heading class="h3" level="2">Add a word</Heading>
        <TextInput
            class="rounded-r-none"
            v-model="wordInputValue"
            @keyup.enter="addWords"
        />

        <btn class="border-l-0 rounded-l-none" @click="addWords">Add</btn>
        <br />

        <section v-if="duplicates.length">
            <div class="flex items-baseline">
                <Heading level="2" class="h3 mr-2">Duplicates </Heading>
                <small class="text-sm">(from {{ words.length }} words)</small>
            </div>
            <ul class="list-disc list-inside pl-1">
                <li
                    v-for="[word, count] in duplicates"
                    :key="`duplicate-${word}`"
                >
                    {{ word }} ({{ count }})
                </li>
            </ul>
        </section>

        <div class="flex items-center mt-4">
            <Heading class="h3 mr-4 leading-none" level="2"
                >These are words</Heading
            >
            <btn
                class="text-xs"
                type="caution"
                @click="words = removeDuplicates(words)"
                v-if="duplicates.length"
            >
                Clear duplicates
            </btn>
        </div>
        <div class="text-gray-500 text-sm">Click/tap a word to remove it</div>
        <standard-grid>
            <div class="flex flex-wrap -ml-4">
                <Box
                    v-for="(word, index) in words"
                    :key="`${word}-${index}`"
                    v-bind="{ index, length: words.length }"
                    @pop="words.splice(index, 1)"
                >
                    {{ word }}
                </Box>
            </div>
        </standard-grid>
    </main>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import Box from './components/Box.vue';
import Button from './components/Button.vue';
import TextInput from './components/TextInput.vue';
import Heading from './components/Heading.vue';
import StandardGrid from './components/StandardGrid.vue';

const btn = Button;
const wordInputValue = ref('');

const words = ref([
    'credibility',
    'requirement',
    'application',
    'matter',
    'approach',
    'viable',
    'laboratory',
    'harsh',
    'portion',
    'snatch',
    'pledge',
    'crowd',
    'ghostwriter',
    'performer',
    'disaster',
    'will',
    'rob',
    'integrated',
    'danger',
    'assertive',
    'court',
]);

const wordMap = computed(() => {
    return Object.entries(
        words.value.reduce((acc, word) => {
            if (!acc[word]) acc[word] = 1;
            else acc[word]++;
            return acc;
        }, {})
    );
});

const addWords = () => {
    if (!wordInputValue.value.trim()) return;
    words.value.push(...wordInputValue.value.split(/\s/));
    wordInputValue.value = '';
};

const removeDuplicates = (array) => {
    wordMap.value = {};
    return Array.from(new Set(array));
};

const duplicates = computed(() =>
    wordMap.value.filter(([word, count]) => count > 1)
);

// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
