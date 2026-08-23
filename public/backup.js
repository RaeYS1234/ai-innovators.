// ============ AI INNOVATORS — Backup & Restore ============
// Lets a kid save their progress (XP, streak, badges, everything) as a
// code they can paste back in on a new device, a new browser, or after
// clearing their cache. No account/server needed — it's just their own
// saved data, packed into a code.

(function () {
  const VERSION = "AII1";

  function toBase64Url(str) {
    const b64 = btoa(unescape(encodeURIComponent(str)));
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function fromBase64Url(b64url) {
    let b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    return decodeURIComponent(escape(atob(b64)));
  }
  // Simple checksum so typos/corrupted codes get caught with a friendly
  // message instead of silently loading broken data.
  function checksum(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum = (sum * 31 + str.charCodeAt(i)) >>> 0;
    }
    return (sum % 1679616).toString(36).padStart(4, "0");
  }

  // Returns the backup code string, or null if there's no profile yet.
  window.aiiGetBackupCode = function () {
    let user = null;
    try { user = JSON.parse(localStorage.getItem("aii_user") || "null"); } catch (e) {}
    if (!user) return null;
    const data = toBase64Url(JSON.stringify(user));
    const sum = checksum(data);
    const chunked = (data.match(/.{1,8}/g) || []).join("-");
    return `${VERSION}-${sum}-${chunked}`;
  };

  // Returns { ok: true, user } on success, or { ok: false, error } on failure.
  // Does NOT save anything if the code is invalid.
  window.aiiParseBackupCode = function (code) {
    try {
      const cleaned = String(code || "").trim().replace(/\s+/g, "");
      const parts = cleaned.split("-");
      if (parts.length < 3 || parts[0] !== VERSION) {
        return { ok: false, error: "That doesn't look like a backup code. Double check you copied the whole thing." };
      }
      const sum = parts[1];
      const data = parts.slice(2).join("");
      if (checksum(data) !== sum) {
        return { ok: false, error: "That code looks incomplete or got typed wrong somewhere. Try copying it again." };
      }
      const user = JSON.parse(fromBase64Url(data));
      if (!user || typeof user !== "object" || !("xp" in user)) {
        return { ok: false, error: "That code doesn't look right." };
      }
      return { ok: true, user };
    } catch (e) {
      return { ok: false, error: "That code doesn't look right. Double check it and try again." };
    }
  };

  // Parses AND saves the code as the current device's profile.
  window.aiiRestoreBackupCode = function (code) {
    const result = window.aiiParseBackupCode(code);
    if (!result.ok) return result;
    try { localStorage.setItem("aii_user", JSON.stringify(result.user)); } catch (e) {}
    return result;
  };
})();
