<template>
    <div class="search-view-container">
      <div>
        <div class="reuse-title">
          <h1>Kontext</h1>
        </div>
        <div class="reuse-content">
          <i>Kontext</i> är ett verktyg och sökmotor för att utforska textmaterial vid Centrum för Digital Humaniora vid Göteborgs Universitet. Det huvudsakliga syftet är att det 
          skall utgöra enkelt verktyg med relativt kraftfulla sökförmågor. Det är avsikten att verktyget kontinuerligt skall utökas med fler textkorpora, men vid start finns endast tillgänglig 
          <i>Riksdagstrycket</i>, Sveriges tvåkammarriksdags dokumentsamling.

          Använd sökgränssnittet i det vänstra fältet för att göra filtreringar utav materialet. Skriv in ett ord i sökrutan och tryck på "Sök" för att visa eventuella 
          resultat i samlingen. Konsultera <router-link to="search" class="text-link">instruktionerna</router-link> för mer avancerade sökstrategier.

          Kontext har utvecklats vid Centrum för Digital Humaniora i huvudsak av Victor Wåhlstrand Skärström.

      </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">

  </script>
  <style scoped>
  .text-link {
    color: green;
  }

  .text-link:hover {
    color: darkgreen
  }

  .search-view-container {
    height: 100%;
    padding-left: 2rem;
    padding-right: 3rem;
    padding-top: 3rem;
  }
  .reuse-title {
    font-family: "Cormorant Garamond", serif;
    letter-spacing: -3px;
    margin-top: 30px;
    font-size: 30px;
    line-height: 0.9;
    text-align: center;
    color: rgb(64, 159, 105);
  }
  
  .reuse-content {
    color: black;
    font-size: 18px;
    padding: 30px;
    text-align: justify;
    line-height: 1.3;
  }
  
  .reuse-content ul {
    line-height: 1.8;
  }
  
  </style>
  