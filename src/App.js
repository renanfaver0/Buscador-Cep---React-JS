import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './style.css';
import api from './Services/api';

function App() {
  
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function manipularProcurar() {
    if(input === '') {
      alert("Informe algum CEP!")
      return;
    }
    
    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setCep(response.data)
      setInput("");
    
    }catch {
      alert("Cep inválido, verifique e digite novamente!");
      setInput("")
    }
    
  }

  return (
    <div className="container">
      <h1 className="titulo-principal">Buscar CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP aqui" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="botao-procurar" onClick={manipularProcurar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
        

        {Object.keys(cep).length > 0 && (
             <main className='principal'>
                <h2>CEP: {cep.cep}</h2>
            
                <span>{cep.logradouro}</span>
                <span>Complemento: {cep.complemento}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Cidade: {cep.localidade} - {cep.uf}</span>
            </main>
        )}
       
      </div>
  );
}

export default App;
