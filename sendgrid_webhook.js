const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'surliilrus' }, (err, tunnel) => {
  console.log('LT running');
});
