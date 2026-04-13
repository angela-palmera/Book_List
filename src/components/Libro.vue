<template>
  <div class="container" v-if="libro">
    <h2>Detalles del Libro</h2>
    <div class="card-detail">
      <h3>{{ libro.titulo }}</h3>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      
      <router-link to="/libros" class="btn-back">Volver al Catálogo</router-link>
    </div>
  </div>
  <div v-else>
    <p>Cargando información del libro...</p>
  </div>
</template>

<script>
export default {
  props: ['libros'],
  data() {
    return {
      libro: null
    }
  },
  mounted() {
    const idParam = this.$route.params.id;
    this.libro = this.libros.find(l => l.id == idParam);
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
}

.card-detail {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-top: 4px solid #7aafa4;
}

.btn-back {
  display: inline-block;
  margin-top: 20px;
  color: #7aafa4;
  text-decoration: none;
  border: 1px solid #7aafa4;
  padding: 8px 15px;
  border-radius: 5px;
}

.btn-back:hover {
  background: #7aafa4;
  color: white;
}
</style>