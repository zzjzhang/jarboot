package com.mz.jarboot.entity;

import javax.persistence.*;

/**
 * @author majianzheng
 */
@Table(name = User.TABLE_NAME, uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
@Entity
public class User extends AbstractBaseEntity {
    public static final String TABLE_NAME = "jarboot_user";
    private String username;
    private String password;

    private String userDir;

    private String roles;

    public String getUsername() {
        return username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserDir() {
        return userDir;
    }

    public void setUserDir(String userDir) {
        this.userDir = userDir;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
}
