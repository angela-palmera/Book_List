<template>
  <div id="app">
    <header class="navbar">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Logo Nova" class="logo-img" />
      </div>
      <nav>
        <router-link to="/">🏠︎ Inicio</router-link> | 
        <router-link to="/libros">📚 Catálogo</router-link>
      </nav>
      <div class="user-panel">
        <p>Usuario: <strong>{{ usuario }}</strong></p>
        <button @click="incrementar" class="btn-counter">Sesión: {{ contador }} clicks</button>
      </div>
    </header>

    <main class="main-content">
      <router-view :libros="libros" @agregar-libro="agregar" @eliminar-libro="eliminar" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
  return {
    usuario: 'Angela_Palmera',
    contador: 0,
    libros: [
      { 
        id: 1, 
        titulo: 'Matilda', 
        autor: 'Roald Dahl', 
        categoria: 'Ficción', 
        descripcion: 'Una niña con una inteligencia excepcional y poderes mentales decide usarlos para defenderse de los adultos que la tratan mal.' 
      },
      { 
        id: 2, 
        titulo: 'El Principito', 
        autor: 'Antoine de Saint-Exupéry', 
        categoria: 'Fantasía', 
        descripcion: 'Un piloto se encuentra perdido en el desierto del Sahara tras una avería en su avión, donde conoce a un pequeño príncipe de otro planeta.' 
      },
      { 
        id: 3, 
        titulo: 'Alicia en el país de las maravillas', 
        autor: 'Lewis Carroll', 
        categoria: 'Fantasía', 
        descripcion: 'Alicia cae por una madriguera y llega a un mundo fantástico lleno de personajes peculiares y situaciones absurdas.' 
      }
    ]
  }
},
  methods: {
    incrementar() { this.contador++; },
    agregar(libro) { 
      libro.id = Date.now(); 
      this.libros.push(libro); 
    },
    eliminar(id) { 
      this.libros = this.libros.filter(l => l.id !== id); 
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
  background-color: #fcfcfc;
}

.main-content {
  max-width: 1250px;
  margin: 15px auto;
  padding: 0 40px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  background: #ffffff;
  border-bottom: 2px solid #7aafa4;
}

.logo-img {
  height: 80px;
  width: auto;
}

nav a {
  text-decoration: none;
  color: #7aafa4;
  font-weight: bold;
  margin: 0 15px;
  transition: color 0.3s ease;
  padding: 5px 10px;
}

nav a:hover {
  color: #5d8a81;
}

.user-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.user-panel p {
  margin: 0;
  font-size: 0.9rem;
}

.btn-counter {
  background-color: #7aafa4;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.router-link-active {
  text-decoration: none !important;
  font-weight: inherits;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    height: auto;
    text-align: center;
  }
  
  .logo-img {
    height: 60px;
  }

  .user-panel {
    align-items: center;
  }

  .main-content {
    margin: 10px auto;
  }
}
</style>