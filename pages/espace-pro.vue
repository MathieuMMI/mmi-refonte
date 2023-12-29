<script setup>

</script>
<template>
    <div class="espace">
        <h2 class="espace__title">ESPACE PRO</h2>
        <p class="espace__prargraph">Découvrez les opportunités que la formation vous offre !</p>
    </div>

    <div class="projet">
        <div class="projet__left">
            <MyEllipse />
            <h2 class="projet__left--title">Proposer un projet ?</h2>
            <p class="projet__left--text"> Association, vous souhaitez densifier votre communication autour d'un site ou
                d'une application mobile ? Vous pouvez nous proposer un sujet de projet collectif. </p>
            <p class="projet__left--text">Vous devenez alors commanditaire et vous participerez ainsi à mettre en
                application les compétences acquises par
                nos étudiants.</p>
            <p class="projet__left--text"> Proposez votre projet ! </p>
        </div>
        <div class="projet__right">
            <svg></svg>
            <MyButton />
        </div>
    </div>

    <div class="alternance">
        <MyEllipse />
        <div class="alternance__left">
            <MyButton />
            <svg></svg>
        </div>
        <div class="alternance__right">
            <MyEllipse />
            <h2 class="alternance__right--title">Proposer une alternance ?</h2>
            <p class="alternance__right--text"> Vous pouvez également accueillir un étudiant en apprentissage à partir de la
                deuxième année. </p>
            <p class="alternance__right--text">Son rythme est pensé sur 2 semaines : 10 jours en entreprise, 3 jours au
                département. Sauf condition particulière, les congés sont de 5 semaines.</p>
            <p class="alternance__right--text"> N'hésitez plus… Contactez-nous pour adopter un apprenti !</p>
        </div>
    </div>

    <div class="stage">
        <div class="stage__left">
            <h2 class="stage__left--title">Proposer un stage ?</h2>
            <p class="stage__left--text"> Afin de valider leur semestre et obtenir leur diplôme, nos étudiants doivent
                effectuer un stage de 12 semaines en milieu professionnel (en deuxième année) ou de 16 semaines (en
                troisième année). </p>
            <p class="stage__left--text">Ils mettent en pratique l'ensemble leurs savoirs acquis durant la formation. Leur
                travail se développe dans un
                large champ d'action, de la start-up à l'entreprise plus traditionnelle en passant par les agences de
                communication digitale ou les associations régionales.</p>
            <p class="stage__left--text"> Si leurs projets ont retenu votre attention, n'hésitez pas à nous soumettre vos
                offres grâce à notre formulaire. </p>
        </div>
        <div class="stage__right">
            <MyEllipse />
            <MyButton />
            <svg></svg>
        </div>
    </div>
</template>
<style lang="scss"></style>