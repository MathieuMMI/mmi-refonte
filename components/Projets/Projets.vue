<script setup>
const { client } = usePrismic()
const { data: projects } = await useAsyncData('project', () => client.getAllByType('project'));
console.log(projects)
</script>

<!-- Projets.vue -->
<template>
    <div class="projects">
      <Projet
        v-for="project1 in projects"
        :key="project1.project_id"
        :number="project1.data.project_number"
        :title="project1.data.project_title"
        :annee="project1.data.project_annee"
        :link="project1.data.project_link"
        :projectid="project1.id"
      />
    </div>
  </template>
  

<style>
.projects {
    margin-top: 2rem;
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center;
    gap: 2rem;
}
</style>