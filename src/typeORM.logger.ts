import { Logger } from '@nestjs/common';
import { QueryRunner } from 'typeorm';

export class TypeORMLogger extends Logger {
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        // const requestUrl = queryRunner && queryRunner.data["request"] ? "(" + queryRunner.data["request"].url + ") " : "";
        // console.log(query, parameters);
        super.log(query, parameters);
    }

    logQueryError(error: string, query: string) {
        // console.log("ERROR", error, query);
        super.error(error, query);
    }

    logQuerySlow(time: number, query: string) {
        super.warn(time, query);
    }

    logSchemaBuild(message: string) {
        super.log(message);
    }

    logMigration(message: string) {
        super.log(message);
    }

    log(level: 'log' | 'info' | 'warn', message: any) {
        super.log(level, message);
    }
}
