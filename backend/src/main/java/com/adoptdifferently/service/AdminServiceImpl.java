package com.adoptdifferently.service;

import java.util.logging.Level;
import java.util.logging.LogRecord;
import org.springframework.stereotype.Service;
import com.adoptdifferently.model.Admin;
import com.adoptdifferently.util.EmailService;

@Service
public class AdminServiceImpl implements AdminService {

    // Hardcoded admin credentials for testing purposes
    @SuppressWarnings("unused")
    private static final String adminUsername = "admin";
    @SuppressWarnings("unused")
    private static final String adminPassword = "admin123";

    @Override
    public boolean loginAdmin(Admin admin) {
        //  Validate admin login credentials against a database
        if ("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            return true; // Login successful
        } else {
            return false; // Login failed
        }
    }

    @Override
    public boolean registerAdmin(Admin admin) {
        if ("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            sendConfirmationEmail( admin.getEmail());
            return true; // Registration successful
        } else {
            return false; // Registration failed
        }
        // Implementation for registeradmin method
    }

    

    @SuppressWarnings("deprecation")
    private void sendConfirmationEmail(Object email) {
       // Construct the confirmation email message
    String subject = "Confirmation Email";
    String body = "Thank you for your action. Please click on the link below to confirm your email address.";
    String confirmationLink = "https://example.com/confirm-email?email=" + email;
    body += "\n\n" + confirmationLink;

    // Send the email
    EmailService.sendEmail(email, subject, body);
   
   // Create a LogRecord object with the log message
    LogRecord record = new LogRecord(Level.INFO, "Confirmation email sent to: " + email);
   
   // Set additional properties of the LogRecord object if needed
    record.setMillis(System.currentTimeMillis());
    record.setLoggerName("MyLogger");
    record.setThreadID((int) Thread.currentThread().getId());
   
   // Log the record using the appropriate logging framework or library
   // For example, if you are using java.util.logging:
    java.util.logging.Logger logger = java.util.logging.Logger.getLogger("MyLogger");
    logger.log(record);
    }

    @Override
    public boolean deleteAdmin(Admin admin) {
        if("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            return true; // Delete successful
        } else {
            return false;
        }
        // Implementation for deleteadmin method
    }

    @Override
    public boolean updateAdmin(Admin admin) {
        if ("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            admin.setUsername("UpdatedAdminUsername");
            admin.setPassword("UpdatedAdminPassword");
            return true; // Update successful
        } else {
           return false; 
        }
        
        // Implementation for updateadmin method
    }

    @Override
    public Admin getAdmin(Admin admin) {
        if("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            return admin;
        }
        else {
            return null;
        }
        // Implementation for getadmin method
    }

    @Override
    public boolean isAdmin(Admin admin) {
        if("adminUsername".equals(admin.getUsername()) && "adminPassword".equals(admin.getPassword())) {
            return true;
        }
        else {
            return false;
        }
        // Implementation for isAdmin method
    }

    @Override
    public boolean isUser(Admin admin) {
     return !"adminUsername".equals(admin.getUsername()) || !"adminPassword".equals(admin.getPassword());
    // Implementation for isUser method
}

}
