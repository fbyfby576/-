const months = [
  ["1月", "冬季稳血糖", ["白菜", "萝卜", "菠菜", "香菇", "番茄罐头", "柑橘", "冻虾", "豆腐"]],
  ["2月", "冬末恢复", ["西兰花", "芦笋", "紫甘蓝", "洋葱", "胡萝卜", "鲭鱼", "鸡腿肉", "燕麦"]],
  ["3月", "春季减脂", ["菠菜", "芦笋", "蘑菇", "番茄", "草莓", "鸡蛋", "牛肉", "鹰嘴豆"]],
  ["4月", "春季增活力", ["生菜", "西兰花", "彩椒", "虾仁", "牛肉", "荞麦面", "豆腐", "猕猴桃"]],
  ["5月", "游泳强化", ["番茄", "黄瓜", "芦笋", "蓝莓", "金枪鱼罐头", "豆腐", "鸡腿肉", "全麦意面"]],
  ["6月", "夏季清爽", ["番茄", "生菜", "彩椒", "西葫芦", "虾仁", "鸡蛋", "毛豆", "蘑菇"]],
  ["7月", "高温轻食", ["黄瓜", "番茄", "紫甘蓝", "蘑菇", "金枪鱼罐头", "鸡腿肉", "玉米少量", "生菜"]],
  ["8月", "控糖抗疲劳", ["秋葵", "番茄", "菠菜", "蓝莓", "牛肉", "鲭鱼", "豆腐", "彩椒"]],
  ["9月", "秋季恢复", ["南瓜少量", "蘑菇", "西兰花", "虾仁", "豆腐", "全麦面包", "梨少量", "鸡蛋"]],
  ["10月", "力量建设", ["菠菜", "洋葱", "彩椒", "牛肉", "鸡蛋", "荞麦面", "鹰嘴豆", "金枪鱼罐头"]],
  ["11月", "保暖高蛋白", ["白菜", "萝卜", "香菇", "鸡腿肉", "鲭鱼", "番茄", "冻豆腐", "燕麦"]],
  ["12月", "年底维持", ["西兰花", "菠菜", "紫甘蓝", "虾仁", "牛肉", "柑橘", "豆腐", "全麦意面"]]
];

