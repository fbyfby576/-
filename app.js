const days = [
  {
    day: "周一",
    type: "无氧核心日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、苹果 50g、紫洋葱 30g、安全坚果 30g、全麦面包 1 片、蔬菜 100g",
      午餐: "橄榄油炒菠菜或芦笋 150g、鸡肉 120g、小半碗燕麦饭 100g",
      加餐: "南瓜子 30g",
      晚餐: "挪威鲭鱼 120g、蒜末凉拌西兰花 150g、洋葱 50g"
    },
    training: "晚间康复：McGill Big 3、吊单杠牵引、站桩与腹式呼吸。"
  },
  {
    day: "周二",
    type: "游泳日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、安全坚果 30g、全麦面包 1 片、蔬菜、油浸金枪鱼 60g",
      午餐: "西红柿牛肉荞麦面",
      加餐: "南瓜子 30g",
      晚餐: "香菇煎豆腐 150g、生菜沙拉 100g、少量虾仁 80g"
    },
    training: "中午或傍晚：游泳 1000m，仅限带呼吸管自由泳或仰泳，保持脊柱中立位。"
  },
  {
    day: "周三",
    type: "无氧核心日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、苹果 50g、紫洋葱 30g、安全坚果 30g、全麦面包 1 片、蔬菜 100g",
      午餐: "虾仁 120g、清炒西兰花 150g、糙米或全麦面包",
      加餐: "南瓜子 30g",
      晚餐: "瘦牛肉 120g、炒番茄 150g、菠菜 150g"
    },
    training: "晚间康复：McGill Big 3、臀桥、反向凯格尔，吸气时放松盆底。"
  },
  {
    day: "周四",
    type: "游泳日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、安全坚果 30g、全麦面包 1 片、蔬菜、油浸金枪鱼 60g",
      午餐: "西红柿牛肉荞麦面",
      加餐: "南瓜子 30g",
      晚餐: "鸡肉 120g、洋葱炒鸡蛋 100g、生菜 100g"
    },
    training: "中午或傍晚：游泳 1000m，带呼吸管自由泳或仰泳。"
  },
  {
    day: "周五",
    type: "无氧核心日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、苹果 50g、紫洋葱 30g、安全坚果 30g、全麦面包 1 片、蔬菜 100g",
      午餐: "煎三文鱼或挪威鲭鱼、西兰花 150g、燕麦熟 100g",
      加餐: "南瓜子 30g",
      晚餐: "瘦牛肉 120g、凉拌生菜/洋葱 150g、少量黑巧克力"
    },
    training: "晚间康复：McGill Big 3、平板支撑、吊单杠深呼吸。"
  },
  {
    day: "周六",
    type: "放纵日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、苹果 50g、紫洋葱 30g、安全坚果 30g、全麦面包 1 片、蔬菜 100g",
      午餐: "大份蔬菜沙拉 200g、虾仁或鸡肉 120g、全麦面包",
      加餐: "南瓜子 30g",
      晚餐: "放纵餐，仍建议先吃蔬菜和蛋白质"
    },
    training: "主动休息：散步、吊单杠拉伸和呼吸调整，让腰椎间盘和神经根充分休息。"
  },
  {
    day: "周日",
    type: "休息游泳日",
    meals: {
      早餐: "鸡蛋 1 个、蓝莓 50g、苹果 50g、紫洋葱 30g、安全坚果 30g、全麦面包 1 片、蔬菜 100g",
      午餐: "西红柿牛肉荞麦面",
      加餐: "南瓜子 30g",
      晚餐: "香菇煎豆腐 150g、菠菜/生菜 150g、少量牛肉 50g"
    },
    training: "中午或傍晚：游泳 1000m，带呼吸管自由泳或仰泳。"
  }
];

const supplements = [
  ["晨起空腹", "瓜氨酸 1.25g、UC-II 40mg"],
  ["早餐后", "D3-K2、Methyl B-Complex、Q10 200mg、维C缓释片 1000mg"],
  ["午餐后", "碧萝芷 50mg、磷虾油 750mg、姜黄素；无番茄日加番茄红素"],
  ["晚餐后", "氨糖软骨素 4 粒"],
  ["睡前空腹", "甘氨酸镁 2 粒；无牛肉日加葡萄糖酸锌 25mg"]
];

