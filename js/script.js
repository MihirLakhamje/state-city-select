const Select = '{"state":[{"stateName":"Maharashtra","city":["Mumbai","Delhi","Chennai"]}]}';

const values = JSON.parse(Select);

for (const x in values) {
    for(const y in values[x]){
        for(const z in values[x][y]){
            console.log(values[x][y][z]);
        }
    }
}