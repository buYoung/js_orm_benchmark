import { MikroORM } from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { defineConfig } from '@mikro-orm/mysql';
import { MySqlDriver } from '@mikro-orm/mysql';

(async () => {
    const orm = await MikroORM.init({
        discovery: {
            warnWhenNoEntities: false,
        },
        extensions: [EntityGenerator] as any,
        driver: MySqlDriver,
        user: 'admin',
        password: 'admin1234',
        dbName: 'orm_benchMark',
        port: 3307,

        // ...
    });
    const dump = await orm.entityGenerator.generate({
        save: true,
        path: process.cwd() + '/my-entities',
    });
    console.log(dump);
    await orm.close(true);
})();
