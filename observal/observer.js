class Observable {
    constructor() {
        this.obs = [];
    }

    createObserver(observer) {
        this.obs.push(observer);

        return function() {
            return this.obs = this.obs.filter(o => o !== observer);
        };
    }

    infObservers(...args) {
        this.obs.forEach(observer => {
            observer(...args);
        });
    }
}
class UserFunc extends Observable {
    constructor() {
        super();
    }

    registerUser(user) {
        console.log('Registration');
        this.infObservers(user);
    }
}

const sendToEmail = (user) => {
    console.log(`Message to ${user.email} and to ${user.num}`);
};


const createAccount = (user) => {
    console.log(`Creating special account to ${user.name}`);
};


const UserRegistration = () => {
    const user = {
        name: 'FirstName LastName',
        email: 'someEmail@mail.su',
        num: '+77777777777'
    };

    const userFunc = new UserFunc();

    userFunc.createObserver(createAccount);
    userFunc.createObserver(sendToEmail);

    userFunc.registerUser(user);
};

UserRegistration();