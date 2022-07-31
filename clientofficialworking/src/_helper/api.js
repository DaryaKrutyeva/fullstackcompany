const endpoint = "127.0.0.1:5000"

// ########  Users ########

export const createUser = async (admin, user) => {
    const response = await fetch(`http://${endpoint}/users/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            userData: user
        }),
    });
    const data = await response.json();
    return data;
}

export const getUsers = async () => {
    const response = await fetch(`http://${endpoint}/users`);
    const data = await response.json();
    return data;
}

export const getUser = async (username) => {
    const response = await fetch(`http://${endpoint}/users/find/${username}`)
    const data = await response.json();
    return data;
}


export const updateUser = async (admin, user) => {
    const response = await fetch(`http://${endpoint}/users/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            userData: user
        })
    });
    const data = await response.json();
    return data;
}

export const deleteUser = async (admin, user) => {
    const response = await fetch(`http://${endpoint}/users/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            userData: {
                username: user.username
            }
        })
    });
    const data = await response.json();
    return data;
}

export const isLoginValid = async (username, password) => {
    const response = await fetch(`http://${endpoint}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const data = await response.json();
    if (!data.isValid) {
        return false;
    }
    return true;
}

// ########  Announcements ########

export const createAnnouncement = async (announcement) => {
    const response = await fetch(`http://${endpoint}/announcements/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(announcement)
    });
    const data = await response.json();
    return data;
}

export const getAnnouncements = async () => {
    const response = await fetch(`http://${endpoint}/announcements`);
    const data = await response.json();
    return data;
}

// ########  Company ########

export const createCompany = async (admin, company) => {
    const response = await fetch(`http://${endpoint}/company/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            companyData: company
        })
    });
    const data = await response.json();
    return data;
}

export const getCompanies = async () => {
    const response = await fetch(`http://${endpoint}/company`);
    const data = await response.json();
    return data;
}

export const getCompany = async (companyName) => {
    const response = await fetch(`http://${endpoint}/company/find/${companyName}`)
    const data = await response.json();
    return data;
}

export const updateCompany = async (company) => {
    const response = await fetch(`http://${endpoint}/company/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(company)
    });
    const data = await response.json();
    return data;
}

export const deleteCompany = async (admin, company) => {
    const response = await fetch(`http://${endpoint}/company/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            companyData: {
                name: company.name
            }
        }
        )
    });
    const data = await response.json();
    return data;
}

// ########  Projects ########

export const createProject = async (admin, oldProject, newProject) => {
    const response = await fetch(`http://${endpoint}/project/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            teamName: oldProject.teamName,
            nameOfProject: oldProject.name,
            projectData: newProject
        })
    });
    const data = await response.json();
    return data;
}

export const getProjects = async () => {
    const response = await fetch(`http://${endpoint}/project`);
    const data = await response.json();
    return data;
}

export const getProject = async (projectName) => {
    const response = await fetch(`http://${endpoint}/project/find/${projectName}`)
    const data = await response.json();
    return data;
}

export const updateProject = async (admin, newProject, oldProject) => {
    const response = await fetch(`http://${endpoint}/project/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            teamName: oldProject.teamName,
            nameOfProject: oldProject.name,
            projectData: {
                name: newProject.name,
                description: newProject.description,
                active: newProject.active,
                teamName: newProject.teamName,
            }
        })
    });
    const data = await response.json();
    return data;
}

// ########  Team ########

export const createTeam = async (admin, team) => {
    const response = await fetch(`http://${endpoint}/team/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            teamData: team
        })
    });
    const data = await response.json();
    return data;
}

export const getTeams = async () => {
    const response = await fetch(`http://${endpoint}/team/all`);
    const data = await response.json();
    return data;
}

export const getTeam = async (teamName) => {
    const response = await fetch(`http://${endpoint}/team/find/${teamName}`);
    const data = await response.json();
    return data;
}

export const updateTeam = async (admin, oldTeam, newTeam) => {
    const response = await fetch(`http://${endpoint}/team/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            teamName: oldTeam.name,
            teamData: newTeam
        })
    });
    const data = await response.json();
    return data;
}

export const deleteTeam = async (admin, team) => {
    const response = await fetch(`http://${endpoint}/team/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            admin: admin,
            teamData: {
                name: team.name,
            }
        })
    });
    const data = await response.json();
    return data;
}