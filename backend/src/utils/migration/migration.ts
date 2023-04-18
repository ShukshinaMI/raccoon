import inquirer from "inquirer";
import fs from "fs";
import path from "path";

inquirer
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

        const migrationFolder = path.join(__dirname, "../database/migrations");

        const files = fs.readdirSync(migrationFolder).filter((file) => file.includes(datPrefix));

        const fileIndex = "00" + (files.length + 1);

        const { operation } = answers;

        inquirer
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
                fs.writeFileSync(`${migrationFolder}/${datPrefix}-${fileIndex}-${operation}_${fileName}.sql`, "");
            });
    });
