<template>
    <div class="flex flex-col gap-7 md:flex-row flex-wrap">
        <Card
            img-src="../../assets/images/html-image.avif"
            author-src="../../assets/images/image-avatar.webp"
            :tags="['Learning', 'HTML', 'CSS']"
        >
            <template #published>21 Dec 2023</template>
            <template #title>HTML & CSS foundations</template>
            <template #body
                >These languages are the backbone of every website, defining
                structure, content, and presentation.</template
            >
            <template #author>Greg Hooper</template>
        </Card>

        <Card
            img-src="../../assets/images/javascript-image.jpg"
            author-src="../../assets/images/avatar2.jpg"
            :tags="['Tutorial', 'Javascript']"
        >
            <template #published>29 Nov 2023</template>
            <template #title>Javascript for beginners</template>
            <template #body
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                sapiente adipisci velit exercitationem repellat accusamus nulla
                culpa, fugit consequuntur.
            </template>
            <template #author>Tom Beinhoff</template>
        </Card>

        <Card
            img-src="../../assets/images/black-white-image.avif"
            author-src="../../assets/images/avatar3.png"
            :tags="['Learning', 'Images', 'CSS', 'Filters']"
        >
            <template #published>10 Aug 2023</template>
            <template #title>CSS3 image filters</template>
            <template #body
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam libero doloribus facilis officia impedit explicabo cumque
                praesentium illo laboriosam?</template
            >
            <template #author>Alice L'tiar</template>
        </Card>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
</script>

<style lang="scss" scoped></style>