const weeks = [
  {
    name: "第1周｜家常中式基础周",
    variety: ["深绿色蔬菜", "红橙色蔬菜", "十字花科", "全谷物", "豆制品", "钙类替代", "鱼类2次", "虾/贝类", "鸡蛋", "牛肉", "坚果种子", "低糖水果"],
    shopping: ["鸡蛋 14 个", "燕麦 300g", "全麦面包 1 袋", "无糖高钙豆浆或无乳糖酸奶", "金枪鱼罐头 2 罐", "冻鲭鱼 2 份", "黑虎虾 500g", "牛肉 500g", "鸡腿肉 500g", "豆腐 4 盒", "全麦意面", "西兰花/菠菜/生菜", "番茄/洋葱/彩椒", "蓝莓/猕猴桃", "南瓜子/坚果"],
    days: [
      ["周一", "游泳日", "鸡蛋 2 个 + 燕麦 40g + 蓝莓 + 菠菜", "外食：番茄荞麦面，加牛肉或鸡蛋，面量八分", "鲭鱼 + 蒜蓉西兰花 + 洋葱生菜"],
      ["周二", "哑铃日", "金枪鱼橄榄油罐头 + 全麦面包 + 番茄洋葱", "黑虎虾炒彩椒 + 荞麦面半份 + 菠菜", "鸡腿肉 + 香菇豆腐 + 生菜"],
      ["周三", "游泳日", "鸡蛋 2 个 + 全麦面包 + 黄瓜番茄", "外食：番茄荞麦面，先吃蛋白，少喝汤", "虾仁炒番茄 + 菠菜 + 紫甘蓝"],
      ["周四", "哑铃日", "燕麦 40g + 鸡蛋 2 个 + 猕猴桃", "牛肉 + 西兰花 + 全麦意面半份", "虾仁豆腐煲 + 生菜"],
      ["周五", "游泳日", "鸡蛋开放三明治 + 生菜", "外食：番茄荞麦面；没得选时麦当劳应急模板", "鲭鱼 + 彩椒洋葱 + 凉拌菠菜"],
      ["周六", "恢复/放纵", "鸡蛋 2 个 + 燕麦 + 蓝莓", "牛肉蔬菜沙拉 + 全麦面包 1 片", "放纵餐：油炸/烧烤/火锅三选一，先吃蛋白蔬菜"],
      ["周日", "休息", "番茄炒蛋 + 全麦面包", "豆腐虾仁汤 + 蔬菜 + 少量荞麦面", "鸡腿肉 + 西兰花 + 蘑菇"]
    ]
  },
  {
    name: "第2周｜地中海轻食周",
    variety: ["橄榄油", "番茄", "深海鱼2次", "豆类", "全麦面包", "钙类替代", "鸡蛋", "鸡肉", "虾仁", "绿叶菜", "彩椒", "莓果", "坚果"],
    shopping: ["鸡蛋 12 个", "无糖高钙豆浆或无乳糖酸奶", "冻鲭鱼 1 份", "金枪鱼罐头 2 罐", "黑虎虾 500g", "鸡腿肉 700g", "牛肉 300g", "鹰嘴豆 2 罐或熟鹰嘴豆", "全麦面包", "全麦意面", "生菜/菠菜", "番茄/黄瓜/彩椒", "蓝莓/草莓"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 蓝莓", "外食：番茄荞麦面，加蛋", "金枪鱼罐头生菜沙拉 + 番茄 + 少量鹰嘴豆"],
      ["周二", "哑铃日", "全麦面包 + 鸡蛋 + 黄瓜番茄", "鸡腿肉彩椒全麦意面半份 + 菠菜", "虾仁西葫芦 + 豆腐"],
      ["周三", "游泳日", "燕麦 + 鸡蛋 + 草莓", "外食：番茄荞麦面，加牛肉", "鸡腿肉蘑菇 + 紫甘蓝 + 生菜"],
      ["周四", "哑铃日", "金枪鱼开放三明治 + 生菜", "牛肉鹰嘴豆沙拉 + 全麦面包 1 片", "鸡腿肉 + 西兰花 + 番茄"],
      ["周五", "游泳日", "鸡蛋 + 菠菜 + 全麦面包", "外食：番茄荞麦面", "鲭鱼 + 彩椒洋葱 + 黄瓜"],
      ["周六", "恢复/放纵", "燕麦 + 鸡蛋 + 蓝莓", "豆腐牛肉番茄汤 + 生菜", "放纵餐"],
      ["周日", "休息", "番茄炒蛋 + 生菜", "鸡腿肉蔬菜沙拉", "虾仁蘑菇豆腐汤"]
    ]
  },
  {
    name: "第3周｜日式韩式清爽周",
    variety: ["海鱼2次", "虾仁", "豆腐", "钙类替代", "鸡蛋", "牛肉", "菌菇", "海带/紫菜少量", "泡菜少量", "绿叶菜", "荞麦面", "水果", "坚果"],
    shopping: ["鸡蛋 14 个", "金枪鱼罐头 2 罐", "鲭鱼 2 份", "黑虎虾 500g", "牛肉 500g", "豆腐 5 盒", "鸡腿肉 400g", "荞麦面", "紫菜/海带芽少量", "泡菜小份", "菠菜/生菜", "蘑菇/黄瓜/番茄", "猕猴桃"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 猕猴桃", "外食：番茄荞麦面，加牛肉", "鲭鱼 + 黄瓜紫菜豆腐汤 + 菠菜"],
      ["周二", "哑铃日", "鸡蛋全麦三明治 + 番茄", "鸡腿肉蘑菇荞麦面半份 + 生菜", "虾仁豆腐泡菜锅，少辣"],
      ["周三", "游泳日", "燕麦 + 鸡蛋 + 蓝莓", "外食：番茄荞麦面，面量八分", "鸡腿肉 + 西兰花 + 紫甘蓝"],
      ["周四", "哑铃日", "金枪鱼罐头 + 全麦面包 + 黄瓜", "虾仁菠菜豆腐汤 + 少量荞麦面", "牛肉番茄蘑菇 + 生菜"],
      ["周五", "游泳日", "番茄炒蛋 + 全麦面包", "外食：番茄荞麦面或麦当劳应急模板", "鲭鱼 + 凉拌菠菜 + 洋葱"],
      ["周六", "恢复/放纵", "鸡蛋 + 燕麦", "豆腐鸡蛋蔬菜锅", "放纵餐"],
      ["周日", "休息", "开放三明治 + 生菜", "牛肉蔬菜沙拉 + 少量荞麦面", "虾仁彩椒 + 豆腐"]
    ]
  },
  {
    name: "第4周｜豆类与鸡肉周",
    variety: ["豆腐", "鹰嘴豆/毛豆", "钙类替代", "鸡腿肉", "鸡蛋", "虾仁", "鱼1-2次", "牛肉少量", "绿叶菜", "十字花科", "全谷物", "低糖水果", "橄榄油"],
    shopping: ["鸡腿肉 900g", "豆腐 5 盒", "鸡蛋 14 个", "金枪鱼罐头 2 罐", "黑虎虾 500g", "鲭鱼 1-2 份", "牛肉 300g", "毛豆或鹰嘴豆", "燕麦", "全麦面包", "西兰花/菠菜/生菜", "番茄/彩椒/蘑菇", "猕猴桃/橙"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 蓝莓", "外食：番茄荞麦面，加蛋", "鸡腿肉 + 西兰花 + 洋葱"],
      ["周二", "哑铃日", "金枪鱼罐头 + 生菜 + 全麦面包", "豆腐虾仁煲 + 荞麦面半份", "鸡腿肉蘑菇 + 菠菜"],
      ["周三", "游泳日", "番茄炒蛋 + 黄瓜", "外食：番茄荞麦面", "鸡腿肉彩椒 + 紫甘蓝"],
      ["周四", "哑铃日", "燕麦 + 鸡蛋 + 猕猴桃", "牛肉毛豆沙拉 + 全麦面包 1 片", "豆腐生菜汤 + 虾仁"],
      ["周五", "游泳日", "开放三明治 + 鸡蛋", "外食：番茄荞麦面", "鲭鱼 + 彩椒洋葱"],
      ["周六", "恢复/放纵", "鸡蛋 + 燕麦", "鸡腿肉沙拉 + 全麦面包", "放纵餐"],
      ["周日", "休息", "鸡蛋 + 生菜", "豆腐蘑菇汤 + 少量荞麦面", "虾仁西兰花 + 番茄"]
    ]
  },
  {
    name: "第5周｜中式快手炒菜周",
    variety: ["牛肉", "鸡蛋", "豆腐", "虾仁", "鱼2次", "菌菇", "绿叶菜", "红橙蔬菜", "葱蒜洋葱", "全麦面/荞麦面", "水果", "南瓜子"],
    shopping: ["牛肉 600g", "鸡蛋 14 个", "豆腐 4 盒", "金枪鱼罐头 2 罐", "黑虎虾 500g", "鲭鱼 2 份", "鸡腿肉 500g", "全麦意面", "荞麦面", "菠菜/小白菜/生菜", "胡萝卜/彩椒/番茄", "蘑菇/洋葱/大蒜", "蓝莓/柑橘"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 蓝莓", "外食：番茄荞麦面，加牛肉", "鸡腿肉洋葱小白菜 + 凉拌黄瓜"],
      ["周二", "哑铃日", "番茄炒蛋 + 全麦面包", "虾仁彩椒全麦意面半份 + 菠菜", "豆腐蘑菇汤 + 生菜"],
      ["周三", "游泳日", "金枪鱼罐头 + 生菜 + 全麦面包", "外食：番茄荞麦面", "鲭鱼 + 西兰花 + 洋葱"],
      ["周四", "哑铃日", "燕麦 + 鸡蛋 + 柑橘", "鸡腿肉胡萝卜蘑菇 + 荞麦面半份", "牛肉番茄 + 菠菜"],
      ["周五", "游泳日", "鸡蛋 + 黄瓜番茄 + 全麦面包", "外食：麦当劳应急或番茄荞麦面", "鲭鱼 + 彩椒 + 紫甘蓝"],
      ["周六", "恢复/放纵", "鸡蛋 + 燕麦", "虾仁豆腐蔬菜汤", "放纵餐"],
      ["周日", "休息", "开放三明治", "牛肉蔬菜沙拉", "鸡腿肉 + 西兰花 + 蘑菇"]
    ]
  },
  {
    name: "第6周｜东南亚香料周",
    variety: ["鸡肉", "虾仁", "鱼1-2次", "豆腐", "钙类替代", "鸡蛋", "香草/咖喱", "绿叶菜", "彩椒", "番茄", "黄瓜", "全谷物", "低糖水果"],
    shopping: ["鸡腿肉 800g", "金枪鱼罐头 2 罐", "黑虎虾 600g", "鲭鱼 1-2 份", "豆腐 4 盒", "鸡蛋 14 个", "牛肉 300g", "咖喱粉/黑胡椒", "燕麦", "全麦面包", "全麦意面", "荞麦面", "生菜/菠菜", "番茄/黄瓜/彩椒", "草莓/猕猴桃"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 草莓", "外食：番茄荞麦面，加蛋", "虾仁黄瓜生菜沙拉 + 豆腐"],
      ["周二", "哑铃日", "金枪鱼罐头 + 全麦面包 + 番茄", "咖喱鸡腿肉 + 彩椒 + 荞麦面半份", "豆腐蘑菇菠菜"],
      ["周三", "游泳日", "番茄炒蛋 + 全麦面包", "外食：番茄荞麦面，加牛肉", "豆腐虾仁汤 + 紫甘蓝"],
      ["周四", "哑铃日", "燕麦 + 鸡蛋 + 猕猴桃", "牛肉西兰花全麦意面半份", "鸡腿肉生菜卷 + 黄瓜"],
      ["周五", "游泳日", "鸡蛋 + 生菜 + 蓝莓", "外食：番茄荞麦面", "鲭鱼 + 彩椒洋葱 + 菠菜"],
      ["周六", "恢复/放纵", "开放三明治", "豆腐鸡蛋番茄汤", "放纵餐"],
      ["周日", "休息", "鸡蛋 + 燕麦", "鸡腿肉蔬菜沙拉", "虾仁蘑菇 + 生菜"]
    ]
  },
  {
    name: "第7周｜面食友好控糖周",
    variety: ["荞麦面", "全麦意面", "全麦面包", "燕麦", "鸡蛋", "牛肉", "鸡肉", "虾仁", "豆腐", "鱼2次", "多色蔬菜", "水果"],
    shopping: ["荞麦面", "全麦意面", "全麦面包", "燕麦", "鸡蛋 14 个", "金枪鱼罐头 2 罐", "牛肉 500g", "鸡腿肉 600g", "黑虎虾 500g", "鲭鱼 2 份", "豆腐 3 盒", "菠菜/生菜/西兰花", "番茄/彩椒/洋葱", "蓝莓/橙"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 蓝莓", "外食：番茄荞麦面，面量八分", "虾仁番茄 + 菠菜"],
      ["周二", "哑铃日", "金枪鱼罐头开放三明治 + 生菜", "鸡腿肉全麦意面半份 + 西兰花", "虾仁豆腐 + 黄瓜"],
      ["周三", "游泳日", "番茄炒蛋 + 全麦面包", "外食：番茄荞麦面，加蛋", "鲭鱼 + 洋葱彩椒 + 生菜"],
      ["周四", "哑铃日", "燕麦 + 鸡蛋 + 橙半个", "牛肉荞麦面半份 + 紫甘蓝", "鸡腿肉蘑菇 + 菠菜"],
      ["周五", "游泳日", "鸡蛋 + 黄瓜 + 全麦面包", "外食：麦当劳应急或番茄荞麦面", "鲭鱼 + 西兰花 + 番茄"],
      ["周六", "恢复/放纵", "鸡蛋 + 燕麦", "豆腐虾仁沙拉 + 全麦面包", "放纵餐"],
      ["周日", "休息", "开放三明治", "牛肉蔬菜汤 + 少量荞麦面", "鸡腿肉 + 生菜 + 蘑菇"]
    ]
  },
  {
    name: "第8周｜低加工维持周",
    variety: ["鸡蛋", "牛肉", "鸡肉", "鱼2次", "虾仁", "豆腐", "菌菇", "绿叶菜", "十字花科", "红橙蔬菜", "水果", "坚果种子"],
    shopping: ["鸡蛋 14 个", "金枪鱼罐头 2 罐", "牛肉 500g", "鸡腿肉 700g", "鲭鱼 2 份", "黑虎虾 500g", "豆腐 4 盒", "燕麦", "全麦面包", "全麦意面", "荞麦面", "西兰花/菠菜/生菜", "番茄/胡萝卜/彩椒", "蘑菇/洋葱", "猕猴桃/蓝莓", "南瓜子"],
    days: [
      ["周一", "游泳日", "鸡蛋 + 燕麦 + 蓝莓", "外食：番茄荞麦面，加牛肉", "鲭鱼 + 西兰花 + 洋葱"],
      ["周二", "哑铃日", "番茄炒蛋 + 全麦面包", "鸡腿肉彩椒 + 荞麦面半份 + 生菜", "豆腐蘑菇汤 + 菠菜"],
      ["周三", "游泳日", "鸡蛋 + 黄瓜番茄 + 全麦面包", "外食：番茄荞麦面，加蛋", "虾仁西兰花 + 紫甘蓝"],
      ["周四", "哑铃日", "燕麦 + 鸡蛋 + 猕猴桃", "鸡腿肉胡萝卜蘑菇 + 全麦意面半份", "牛肉番茄 + 生菜"],
      ["周五", "游泳日", "金枪鱼罐头 + 生菜 + 全麦面包", "外食：番茄荞麦面", "鲭鱼 + 彩椒洋葱 + 菠菜"],
      ["周六", "恢复/放纵", "鸡蛋 + 燕麦", "豆腐虾仁蔬菜汤", "放纵餐"],
      ["周日", "休息", "开放三明治 + 黄瓜", "鸡腿肉蔬菜沙拉", "牛肉蘑菇 + 西兰花"]
    ]
  }
];

