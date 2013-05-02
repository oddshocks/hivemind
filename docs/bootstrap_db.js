// This is the code that is included in app.js to
// bootstrap the SQLite database. We included it in this
// separate file as well, in order make sure we fulfilled
// the project requirement of hilighting the script we
// use to build the DB.

var litedb = Ti.Database.open('hivemind');
    litedb.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY '
    + 'AUTOINCREMENT, nickname TEXT, email TEXT, password TEXT, '
    + 'firstname TEXT, lastname TEXT, bio TEXT);');
    litedb.execute('CREATE TABLE IF NOT EXISTS hives(id INTEGER PRIMARY KEY '
    + 'AUTOINCREMENT, hiveName TEXT, creation_date TEXT, description TEXT, creator '
    + 'INTEGER, FOREIGN KEY(creator) REFERENCES users(id));');
    litedb.execute('CREATE TABLE IF NOT EXISTS users_hives('
    + 'user_id TEXT, hive_id TEXT, FOREIGN KEY(user_id) '
    + 'REFERENCES users(id), FOREIGN KEY(hive_id) '
    + 'REFERENCES hives(id));');
    litedb.execute('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY '
    + 'AUTOINCREMENT,hive_id TEXT, creation_date TEXT, edit_date TEXT, creator TEXT, format TEXT,title TEXT, content TEXT);');
    litedb.execute('CREATE TABLE IF NOT EXISTS notes_tag(note_id INTEGER PRIMARY KEY '
    + 'AUTOINCREMENT,tag_id INTEGER);');
    litedb.execute('CREATE TABLE IF NOT EXISTS tags(id INTEGER PRIMARY KEY '
    + 'AUTOINCREMENT,title TEXT);');
litedb.close();
