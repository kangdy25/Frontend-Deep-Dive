export {};

// ✅ SRP를 적용한 코드

class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }
}

class UserRepository {
    public saveUser(user: User): void {
        // Save user to database
        console.log("User saved to database: " + user.getName());
    }
}

class EmailService {
    public sendWelcomeEmail(user: User): void {
        // Send welcome email to user
        console.log("Welcome email sent to: " + user.getEmail());
    }
}

class UserActivityLogger {
    public logUserActivity(user: User): void {
        // Log user activity
        console.log("Logging activity for user: " + user.getName());
    }
}

class UserService {
    private userRepository: UserRepository = new UserRepository();
    private emailService: EmailService = new EmailService();
    private userActivityLogger: UserActivityLogger = new UserActivityLogger();

    public registerUser(user: User): void {
        this.userRepository.saveUser(user);
        this.emailService.sendWelcomeEmail(user);
        this.userActivityLogger.logUserActivity(user);
    }
}
