export class UserModel {
    login: string;
    email: string;
    last_request: string;
    name: string;
    access_token: string;
    constructor(user?: any) {
        user = user || {};
      this.login = user.login || "";
      this.email = user.email || "";
      this.last_request = user.last_request || "";
      this.name = user.name || "";
      this.access_token = user.access_token || "";
    }
}
