<template>
  <div class="search-container">
    <div class="multiselect-input" id="author-select">
      <div class="select-label"><p>Sök på ord eller logik...</p></div>
      <v-text-field
        v-model="store.query"
        :value="store.query"
        variant="underlined"
        label="Sök"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </div>
    <div class="multiselect-input" id="work-select">
      <div class="select-label"><p>... och avgränsa din sökning!</p></div>
      <v-select
        v-model="store.category"
        :value="store.category"
        variant="underlined"
        :items="items"
        label="Dokumentkategori"
        clearable
      >
    </v-select>
    </div>
    <div class="range-slider-container">
      <v-range-slider
        v-model="store.range"
        :min="minYear"
        :max="maxYear"
        :step="1"
        strict
        hide-details
        thumb-label="always"
      >
      </v-range-slider>
    </div>
    <div class="count-label">
      <p v-if="store.query">
        Totalt {{ documentCount }} dokument med träffar i samlingen.
      </p>
      <p v-else>Totalt {{ documentCount }} dokument i samlingen.</p>
    </div>

    <div class="button-container">
      <nav class="nav-button">
        <router-link class="button-link"
        :to="{
          name: 'search',
          query: {
            q: store.query,
            category: store.category,
            min_year: store.range[0],
            max_year: store.range[1]
          },
        }"
        v-slot="{ navigate }"
      >
      <span class="search-button" @click="onClick">Sök</span>
        <!-- <button :href="href" class="search-button" @click="onClick">Sök</button> -->
      </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { list, search } from "@/services/diana";
import type { Document, Category } from "@/types/riksdagstryck";
import { searchStore } from "@/stores/search";

const store = searchStore();
const minYear = 1867;
const maxYear = 1970;
const documentCount = ref<number>();
const query = ref<string>("");
const selectedcategory = ref<Array<Category>>();

const category = await list<Category>(
  "documentcategory",
  {}
).then((c) => c.results);


countDocuments();

const items = category.map((x) => {
  return { title: x.name, value: x.id };
});

function countDocuments() {
  search<Document>(query.value, "document", {
    limit: 0,
    search: store.query,
    min_year: store.range[0],
    max_year: store.range[1],
    category: store.category

  }).then((ds) => {
    documentCount.value = ds.count;
  });
}

function onClick() {
  // store.query = query.value;
  // store.category = selectedcategory.value;
  countDocuments();
}



// watch(query, () => {
//   store.query = query.value;
//   countDocuments()
// });

// watch(selectedcategory, () => {
//   store.category = selectedcategory.value;
//   countDocuments()
// });
</script>
<style scoped>
a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: white;
  text-decoration-style: none;
}

.nav-button {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.button-link {
  font-size: 25px;
  font-weight: 300;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}


.multiselect-input {
  margin-bottom: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.select-label {
  font-size: large;
  color: black;
  font-style: normal;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.count-label {
  font-size: large;
  color: black;
  font-style: normal;
  text-align: center;
  border-style: dotted;
  border-color: grey;
  border-width: 1px 0 0 0;
  padding: 2rem 0 1rem 0;
}


.button-container {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.search-button {
  display: inline-block;
  font-family: "Barlow Condensed", sans-serif !important;
  padding: 0.4rem 1rem 0.4rem 1rem;
  font-size: 25px;
  color: white;
  background-color: green;
  border-color: none !important;
  border-radius: 10px;
  border: 0px solid transparent !important;
  margin-bottom: 3rem; 
  position: absolute;
  margin-left: -30px; 
}

button {
  color: white;
  overflow: hidden;
}

.search-button:hover {
  background-color:rgb(26, 162, 114) !important;
  color: white !important;
}

.range-slider-container {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

@media screen and (max-width: 950px) {
  .select-label {
    font-size: 25px !important;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .count-label {
    font-size: 25px !important;
  }

  .search-container {
    height: 480px;
  }

  .multiselect {
    --ms-font-size: 2.2rem;
    --ms-option-font-size: 1.8rem;
  }

  .search-button {
    font-size: 35px;
  
  }
}
</style>

<style>
.v-slider-track__background {
  background-color: green !important;
}

.v-slider-track__fill {
  background-color: green !important;
}

.v-slider-thumb {
  /* inset-inline-start: calc(100% - 5px) !important; */
  --v-slider-thumb-size: 15px !important;
  color: gray !important;
}

.v-slider-thumb__label {
  margin-left: -18px;
  margin-bottom: 5px;
}

.v-slider-thumb__label div {
  font-size: large;
}

.v-text-field input {
    font-size: large;
  }

  .v-text-field input::placeholder {
    font-size: large !important;
  }

.v-select__selection  {
  font-size: large;
}

.v-chip.v-chip--size-small {
    --v-chip-size: 2rem !important;
    --v-chip-height: 35px !important;
    font-size: 1rem !important;
    padding: 0 10px !important;
}
</style>