const dayKeys = ["早餐", "午餐", "晚餐"];
const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const supplementRules = [
  {
    name: "D3-K2",
    cadence: "每日保留",
    timing: "早餐后",
    note: "作为核心补剂保留，不额外叠加其他 K2。"
  },
  {
    name: "L-瓜氨酸",
    cadence: "每日保留",
    timing: "晨起空腹或早餐前",
    note: "围绕血流和勃起质量目标保留，观察 4-8 周体感。"
  },
  {
    name: "甘氨酸镁",
    cadence: "每日保留",
    timing: "睡前",
    note: "服务睡眠、肌肉放松和恢复。"
  },
  {
    name: "维生素 B 族",
    cadence: "每周一次",
    timing: "周一早餐后",
    note: "从高频降到低频，后续用血检和精神状态再判断。"
  },
  {
    name: "姜黄素",
    cadence: "每周两次",
    timing: "周二、周六午餐后",
    note: "从每日改为低频，避免长期高吸收剂量堆叠。"
  },
  {
    name: "锌",
    cadence: "条件使用",
    timing: "睡前空腹",
    note: "当天没有牛肉、虾贝、南瓜子、坚果等锌来源时再考虑。"
  }
];
let selectedMonth = new Date().getMonth();
let selectedWeek = 0;
let selectedDay = new Date().getDay();
selectedDay = selectedDay === 0 ? 6 : selectedDay - 1;
let shoppingDay = 3;
let phase = "cut";

