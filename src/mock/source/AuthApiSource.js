/**
 * @Author: LuoYang
 * @Date: 2021/7/14 4:55 下午
 * @Description: AuthApi的模拟数据
 */

export default {
  login: {
    msg: "",
    code: 1,
    data: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicmVzX2xvZyIsInJlc19ybXMiLCJyZXNfY21zIiwicmVzX3N5cyJdLCJ1c2VyX25hbWUiOiJ7XCJwYXNzd29yZFwiOlwiJDJhJDEwJDVJNmRMU0FvTURncVh5RWUvTWFJei55TUtJYlZrZW55aHFLZDVDb3NROWQ3Y0VlZmhGNXFTXCIsXCJ1c2VySWRcIjoyMyxcInVzZXJOYW1lXCI6XCJ0dXpoaVwifSIsInNjb3BlIjpbIndlYiJdLCJleHAiOjE2MjY1MTIwMjAsImF1dGhvcml0aWVzIjpbImFkbWluIl0sImp0aSI6IjczMjY3ZmU4LTlkNTctNGIxOS04MWUzLTRlOWUyNDg0ZTMwOCIsImNsaWVudF9pZCI6IndlYiJ9.AZpAh2fSut0zYagll987njRemZrnZfe4-9lKyluiYNg",
      token_type: "bearer",
      refresh_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicmVzX2xvZyIsInJlc19ybXMiLCJyZXNfY21zIiwicmVzX3N5cyJdLCJ1c2VyX25hbWUiOiJ7XCJwYXNzd29yZFwiOlwiJDJhJDEwJDVJNmRMU0FvTURncVh5RWUvTWFJei55TUtJYlZrZW55aHFLZDVDb3NROWQ3Y0VlZmhGNXFTXCIsXCJ1c2VySWRcIjoyMyxcInVzZXJOYW1lXCI6XCJ0dXpoaVwifSIsInNjb3BlIjpbIndlYiJdLCJhdGkiOiI3MzI2N2ZlOC05ZDU3LTRiMTktODFlMy00ZTllMjQ4NGUzMDgiLCJleHAiOjE2NTc3ODg4MjAsImF1dGhvcml0aWVzIjpbImFkbWluIl0sImp0aSI6ImI2NDY0NzU3LWRlYjgtNDFkNC05ZmFjLTRiZTY0YWNiY2ViOSIsImNsaWVudF9pZCI6IndlYiJ9.1JzOOQghFxzPe15yqYXDoBkLKtkUZ5H-IKIs6w7KRe8",
      expires_in: 259199,
      scope: "web",
      jti: "73267fe8-9d57-4b19-81e3-4e9e2484e308",
    },
    success: true,
    count: 0,
  },
  generateCodeUrl: "https://captcha.qq.com/getimage",
};
