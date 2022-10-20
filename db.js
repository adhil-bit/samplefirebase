const admin = require('./firebase')
const db = admin.database();

//read
const read = async (path) => {
    try{
        const ref = db.ref(path);
        let response = await ref.once('value');
        return response.val();
    } catch (error){
        console.log('error:',error);
    }
};

//create or update
const create = async (path,data) =>  {
    try{
          const ref = db.ref(path);
          return await ref.update(data);
    } catch(error) {
        console.log('error: ', error);
    }
}

//delete
const deletes = async (path) => {
    try{
          const ref = db.ref(path);
          let response = await ref.remove();
          return response;
        } catch(error) {
        console.log('error:',error);
    }
}

module.exports = {read,create,deletes};