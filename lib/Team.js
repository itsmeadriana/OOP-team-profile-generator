class Team {
    constructor(teamName) {
        this.teamName = teamName;
    }
    addEmployee(newTeamEmployee) {
        if (this.employees === undefined) {
            this.employees = [];
        }
        this.employees.push(newTeamEmployee);
    }
    addManager(newTeamManager) {
        if (this.managers === undefined) {
            this.managers = [];
        }
        this.managers.push(newTeamManager);
    }
    addEngineer(newTeamEngineer) {
        if (this.engineers === undefined) {
            this.engineers = [];
        }
        this.engineers.push(newTeamEngineer);
    }
    addIntern(newTeamIntern) {
        if (this.interns === undefined) {
            this.interns = [];
        }
        this.interns.push(newTeamIntern);
    }
}

module.exports = Team;