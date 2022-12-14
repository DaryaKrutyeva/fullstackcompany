package com.cooksys.server.services.impl;

import java.util.List;
import com.cooksys.server.controllers.exceptions.BadRequestException;
import com.cooksys.server.controllers.exceptions.NotAuthorizedException;
import com.cooksys.server.entities.Company;
import com.cooksys.server.entities.Team;
import com.cooksys.server.entities.Users;
import com.cooksys.server.mappers.UsersMapper;
import com.cooksys.server.models.UsersRequestDto;
import com.cooksys.server.models.UsersResponseDto;
import com.cooksys.server.models.data.UserData;
import com.cooksys.server.repositories.UsersRepository;
import com.cooksys.server.services.UsersService;
import org.springframework.stereotype.Service;
import com.cooksys.server.controllers.exceptions.NotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {

    private final UsersMapper usersMapper;

    private final UsersRepository usersRepository;

    private final TeamServiceImpl teamService;

    private final CompanyServiceImpl companyService;

    @Override
    public UsersResponseDto createUser(UsersRequestDto usersRequestDto) {
        if (!usersRequestDto.isAdmin()) {
            throw new BadRequestException("You must be an admin to create new users!");
        }

        Team team;
        Company company;

        try {
            team = teamService.getValidTeam(usersRequestDto.getUserData().getTeamName());
            company = team.getCompany();
        } catch (NotFoundException e) {
            team = new Team();
            company = new Company();
        }

        Users userToCreate = Users.builder().username(usersRequestDto.getUserData().getUsername())
                .password(usersRequestDto.getUserData().getPassword())
                .firstName(usersRequestDto.getUserData().getFirstName())
                .lastName(usersRequestDto.getUserData().getLastName()).email(usersRequestDto.getUserData().getEmail())
                .phone(usersRequestDto.getUserData().getPhone()).isAdmin(usersRequestDto.getUserData().getAdmin())
                .active(usersRequestDto.getUserData().getActive())
                .team(team)
                .company(company)
                .build();
        return usersMapper.entityToDto(userToCreate);
    }

    @Override
    public List<UsersResponseDto> getAllUsers() {
        return usersMapper.entitiesToDtos(usersRepository.findAll());
    }

    @Override
    public List<UsersResponseDto> getUserByValue(UserData userData) {
        List<Users> users;

        if (userData.getUsername() != null) {
            users = List.of(usersRepository.findUsersByUsername(userData.getUsername()).orElseThrow(() -> new NotFoundException("No user found with the provided username.")));
        } else if (userData.getActive() != null) {
            users = usersRepository.findUsersByActive(userData.getActive());
        } else if (userData.getAdmin() != null) {
            users = usersRepository.findUsersByIsAdmin(userData.getAdmin());
        } else if (userData.getTeamName() != null) {
            users = usersRepository.findUsersByTeam_Name(userData.getTeamName());
        } else if (userData.getCompanyName() != null) {
            users = usersRepository.findUsersByCompany_Name(userData.getCompanyName());
        } else {
            throw new BadRequestException("No valid field found.");
        }


        if (users.isEmpty()) throw new NotFoundException("No users found with provide information.");

        return usersMapper.entitiesToDtos(users);
    }

    @Override
    public UsersResponseDto updateUser(UsersRequestDto usersRequestDto) {
        Users users = usersRepository.findUsersByUsername(usersRequestDto.getUserData().getUsername())
                .orElseThrow(() -> new NotFoundException("User Not Found!"));
        if (usersRequestDto.getUserData().getPassword() == null && usersRequestDto.getUserData().getFirstName() == null
                && usersRequestDto.getUserData().getLastName() == null
                && usersRequestDto.getUserData().getEmail() == null && usersRequestDto.getUserData().getPhone() == null
                && usersRequestDto.getUserData().getActive() == null && usersRequestDto.getUserData().getAdmin() == null
                && usersRequestDto.getUserData().getStatus() == null) {
            throw new BadRequestException("You must provide a valid username and at least one value to change.");
        }
        if (usersRequestDto.getUserData().getPassword() != null) {
            users.setPassword(usersRequestDto.getUserData().getPassword());

            if (usersRequestDto.getUserData().getFirstName() != null) {
                users.setFirstName(usersRequestDto.getUserData().getFirstName());
            }
            if (usersRequestDto.getUserData().getLastName() != null) {
                users.setLastName(usersRequestDto.getUserData().getLastName());
            }
            if (usersRequestDto.getUserData().getEmail() != null) {
                users.setEmail(usersRequestDto.getUserData().getEmail());
            }
            if (usersRequestDto.getUserData().getPhone() != null) {
                users.setPhone(usersRequestDto.getUserData().getPhone());
            }
            if (usersRequestDto.getUserData().getActive() != null) {
                users.setActive(usersRequestDto.getUserData().getActive());
            }
            if (usersRequestDto.getUserData().getAdmin() != null) {
                users.setIsAdmin(usersRequestDto.getUserData().getAdmin());
            }
            if (usersRequestDto.getUserData().getStatus() != null) {
                users.setStatus(usersRequestDto.getUserData().getStatus());
            }

            if (usersRequestDto.isAdmin()) {
                if (usersRequestDto.getUserData().getTeamName() != null) {
                    users.setTeam(teamService.getValidTeam(usersRequestDto.getUserData().getTeamName()));
                }
                if (usersRequestDto.getUserData().getCompanyName() != null) {
                    users.setCompany(companyService.getCompanyByName(usersRequestDto.getUserData().getCompanyName()));
                }
            }
        }

        return usersMapper.entityToDto(users);
    }


    @Override
    public UsersResponseDto deleteUser(UsersRequestDto usersRequestDto) {
        if (!usersRequestDto.isAdmin()) {
            throw new NotAuthorizedException("You must be an admin to delete users!");
        }
        Users userToDelete = usersRepository.findUsersByUsername(usersRequestDto.getUserData().getUsername())
                .orElseThrow(() -> new NotFoundException("User Not Found!"));
        userToDelete.setActive(false);
        return usersMapper.entityToDto(userToDelete);
    }

    @Override
    public boolean logUserIn(String username, String password) {
        return usersRepository.existsUsersByUsernameAndPasswordAndActiveIsTrue(username, password);
    }

    protected Users getValidUser(String name) {
        return usersRepository.findUsersByUsername(name).orElseThrow(() -> new NotFoundException("No user found."));
    }
}
