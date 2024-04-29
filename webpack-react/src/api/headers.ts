export default function authHeader() {
  try {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user && user.access) {
      return {
        Authorization: user.access,
        // Node.js用に "JWT " + 削除
        "Content-Type": "application/json",
        //ここが"multipart/form-data"だと、リクエストの中身がundefinedになる
      };
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return {};
  }
}
