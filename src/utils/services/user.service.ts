import { callAPI } from "@/utils";
import { User } from "@/types";

export class userService {
  public user = JSON.parse(localStorage.getItem("user") || "{}");

  static async login(username: string, password: string) {
    const requestOptions = {
      data: { username, password },
      headers: { "Content-Type": "application/json" },
    };

    return callAPI(`/users/authenticate`, "POST", { ...requestOptions }).then(
      (user: User) => {
        if (user.token) {
          localStorage.setItem("user", JSON.stringify(user));
        }

        return user;
      }
    );
  }
}