function renderSelectors() {
  document.getElementById("monthSelect").innerHTML = months
    .map((month, index) => `<option value="${index}">${month[0]}｜${month[1]}</option>`)
    .join("");
  document.getElementById("weekSelect").innerHTML = weeks
    .map((week, index) => `<option value="${index}">${week.name}</option>`)
    .join("");
  document.getElementById("shoppingDaySelect").innerHTML = weekdays
    .map((day, index) => `<option value="${index}">${day}</option>`)
    .join("");
  document.getElementById("monthSelect").value = selectedMonth;
  document.getElementById("weekSelect").value = selectedWeek;
  document.getElementById("shoppingDaySelect").value = shoppingDay;
}

function currentWeek() {
  return weeks[selectedWeek];
}

function renderMonth() {
  const [name, title, foods] = months[selectedMonth];
  document.getElementById("monthTitle").textContent = `${name}｜${title}`;
  document.getElementById("seasonTags").innerHTML = foods.map((food) => `<span class="tag">${food}</span>`).join("");
}

function renderVariety() {
  document.getElementById("varietyList").innerHTML = currentWeek().variety
    .map((item) => `<span class="shopping-item">${item}</span>`)
    .join("");
}

function rotatedWeek(startIndex) {
  return weekdays.map((_, offset) => weekdays[(startIndex + offset) % weekdays.length]);
}

