package com.adoptdifferently.service;

import com.adoptdifferently.model.Admin;

public interface AdminService {

    boolean loginAdmin(Admin admin);

    boolean registerAdmin(Admin admin);

    boolean deleteAdmin(Admin admin);

    boolean updateAdmin(Admin admin);

    Admin getAdmin(Admin admin);

    boolean isAdmin(Admin admin);

    boolean isUser(Admin admin);
}
