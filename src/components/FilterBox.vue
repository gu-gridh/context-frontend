<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div
        class="input-group relative flex items-stretch w-full mb-4 shadow-md"
      >
        <input
          type="search"
          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-100 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black/10 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
        />
        <button
          class="btn inline-block px-6 py-2 border-2 
          border-slate-100 bg-slate 
          font-medium text-xs text-slate-400 
          uppercase hover:green hover:bg-opacity-5 hover:border-slate-200/5 
          focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="button"
          id="button-addon3"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
