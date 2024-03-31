import {
    IConfig,
    ModelBuilder,
    DialectMySQL,
} from 'sequelize-typescript-generator';

(async () => {
    const config: IConfig = {
        connection: {
            dialect: 'mysql',
            database: 'orm_benchMark',
            username: 'admin',
            password: 'admin1234',
            port: 3307,
        },
        metadata: {
            indices: true,
            case: 'CAMEL',
        },
        output: {
            clean: true,
            outDir: 'models',
        },
        strict: true,
    };

    const dialect = new DialectMySQL();

    const builder = new ModelBuilder(config, dialect);

    try {
        await builder.build();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
