// //class in this file hold the methods to create, sign up and authentic users


import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {    
      const encodedCredentials = btoa(`${credentials.email}:${credentials.password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    return fetch(url, options);
  }



  async getUser(username, password) {
    const response = await this.api(`/users`, 'GET', null, true, { username, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }



//https://teamtreehouse.com/library/react-authentication/implementing-basic-authentication/set-up-user-registration 

 async getCourse() {
  const response = await this.api('/courses', 'GET', null, false, false);
  if (response.status === 200) {
    return response.json().then(data => data);
  }
  else if (response.status === 401) {
    return null;
  }
  else {
    throw new Error();
  }
}

async getCourseDetail(id) {
  const response = await this.api(`/courses/${id}`);
  if (response.status === 200) {
    return response.json().then(data => data);
  }
  else if (response.status === 401) {
    return null;
  }
  else {
    throw new Error();
  }
}

async updateCourse(id) {
  const response = await this.api(`/courses/${id}`, 'PUT');
  if (response.status === 201) {
    response.json().then(data => data);
  }
  else if (response.status === 400) {
    return response.json().then(data => {
      return data.errors;
    });
  }
  else {
    throw new Error();
  }
}


async createCourse(course) {
  const response = await this.api('/courses', 'POST');
  if (response.status === 201) {
    return [];
  }
  else if (response.status === 400) {
    return response.json().then(data => {
      return data.errors;
    });
  }
  else {
    throw new Error();
  }
}








}









 

