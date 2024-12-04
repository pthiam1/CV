<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section>
    <h2>À propos de moi</h2>
    <p>Étudiant en Master Ingénierie du Web, passionné par le développement informatique et à la recherche d'une alternance.</p>
    <p>Je suis spécialisé dans le développement web et mobile, la conception d'interfaces utilisateur et l'analyse de données.</p>
  </section>
  <section>
    <h2>Mes motivations</h2>
    <p>Je suis quelqu'un de curieux, créatif et autonome. J'aime apprendre de nouvelles technologies et relever des défis.</p>
    <p>Je suis également passionné par l'innovation et la recherche de solutions pour améliorer l'expérience utilisateur.</p>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
section {

  margin: 2rem;
  padding: 1rem;
  background-color: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 1.8rem;
  color: #ffd700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

p {
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.6;
}
</style>
