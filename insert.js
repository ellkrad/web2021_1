const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');


//let sql = `
//insert into test ("name") values ("suda");

let sql = `
insert into car ("name","maker_id") values ("NSK",1);
`


db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "carテーブルにデータを追加しました" );
	});
});

let sql2 = `
insert into maker ("name") values ("Honda");
`

db.serialize( () => {
	db.run( sql2, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "makerテーブルにデータを追加しました" );
	});
});