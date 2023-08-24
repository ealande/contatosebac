import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Contatos'
import { Botao } from '../../styles'

type TagProps = {
  tipo: enums.Tipo
  telefone: number
  email: string
  parametro: 'tipo'
}

/*enum DiasDaSemana{
  DOMINGO = 1,
  SEGUNDA = 2,
  TERCA = 3,
  QUARTA = 4,
  QUINTA = 5,
  SEXTA = 6,
  SABADO = 7
}*/

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'tipo') {
    if (props.tipo === enums.Tipo.TRABALHO) return variables.vermelho
    if (props.tipo === enums.Tipo.FAMILIA) return variables.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: solid;
  background-color: transparent;
`
export const Telefone = styled.textarea`
  color: #8b8b99;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: solid;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: solid;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variables.vermelho};
`
