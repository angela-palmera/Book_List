<template>
  <div class="container" v-if="libro">
    <div class="detalle-card">
      <h1>{{ libro.titulo }}</h1>
      <h3>Autor: {{ libro.autor }}</h3>
      <p class="tag">{{ libro.categoria }}</p>
      
      <p v-if="libro.descripcion" class="descripcion">{{ libro.descripcion }}</p>

      <button @click="$router.push('/libros')" class="btn-volver">Volver al Catálogo</button>
    </div>
  </div>
  <div v-else class="container">
    <div class="detalle-card">
      <p>Cargando información del libro...</p>
      <button @click="$router.push('/libros')" class="btn-volver">Regresar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'libros'],
  computed: {
    libro() {
      return this.libros ? this.libros.find(l => l.id == this.id) : null;
    }
  }
}
</script>

<style scoped>
.descripcion {
  margin: 20px 0;
  line-height: 1.6;
  color: #444;
  font-style: italic;
}

.detalle-card { 
  background: white; 
  padding: 2rem; 
  border-radius: 15px; 
  box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
  text-align: center; 
  border-top: 5px solid #7aafa4;
}

.tag { 
  display: inline-block; 
  background: #7aafa4; 
  color: white; 
  padding: 5px 15px; 
  border-radius: 20px; 
  font-size: 0.8rem; 
  font-weight: bold;
}

.descripcion { margin: 20px 0; line-height: 1.6; color: #444; }

.btn-volver { 
  background: white; 
  color: #7aafa4;
  border: 2px solid #7aafa4; 
  padding: 10px 20px; 
  border-radius: 5px; 
  cursor: pointer; 
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-volver:hover {
  background: #7aafa4;
  color: white;
}
</style>