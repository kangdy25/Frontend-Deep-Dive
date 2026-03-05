export {};

// ⛔️ SRP를 위반한 코드

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

class UserService {
    public saveUser(user: User): void {
        // Save user to database
        console.log("User saved to database: " + user.getName());
    }

    public sendWelcomeEmail(user: User): void {
        // Send welcome email to user
        console.log("Welcome email sent to: " + user.getEmail());
    }

    public logUserActivity(user: User): void {
        // Log user activity
        console.log("Logging activity for user: " + user.getName());
    }
}
