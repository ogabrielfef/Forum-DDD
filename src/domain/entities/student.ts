import { Entity } from "../../core/entities/entity"

interface StudentPropos {
	name: string
}

export class Student extends Entity<StudentPropos> {
}