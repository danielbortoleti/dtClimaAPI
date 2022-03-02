import {useState} from 'react'



function App() {
  const [city, setCity] = useState("")
  const [weatherForecast, setWeatherForecast] = useState(null)


  const handleChange = (e) => {
      setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=3cf510eaab50482d8bd12302222402&q=${city}&lang=pt`)
    .then((response) => {
      if(response.status == 200){
        return response.json()
      }
    })
    .then((data) => {
      setWeatherForecast(data)
    })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand text-white" href="#top">
            Previsão do Tempo - Daniel & Thiago 
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
            <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
          </svg>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>Olá, seja bem-vindo(a)! Verifique agora a condição climática na cidade que deseja.</h1>
          <p className="lead">
            Por favor digite o nome da cidade no campo abaixo e depois clique no botão azul
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input 
                onChange={handleChange}
                className="form-control"
                value={city}/>
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

          {
            weatherForecast ? (
              <div>
              <div className='mt-4 d-flex align-items-center'>
                <div>
                  <img  isrc={weatherForecast.current.condition.icon}/>
                </div>

                <div>
                  <h3>Condição: {weatherForecast.current.condition.text}</h3>
                  <p className='lead'>Temperatura: {weatherForecast.current.temp_c}°C </p>
                  <p className='lead'>Sensação Térmica: {weatherForecast.current.feelslike_c	}°C </p>

                </div>
              </div>
            </div>
            ) : null }
        </div>
      </main>

    </div>
  );
}

export default App;
