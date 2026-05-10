/**
 * DataMind · 网易七鱼：仅向后台体现来源为 DataMind（自定义字段 key 需在七鱼控制台配置同名项）。
 */
(function () {
  function getCookie(name) {
    if (!document.cookie) return "";
    var parts = document.cookie.split(";");
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (p.indexOf(name + "=") === 0) {
        return decodeURIComponent(p.slice(name.length + 1));
      }
    }
    return "";
  }

  function applyYsfConfig() {
    var userToken = getCookie("userToken");
    w[n]("config", {
      uid: userToken || "",
      name: "DataMind",
      data: JSON.stringify([{ key: "entry_source", value: "DataMind" }]),
      groupid: "480913826",
    });
  }

  var w = window;
  var d = document;
  var n = "ysf";
  w[n] =
    w[n] ||
    function () {
      (w[n].a = w[n].a || []).push(arguments);
    };

  var j = d.createElement("script");
  j.async = true;
  j.src =
    "https://qiyukf.com/script/a4901b54564b6c9f9ce5bf29de67140f.js?sdkTemplateId=6606881&hidden=1";
  d.body.appendChild(j);

  applyYsfConfig();

  w.openQiyuCustomerService = function () {
    applyYsfConfig();
    w[n]("open", { templateId: 6606881 });
  };

  d.addEventListener(
    "click",
    function (e) {
      var t = e.target && e.target.closest && e.target.closest("[data-qiyu-open]");
      if (!t) return;
      e.preventDefault();
      w.openQiyuCustomerService();
    },
    false
  );

  function mountFab() {
    if (d.getElementById("qiyu-kefu-fab")) return;
    var btn = d.createElement("button");
    btn.id = "qiyu-kefu-fab";
    btn.type = "button";
    btn.setAttribute("aria-label", "在线客服");
    btn.textContent = "在线客服";
    btn.style.cssText = [
      "position:fixed",
      "right:20px",
      "bottom:24px",
      "z-index:99999",
      "padding:10px 18px",
      "border-radius:999px",
      "background:#0E80F0",
      "color:#fff",
      "border:none",
      "cursor:pointer",
      "font-size:14px",
      "font-family:inherit",
      "box-shadow:0 4px 14px rgba(14,128,240,0.35)",
      "transition:transform 0.15s ease,box-shadow 0.15s ease",
    ].join(";");
    btn.onmouseenter = function () {
      btn.style.transform = "scale(1.02)";
      btn.style.boxShadow = "0 6px 20px rgba(14,128,240,0.45)";
    };
    btn.onmouseleave = function () {
      btn.style.transform = "";
      btn.style.boxShadow = "0 4px 14px rgba(14,128,240,0.35)";
    };
    btn.addEventListener("click", function () {
      w.openQiyuCustomerService();
    });
    d.body.appendChild(btn);
  }

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", mountFab);
  } else {
    mountFab();
  }
})();
