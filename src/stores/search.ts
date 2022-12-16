import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import type {
  Document, Category,
} from "@/types/riksdagstryck";

export const searchStore = defineStore("search", {
  state: () => {
    const query = ref<string | undefined>(undefined);
    const category = ref<number | undefined>(undefined);
    const minYear = ref<number>(1867);
    const maxYear = ref<number>(1970);
    const range = ref<Array<number>>([1867, 1970])

    return { query, category, range };
  }
});