function renderPurchasePlan() {
  const cycle = rotatedWeek(shoppingDay);
  const freshWindow = cycle.slice(0, 4).join("、");
  const stableWindow = cycle.slice(4).join("、");
  const beefDay = weekdays[shoppingDay];
  const freshItems = currentWeek().shopping.filter((item) => /牛肉|鸡腿肉|豆腐|生菜|菠菜|西兰花|番茄|黄瓜|彩椒|蘑菇|小白菜|紫甘蓝|蓝莓|猕猴桃|草莓|柑橘|橙|无乳糖酸奶/.test(item));
  const freezerItems = currentWeek().shopping.filter((item) => /冻|鲭鱼|黑虎虾|虾|金枪鱼罐头/.test(item));
  const pantryItems = currentWeek().shopping.filter((item) => !freshItems.includes(item) && !freezerItems.includes(item));
  document.getElementById("purchaseTitle").textContent = `${beefDay}采购｜鲜食材先吃，冷冻常备托底`;
  document.getElementById("purchasePlan").innerHTML = [
    {
      title: `${beefDay}当天买`,
      body: `鲜牛肉安排在${beefDay}当天或后 1-2 天吃；如果买整块牛排/牛肉块，周末吃也可以，绞肉和薄切肉更建议先吃或分装冷冻。绿叶菜、番茄、彩椒、菌菇和水果也优先放进 ${freshWindow}。本周鲜食材：${freshItems.join("、") || "按菜单采购蔬菜和鲜肉"}。`
    },
    {
      title: `${stableWindow}托底`,
      body: `买菜周期后半段用冷冻鱼虾、鸡蛋、豆腐、罐头和全谷物，减少鲜肉鲜菜放太久。本周冷冻/罐头：${freezerItems.join("、") || "冻虾、鲭鱼、金枪鱼罐头按需补"}。`
    },
    {
      title: "常备不怕断",
      body: `燕麦、全麦面包、荞麦面、坚果种子、无糖高钙豆浆等可以一次补齐。本周常备：${pantryItems.join("、") || "燕麦、全麦面包、荞麦面、坚果种子"}。`
    }
  ].map((card) => `<article class="purchase-card"><h3>${card.title}</h3><p>${card.body}</p></article>`).join("");
}

