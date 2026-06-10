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
    shopping: ["鸡蛋 14个（约700g）", "燕麦 300g/袋（本周用160g）", "全麦面包 1袋（约500g，8-10片）", "无乳糖酸奶 400g（周一/周三/周五/周六早餐各100g）", "金枪鱼罐头 1罐（沥干约100g）", "冻鲭鱼 2片（150g/片，共300g）", "黑虎虾仁 360g（本轮用360g：周四120g、周日120g、下周二120g）", "牛肉 400g", "鸡腿肉 300g", "豆腐 1盒（400g/盒；周四200g、周六200g用完；周二豆腐属于上个买菜周期剩余）", "全麦意面 250g/包（本周用70g干重）", "荞麦面 300g/包（本周用70g干重，外食另算）", "菠菜 450g", "西兰花 400g", "生菜 500g", "番茄 500g", "洋葱 200g", "彩椒 150g", "黄瓜 200g", "香菇/蘑菇 200g", "蓝莓 150g", "猕猴桃 2个（约200g）", "南瓜子/坚果 150g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 无乳糖酸奶 100g + 蓝莓 50g + 菠菜 100g", "外食：番茄荞麦面，牛肉 100g 或鸡蛋 1个，熟荞麦面约150g，配菜 150g，汤不喝完", "鲭鱼 150g + 蒜蓉西兰花 200g + 洋葱 50g + 生菜 80g"],
      ["周二", "哑铃日", "金枪鱼橄榄油罐头 1罐（沥干约100g） + 全麦面包 2片（约70g） + 番茄 120g + 洋葱 30g", "黑虎虾仁 120g + 彩椒 100g + 荞麦面 70g干重 + 菠菜 100g", "鸡腿肉 150g + 香菇 100g + 豆腐 200g（上个买菜周期剩余半盒，当天吃完） + 生菜 100g"],
      ["周三", "游泳日", "鸡蛋 2个（约100g） + 无乳糖酸奶 100g + 全麦面包 1片（约35g） + 黄瓜 100g + 番茄 100g", "外食：番茄荞麦面，蛋白 100g，熟荞麦面约150g，配菜 150g，先吃蛋白和配菜", "虾仁 120g + 番茄 150g + 菠菜 150g + 紫甘蓝 100g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 猕猴桃 1个（约100g）", "牛肉 120g + 西兰花 200g + 全麦意面 70g干重", "虾仁豆腐煲：虾仁 120g + 豆腐 200g（半盒） + 生菜 100g"],
      ["周五", "游泳日", "鸡蛋开放三明治：鸡蛋 2个（约100g） + 无乳糖酸奶 100g + 全麦面包 1片（约35g） + 生菜 80g", "外食：番茄荞麦面；应急麦当劳选牛肉/鸡腿堡 1个，去半片面包，不配薯条甜饮", "鲭鱼 150g + 彩椒 100g + 洋葱 50g + 凉拌菠菜 150g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 无乳糖酸奶 100g + 蓝莓 50g", "牛肉 100g + 豆腐 200g（周四开盒剩余半盒，当天吃完） + 生菜 120g + 番茄 100g + 全麦面包 1片（约35g）", "放纵餐前垫底：牛肉 120g + 黄瓜 100g + 生菜 100g；正餐按八分饱"],
      ["周日", "休息", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "虾仁蔬菜汤：虾仁 120g + 蔬菜 250g + 荞麦面 40g干重", "鸡腿肉 150g + 西兰花 200g + 蘑菇 100g"]
    ]
  },
  {
    name: "第2周｜地中海轻食周",
    variety: ["橄榄油", "番茄", "深海鱼2次", "豆类", "全麦面包", "钙类替代", "鸡蛋", "鸡肉", "虾仁", "绿叶菜", "彩椒", "莓果", "坚果"],
    shopping: ["鸡蛋 12个（约600g）", "燕麦 300g/袋（本周用120g）", "无乳糖酸奶 400g（周一/周三/周五/周六早餐各100g）", "冻鲭鱼 1片（150g）", "金枪鱼罐头 2罐（沥干约200g）", "黑虎虾仁 360g（本轮用360g：周六120g、周日120g、下周二120g）", "鸡腿肉 700g", "牛肉 300g", "豆腐 1盒（400g/盒；周六200g、周日200g用完；周二豆腐属于上个买菜周期剩余）", "鹰嘴豆 2罐（沥干约480g，本周用220g）", "全麦面包 1袋（约500g）", "全麦意面 250g/包（本周用70g干重）", "生菜 500g", "菠菜 300g", "番茄 700g", "黄瓜 250g", "彩椒 250g", "西葫芦 150g", "蘑菇 200g", "紫甘蓝 100g", "蓝莓 100g", "草莓 100g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 无乳糖酸奶 100g + 蓝莓 50g", "外食：番茄荞麦面，加鸡蛋 1个，熟荞麦面约150g，配菜 150g", "金枪鱼罐头 1罐（沥干约100g） + 生菜 120g + 番茄 150g + 鹰嘴豆 60g"],
      ["周二", "哑铃日", "全麦面包 2片（约70g） + 鸡蛋 2个（约100g） + 黄瓜 100g + 番茄 100g", "鸡腿肉 150g + 彩椒 120g + 全麦意面 70g干重 + 菠菜 100g", "虾仁 120g + 西葫芦 150g + 豆腐 200g（上个买菜周期剩余半盒，当天吃完）"],
      ["周三", "游泳日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 无乳糖酸奶 100g + 草莓 100g", "外食：番茄荞麦面，加牛肉 100g，熟荞麦面约150g，配菜 150g", "鸡腿肉 150g + 蘑菇 100g + 紫甘蓝 100g + 生菜 100g"],
      ["周四", "哑铃日", "金枪鱼开放三明治：金枪鱼罐头 1罐（沥干约100g） + 全麦面包 1片（约35g） + 生菜 80g", "牛肉 120g + 鹰嘴豆 80g + 生菜 120g + 番茄 120g + 全麦面包 1片（约35g）", "鸡腿肉 150g + 西兰花 200g + 番茄 150g"],
      ["周五", "游泳日", "鸡蛋 2个（约100g） + 无乳糖酸奶 100g + 菠菜 100g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "鲭鱼 150g + 彩椒 100g + 洋葱 50g + 黄瓜 100g"],
      ["周六", "恢复/放纵", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 无乳糖酸奶 100g + 蓝莓 50g", "豆腐 200g（半盒） + 牛肉 100g + 番茄 200g + 生菜 100g", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 生菜 80g", "鸡腿肉 150g + 生菜 150g + 番茄 100g", "虾仁 120g + 蘑菇 100g + 豆腐 200g（周六开盒剩余半盒，当天吃完）"]
    ]
  },
  {
    name: "第3周｜日式韩式清爽周",
    variety: ["海鱼2次", "虾仁", "豆腐", "钙类替代", "鸡蛋", "牛肉", "菌菇", "海带/紫菜少量", "泡菜少量", "绿叶菜", "荞麦面", "水果", "坚果"],
    shopping: ["鸡蛋 14个（约700g）", "燕麦 300g/袋（本周用120g）", "金枪鱼罐头 1罐（沥干约100g）", "鲭鱼 2片（150g/片，共300g）", "黑虎虾仁 360g（本轮用360g：周四120g、周日120g、下周二120g）", "牛肉 500g", "鸡腿肉 400g", "豆腐 1盒（400g/盒；周四200g、周六200g用完；周一、周二豆腐属于上个买菜周期剩余）", "荞麦面 300g/包（本周用180g干重，外食另算）", "全麦面包 1袋（约500g）", "紫菜/海带芽 30g", "泡菜 200g", "菠菜 450g", "生菜 450g", "西兰花 200g", "紫甘蓝 100g", "蘑菇 300g", "黄瓜 200g", "番茄 400g", "彩椒 100g", "猕猴桃 2个（约200g）", "蓝莓 50g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 猕猴桃 1个（约100g）", "外食：番茄荞麦面，加牛肉 100g，熟荞麦面约150g，配菜 150g", "鲭鱼 150g + 黄瓜 100g + 紫菜 5g + 豆腐 200g（上个买菜周期半盒） + 菠菜 100g"],
      ["周二", "哑铃日", "鸡蛋全麦三明治：鸡蛋 2个（约100g） + 全麦面包 2片（约70g） + 番茄 100g", "鸡腿肉 150g + 蘑菇 100g + 荞麦面 70g干重 + 生菜 100g", "虾仁 120g + 豆腐 200g（周一开盒剩余半盒，当天吃完） + 泡菜 60g + 菠菜 100g"],
      ["周三", "游泳日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 蓝莓 50g", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "鸡腿肉 150g + 西兰花 200g + 紫甘蓝 100g"],
      ["周四", "哑铃日", "金枪鱼罐头 1罐（沥干约100g） + 全麦面包 1片（约35g） + 黄瓜 100g", "虾仁 120g + 菠菜 150g + 豆腐 200g（半盒） + 荞麦面 40g干重", "牛肉 120g + 番茄 150g + 蘑菇 100g + 生菜 100g"],
      ["周五", "游泳日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "外食：番茄荞麦面或麦当劳应急模板，主食减半", "鲭鱼 150g + 凉拌菠菜 150g + 洋葱 50g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重", "豆腐鸡蛋蔬菜锅：豆腐 200g（周四开盒剩余半盒，当天吃完） + 鸡蛋 1个 + 生菜 120g + 蘑菇 100g", "放纵餐前垫底：牛肉 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 1个 + 生菜 80g", "牛肉 120g + 生菜 120g + 荞麦面 70g干重", "虾仁 120g + 彩椒 100g + 生菜 100g"]
    ]
  },
  {
    name: "第4周｜豆类与鸡肉周",
    variety: ["豆腐", "鹰嘴豆/毛豆", "钙类替代", "鸡腿肉", "鸡蛋", "虾仁", "鱼1-2次", "牛肉少量", "绿叶菜", "十字花科", "全谷物", "低糖水果", "橄榄油"],
    shopping: ["鸡腿肉 900g", "豆腐 1盒（400g/盒；周四200g、周六200g用完；周二、周三豆腐属于上个买菜周期剩余）", "鸡蛋 14个（约700g）", "金枪鱼罐头 1罐（沥干约100g）", "黑虎虾仁 440g（本轮用440g：周四80g、周六120g、周日120g、下周二120g）", "鲭鱼 2片（150g/片，共300g）", "牛肉 300g", "毛豆或鹰嘴豆 300g", "燕麦 300g/袋（本周用120g）", "全麦面包 1袋（约500g）", "荞麦面 300g/包（本周用70g干重，外食另算）", "西兰花 400g", "菠菜 300g", "生菜 500g", "番茄 350g", "彩椒 250g", "蘑菇 200g", "洋葱 100g", "黄瓜 200g", "紫甘蓝 100g", "猕猴桃 1个（约100g）", "橙 1个（约150g）", "蓝莓 50g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "外食：番茄荞麦面，加鸡蛋 1个，熟荞麦面约150g，配菜 150g", "鸡腿肉 150g + 西兰花 200g + 洋葱 50g"],
      ["周二", "哑铃日", "金枪鱼罐头 1罐（沥干约100g） + 生菜 80g + 全麦面包 1片（约35g）", "豆腐虾仁煲：豆腐 200g（上个买菜周期半盒） + 虾仁 120g + 荞麦面 70g干重", "鸡腿肉 150g + 蘑菇 100g + 菠菜 100g"],
      ["周三", "游泳日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 黄瓜 100g", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "鸡腿肉 120g + 豆腐 200g（周二开盒剩余半盒，当天吃完） + 彩椒 120g + 紫甘蓝 100g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 猕猴桃 1个（约100g）", "牛肉 120g + 毛豆 100g + 生菜 120g + 全麦面包 1片（约35g）", "豆腐生菜汤：豆腐 200g（半盒） + 生菜 120g + 虾仁 80g"],
      ["周五", "游泳日", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 2个（约100g） + 生菜 80g", "外食：番茄荞麦面，主食八分", "鲭鱼 150g + 彩椒 100g + 洋葱 50g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重", "鸡腿肉 120g + 豆腐 200g（周四开盒剩余半盒，当天吃完） + 生菜 150g + 全麦面包 1片（约35g）", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "鸡蛋 2个（约100g） + 生菜 80g", "毛豆蘑菇汤：毛豆 100g + 蘑菇 100g + 荞麦面 40g干重", "虾仁 120g + 西兰花 200g + 番茄 100g"]
    ]
  },
  {
    name: "第5周｜中式快手炒菜周",
    variety: ["牛肉", "鸡蛋", "豆腐", "虾仁", "鱼2次", "菌菇", "绿叶菜", "红橙蔬菜", "葱蒜洋葱", "全麦面/荞麦面", "水果", "南瓜子"],
    shopping: ["牛肉 600g", "鸡蛋 14个（约700g）", "豆腐 1盒（400g/盒；周六200g、周日200g用完；周二、周四豆腐属于上个买菜周期剩余）", "金枪鱼罐头 1罐（沥干约100g）", "黑虎虾仁 480g（本轮用480g：周六240g、下周一120g、下周三120g）", "鲭鱼 2片（150g/片，共300g）", "鸡腿肉 500g", "全麦意面 250g/包（本周用70g干重）", "荞麦面 300g/包（本周用70g干重，外食另算）", "燕麦 300g/袋（本周用120g）", "全麦面包 1袋（约500g）", "菠菜 400g", "小白菜 150g", "生菜 350g", "胡萝卜 100g", "彩椒 300g", "番茄 450g", "蘑菇 300g", "洋葱 250g", "大蒜 1头（约50g）", "黄瓜 200g", "紫甘蓝 100g", "蓝莓 100g", "柑橘 1个（约120g）"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "外食：番茄荞麦面，加牛肉 100g，熟荞麦面约150g，配菜 150g", "鸡腿肉 150g + 洋葱 80g + 小白菜 150g + 黄瓜 100g"],
      ["周二", "哑铃日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "虾仁 120g + 彩椒 120g + 全麦意面 70g干重 + 菠菜 100g", "豆腐蘑菇汤：豆腐 200g（上个买菜周期半盒） + 蘑菇 120g + 生菜 80g"],
      ["周三", "游泳日", "金枪鱼罐头 1罐（沥干约100g） + 生菜 80g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "鲭鱼 150g + 西兰花 200g + 洋葱 50g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 柑橘 1个（约120g）", "鸡腿肉 150g + 胡萝卜 100g + 蘑菇 100g + 荞麦面 70g干重", "牛肉 100g + 豆腐 200g（周二开盒剩余半盒，当天吃完） + 番茄 150g + 菠菜 100g"],
      ["周五", "游泳日", "鸡蛋 2个（约100g） + 黄瓜 100g + 番茄 100g + 全麦面包 1片（约35g）", "外食：麦当劳应急或番茄荞麦面，主食减半", "鲭鱼 150g + 彩椒 120g + 紫甘蓝 100g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "虾仁豆腐蔬菜汤：虾仁 120g + 豆腐 200g（半盒） + 生菜 100g", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 1个 + 生菜 80g", "牛肉 120g + 生菜 120g + 番茄 100g", "鸡腿肉 120g + 豆腐 200g（周六开盒剩余半盒，当天吃完） + 西兰花 200g + 蘑菇 100g"]
    ]
  },
  {
    name: "第6周｜东南亚香料周",
    variety: ["鸡肉", "虾仁", "鱼1-2次", "豆腐", "钙类替代", "鸡蛋", "香草/咖喱", "绿叶菜", "彩椒", "番茄", "黄瓜", "全谷物", "低糖水果"],
    shopping: ["鸡腿肉 800g", "金枪鱼罐头 1罐（沥干约100g）", "黑虎虾仁 480g（本轮用480g：周六120g、周日120g、下周一120g、下周二120g）", "鲭鱼 2片（150g/片，共300g）", "豆腐 1盒（400g/盒；周六200g、周日200g用完；周一至周四豆腐属于上个买菜周期剩余）", "鸡蛋 14个（约700g）", "牛肉 300g", "咖喱粉/黑胡椒 1份（约30g）", "燕麦 300g/袋（本周用160g）", "全麦面包 1袋（约500g）", "全麦意面 250g/包（本周用70g干重）", "荞麦面 300g/包（本周用70g干重，外食另算）", "生菜 500g", "菠菜 450g", "番茄 500g", "黄瓜 250g", "彩椒 300g", "蘑菇 300g", "紫甘蓝 100g", "草莓 100g", "猕猴桃 1个（约100g）", "蓝莓 50g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 草莓 100g", "外食：番茄荞麦面，加鸡蛋 1个，熟荞麦面约150g，配菜 150g", "虾仁 120g + 黄瓜 100g + 生菜 120g + 豆腐 200g（半盒）"],
      ["周二", "哑铃日", "金枪鱼罐头 1罐（沥干约100g） + 全麦面包 1片（约35g） + 番茄 120g", "咖喱鸡腿肉 150g + 彩椒 120g + 荞麦面 70g干重", "豆腐 200g（半盒） + 蘑菇 120g + 菠菜 120g"],
      ["周三", "游泳日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，加牛肉 100g，熟面约150g，配菜 150g", "豆腐虾仁汤：豆腐 200g（上个买菜周期半盒） + 虾仁 120g + 紫甘蓝 100g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 猕猴桃 1个（约100g）", "牛肉 120g + 西兰花 200g + 全麦意面 70g干重", "鸡腿肉 120g + 豆腐 200g（周三开盒剩余半盒，当天吃完） + 生菜 120g + 黄瓜 100g"],
      ["周五", "游泳日", "鸡蛋 2个（约100g） + 生菜 80g + 蓝莓 50g", "外食：番茄荞麦面，主食八分", "鲭鱼 150g + 彩椒 120g + 洋葱 50g + 菠菜 120g"],
      ["周六", "恢复/放纵", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 1个 + 生菜 80g", "豆腐鸡蛋番茄汤：豆腐 200g（半盒） + 鸡蛋 1个 + 番茄 200g", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "鸡蛋 2个（约100g） + 燕麦 40g干重", "鸡腿肉 150g + 生菜 150g + 番茄 100g", "虾仁 120g + 豆腐 200g（周六开盒剩余半盒，当天吃完） + 蘑菇 100g + 生菜 100g"]
    ]
  },
  {
    name: "第7周｜面食友好控糖周",
    variety: ["荞麦面", "全麦意面", "全麦面包", "燕麦", "鸡蛋", "牛肉", "鸡肉", "虾仁", "豆腐", "鱼2次", "多色蔬菜", "水果"],
    shopping: ["荞麦面 300g/包（本周用110g干重，外食另算）", "全麦意面 250g/包（本周用140g干重）", "全麦面包 1袋（约500g）", "燕麦 300g/袋（本周用120g）", "鸡蛋 14个（约700g）", "金枪鱼罐头 1罐（沥干约100g）", "牛肉 500g", "鸡腿肉 600g", "黑虎虾仁 360g（本轮用360g：周六240g、下周三120g）", "鲭鱼 2片（150g/片，共300g）", "豆腐 1盒（400g/盒；周六200g、周日200g用完；周二豆腐属于上个买菜周期剩余）", "菠菜 350g", "生菜 500g", "西兰花 400g", "番茄 450g", "彩椒 150g", "洋葱 100g", "紫甘蓝 100g", "黄瓜 300g", "蘑菇 200g", "蓝莓 100g", "橙 1个（约150g）"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "虾仁 120g + 番茄 150g + 菠菜 120g"],
      ["周二", "哑铃日", "金枪鱼罐头开放三明治：金枪鱼罐头 1罐（沥干约100g） + 全麦面包 1片（约35g） + 生菜 80g", "鸡腿肉 150g + 全麦意面 70g干重 + 西兰花 200g", "虾仁 120g + 豆腐 200g（上个买菜周期剩余半盒，当天吃完） + 黄瓜 100g"],
      ["周三", "游泳日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，加鸡蛋 1个，主食八分", "鲭鱼 150g + 洋葱 50g + 彩椒 100g + 生菜 100g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 橙半个（约75g）", "牛肉 120g + 荞麦面 70g干重 + 紫甘蓝 100g", "鸡腿肉 150g + 蘑菇 100g + 菠菜 120g"],
      ["周五", "游泳日", "鸡蛋 2个（约100g） + 黄瓜 100g + 全麦面包 1片（约35g）", "外食：麦当劳应急或番茄荞麦面，主食减半", "鲭鱼 150g + 西兰花 200g + 番茄 150g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "豆腐虾仁沙拉：豆腐 200g（半盒） + 虾仁 120g + 生菜 120g + 全麦面包 1片（约35g）", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 1个 + 生菜 80g", "牛肉 120g + 蔬菜 200g + 荞麦面 40g干重", "鸡腿肉 120g + 豆腐 200g（周六开盒剩余半盒，当天吃完） + 生菜 120g + 蘑菇 100g"]
    ]
  },
  {
    name: "第8周｜低加工维持周",
    variety: ["鸡蛋", "牛肉", "鸡肉", "鱼2次", "虾仁", "豆腐", "菌菇", "绿叶菜", "十字花科", "红橙蔬菜", "水果", "坚果种子"],
    shopping: ["鸡蛋 14个（约700g）", "金枪鱼罐头 1罐（沥干约100g）", "牛肉 500g", "鸡腿肉 700g", "鲭鱼 2片（150g/片，共300g）", "黑虎虾仁 480g（本轮用480g：周六240g、下周二120g、下周三120g）", "豆腐 1盒（400g/盒；周六200g、周日200g用完；周二、周四豆腐属于上个买菜周期剩余）", "燕麦 300g/袋（本周用120g）", "全麦面包 1袋（约500g）", "全麦意面 250g/包（本周用70g干重）", "荞麦面 300g/包（外食另算）", "西兰花 600g", "菠菜 450g", "生菜 450g", "番茄 600g", "胡萝卜 100g", "彩椒 250g", "蘑菇 300g", "洋葱 150g", "黄瓜 200g", "紫甘蓝 100g", "猕猴桃 1个（约100g）", "蓝莓 100g", "南瓜子 150g"],
    days: [
      ["周一", "游泳日", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "外食：番茄荞麦面，加牛肉 100g，熟面约150g，配菜 150g", "鲭鱼 150g + 西兰花 200g + 洋葱 50g"],
      ["周二", "哑铃日", "番茄炒蛋：鸡蛋 2个（约100g） + 番茄 150g + 全麦面包 1片（约35g）", "鸡腿肉 150g + 彩椒 120g + 荞麦面外食/备选 70g干重 + 生菜 100g", "豆腐蘑菇汤：豆腐 200g（上个买菜周期半盒） + 蘑菇 120g + 菠菜 120g"],
      ["周三", "游泳日", "鸡蛋 2个（约100g） + 黄瓜 100g + 番茄 100g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，加鸡蛋 1个，主食八分", "虾仁 120g + 西兰花 200g + 紫甘蓝 100g"],
      ["周四", "哑铃日", "燕麦 40g干重 + 鸡蛋 2个（约100g） + 猕猴桃 1个（约100g）", "鸡腿肉 150g + 胡萝卜 100g + 蘑菇 100g + 全麦意面 70g干重", "牛肉 100g + 豆腐 200g（周二开盒剩余半盒，当天吃完） + 番茄 150g + 生菜 100g"],
      ["周五", "游泳日", "金枪鱼罐头 1罐（沥干约100g） + 生菜 80g + 全麦面包 1片（约35g）", "外食：番茄荞麦面，熟面约150g，蛋白 100g，配菜 150g", "鲭鱼 150g + 彩椒 120g + 洋葱 50g + 菠菜 120g"],
      ["周六", "恢复/放纵", "鸡蛋 2个（约100g） + 燕麦 40g干重 + 蓝莓 50g", "豆腐虾仁蔬菜汤：豆腐 200g（半盒） + 虾仁 120g + 生菜 100g", "放纵餐前垫底：黑虎虾仁 120g + 黄瓜 100g + 生菜 100g"],
      ["周日", "休息", "开放三明治：全麦面包 1片（约35g） + 鸡蛋 1个 + 黄瓜 100g", "鸡腿肉 150g + 生菜 150g + 番茄 100g", "牛肉 100g + 豆腐 200g（周六开盒剩余半盒，当天吃完） + 蘑菇 100g + 西兰花 200g"]
    ]
  }
];

