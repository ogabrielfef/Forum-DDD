import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface InstructorPropos {
  name: string
}

export class Instructor extends Entity<InstructorPropos> {
  static create(props: InstructorPropos, id?: UniqueEntityId) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
