package com.cooksys.server.controllers;

import java.util.List;

import com.cooksys.server.models.ProjectsDto;
import com.cooksys.server.services.ProjectsService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/projects")
public class ProjectsController {

	private final ProjectsService projectsService;

	@PostMapping("/create")
	@CrossOrigin(origins = "*")
	@ResponseStatus(HttpStatus.OK)
	public ProjectsDto createProject(@RequestBody ProjectsDto projectsDto) {
		return projectsService.createProject(projectsDto);
	}

	@GetMapping
	@CrossOrigin(origins = "*")
	@ResponseStatus(HttpStatus.OK)
	public List<ProjectsDto> getProjects() {
		return projectsService.getProjects();
	}

	@PatchMapping("/update")
	@CrossOrigin(origins = "*")
	@ResponseStatus(HttpStatus.OK)
	public ProjectsDto updateProject(ProjectsDto projectsDto) {
		return projectsService.updateProject(projectsDto);
	}
}
