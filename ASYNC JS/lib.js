function updateAccount(product, cb) {
   setTimeout(() => {
      console.log(`${product}, bought succesfully`);
      cb();
      cb();
   })
}

function promiseUpdateAccount(product) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         resolve();
      })
   })
}

module.exports = {
   updateAccount: updateAccount,
   promiseUpdateAccount: promiseUpdateAccount
}