package com.cooksys.server.mappers;

import java.util.List;

import com.cooksys.server.models.UsersResponseDto;
import org.mapstruct.Mapper;

import com.cooksys.server.entities.Users;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsersMapper {

	@Mapping(source = "team.name", target = "teamName")
	@Mapping(source = "company.name", target = "companyName")
	@Mapping(source = "isAdmin", target = "admin")
	@Mapping(source = "firstName", target = "first")
	@Mapping(source = "lastName", target = "last")
	UsersResponseDto entityToDto(Users users);

	List<UsersResponseDto> entitiesToDtos(List<Users> users);

}
