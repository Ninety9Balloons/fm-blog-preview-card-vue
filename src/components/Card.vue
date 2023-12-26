<template>
    <div
        class="container bg-white flex flex-col max-w-[350px] mx-auto rounded-3xl border-2 border-black shadow-[5px_5px_1px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_1px_0px_rgba(0,0,0,1)] transition-all"
    >
        <!-- Image -->
        <div class="container p-5 w-full">
            <img
                :src="getImageUrl()"
                alt="Card Image"
                class="rounded-xl object-cover w-full h-[180px]"
            />
        </div>

        <!-- Card Details -->
        <div class="container p-5 flex flex-col gap-5">
            <!-- Tags -->
            <div class="container">
                <ul>
                    <li
                        v-for="tag in tags"
                        :key="tag"
                        class="font-bold text-xs bg-custom-yellow p-2 mr-2 rounded-md inline"
                    >
                        {{ tag }}
                    </li>
                </ul>
            </div>

            <!-- Publish Date -->
            <p class="text-xs">Published <slot name="published" /></p>
            <!-- Card Header -->
            <h1
                class="font-bold text-xl hover:text-custom-yellow transition-all cursor-pointer"
            >
                <slot name="title" />
            </h1>
            <!-- Card Body -->
            <p class="text-sm text-gray-400 max-h-[60px] line-clamp-3">
                <slot name="body" />
            </p>
            <!-- Author -->
            <div class="container flex items-center">
                <img
                    :src="getAuthorUrl()"
                    alt="author avatar image"
                    class="w-9 mr-5 rounded-full"
                />
                <p class="text-sm font-bold"><slot name="author" /></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    imgSrc: String,
    authorSrc: String,
    tags: Array,
});

function getImageUrl() {
    return new URL(`${props.imgSrc}`, import.meta.url);
}

function getAuthorUrl() {
    return new URL(`${props.authorSrc}`, import.meta.url);
}
</script>
