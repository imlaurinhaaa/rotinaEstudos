class Student {
    constructor(materia, progresso, objetivos, dificuldade) {
        this.id = this.generateId()
        this.materia = materia
        this.progresso = progresso
        this.objetivos = objetivos
        this.dificuldade = dificuldade
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}

export default Student