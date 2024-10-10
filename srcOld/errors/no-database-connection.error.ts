export class NoDatabaseConnectionError extends Error {
    public constructor() {
        super("Database connection is no established");
    }
}
