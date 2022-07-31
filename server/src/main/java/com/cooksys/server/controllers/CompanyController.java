package com.cooksys.server.controllers;

import com.cooksys.server.models.CompanyRequestDto;
import com.cooksys.server.models.CompanyResponseDto;
import com.cooksys.server.models.TeamRequestDto;
import com.cooksys.server.models.TeamResponseDto;
import com.cooksys.server.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:8080")
    @ResponseStatus(HttpStatus.OK)
    public List<CompanyResponseDto> getCompanies() {
        return companyService.getCompanies();
    }

    @GetMapping("/{name}/find")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public CompanyResponseDto getCompanyByValue(@PathVariable String name) {
        return companyService.getCompanyByValue(name);
    }

    @PostMapping("/create")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public CompanyResponseDto createCompany(@RequestBody CompanyRequestDto companyRequestDto) {
        return companyService.createCompany(companyRequestDto);
    }

    @PatchMapping("/update")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public CompanyResponseDto updateCompany(@RequestBody CompanyRequestDto companyRequestDto) {
        return companyService.updateCompany(companyRequestDto);
    }


    @DeleteMapping("/delete")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public CompanyResponseDto deleteCompany(@RequestBody CompanyRequestDto companyRequestDto) {
        return companyService.deleteCompany(companyRequestDto);
    }


}
