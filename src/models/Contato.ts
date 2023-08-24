import * as enums from '../utils/enums/Contatos'

class Contato {
  nome: string
  tipo: enums.Tipo
  email: string
  telefone: number
  descricao: string
  id: number

  constructor(
    nome: string,
    tipo: enums.Tipo,
    descricao: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.tipo = tipo
    this.descricao = descricao
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
