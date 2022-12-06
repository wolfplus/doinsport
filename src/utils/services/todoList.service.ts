import { callAPI, authHeader } from "@/utils";

export class todoListService {
  static async getAll() {
    const requestOptions = {
      headers: { ...authHeader },
    };

    return callAPI(`/todo`, "GET", { ...requestOptions });
  }
}
