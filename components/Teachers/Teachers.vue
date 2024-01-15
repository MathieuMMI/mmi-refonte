<script setup>
const { client } = usePrismic()
const { data: professeurs } = await useAsyncData('professeur', () => client.getAllByType('professeur'));
</script>

<template>
    <div class="professeurs">
        <Teacher class="professeurs-professeur" v-for="professeur1 in professeurs" :key="professeur1.prof_id"
            :name="professeur1.data.prof_name" :firstname="professeur1.data.prof_firstname" :img="professeur1.data.prof_img"
            :subject="professeur1.data.prof_subject" :link="professeur1.data.prof_link" />
    </div>
</template>

<style lang="scss">
.professeurs {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 2rem;
    background-color: $black;

}

@media screen and (max-width: 767px) {
    .professeurs {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        gap: 2rem;
        background-color: $black;
    }
}
</style>