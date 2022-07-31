package com.cooksys.server.models.data;

import javax.persistence.Embeddable;

import lombok.*;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class UserData {

	private String username;

	private String password;

	private String firstName;

	private String lastName;

	private String email;

	private String phone;

	private Boolean active;

	private Boolean admin;

	private Boolean status;

	private String teamName;

	private String companyName;

}
