<template>
  <div class="container">
    <h2>Gestiona tus libros</h2>
    
    <section class="form-box">
      <form @submit.prevent="enviarLibro" class="book-form">
        <input v-model="nuevo.titulo" placeholder="Título del libro" required>
        <input v-model="nuevo.autor" placeholder="Autor" required>
        
        <select v-model="nuevo.categoria" required>
          <option value="" disabled selected>Género literario</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ficción">Ficción</option>
          <option value="Aventura">Aventura</option>
        </select>

        <textarea v-model="nuevo.descripcion" placeholder="Descripción del libro"></textarea>
        
        <button type="submit" class="btn-add">Añadir Libro</button>
      </form>
    </section>

    <hr>

    <section class="filter-box">
  <input 
    v-model="filtro" 
    placeholder="🔍 Buscar por título, autor o categoría..." 
    class="filter-input"
  >
</section>

<div v-if="librosFiltrados.length > 0" class="book-grid">
  <div v-for="libro in librosFiltrados" :key="libro.id" class="card">        <h3>{{ libro.titulo }}</h3>
        <p>{{ libro.autor }}</p>
        <div class="actions">
          <router-link :to="'/libros/' + libro.id" class="link-detail">Ver más</router-link>
          <button @click="$emit('eliminar-libro', libro.id)" class="btn-del">Eliminar</button>
        </div>
      </div>
    </div>
    
    <p v-else>No hay libros disponibles en este momento.</p>
  </div>
</template>

<style scoped>
/* Versión desktop */
.book-form {
  display: flex;
  align-items: stretch;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.book-form input, 
.book-form select, 
.book-form textarea,
.book-form button {
  margin: 0;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7aafa4;
  font-family: inherit;
  font-size: 0.9rem;
  box-sizing: border-box;
}

.book-form textarea {
  flex: 2;
  min-width: 250px;
  height: 42px;
  resize: vertical;
}

.btn-add {
  background-color: #7aafa4;
  color: white;
  font-weight: bold;
  border: none !important;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-add:hover {
  background-color: #5d8a81;
}

.link-detail {
  color: #7aafa4;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
  padding: 5px 12px;
  border: 1px solid #7aafa4;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;
}

.link-detail:hover {
  background-color: #7aafa4;
  color: white;
}

.btn-del {
  background-color: #dc5c49;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 7px 12px;
  cursor: pointer;
}

.filter-box {
  margin: 10px 0 5px 0;
  display: flex;
  justify-content: flex-end;
}

.filter-input {
  width: 100%;
  max-width: 350px;
  padding: 8px 12px;
  border: 1px solid #7aafa4;
  border-radius: 20px;
  outline: none;
  font-size: 0.85rem;
}

/* Versión mobile */
@media (max-width: 600px) {
  .book-form {
    flex-direction: column;
    display: flex;
    width: 100%;
  }
  
  .book-form input, 
  .book-form select,
  .book-form textarea,
  .book-form button {
    width: 100%;
    margin: 5px 0;
    box-sizing: border-box;
  }
  
  .container {
    padding: 10px;
  }
  
@media (min-width: 601px) {
  .filter-box {
    margin: 10px 0 5px 0;
    display: flex;
    justify-content: flex-end;
  }

  .book-grid {
    margin-top: -45px;
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

  .card {
    text-align: center;
  }
}
</style>

<script>
export default {
  props: ['libros'],
  data() {
    return {
      filtro: '',
      nuevo: { 
        titulo: '', 
        autor: '', 
        categoria: '',
        descripcion: ''
      }
    };
  },
  computed: {
    librosFiltrados() {
      const termino = this.filtro.toLowerCase();
      return this.libros.filter(libro => {
        return libro.titulo.toLowerCase().includes(termino) ||
               libro.autor.toLowerCase().includes(termino) ||
               libro.categoria.toLowerCase().includes(termino);
      });
    }
  },
  methods: {
    enviarLibro() {
      if (this.nuevo.titulo && this.nuevo.categoria) {
        this.$emit('agregar-libro', { ...this.nuevo });
        this.nuevo = { titulo: '', autor: '', categoria: '', descripcion: '' };
      }
    }
  }
}
</script>