const
good = {
  valid: true,
  database: 'ok',
  format_valid: true,
  query: 'LU26375245',
  country_code: 'LU',
  vat_number: '26375245',
  company_name: 'AMAZON EUROPE CORE S.A R.L.',
  company_address: '38, AVENUE JOHN F. KENNEDY\nL-1855  LUXEMBOURG'
},
bad_format = {
  valid: false,
  database: 'ok',
  format_valid: false,
  query: 'LDF654S',
  country_code: '',
  vat_number: '',
  company_name: '',
  company_address: ''
},
bad_number = {
  valid: false,
  database: 'ok',
  format_valid: true,
  query: 'LU26398745',
  country_code: 'LU',
  vat_number: '26398745',
  company_name: '',
  company_address: ''
}
