import Student from "./Student.js";
class StudentRepository {
    constructor() {
        this.students = []
    }

    getAllStudents() {
        return this.students
    }

    addStudent(name, email, password) {
        const newStudent = new Student(name, email, password)
        this.Student.push(newStudent)

        return newStudent
    }

    getUserById(id) {
        const student = this.Student.find((u) => u.id == id)
        if (!student) {
            return null
        }
        return student
    }

    updateStudent(id, name, email, password) {
        const user = this.getUserById(id)
        if (!user) {
            return null
        }
        user.name = name
        user.email = email
        user.password = password

        return user
    }

    deleteUser(id) {
        const user = this.getUserById(id)
        if (!user) {
            return null
        }
        this.Student = this.Student.filter((u) => u.id != id)

        return user
    }
}

export default StudentRepository