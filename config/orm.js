// Import MySQL connection.
const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations (Devoured => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {devoured: true} => ["devoured=true"]
            arr.push(`${key}=${value}`);
        }
    }
    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

// Object for all our SQL statement functions.
const orm = {
    selectAll(tableInput, cb) {
        const query = `SELECT * FROM ${tableInput};`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne(table, cols, vals, cb) {
        let query = `INSERT INTO ${table}`;

        query += ' (';
        query += cols.toString();
        query += ') ';
        query += 'VALUES (';
        query += printQuestionMarks(vals.length);
        query += ') ';

        //console.log(`query string insertOne ${query}`);
        connection.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // An example of objColVals would be {name: cheeseburger, devoured: true}
    updateOne(table, objColVals, condition, cb) {
        let query = `UPDATE ${table}`;
        query += ' SET ';
        query += objToSql(objColVals);
        query += ' WHERE ';
        query += condition;

        //console.log(query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};

// Export the orm object for the model 'burgerModel.js'.
module.exports = orm;