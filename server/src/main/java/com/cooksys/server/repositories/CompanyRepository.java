package com.cooksys.server.repositories;

import com.cooksys.server.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    // TODO: Fix Duplicate method
//    Optional<Company> findCompaniesByName(String name);
    
    Optional<Company> findCompanyByName(String name);

    @Transactional
    void deleteById(Long id);

}
