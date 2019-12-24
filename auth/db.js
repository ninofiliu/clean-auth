const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const dataPath = `${__dirname}/data.json`;

const getData = async () => JSON.parse(await readFile(dataPath));
const saveData = async (data) => writeFile(dataPath, JSON.stringify(data, null, 4));

module.exports = {
    async some(predicate = () => true) {
        const data = await getData();
        return data.some(predicate);
    },
    async filter(predicate = () => true) {
        const data = await getData();
        return data.filter(predicate);
    },
    async push(item) {
        const data = await getData();
        data.push(item);
        await saveData(data);
    },
};
