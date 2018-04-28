export default function getBaseUrl() {
    // return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://evening-badlands-94401.herokuapp.com/';

    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
}