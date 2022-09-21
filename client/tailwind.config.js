module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    backgroundImage: {
      bg: "url('./img/1.png')",
      bg2: "url('./img/Bg@2x.png')",
      gradient: "url('./img/gradient.png')",
    },
    fontFamily: {
      PingFang: "PingFang-SC-Regular",
    },
    extend: {
      colors: {
        blue: {
          danlanzi: "#a7a8bd", // 淡蓝紫
          qingshanlan: "#8fb2c9", // 青山紫
          jingtian: "#c3d7df", // 井天蓝
          qiubo: "#8abcd1", // 秋波蓝
        },
        grey: {
          zhanjianhui: "#495c69", // 战舰灰
        },
      },
    },
  },
  plugins: [],
};
