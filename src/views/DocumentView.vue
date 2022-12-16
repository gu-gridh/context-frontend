<template>
    <div class="card-container">
      <div class="back-button" onclick="history.back()">Tillbaka</div>
      <div class="page-container">
        <div class="title-container">
          <div class="title">
            {{ document.name }}
          </div>
          <div class="author">{{ category.name }}, {{ document.year }}</div>
          <!-- <a :href="documentToLink(document)" class="link">Ladda ned ursprungs-PDF</a> -->
        </div>
        <div class="page-text" v-html="document.text"></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { get } from "@/services/diana";
  import { Document, Category } from '@/types/riksdagstryck';

  const props = defineProps<{
    id: number
  }>()
  
  console.log(props.id)
  const document = await get<Document>(props.id, "document");
  const category     = await get<Category>(document.category, "documentcategory");

  function documentToLink(document: Document) {
    const splits = document.name.split("-")
    const splitName = splits[2]
    
    return  `https://weburn.kb.se/riks/tv%C3%A5kammarriksdagen/pdf/web/${ document.year }/web_${ splitName }/${ splitName }.pdf`

  }

//   if (props.segment) {
//     const segment = await get<Segment>(props.segment, "segment");
  
//     console.log(segment.text);
  
//     text = text.replace(
//       segment.text,
//       `<span class="highlight">${segment.text}</span>`
//     );
  
//     console.log(text);
//   }
  </script>
  
  <style>
  .highlight {
    font-weight: 800;
  }
  </style>
  
  <style scoped>
  .link {
    color: rgb(182, 82, 139)
  }

  .link:hover {
    color: rgb(112, 51, 86)

  }

  .card-container {
    height: 70%;
  }
  
  .back-button {
    padding: 5px;
    font-size: 16px;
    text-align: center;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    height: auto;
    width: 80px;
    margin: 20px;
    margin-left: 3em;
    background-color: rgb(182, 82, 139);
  }
  
  .page-container {
    margin-left: 3rem;
    margin-right: 3rem;
    /* margin-bottom: 3rem; */
    line-height: 2rem;
    height: 100%;
  }
  
  .page-text {
    font-size: 20px;
    height: 100%;
    overflow-y: scroll;
  }
  
  .title-container {
    margin-bottom: 2rem;
  }
  
  .title {
    font-family: "Cormorant Garamond", serif;
    letter-spacing: -3px;
    margin-top: 30px;
    font-size: 30px;
    line-height: 0.9;
    color: rgb(182, 82, 139);
  }
  
  .author {
    font-size: 20px;
  }
  
  .back-button:hover {
    background-color: rgb(202, 102, 159);
    color: black;
  }
  
  @media screen and (max-width: 950px) {
    .back-button {
      margin-top: 40px;
      margin-left: 50px;
      font-size: 28px;
      width: 120px;
    }
  }
  </style>
  