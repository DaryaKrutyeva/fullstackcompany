package com.cooksys.server.services;

import java.util.List;

import com.cooksys.server.models.UsersRequestDto;
import com.cooksys.server.models.UsersResponseDto;
import com.cooksys.server.models.data.UserData;

public interface UsersService {

    UsersResponseDto createUser(UsersRequestDto usersRequestDto);

    List<UsersResponseDto> getAllUsers();

    List<UsersResponseDto> getUserByValue(UserData userData);

    UsersResponseDto updateUser(UsersRequestDto usersRequestDto);

    UsersResponseDto deleteUser(UsersRequestDto usersRequestDto);

    boolean logUserIn(String username, String password);
}
