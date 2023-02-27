(() => {
    // No aplicando el principio de responsabilidad única
    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'fabio@google.com',
        'Admin',
        "Fernando", 
        "M", 
        new Date("1985-10-21")
        );
    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
})();

/**
 * // well
 *     class Person {
        public name: string;
        public gender: string;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
    // better
      class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }
 */
