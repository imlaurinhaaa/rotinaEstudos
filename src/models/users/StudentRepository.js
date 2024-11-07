import Student from "./Student.js";
class StudentRepository {
    constructor() {
        this.students = []
    }

    getAllStudents() {
        return this.students
    }

    addStudent(materia, progresso, objetivos, dificuldade) {
        const newStudent = new Student(materia, progresso, objetivos, dificuldade)
        this.students.push(newStudent)

        return newStudent
    }

    getStudentById(id) {
        const student = this.students.find((u) => u.id == id)
        if (!student) {
            return null
        }
        return student
    }

    updateStudent(id, materia, progresso, objetivos, dificuldade) {
        const student = this.getStudentById(id);
    
        if (!student) {
          return null;
        }
    
        student.materia = materia;
        student.progresso = progresso;
        student.objetivos = objetivos;
        student.dificuldade = dificuldade;
    
        return student
      }
    }


export default StudentRepository