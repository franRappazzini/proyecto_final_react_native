import SQLite from 'react-native-sqlite-storage';

const sql = SQLite.openDatabase('userLogIn.db');
const sqlFav = SQLite.openDatabase('favoritos.db');

export function init() {
  const promise = new Promise((resolve, reject) => {
    sql.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS userLogIn (nombre TEXT NOT NULL, apellido TEXT NOT NULL, email TEXT NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL)',
        [],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export function insertUserLogIn(nombre, apellido, email, username, password) {
  const promise = new Promise((resolve, reject) => {
    sql.transaction(tx => {
      tx.executeSql(
        'INSERT INTO userLogIn (nombre, apellido, email, username, password) VALUES (?, ?, ?, ?, ?)',
        [nombre, apellido, email, username, password],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export function getUserLogIn() {
  const promise = new Promise((resolve, reject) => {
    sql.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM userLogIn',
        [],
        (_, result) => {
          const data = [];
          let len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }

          resolve(data);
        },
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export function deleteUserLogIn() {
  sql.transaction(tx => {
    tx.executeSql('DELETE FROM userLogIn', [], (_, result) => {
      console.log('deleteLogIn: ', result);
    });
  });
}

// export function initFav() {
//   const promise = new Promise((resolve, reject) => {
//     sqlFav.transaction(tx => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS favoritos (nombre TEXT NOT NULL, apellido TEXT NOT NULL, email TEXT NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL)',
//         [],
//         () => resolve(),
//         (_, err) => reject(err),
//       );
//     });
//   });

//   return promise;
// }

// export function insertUserToFav(user) {
//   const {nombre, apellido, email, username, password} = user;

//   const promise = new Promise((resolve, reject) => {
//     sqlFav.transaction(tx => {
//       tx.executeSql(
//         'INSERT INTO favoritos (nombre, apellido, email, username, password) VALUES (?, ?, ?, ?, ?)',
//         [nombre, apellido, email, username, password],
//         (_, result) => resolve(result),
//         (_, err) => reject(err),
//       );
//     });
//   });

//   return promise;
// }

// export function getUsersInFav() {
//   const promise = new Promise((resolve, reject) => {
//     sqlFav.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM favoritos',
//         [],
//         (_, result) => {
//           const data = [];
//           let len = result.rows.length;
//           for (let i = 0; i < len; i++) {
//             let row = result.rows.item(i);
//             data.push(row);
//           }

//           resolve(data);
//         },
//         (_, err) => reject(err),
//       );
//     });
//   });

//   return promise;
// }

// export function deleteUserFromFav(username) {
//   sqlFav.transaction(tx => {
//     tx.executeSql(
//       'DELETE FROM favoritos WHERE username = ?',
//       [username],
//       (_, result) => {
//         console.log('deleteUserFromFav: ', result);
//       },
//     );
//   });
// }
