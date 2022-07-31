package com.cooksys.server.controllers;

import com.cooksys.server.models.UsersRequestDto;
import com.cooksys.server.models.UsersResponseDto;
import com.cooksys.server.models.data.UserData;
import com.cooksys.server.services.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("users")
public class UsersController {

    private final UsersService usersService;

    @PostMapping("/create")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public UsersResponseDto createUser(@RequestBody UsersRequestDto usersRequestDto) {
        return usersService.createUser(usersRequestDto);
    }

    @GetMapping
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public List<UsersResponseDto> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/find")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public List<UsersResponseDto> getUserByValue(UserData userData) {

        return usersService.getUserByValue(userData);
    }

    @PatchMapping("/update")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public UsersResponseDto updateUser(@RequestBody UsersRequestDto usersRequestDto) {
        return usersService.updateUser(usersRequestDto);
    }

    @DeleteMapping("/delete")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public UsersResponseDto deleteUser(@RequestBody UsersRequestDto usersRequestDto) {
        return usersService.deleteUser(usersRequestDto);
    }

    @GetMapping("/login")
    @CrossOrigin(origins = "*")
    @ResponseStatus(HttpStatus.OK)
    public boolean loginUserIn(@PathVariable String username, @PathVariable String password) {
        return usersService.logUserIn(username, password);
    }
}
