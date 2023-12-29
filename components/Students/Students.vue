<script setup>
const { client } = usePrismic()
const { data: students } = await useAsyncData('student', () => client.getAllByType('student'));
console.log(students)
</script>

<template>
    <div class="students">
        <Student class="students-student" v-for="student1 in students" :key="student1.student_id" :name="student1.data.student_name" 
        :firstname="student1.data.student_firstname" :img="student1.data.student_img" :link="student1.data.student_link" :country="student1.data.student_country" />
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