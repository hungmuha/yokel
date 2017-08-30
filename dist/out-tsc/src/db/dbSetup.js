var db = require('../models');
db.sequelize.sync({ force: true }).then(function () {
    process.exit();
});
//# sourceMappingURL=dbSetup.js.map