<script setup>
const { client } = usePrismic()
const { data: projects } = await useAsyncData('project', () => client.getAllByType('project'));
const sort = [];

Object.values(projects.value).forEach((project, index) => {
    const projNumber = project.data.project_number[0].text;
    console.log(projNumber);
    sort.push({ project, projNumber });
});

// Triez le tableau sort en fonction des valeurs de projNumber
sort.sort((a, b) => a.projNumber - b.projNumber);

// Obtenez les projets triés
const sortedProjects = sort.map(item => item.project);
</script>

<!-- Projets.vue -->
<template>
  <div class="projects">
    <Projet v-for="(project1, index) in sortedProjects.slice(0, 5)" :key="project1.project_id"
  :number="project1.data.project_number" :title="project1.data.project_title"
  :annee="project1.data.projecten_annee" :link="project1.data.project_link" :projectid="project1.id" />
  </div>
</template>
  

<style lang="scss" scoped>
.projects {
  margin-top: 2rem;
  white-space: nowrap;
}
</style>