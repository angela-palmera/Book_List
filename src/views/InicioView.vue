<template>
  <div class="inicio-container">
    <div class="welcome-card">
      <h1>¡Bienvenido a BookList!</h1>
      <p><i>Leer es soñar con los ojos abiertos.</i></p>
      <div class="stats">
      </div>
      <router-link to="/libros" class="btn-primary">Ir al Catálogo de Libros</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.inicio-container { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  min-height: 60vh; 
  text-align: center; 
}
.welcome-card { 
  background: white; 
  padding: 3rem; 
  border-radius: 20px; 
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.15); 
}
h1 { color: #7aafa4; font-size: 2.5rem; margin-bottom: 1rem; }
.btn-primary { 
  display: inline-block; 
  margin-top: 2rem; 
  padding: 12px 30px; 
  background: #7aafa4; 
  color: white; 
  text-decoration: none; 
  border-radius: 50px; 
  font-weight: bold; 
}
</style>