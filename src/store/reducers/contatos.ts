import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Maria',
      telefone: 4194848484,
      email: 'maria@maria.com',
      tipo: enums.Tipo.FAMILIA,
      descricao: 'mãe'
    },
    {
      id: 2,
      nome: 'Joao',
      telefone: 4194848484,
      email: 'joao@maria.com',
      tipo: enums.Tipo.FAMILIA,
      descricao: 'primo'
    },
    {
      id: 3,
      nome: 'Pedro',
      telefone: 4194848484,
      email: 'pedro@pedro.com',
      tipo: enums.Tipo.TRABALHO,
      descricao: 'setor jurídico'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((Contato) => Contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato>= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe uma contato com esse nome')
      } else {
        const ultimacontato = state.itens[state.itens.length - 1]
        const contatoNova = {
          ...action.payload,
          id: ultimacontato ? ultimacontato.id + 1 : 1
        }
        state.itens.push(contatoNova)
      }
    },
    alteraTipo: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].tipo = action.payload.finalizado
          ? enums.Tipo.TRABALHO
          : enums.Tipo.FAMILIA
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraTipo } = contatosSlice.actions

export default contatosSlice.reducer
