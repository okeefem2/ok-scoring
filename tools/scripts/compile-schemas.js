const { exec } = require('child_process');


async function compleSchemas() {
    const project = process.argv[3];

    if (!project) {
        console.error('Please enter a project to compile schemas for');
        return;
    }
    return exec(`json2ts -i ./apps/${project}/src/schemas -o ./apps/${project}/src/types`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`Success!`);
    });
}

compleSchemas();
