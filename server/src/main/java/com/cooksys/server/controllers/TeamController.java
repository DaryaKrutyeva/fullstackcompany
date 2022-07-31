package com.cooksys.server.controllers;

import com.cooksys.server.models.TeamRequestDto;
import com.cooksys.server.models.TeamResponseDto;
import com.cooksys.server.services.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("team")
public class TeamController {

    private final TeamService teamService;

    /** GET MAPPING **/
    @GetMapping("/find/{name}")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public List<TeamResponseDto> findTeamByValue(@PathVariable String name){
        return teamService.findTeamByValue(name);
    }

    /** DELETE MAPPING **/
    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @CrossOrigin(origins = "*")
    public TeamResponseDto deleteTeam(@RequestBody TeamRequestDto teamRequestDto){
        return teamService.deleteTeam(teamRequestDto);
    }


    /** POST MAPPING **/

    @PostMapping("/create")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.CREATED)
    public TeamResponseDto createTeam(@RequestBody TeamRequestDto teamRequestDto){
        return teamService.createTeam(teamRequestDto);
    }


    /** PATCH MAPPING **/
    @PatchMapping("/update")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public TeamResponseDto updateTeam(@RequestBody TeamRequestDto teamRequestDto) {
        return teamService.updateTeam(teamRequestDto);
    }
}
