<template>
  <div class="main-container">
    <div class="left-column">
      <div class="ll-logo-container">Kontext</div>

      <nav class="nav-links">
       
        <!-- <router-link to="/about" class="nav-link">Om verktyget</router-link> -->
      </nav>

      <Suspense>
        <search-box></search-box>
      </Suspense>
    </div>
    <div class="right-column">
      <div class="right-view-container">
        <nav class="nav-links">
           <router-link to="/" class="nav-link">Välkommen</router-link>
          <router-link to="/search/" class="nav-link"
            >Om materialet</router-link
          >
        </nav>
        <div class="right-view-container-content">
          <Suspense>
            <router-view />
          </Suspense>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import SearchBox from "./components/SearchBox.vue";
</script>


<style>
html,
body {
  height: auto !important;
  width: 100% !important;
  margin: 0 !important;

  font-family: "Barlow Condensed", sans-serif !important;

  background: linear-gradient(
    to right,
    rgb(26, 162, 114) 0%,
    rgb(173, 168, 85) 50%,
    rgb(232, 232, 183) 100%
  ) !important;
}

a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: white;
  text-decoration-style: none;
}

a:hover {
}

#app {
  height: inherit;
  width: inherit;
  padding: 0 0 0 0 !important;
  margin: 0 0 0 0 !important;
  /* display: flex !important; */
}

.ll-logo-container {
  font-family: "Cormorant Garamond", serif;
  letter-spacing: -6px;
  color: white;
  width: 100%;
  font-size: 100px;
  line-height: 0.75;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 0px;
  height: 100px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}

.nav-links {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 1rem;
  width: 100%;
  z-index: 1;
  margin-left: -5px;
  min-height:35px;
}

.nav-link {
  font-size: 25px;
  font-weight: 300;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin-right: 0.25rem;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.nav-link:hover {
  opacity: 1;
  background-color: rgb(255, 255, 255);
  color: black;
}

.super-main-container {
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex-direction: row;
  float: left;
  min-height: calc(100vh - 200px);
  margin-bottom: 20px;
  width: 100%;
}

.left-column {
  float: left;
  width: 30%;
  min-width: 350px;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: all 0.2s ease-in-out;
}

.right-column {
  display: flex;
  flex-direction: column;
  min-width: 600px;
  width: 70%;
  height: auto;
  transition: all 0.2s ease-in-out;
}

.right-view-container {
  width: 85%;
  margin: auto;
  margin-top: 200px;
}

.right-view-container-content {
  background-color: white;
  border-radius: 12px;
  background-color: white;
  border-radius: 10px;
  /* min-height: 400px; */
  height: auto;
  min-height: 490px;
  max-height: 1000px;

  /* overflow: scroll; */
  /* padding-bottom: 20px; */
  padding: 1rem 1rem 2rem 2rem;
  z-index: 1;
}

.search-container {
  margin-left: 0px;
  width: 100%;
  height: 490px;
  background-color: rgb(255, 255, 255, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  z-index: 1;
}

.button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}


@media screen and (max-width: 950px) {
  .ll-logo-container {
    margin-top:100px;
    font-size: 140px;
    height: 140px;
  }

  .nav-link {
    font-size: 35px !important;
    padding: 0rem 0.5rem 0rem 0.5rem;
    margin-right: 0.25rem;
    border-radius: 10px;
  }

  .search-container {
  min-height: 550px;
  }

  .select-label {
    font-size: 25px !important;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .count-label {
    font-size: 25px !important;
  }


  .multiselect {
    --ms-font-size: 2.2rem;
    --ms-option-font-size: 1.8rem;
  }



  .main-container {
    display: block;
    padding: 0px 60px 20px 60px;
  }

  .left-column {
    padding-left: 0px;
    height: auto;
    width: 100%;
    display: block;
    float: left;
    min-width: 600px;
  }
  .right-column {
    width: 100%;
    min-width: 600px;
    height: auto;
    display: block;
    float: left;
  }

  .right-view-container {
    width: 100%;
    margin-top: 50px;
  }
}
</style>
