package com.cooksys.server.services;

import java.util.List;

import com.cooksys.server.models.CompanyRequestDto;
import com.cooksys.server.models.CompanyResponseDto;

public interface CompanyService {

    List<CompanyResponseDto> getCompanies();

    CompanyResponseDto getCompanyByValue(String name);

    CompanyResponseDto createCompany(CompanyRequestDto companyRequestDto);

    CompanyResponseDto deleteCompany(CompanyRequestDto companyRequestDto);

    CompanyResponseDto updateCompany(CompanyRequestDto companyRequestDto);
}
