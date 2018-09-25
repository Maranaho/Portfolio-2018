const Secrets = {
  username: 'maranaho',
  clientID: '373570e47d102d9cd17e',
  clientSecret: 'c2a950209b0117ed3505b210d0b748d600a14338',
  url: ()=> 'https://api.github.com/users/'+ Secrets.username +'/repos?client_id='+ Secrets.clientID + '&client_secret=' + Secrets.clientSecret,
  psw: 'Obijae11'
}

export default Secrets
