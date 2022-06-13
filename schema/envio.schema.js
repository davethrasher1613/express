const joi = require('joi');

 const id = joi.random.uuid();
 const name = joi.string().alphabetic().min(3).max(50);
 const email = joi.string().email().min(1);
 const phone = joi.string().phone().min(7);
 const address = joi.string().address().min(3);
 const city = joi.address().alphabetic().min(1);
 const state = joi.address().alphabetic().min(3);
 const country = joi.string().alphabetic().min(3);
//  const date = joi.date();
//  const total = joi.commerce().float().min(1);
//____________________________________________

const findOneEnvio = joi.object()({
    id: id.require(),
});

const updateEnvio = joi.object()({
    name: name.require(),
    email: email.require(),
    phone: phone.require(),
    address: address.require(),
    city: city.require(),
    state: state.require(),
    country: country.require(),
});

const deleteEnvio = joi.object

module.exports={findOneEnvio,updateEnvio,deleteEnvio}