function renderDayTabs() {
  document.getElementById("dayTabs").innerHTML = currentWeek().days
    .map((day, index) => `<button class="day-tab ${index === selectedDay ? "is-active" : ""}" data-day="${index}">${day[0]}<br>${day[1]}</button>`)
    .join("");
}

function renderDay() {
  const day = currentWeek().days[selectedDay];
  const extra = phase === "cut" ? "减脂期：晚餐不加主食，主食集中早餐、午餐和游泳后。" : "增肌期：哑铃日午餐主食加 25%，游泳日可加一份水果。";
  document.getElementById("dayTitle").textContent = `${day[0]}｜${day[1]}`;
  document.getElementById("mealList").innerHTML = dayKeys
    .map((key, index) => `<article class="meal-card"><h3>${key}</h3><p>${day[index + 2]}</p></article>`)
    .join("");
  document.getElementById("executionTitle").textContent = phase === "cut" ? "减脂执行" : "增肌执行";
  document.getElementById("executionList").innerHTML = [
    extra,
    "早餐 8-9 点；晚餐 18-20 点，睡前不加餐。",
    "餐后 10 分钟散步，尤其午餐和晚餐。",
    "蛋白质每餐至少一掌心，蔬菜至少两拳。",
    "每天争取 12 种食物：主食、蛋白、蔬菜、水果、坚果种子都算。",
    day[1].includes("游泳") ? "游泳日午餐允许荞麦面，避免甜饮。" : "哑铃日午餐是恢复餐，别把碳水砍太狠。"
  ].map((item) => `<span class="execution-item">${item}</span>`).join("");
  renderSupplements(day);
}

