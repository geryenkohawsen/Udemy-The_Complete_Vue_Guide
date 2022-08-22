<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" :another-prop="test" another="..."></slot>
            Hello
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue!'],
        }
    },
}
</script>