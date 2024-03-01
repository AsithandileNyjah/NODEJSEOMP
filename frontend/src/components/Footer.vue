<template>
    <footer>
      <div class="footer">
        <p class="para">Le Petit Italia</p>
  
        <p class="para">CopyRights Reserved</p>
  
        <p class="para2">2024</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    props: {
      msg: String,
    },
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1220px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  
  p {
    padding-top: auto;
    padding-bottom: auto;
  }
  </style>