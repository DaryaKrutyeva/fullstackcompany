package com.cooksys.server.services.impl;

import com.cooksys.server.controllers.exceptions.BadRequestException;
import com.cooksys.server.controllers.exceptions.NotAuthorizedException;
import com.cooksys.server.controllers.exceptions.NotFoundException;
import com.cooksys.server.entities.Company;
import com.cooksys.server.entities.Projects;
import com.cooksys.server.entities.Users;
import com.cooksys.server.mappers.TeamMapper;
import com.cooksys.server.models.TeamRequestDto;
import com.cooksys.server.models.TeamResponseDto;
import com.cooksys.server.models.data.TeamData;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.repositories.ProjectsRepository;
import com.cooksys.server.repositories.TeamRepository;
import com.cooksys.server.repositories.UsersRepository;
import com.cooksys.server.services.TeamService;
import com.cooksys.server.entities.Team;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;

    private final TeamMapper teamMapper;

    private final CompanyServiceImpl companyService;

    private final CompanyRepository companyRepository;

    private final UsersRepository usersRepository;

    private final ProjectsRepository projectsRepository;


    /**
     * FIND A TEAM
     **/


    @Override
    public List<TeamResponseDto> findTeamByValue(String name) {
        Company company = companyRepository.findCompanyByName(name).get();

        List<Team> teamsByCompany = teamRepository.findTeamByCompany_Name(name);
        if (teamsByCompany.isEmpty()) {
            throw new NotFoundException("This company doesn't have any teams yet!");
        } else return teamMapper.entitiesToDtos(teamsByCompany);
    }


    /**
     * UPDATE TEAM
     **/
    @Override
    public TeamResponseDto updateTeam(TeamRequestDto teamRequestDto) {
        validateTeamRequestDto(teamRequestDto);
        Team teamToUpdate = getValidTeam(teamRequestDto.getTeamName());
        TeamData data = teamRequestDto.getTeamData();

        if (data.getName() != null) teamToUpdate.setName(data.getName());
        if (data.getDescription() != null) teamToUpdate.setDescription(data.getDescription());
        if (data.getCompanyName() != null) teamToUpdate.setCompany(companyService.getCompanyByName(data.getCompanyName()));

        return teamMapper.entityToDto(teamRepository.saveAndFlush(teamToUpdate));
    }

    /**
     * DELETE TEAM
     **/
    @Override
    public TeamResponseDto deleteTeam(TeamRequestDto teamRequestDto) {
        if (!teamRequestDto.isAdmin()) throw new NotAuthorizedException("A user must be an admin to delete a team.");
        Team teamToDelete = getValidTeam(teamRequestDto.getTeamData().getName());
        Long id = teamToDelete.getId();
        List<Users> usersByTeam = usersRepository.findUsersByTeam_Name(teamToDelete.getName());
        List<Projects> projectsWithTeam = projectsRepository.findProjectsByTeam_Name(teamToDelete.getName());

        for(Users user : usersByTeam){
            user.setTeam(null);
        }
        usersRepository.saveAll(usersByTeam);

        for(Projects project: projectsWithTeam){

            project.setTeam(null);
        }
        projectsRepository.saveAll(projectsWithTeam);



        teamRepository.deleteById(id);

        return teamMapper.entityToDto(teamToDelete);


    }

    /**
     * CREATE TEAM
     **/
    @Override
    public TeamResponseDto createTeam(TeamRequestDto teamRequestDto) {



        //check if admin
        if (!teamRequestDto.isAdmin()) throw new NotAuthorizedException("A user must be an admin to create a team.");
        TeamData data = teamRequestDto.getTeamData();

        //check for required fields

        if (data.getName() == null) {
            throw new BadRequestException("Please enter a team name");
        }
        if (data.getCompanyName() == null) {
            throw new BadRequestException("Team must be associated with a Company");
        }
        if (data.getDescription() == null) {
            throw new BadRequestException("Please enter a team description");
        }
        //create the team

        Team newTeam = teamMapper.requestEntity(teamRequestDto);
        newTeam.setName(data.getName());
        newTeam.setDescription(data.getDescription());
        //find company and set team company
        Company findCompany = companyService.getCompanyByName(data.getCompanyName());
        newTeam.setCompany(findCompany);

        return teamMapper.entityToDto(teamRepository.saveAndFlush(newTeam));

    }

    protected Team getValidTeam(String name) {
        return teamRepository.findTeamByName(name).orElseThrow(() -> new NotFoundException("No team was found with the given name."));
    }

    private void validateTeamRequestDto(TeamRequestDto teamRequestDto) {
        if (!teamRequestDto.isAdmin()) throw new NotAuthorizedException("A user must be an admin to update a team.");
        if (teamRequestDto == null ||
                teamRequestDto.getTeamName() == null ||
                teamRequestDto.getTeamName().isBlank() ||
                teamRequestDto.getTeamData() == null ||
                teamRequestDto.getTeamData().getName() == null &&
                        teamRequestDto.getTeamData().getDescription() == null &&
                        teamRequestDto.getTeamData().getCompanyName() == null)
            throw new BadRequestException("When updating, at least one field must be valid.");
    }
}
