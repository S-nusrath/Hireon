import jwt from "jsonwebtoken";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJudXNodUBleGFtcGxlLmNvbSIsImlhdCI6MTc1OTk0ODIyNSwiZXhwIjoxNzU5OTUxODI1fQ.H8Zn78UCjrSBALxmweiS_A9FX16RsIpge50-NUIKoME";
try {
  const decoded = jwt.verify(token, "secretkey@7");
  console.log(decoded);
} catch (err) {
  console.error("Token invalid:", err.message);
}