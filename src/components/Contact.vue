<template>
    <section class="contact-section">
      <h2>Contact</h2>
      <ul>
        <li>Email : <a href="mailto:papa.xthiam@gmail.com">papa.xthiam@gmail.com</a></li>
        <li>Téléphone : 0752834362</li>
        <li>LinkedIn : 
          <a href="https://www.linkedin.com/in/papa-thiam-b914991b7/" target="_blank">
            Mon profil LinkedIn
          </a>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  /* Section Styling */
  .contact-section {
    background-color: #2b2b2b; /* Dark background */
    padding: 2rem;
    margin: 2rem auto;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  /* Heading */
  .contact-section h2 {
    font-size: 1.8rem;
    color: #ffd700; /* Gold color */
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  /* Contact List */
  .contact-section ul {
    list-style-type: none;
    padding: 0;
    font-size: 1rem;
    line-height: 1.8;
    color: #b0b0b0; /* Light gray text */
  }
  
  .contact-section li {
    margin-bottom: 0.8rem;
  }
  
  /* Links Styling */
  .contact-section a {
    color: #ffd700; /* Gold for links */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .contact-section a:hover {
    color: #ffffff; /* White on hover */
    text-decoration: underline;
  }
  </style>
  