<template>
  <div class="view-container">
  <v-pagination v-model="page" :length="pages"></v-pagination>
  <div class="table-container">
    <table class="data-table">
      <thead class="table-head">
        <tr>
          <th>Årtal</th>
          <th>Kategori</th>
          <th>Sökresultat</th>
          <th>Fulltext</th>
        </tr>
      </thead>
      <tbody v-if="!loading">
        
        <tr class="row" v-for="document in documents" :key="document.id">
          <td>{{ document.year }}</td>
          <td>{{ categoryMap[document.category] }}</td>
          <td v-html="document.excerpts"></td>

          <td>
            <router-link :to="{
          name: 'document',
          params: { id: document.id }
        }"
        class="read-link"
        >
          {{ document.name }}
        </router-link>
          
          </td>

        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="loading-container">
      <v-progress-circular
        indeterminate
        color="green"
        :size="60"
      ></v-progress-circular>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { Document, Category } from "@/types/riksdagstryck";
import { search, list } from "@/services/diana";
import { RouterLink, RouterView } from "vue-router";

const props = defineProps<{
  q: string;
  category?: string;
  min_year?: number;
  max_year?: number;
}>();


const numberPerPage = 10;
const page = ref<number>(1);
const documentCount = ref<number>(0);
const loading = ref<boolean>(true);
const documents = ref<Array<Document>>();
const categories = ref<Array<Category>>();
const categoryMap = computed(() => {
  return categories.value?.reduce((map: any, obj) => {
    map[obj.id] = obj.name;
    return map
  }, {})
})
const pages = computed(() => {
  return Math.floor(documentCount.value / numberPerPage) + 1;
});


// Initialize
await fetchDocuments()
await fetchCategories()

async function fetchCategories() {
  const response = await list<Category>("documentcategory", {
    limit: 100,
  });


  categories.value = response.results;

}

async function fetchDocuments() {
  loading.value = true;
  const response = await search<Document>(props.q, "document", {
    limit: numberPerPage,
    offset: numberPerPage * (page.value - 1),
    min_year: props.min_year,
    max_year: props.max_year,
    category: props.category

  });


  documents.value = response.results;
  documentCount.value = response.count;

  loading.value = false;
}

watch(
  props,
  async () => {
    page.value = 1;
    await fetchDocuments();
  },
  { deep: true }
);

watch(page, async () => {
  await fetchDocuments();
});
</script>
<style scoped>

.read-link {
  color: black;
}

.read-link:hover {
  color: green;
}

.view-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.table-container {
  overflow: auto;
  height: 100%;
  font-size: large;
  line-height: 1.8;

}
.table-container thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: center;
}

/* Just common table stuff. Really. */
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  padding: 1rem 2rem;
}

th {
  background: white;
  font-weight: 800;
  text-align: left;
}

td {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-style: dotted;
  border-color: grey;
  border-width: 0 0 1px 0;
}

td:first-child {
  padding-left: 1rem;
  padding-right: 1rem;
}

.loading-container {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-items: center;
}


tr:hover {
  background-color: rgb(238, 238, 238);
}
</style>
