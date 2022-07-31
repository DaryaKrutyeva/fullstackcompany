package com.cooksys.server.repositories;

import com.cooksys.server.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    Optional<Team> findTeamByName(String name);




    List<Team> findTeamByCompany_Name(String name);



    @Transactional
    void deleteById(Long id);

}
