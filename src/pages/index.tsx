import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

export default function Home() {

  const clientes = [
    new Cliente("Ana", 34, '1'),
    new Cliente("Bia", 24, '2'),
    new Cliente("Rayane", 27, '3'),
    new Cliente("Vitoria", 22, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario 
            cliente={clientes[2]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')} 
          />
        )}
      </Layout>
    </div>
  )
}
