// Write a class called SocialMediaError that extends Error. It will also need a constructor with 2 arguments, one for the msg and the params. 
// (Don't worry about writing the try and catch, etc. Just write the class)
class SocialMediaError extends Error {
    constructor(msg = 'An error occurred', ...params) {
      super(...params);

      this.msg = msg;
    }
  }