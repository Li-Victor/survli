const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'sdfjklfjsdfkwerb' }, (err, tunnel) => {
  console.log('LT running');
});