const checks = ["餐序达成", "水 2L", "咖啡上午", "散步 10 分钟", "腰椎康复", "补剂完成", "23:30 上床", "鼻炎刺激控制"];
const trackers = [
  ["睡眠质量", 70],
  ["头脑清醒", 75],
  ["腰部舒适", 80],
  ["血糖友好", 65],
  ["性功能状态", 70]
];

let selectedDay = new Date().getDay();
selectedDay = selectedDay === 0 ? 6 : selectedDay - 1;

const storageKey = "health-planner-checks-v1";
const savedChecks = JSON.parse(localStorage.getItem(storageKey) || "{}");

function renderDate() {
  const formatter = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "long" });
  document.getElementById("dateChip").textContent = formatter.format(new Date());
}

function renderDays() {
  const strip = document.getElementById("dayStrip");
  strip.innerHTML = days
    .map((item, index) => `<button class="day-btn ${index === selectedDay ? "is-active" : ""}" data-day="${index}">${item.day}<span>${item.type}</span></button>`)
    .join("");
}

function renderToday() {
  const day = days[selectedDay];
  document.getElementById("dayTitle").textContent = `${day.day}｜${day.type}`;
  document.getElementById("trainingTitle").textContent = day.type;
  document.getElementById("trainingCopy").textContent = day.training;
  document.getElementById("mealList").innerHTML = Object.entries(day.meals)
    .map(([name, content]) => `<article class="meal-card"><h3>${name}</h3><p>${content}</p></article>`)
    .join("");
  renderChecks();
}

function renderChecks() {
  const key = days[selectedDay].day;
  const dayChecks = savedChecks[key] || {};
  document.getElementById("checkGrid").innerHTML = checks
    .map((label) => `<button class="check-item ${dayChecks[label] ? "is-done" : ""}" data-check="${label}">${label}</button>`)
    .join("");
  const done = checks.filter((label) => dayChecks[label]).length;
  const progress = Math.round((done / checks.length) * 100);
  document.getElementById("progressText").textContent = `${progress}%`;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

function renderWeek() {
  document.getElementById("weekGrid").innerHTML = days
    .map((item) => {
      const mealText = Object.entries(item.meals).map(([name, content]) => `${name}：${content}`).join(" / ");
      return `<article class="week-card"><h2>${item.day}｜${item.type}</h2><p>${mealText}</p><p><strong>训练：</strong>${item.training}</p></article>`;
    })
    .join("");
}

function renderSupplements() {
  document.getElementById("supplementGrid").innerHTML = supplements
    .map(([time, content]) => `<article class="supplement-card"><span class="tag">${time}</span><h2>${time}</h2><p>${content}</p></article>`)
    .join("");
}

function renderTrackers() {
  document.getElementById("trackerRows").innerHTML = trackers
    .map(([label, value]) => `<div class="tracker-row"><label>${label}</label><input type="range" min="0" max="100" value="${value}" aria-label="${label}"><output>${value}</output></div>`)
    .join("");
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (tab) {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(`${tab.dataset.view}View`).classList.add("is-active");
  }

  const dayButton = event.target.closest(".day-btn");
  if (dayButton) {
    selectedDay = Number(dayButton.dataset.day);
    renderDays();
    renderToday();
  }

  const checkButton = event.target.closest(".check-item");
  if (checkButton) {
    const key = days[selectedDay].day;
    savedChecks[key] = savedChecks[key] || {};
    savedChecks[key][checkButton.dataset.check] = !savedChecks[key][checkButton.dataset.check];
    localStorage.setItem(storageKey, JSON.stringify(savedChecks));
    renderChecks();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches(".tracker-row input")) {
    event.target.nextElementSibling.textContent = event.target.value;
  }
});

renderDate();
renderDays();
renderToday();
renderWeek();
renderSupplements();
renderTrackers();