function zincIsCovered(day) {
  const text = day.slice(2).join(" ");
  return /牛肉|虾|黑虎虾|虾仁|贝|牡蛎|南瓜子|坚果/.test(text);
}

function renderSupplements(day) {
  const dayName = day[0];
  const daily = [
    {
      name: "D3-K2",
      status: "今日固定",
      note: "早餐后随餐。"
    },
    {
      name: "L-瓜氨酸",
      status: "今日固定",
      note: "晨起空腹或早餐前。"
    },
    {
      name: "甘氨酸镁",
      status: "今日固定",
      note: "睡前服用。"
    }
  ];

  if (dayName === "周一") {
    daily.push({
      name: "维生素 B 族",
      status: "本周一次",
      note: "周一早餐后。"
    });
  }

  if (dayName === "周二" || dayName === "周六") {
    daily.push({
      name: "姜黄素",
      status: "本周两次",
      note: `${dayName}午餐后。`
    });
  }

  daily.push({
    name: "锌",
    status: zincIsCovered(day) ? "今日通常不用" : "今日可考虑",
    note: zincIsCovered(day) ? "菜单含牛肉/虾/坚果类锌来源，不默认补。" : "今日锌来源偏少，睡前空腹可补。"
  });

  document.getElementById("supplementTitle").textContent = `${dayName}｜食物优先，低频补剂`;
  document.getElementById("todaySupplements").innerHTML = daily
    .map((item) => `<article class="supplement-card ${item.name === "锌" ? "is-conditional" : ""}"><strong>${item.name}</strong><span>${item.status}</span><p>${item.note}</p></article>`)
    .join("");
  document.getElementById("supplementRules").innerHTML = supplementRules
    .map((item) => `<article class="supplement-card ${item.name === "锌" ? "is-conditional" : ""}"><strong>${item.name}</strong><span>${item.cadence}｜${item.timing}</span><p>${item.note}</p></article>`)
    .join("");
}

function renderShopping() {
  document.getElementById("shoppingList").innerHTML = currentWeek().shopping
    .map((item) => `<span class="shopping-item">${item}</span>`)
    .join("");
}

document.addEventListener("change", (event) => {
  if (event.target.id === "monthSelect") {
    selectedMonth = Number(event.target.value);
    renderMonth();
  }
  if (event.target.id === "weekSelect") {
    selectedWeek = Number(event.target.value);
    selectedDay = 0;
    renderVariety();
    renderPurchasePlan();
    renderDayTabs();
    renderDay();
    renderShopping();
  }
  if (event.target.id === "shoppingDaySelect") {
    shoppingDay = Number(event.target.value);
    renderPurchasePlan();
  }
});

document.addEventListener("click", (event) => {
  const day = event.target.closest(".day-tab");
  if (day) {
    selectedDay = Number(day.dataset.day);
    renderDayTabs();
    renderDay();
  }

  const phaseButton = event.target.closest(".phase");
  if (phaseButton) {
    phase = phaseButton.dataset.phase;
    document.querySelectorAll(".phase").forEach((button) => button.classList.remove("is-active"));
    phaseButton.classList.add("is-active");
    renderDay();
  }
});

renderSelectors();
renderMonth();
renderVariety();
renderPurchasePlan();
renderDayTabs();
renderDay();
renderShopping();
