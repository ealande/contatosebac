import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alteraTipo } from '../../store/reducers/contatos'

import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Contatos'

type Props = ContatoClass

const Contato = ({
  descricao: descricaoOriginal,
  tipo,
  nome,
  id,
  email,
  telefone
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraTipoContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraTipo({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Titulo>
          {estaEditando ? <em>Editando: </em> : ' '}

          {nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="tipo" tipo={tipo} telefone={telefone} email={email}>
        {tipo}
      </S.Tag>
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    tipo,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
