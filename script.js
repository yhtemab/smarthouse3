// script.js

// Living Room page
document.getElementById('tv-on').addEventListener('click', () => {
    // Send a request to turn on the TV
    fetch('/api/tv/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('tv-off').addEventListener('click', () => {
    // Send a request to turn off the TV
    fetch('/api/tv/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('ac-on').addEventListener('click', () => {
    // Send a request to turn on the AC
    fetch('/api/ac/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('ac-off').addEventListener('click', () => {
    // Send a request to turn off the AC
    fetch('/api/ac/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  // Kitchen page
  document.getElementById('kitchen-lights-on').addEventListener('click', () => {
    // Send a request to turn on the kitchen lights
    fetch('/api/lights/kitchen/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('kitchen-lights-off').addEventListener('click', () => {
    // Send a request to turn off the kitchen lights
    fetch('/api/lights/kitchen/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('microwave-on').addEventListener('click', () => {
    // Send a request to turn on the microwave
    fetch('/api/microwave/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('microwave-off').addEventListener('click', () => {
    // Send a request to turn off the microwave
    fetch('/api/microwave/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  // Toilet page
  document.getElementById('toilet-light-on').addEventListener('click', () => {
    // Send a request to turn on the toilet light
    fetch('/api/lights/toilet/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('toilet-light-off').addEventListener('click', () => {
    // Send a request to turn off the toilet light
    fetch('/api/lights/toilet/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('exhaust-fan-on').addEventListener('click', () => {
    // Send a request to turn on the exhaust fan
    fetch('/api/fan/exhaust/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('exhaust-fan-off').addEventListener('click', () => {
    // Send a request to turn off the exhaust fan
    fetch('/api/fan/exhaust/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  // Bathroom page
  document.getElementById('shower-on').addEventListener('click', () => {
    // Send a request to turn on the shower
    fetch('/api/shower/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('shower-off').addEventListener('click', () => {
    // Send a request to turn off the shower
    fetch('/api/shower/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('bathroom-lights-on').addEventListener('click', () => {
    // Send a request to turn on the bathroom lights
    fetch('/api/lights/bathroom/on', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  
  document.getElementById('bathroom-lights-off').addEventListener('click', () => {
    // Send a request to turn off the bathroom lights
    fetch('/api/lights/bathroom/off', { method: 'POST' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        console.error(error);
      });
  });
  