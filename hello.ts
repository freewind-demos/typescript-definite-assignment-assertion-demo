class User {
    private name: string
    private email!: string

    constructor(name: string) {
        this.name = name;
    }

    getEmail():string {
        return this.email
    }

    initEmail() {
        this.email = "test@ts.com"
    }
}

const user = new User("TypeScript")
user.initEmail()
console.log(user.getEmail());