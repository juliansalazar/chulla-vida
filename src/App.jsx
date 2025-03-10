import { useState } from 'react';
import './App.css'; // Estilos personalizados
import Countdown from 'react-countdown';
import Youtube from 'react-youtube';

function App() {
  const [email, setEmail] = useState('');

  // Manejar el cambio de input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Enviar formulario a Netlify (para almacenar la dirección de email)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'landing-form', email }),
    })
     .then(response => {
      if (response.ok) {
        alert('Gracias por suscribirte! Tu dirección de email registrado es '+ email);
        setEmail('');
      } else {
        alert('Hubo un error al enviar el formulario.');
      }
    })
    setEmail('');
  };
  
  

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      disableInitialPlay: false,
      disableAutoPlay: false,
      disableAds: true, 
    },
    height: '390',
    width: '100%',
  }

  return (
    <div className="App">
      <header>
        <h1>La historia que todos estaban esperando...</h1>
        <p>Próximamente, descubre la mini serie local que te cautivará.</p>
      </header>
      <section className="content">
        <Youtube videoId="cLd0dN25i5g" opts={videoOptions}/>
        <h2>¡Únete a la espera!</h2>
        <h2><Countdown date={'2025-06-01T00:00:00'}/></h2>
        
        <form onSubmit={handleSubmit} name="landing-form" method="POST" data-netlify="true">
          <p>
            <label>Your Email: <input type="email" name="email" onChange={handleEmailChange} /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        

      </section>

      <footer>
        <p>Síguenos en nuestras redes sociales:</p>
        <div className="social-links">
          <a href="https://www.facebook.com/AtlasCreativa" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/atlas_creativa/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
