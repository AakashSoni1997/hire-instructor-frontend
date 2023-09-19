const server = {
    baseUrl: 'http://192.168.2.81:8000' ,//ravi
    baseMongoUrl: 'https://admin-hireinstructor.sandboxdevelopment.in',
}
export function baseUrlPostGres() {
  return server.baseMongoUrl;
}