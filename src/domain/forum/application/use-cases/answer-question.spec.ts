import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMermoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(() => {
    inMermoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMermoryAnswerRepository)
  })
  
  it('Should be able to create an answer', async () => {  
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteudo da resposta'
    })
  
    expect(answer.id).toBeTruthy()
    expect(inMermoryAnswerRepository.items[0].id).equal(answer.id)
  })
})