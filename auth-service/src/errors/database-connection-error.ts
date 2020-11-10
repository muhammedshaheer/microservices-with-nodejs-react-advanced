export class DatabaseConnectionError extends Error {
    reason = 'Error connecting to database';

    constructor() {
        super();

        //Only because we are extending a buildin class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}
