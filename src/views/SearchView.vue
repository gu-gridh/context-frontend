<template>
  <div class="search-view-container">
    <Suspense v-if="q">
      <data-table :q="q" :category="category" :min_year="min_year" :max_year="max_year"></data-table>
    </Suspense>
    <div v-else>
      <div class="material-title">
        <h1>Om materialet</h1>
      </div>
      <div class="material-content">
        Verktyget <i>Context</i> innehåller material från det svenska
        riksdagstrycket, alla parlamentariska dokument från tvåkammarriksdagen
        (1867-1970). Dokumenten är fördelade över 11 olika kategorier, från
        motioner och propositioner, till betänkanden och SOU:er. För att göra en
        sökning, skriv in ett sökord eller en fras i vänsterfältet och tryck på
        "Sök".
        <br />
        <br />
        Sökningen genomför en så kallad fulltextsökning i materialet, vilket
        betyder att den letar exakta matchningar i texten. Det finns visst stöd
        för vildkortssökningar och reguljära uttryck, se nedan.
        <br />
           <br />
        <ul>
          <li>
            Sök på förekomsten av alla ord i ett urval i ett dokument med hjälp av ampersand
            <span class="search">kapital & pengar & kommunism</span>
          </li>
          <li>
            Sök på förekomsten något av flera ord i ett urval i ett dokument med hjälp av lodstreck
            <span class="search">kapital | pengar | kommunism</span>
          </li>
          <li>
            Vildkortsökning (<i>wild card</i>): Används för att hitta alla
            träffar som följer ett visst ändelsemönster, ex.-vis
            <span class="search">terror:*</span>
          </li>
          <li>
            Exkludera ord: Matchningar kan uteslutas från sökningen med utropstecken, som i
            <span class="search">marknad:* & !marknaden & !marknader</span>. Observera att alternativen
            måste separeras med ampersand.
          </li>
        </ul>
        <br />
        Många gånger finns det fler än en träff i samma dokument. Dessa separeras då med ellipsis (...) och nyrad.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";

const props = defineProps<{
  q?: string;
  category?: string;
  min_year?: number;
  max_year?: number;
}>();
</script>
<style scoped>
.search-view-container {
  height: 100%;
}
.material-title {
  font-family: "Cormorant Garamond", serif;
  letter-spacing: -3px;
  margin-top: 30px;
  font-size: 30px;
  line-height: 0.9;
  text-align: center;
  color: rgb(64, 159, 105);
}

.material-content {
  color: black;
  font-size: 18px;
  padding: 30px 50px 30px 30px;
  text-align: justify;
  line-height: 1.3;
}

.material-content ul {
  line-height: 1.8;
  text-align: left;
}

.search {
  color: slategray;
  background-color: lightgrey;
  padding: 0.1rem 0.5rem 0.2rem 0.5rem;
  border-radius: 1rem;
  /* overflow: hidden; */
  white-space: nowrap;
}
</style>
