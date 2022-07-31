package com.cooksys.server.services.impl;

import com.cooksys.server.controllers.exceptions.NotFoundException;
import com.cooksys.server.controllers.exceptions.BadRequestException;
import com.cooksys.server.controllers.exceptions.NotAuthorizedException;
import com.cooksys.server.entities.Company;
import com.cooksys.server.entities.Projects;
import com.cooksys.server.entities.Team;
import com.cooksys.server.entities.Users;
import com.cooksys.server.mappers.CompanyMapper;
import com.cooksys.server.models.CompanyRequestDto;
import com.cooksys.server.models.CompanyResponseDto;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.repositories.TeamRepository;
import com.cooksys.server.repositories.UsersRepository;
import com.cooksys.server.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;

    private final CompanyMapper companyMapper;

    private final UsersRepository usersRepository;

    private final TeamRepository teamRepository;

    @Override
    public List<CompanyResponseDto> getCompanies() {
        return companyMapper.entitiesToDtos(companyRepository.findAll());
    }

    @Override
    public CompanyResponseDto getCompanyByValue(String name) {
        Company company = companyRepository.findCompanyByName(name).orElseThrow(() -> new NotFoundException("Company not found."));
        return companyMapper.entityToDto(company);
    }

    @Override
    public CompanyResponseDto createCompany(CompanyRequestDto companyRequestDto) {
        // Check if admin
        if (!companyRequestDto.isAdmin()) {
            throw new NotAuthorizedException("You must be an Administrator to perform the requested operation.");
        }
        // check for company data
        if (!validateCompanyRequestDto(companyRequestDto)) {
            throw new BadRequestException("Please fill out company name and description before submitting.");
        }

        Company newCompany = companyMapper.requestEntity(companyRequestDto);
        newCompany.setDescription(companyRequestDto.getCompanyData().getDescription());
        newCompany.setName(companyRequestDto.getCompanyData().getName());

        return companyMapper.entityToDto(companyRepository.saveAndFlush(newCompany));

    }

    @Override
    public CompanyResponseDto updateCompany(CompanyRequestDto companyRequestDto) {
        Company company = companyRepository.findCompanyByName
                (companyRequestDto.getCompanyName())
                .orElseThrow(() -> new NotFoundException("Company not found."));

        if(companyRequestDto.getCompanyData().getName() != null)
            company.setName(companyRequestDto.getCompanyData().getName());

        if(companyRequestDto.getCompanyData().getDescription() != null)
            company.setDescription(companyRequestDto.getCompanyData().getDescription());

        return companyMapper.entityToDto(companyRepository.saveAndFlush(company));
    }

    @Override
    public CompanyResponseDto deleteCompany(CompanyRequestDto companyRequestDto) {
        if (!companyRequestDto.isAdmin()) throw new NotAuthorizedException("A user must be an admin to delete a company.");
        Company companyToDelete = getCompanyByName(companyRequestDto.getCompanyName());
        List<Users> usersByCompany = usersRepository.findUsersByCompany_Name(companyToDelete.getName());
        List<Team> teamsWithCompany = teamRepository.findTeamByCompany_Name(companyToDelete.getName());


        for(Users user : usersByCompany){
            user.setCompany(null);
        }
        usersRepository.saveAll(usersByCompany);

        for(Team team: teamsWithCompany){

            team.setCompany(null);
        }
        teamRepository.saveAll(teamsWithCompany);
        companyRepository.delete(companyToDelete);
        return companyMapper.entityToDto(companyToDelete);
    }

    public Company getCompanyByName(String name) {
        return companyRepository.findCompanyByName(name).orElseThrow(() -> new NotFoundException("No company found with the given id."));
    }

    public boolean validateCompanyRequestDto(CompanyRequestDto companyRequestDto) {
        String companyName = companyRequestDto.getCompanyData().getName();
        String companyDescription = companyRequestDto.getCompanyData().getDescription();
        if (companyName.isEmpty() || companyName == null) {
            return false;
        }
        if (companyDescription.isEmpty() || companyDescription == null) {
            return false;
        }
        return true;
    }
}
