
export class UserException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class UserNotFoundException extends Error {
    constructor(message: string) {
        super(message);
    }
}