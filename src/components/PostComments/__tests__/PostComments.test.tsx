import { fireEvent, render, screen } from "@testing-library/react"
import PostComments from ".."

describe('Testes para o componente PostComments', () => {
    test('Deve renderizar corretamente', () => {
        render(<PostComments />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })


    test('Deve adicionar 2 comentários', () => {
        render(<PostComments />)
        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Comentário teste 1'
            }
        })
        fireEvent.click(screen.getByTestId('comentario-button'))

        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Comentário teste 2'
            }
        })
        fireEvent.click(screen.getByTestId('comentario-button'))

        expect(screen.getAllByTestId('comentario-li')).toHaveLength(2)
    })
})