const dayKeys = ["早餐", "午餐", "晚餐"];
const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const planAnchorDate = new Date(2026, 5, 1);
const rotationAnchorDate = new Date(2026, 5, 4);
const today = new Date();
let selectedMonth = today.getMonth();
let selectedWeek = weekIndexForDate(today);
let selectedDay = dayIndexForDate(today);
let shoppingDay = 3;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function positiveModulo(value, size) {
  return ((value % size) + size) % size;
}

function weekIndexForDate(date) {
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed = startOfDay(date) - startOfDay(rotationAnchorDate);
  if (elapsed < 0 && startOfDay(date) >= startOfDay(planAnchorDate)) {
    return 0;
  }
  return positiveModulo(Math.floor(elapsed / millisecondsPerWeek), weeks.length);
}

function dayIndexForDate(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function formatDate(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function renderSelectors() {
  document.getElementById("weekSelect").innerHTML = weeks
    .map((week, index) => `<option value="${index}">${week.name}</option>`)
    .join("");
  document.getElementById("shoppingDaySelect").innerHTML = weekdays
    .map((day, index) => `<option value="${index}">${day}</option>`)
    .join("");
  document.getElementById("weekSelect").value = selectedWeek;
  document.getElementById("shoppingDaySelect").value = shoppingDay;
  document.getElementById("dateStatus").textContent = `${formatDate(today)}｜当前买菜周期${currentWeek().name}`;
}

function currentWeek() {
  return weeks[selectedWeek];
}

function renderMonth() {
  const [name, title, foods] = months[selectedMonth];
  document.getElementById("monthTitle").textContent = `${name}｜${title}`;
  document.getElementById("seasonTags").innerHTML = foods.map((food) => `<span class="tag">${food}</span>`).join("");
}

function rotatedWeek(startIndex) {
  return weekdays.map((_, offset) => weekdays[(startIndex + offset) % weekdays.length]);
}

function rotatedDayIndexes(startIndex) {
  return weekdays.map((_, offset) => (startIndex + offset) % weekdays.length);
}

function dayEntryForCycle(cycleWeekIndex, dayIndex) {
  const weekOffset = dayIndex < shoppingDay ? 1 : 0;
  const weekIndex = positiveModulo(cycleWeekIndex + weekOffset, weeks.length);
  return {
    day: weeks[weekIndex].days[dayIndex],
    dayIndex,
    weekIndex
  };
}

function cycleDayEntries() {
  return rotatedDayIndexes(shoppingDay).map((dayIndex) => dayEntryForCycle(selectedWeek, dayIndex));
}

function menuDayForDate(date) {
  const cycleWeekIndex = weekIndexForDate(date);
  const dayIndex = dayIndexForDate(date);
  return dayEntryForCycle(cycleWeekIndex, dayIndex).day;
}

function usageSummaryForCycle(pattern, itemName) {
  const rows = cycleDayEntries()
    .map((entry) => {
      const text = entry.day.slice(2).join(" ");
      const grams = [...text.matchAll(pattern)].reduce((total, match) => total + Number(match[1]), 0);
      if (!grams) return null;
      const dayLabel = entry.weekIndex === selectedWeek ? entry.day[0] : entry.day[0].replace("周", "下周");
      return {
        label: `${dayLabel} ${grams}g`,
        grams
      };
    })
    .filter(Boolean);
  const total = rows.reduce((sum, row) => sum + row.grams, 0);
  return {
    total,
    text: total ? `${itemName}本轮买 ${total}g：${rows.map((row) => row.label).join("、")}。` : `本轮不买${itemName}。`
  };
}

function renderPurchasePlan() {
  const plan = document.getElementById("purchasePlan");
  const cycle = rotatedWeek(shoppingDay);
  const buyDay = weekdays[shoppingDay];
  const endDay = cycle[6];
  const freshWindow = cycle.slice(0, 4).join("、");
  const stableWindow = cycle.slice(4).join("、");
  const tofuItems = currentWeek().shopping.filter((item) => item.includes("豆腐")).join("、") || "本轮不额外买豆腐。";
  const shrimpUsage = usageSummaryForCycle(/(?:黑虎)?虾仁\s*(\d+)g/g, "黑虎虾仁");

  plan.innerHTML = [
    {
      title: `${buyDay}买菜周期`,
      body: `默认从${buyDay}买到下次${buyDay}前，当前周期覆盖${buyDay}到${endDay}。鲜菜、鲜肉优先放在${freshWindow}，后段${stableWindow}多用冷冻鱼虾、鸡蛋、罐头和常备主食。`
    },
    {
      title: "豆腐开盒规则",
      body: "豆腐按 400g/盒管理；默认一餐吃 200g。只要开了半盒，剩余 200g 必须在第三天内安排掉，不让周日无缘无故再开一整盒。"
    },
    {
      title: "本轮豆腐安排",
      body: tofuItems
    },
    {
      title: "本轮虾仁安排",
      body: shrimpUsage.text
    }
  ].map((card) => `<article class="purchase-card"><h3>${card.title}</h3><p>${card.body}</p></article>`).join("");
}

function renderDayTabs() {
  document.getElementById("dayTabs").innerHTML = cycleDayEntries()
    .map((entry) => {
      const day = entry.day;
      return `<button class="day-tab ${entry.dayIndex === selectedDay ? "is-active" : ""}" data-day="${entry.dayIndex}">${day[0]}<br>${day[1]}</button>`;
    })
    .join("");
}

function renderDay() {
  const day = dayEntryForCycle(selectedWeek, selectedDay).day;
  document.getElementById("dayTitle").textContent = `${day[0]}｜${day[1]}`;
  document.getElementById("mealList").innerHTML = dayKeys
    .map((key, index) => `<article class="meal-card"><h3>${key}</h3><p>${day[index + 2]}</p></article>`)
    .join("");
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
}

function renderShopping() {
  document.getElementById("shoppingList").innerHTML = currentWeek().shopping
    .map((item) => `<span class="shopping-item">${item}</span>`)
    .join("");
  renderPurchasePlan();
}

if (typeof window !== "undefined") {
  window.mealPlannerData = {
    weeks,
    weekIndexForDate,
    dayIndexForDate,
    menuDayForDate
  };
}

function isPlannerPage() {
  return Boolean(
    document.getElementById("weekSelect") &&
    document.getElementById("dayTabs") &&
    document.getElementById("mealList")
  );
}

if (isPlannerPage()) {
  document.addEventListener("change", (event) => {
    if (event.target.id === "weekSelect") {
      selectedWeek = Number(event.target.value);
      renderSelectors();
      renderDayTabs();
      renderDay();
      renderShopping();
    }
    if (event.target.id === "shoppingDaySelect") {
      shoppingDay = Number(event.target.value);
      renderDayTabs();
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
  });

  renderSelectors();
  renderMonth();
  renderDayTabs();
  renderDay();
  renderShopping();
}
