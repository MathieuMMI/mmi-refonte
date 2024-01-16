<script setup>
const { client } = usePrismic()
// récupérer tous les étudiants
const { data: students } = await useAsyncData('student', () => client.getAllByType('student'));

let studentUIDs = [];

// chercher ceux avec un pays ayant "portugal"
Object.values(students.value).forEach((student, index) => {
    const countryText = student.data.student_country[0]?.text || '';
    if (countryText.includes('Japon')) {
        studentUIDs.push(student.uid);
    }
});

// Sélectionne un UID au hasard
const thisStudent = studentUIDs[Math.floor(Math.random() * studentUIDs.length)];
// récupérer les informations d'un client en particulier
const aStudent = await client.getByUID('student', thisStudent);

// variables pour le contenu
const name = aStudent.data.student_name;
const firstname = aStudent.data.student_firstname;
const image = aStudent.data.student_img;
const link = aStudent.data.student_link;
const country = aStudent.data.student_country;
</script>

<template>
    <div class="students">
        <Student class="students-student" :name="name" :firstname="firstname" :img="image" :link="link" :country="country" />
    </div>
</template>

<style>
.students {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}
</style>