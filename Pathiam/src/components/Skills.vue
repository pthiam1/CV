<script setup>
</script>

<template>
  <section>
    <h2>Compétences Techniques</h2>

    <div class="item">
      <i class="fas fa-code"></i>
      <div class="details">
        <h3>Langages de programmation</h3>
        <p>Python, Java, C/C++ (Qt Creator)</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-globe"></i>
      <div class="details">
        <h3>Développement Web</h3>
        <p>VueJS, Symfony, PHP, HTML/CSS</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-database"></i>
      <div class="details">
        <h3>Bases de données</h3>
        <p>MySQL, SQL Server, MongoDB</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-chart-line"></i>
      <div class="details">
        <h3>Analyse de données</h3>
        <p>Python (Pandas, Numpy)</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-code-branch"></i>
      <div class="details">
        <h3>Outils de versionnement</h3>
        <p>Git et GitHub</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-tools"></i>
      <div class="details">
        <h3>Environnements de développement</h3>
        <p>Visual Studio Code, Eclipse, IntelliJ IDEA</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-project-diagram"></i>
      <div class="details">
        <h3>Conception UML</h3>
        <p>Diagrammes de classes, séquences, cas d'utilisation</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-cubes"></i>
      <div class="details">
        <h3>Virtualisation</h3>
        <p>Docker, Vagrant</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-server"></i>
      <div class="details">
        <h3>Administration système</h3>
        <p>Linux (préférence), Windows</p>
      </div>
    </div>
    <div class="item">
      <i class="fas fa-network-wired"></i>
      <div class="details">
        <h3>Réseaux</h3>
        <p>Topologies, TCP/IP, Adressage IP</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
};

</script>


<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;
  background-color: #ffd700;
  color: #1f1f1f;
  border-radius: 50%;
  font-size: 1.5rem;
}


h2 {
  font-size: 1.8rem;
  color: #ffd700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  margin: 2rem;
  padding: 1rem;
  background-color: #1f1f1f;
}


h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}


</style>
