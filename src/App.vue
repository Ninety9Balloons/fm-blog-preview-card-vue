<script setup>
import Cards from "./components/Cards.vue";
</script>

<template>
    <div class="flex-col bg-custom-yellow">
        <div
            class="h-full min-h-screen w-screen flex items-center justify-center font-figtree py-10"
        >
            <!-- Cards -->
            <Cards />
        </div>

        <!-- Attribution -->
        <div class="text-xs text-center pb-2 mx-auto w-full">
            Challenge by
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                class="text-blue-600"
                >Frontend Mentor</a
            >. Coded by <a href="#" class="text-blue-600">Troy Reuther</a>.
        </div>
    </div>
</template>
