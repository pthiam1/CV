<template>
    <section>
      <h2>Expérience Professionnelle</h2>
      <div>
        <h3>Stage chez VIGILUS (Dakar) – 2023</h3>
        <p>Développement du module de gestion des achats pour l'application Pekhè.</p>
        <p>Technologies utilisées : PHP, Laravel, MySQL.</p>
        <p> Fonctionnalités : Gestion des fournisseurs, des commandes et des factures.</p>

      </div>
      <div>
        <h3>Stage chez HEBUS (Evreux) – 2020</h3>
        <p>Conception d'un espace administrateur sécurisé pour le site web hebus-ip.com.</p>
        <p>Technologies utilisées : APS.NET, C#, SQL Server.</p>
        <p> Fonctionnalités : Gestion des utilisateurs, des articles et des commentaires.</p>
      </div>  
      
      <div>
        <h3>Préparateur de commandes chez Leclerc drive (La Rochelle) – 2021 à 2024</h3>
        <p>Préparation des commandes clients, gestion des stocks et des livraisons.</p>
        </div>

    </section>
  </template>
  
  <script>
  export default {
    name: 'Experience',
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

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

p {
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.6;
}
</style>