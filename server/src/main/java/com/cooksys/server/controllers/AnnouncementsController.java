package com.cooksys.server.controllers;

import com.cooksys.server.models.AnnouncementsDto;
import com.cooksys.server.services.AnnouncementsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/announcements")
public class AnnouncementsController {

    private final AnnouncementsService announcementsService;

    @GetMapping
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public List<AnnouncementsDto> getAnnouncements() {
        return announcementsService.getAnnouncements();
    }
    
    @PostMapping("/create")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public AnnouncementsDto createAnnouncement(@RequestBody AnnouncementsDto announcementDto) {
    	return announcementsService.createAnnouncement(announcementDto);
    }
}
