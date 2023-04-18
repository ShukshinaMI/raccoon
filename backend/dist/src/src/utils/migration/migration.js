"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
inquirer_1.default
    .prompt([
    {
        type: "list",
        name: "operation",
        message: "Какая операция лучше всего определяет вашу новую миграцию?",
        choices: ["data: INSERT into database", "schema: Database schema changes", "function: Database functions"],
        filter(value) {
            return value.split(":")[0];
        },
    },
])
    .then((answers) => {
    const date = new Date();
    const datPrefix = `${date.getFullYear()}${"0" + (date.getMonth() + 1)}${"0" + date.getDate()}`;
    const migrationFolder = path_1.default.join(__dirname, "../database/migrations");
    const files = fs_1.default.readdirSync(migrationFolder).filter((file) => file.includes(datPrefix));
    const fileIndex = "00" + (files.length + 1);
    const { operation } = answers;
    inquirer_1.default
        .prompt([
        {
            type: "input",
            name: "fileName",
            message: `Каким должно быть имя файла? (${datPrefix}-${fileIndex}-${operation}_<YOUR_INPUT>.sql)`,
            default() {
                return "new-migration";
            },
        },
    ])
        .then((output) => {
        const { fileName } = output;
        fs_1.default.writeFileSync(`${migrationFolder}/${datPrefix}-${fileIndex}-${operation}_${fileName}.sql`, "");
    });
});
//# sourceMappingURL=migration.js.map