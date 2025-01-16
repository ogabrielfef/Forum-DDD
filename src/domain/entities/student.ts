import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface StudentPropos {
	name: string
}

export class Student extends Entity<StudentPropos> {
	static create(props: StudentPropos, id?: UniqueEntityId) {
		const student = new Student(props, id)

		return student;
	}
}