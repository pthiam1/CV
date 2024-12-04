<script setup>
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header>
      <div class="profile-card">
        <img src="./assets/profil.jpg" alt="Profile Picture" class="profile-pic" />
        <div class="profile-info">
          <h1>Papa Thiam</h1>
          <p>Développeur passionné en quête d'innovation.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/skills">Compétences</router-link></li>
          <li><router-link to="/projects">Projets</router-link></li>
          <li><router-link to="/experience">Expérience</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- socials media with icons -->
    <div class="socials">
      <a href="https://www.linkedin.com/in/papa-thiam-b914991b7/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/pape.thiam.1420/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#@papa_thiam_00" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://github.com/pthiam1" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://x.com/PapaThiam2" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-xing"></i>
      </a>
      <a href="@pathiam" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-snapchat"></i>
      </a>

    </div>


    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Papa Thiam</p>
    </footer>
  </div>
</template>

<style scoped>

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #2b2b2b;
  color: #ffffff;
}

/* Header Styling */
header {
  background-color: #1f1f1f;
  padding: 2rem;
  text-align: center;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.socials a {
  color: #00acee;
  font-size: 2.5rem;
  transition: color 0.3s ease;
  translate: 0.3s ease;
  
}

.socials a:hover {
  color: #ffffff;
}
 


.profile-card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ffd700;
  margin-right: 1rem;
}

.profile-info {
  text-align: left;
}

.profile-info h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #ffd700;
}

.profile-info p {
  margin: 0;
  font-size: 1rem;
  color: #b0b0b0;
}

/* Navigation */
nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav ul li {
  font-size: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav ul li a:hover {
  background-color: #ffd700;
  color: #1f1f1f;
}

/* Main Content */
main {
  padding: 2rem;
}

/* Footer */
footer {
  background-color: #1f1f1f;
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  color: #b0b0b0;
}

@media (min-width: 768px) {
  .profile-card {
    margin-bottom: 2rem;
  }

  .profile-pic {
    width: 150px;
    height: 150px;
  }

  .profile-info h1 {
    font-size: 2rem;
  }

  .profile-info p {
    font-size: 1.2rem;
  }

  nav ul li {
    font-size: 1.2rem;
  }

  nav ul li a {
    padding: 0.6rem 1.2rem;
  }

  main {
    padding: 4rem;
  }

  footer {
    padding: 2rem;
  }
}
</style>
