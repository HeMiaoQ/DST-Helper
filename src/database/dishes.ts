const DISHES = [
  {
    id: 1,
    Picture: 'F_bacon_and_eggs',
    Name: '培根煎蛋',
    enName: 'Bacon and Eggs',
    property: {
      Health: 20,
      Hunger: 75,
      Sanity: 5,
      Perish: 20
    },
    recipe: [
      ['FC_Meats', 'FC_Eggs', 'FC_Eggs', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Vegetables' }
    ],
    Introduce: '恢复能力比较中庸，其中蛋比较难找，如果有多的蛋还是做饺子比较划算。'
  },
  {
    id: 2,
    Picture: 'F_meatballs',
    Name: '肉丸',
    enName: 'Meatballs',
    property: {
      Health: 3,
      Hunger: 62.5,
      Sanity: 5,
      Perish: 10
    },
    forbid: [
      { desc: '无', name: 'F_twigs' },
      { desc: '最多2.5', name: 'FC_Meats' }
    ],
    recipe: [
      ['FC_Meats', '', '', '']
    ],
    Introduce: '最最常见的料理，解决饥饿的佳品，推荐用小肉和三个浆果制作。'
  },
  {
    id: 3,
    Picture: 'F_meaty_stew',
    Name: '肉汤',
    enName: 'Meaty Stew',
    property: {
      Health: 12,
      Hunger: 150,
      Sanity: 5,
      Perish: 10
    },
    forbid: [
      { desc: '无', name: 'F_twigs' }
    ],
    recipe: [
      ['FC_Meats', 'FC_Meats', 'FC_Meats', '']
    ],
    Introduce: '回复大量饥饿。需要不少肉。要注意很多人物饥饿在120以下，能吃肉丸还是吃肉丸吧。(仅单机版)食用后15秒增加40温度。'
  },
  {
    id: 4,
    Picture: 'F_butter_muffin',
    Name: '黄油松饼',
    enName: 'Butter Muffin',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 15
    },
    forbid: [
      { desc: '无', name: 'FC_Meats' }
    ],
    recipe: [
      ['F_butterfly_wing', 'FC_Vegetables', '', '']
    ],
    Introduce: '俗称蝴蝶排。食材简单，回血不少。'
  },
  {
    id: 5,
    Picture: 'F_froggle_bunwich',
    Name: '蛙腿三明治',
    enName: 'Froggle Bunwich',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 10
    },
    forbid: [],
    recipe: [
      ['F_frog_legs', 'FC_Vegetables', '', '']
    ],
    Introduce: '俗称青蛙排。在青蛙雨过后如果不知道青蛙腿怎么用做做这个也不错。'
  },
  {
    id: 6,
    Picture: 'F_dragonpie',
    Name: '火龙果派',
    enName: 'Dragonpie',
    property: {
      Health: 40,
      Hunger: 75,
      Sanity: 5,
      Perish: 15
    },
    forbid: [
      { desc: '无', name: 'FC_Meats' }
    ],
    recipe: [
      ['F_dragon_fruit', '', '', '']
    ],
    Introduce: '补血神器。用火龙果可以和鸟换1-2个种子，不是急需的话可以试试运气多换几个出来。食用后10秒增加40温度。'
  },
  {
    id: 7,
    Picture: 'F_fish_tacos',
    Name: '炸鱼卷',
    enName: 'Fish Tacos',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 6
    },
    forbid: [],
    recipe: [
      ['FC_Fishes', 'F_corn', '', '']
    ],
    Introduce: '可怜的回复量并不值得做。'
  },
  {
    id: 8,
    Picture: 'F_fishsticks',
    Name: '鱼条',
    enName: 'Fishsticks',
    property: {
      Health: 40,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 10
    },
    forbid: [
      { desc: '最多 1', name: 'F_twigs' }
    ],
    recipe: [
      ['FC_Fishes', 'F_twigs', '', '']
    ],
    Introduce: '俗称鱼排。家离池塘比较近的话可以考虑量产，回血能力和火龙果派相当。'
  },
  {
    id: 9,
    Picture: 'F_fist_full_of_jam',
    Name: '果酱',
    enName: 'Fist Full of Jam',
    property: {
      Health: 3,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['FC_Fruit', '', '', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Vegetables' },
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '大概是不小心丢了四个浆果在锅里...还是放一点肉做肉丸子比较好。'
  },
  {
    id: 10,
    Picture: 'F_fruit_medley',
    Name: '水果沙拉',
    enName: 'Fruit Medley',
    property: {
      Health: 20,
      Hunger: 25,
      Sanity: 5,
      Perish: 6
    },
    recipe: [
      ['FC_Fruit', 'FC_Fruit', 'FC_Fruit', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Vegetables' }
    ],
    Introduce: '要求的水果量和回复能力不成正比，还不如直接吃水果。食用后5秒降低40温度。'
  },
  {
    id: 11,
    Picture: 'F_honey_nuggets',
    Name: '蜂蜜肉块',
    enName: 'Honey Nuggets',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['F_honey', 'FC_Meats', '', '']
    ],
    forbid: [
      { desc: '最多 2', name: 'FC_Meats' },
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '蜜汁火腿的简化版，唯一的好处就是肉需求少了一些。'
  },
  {
    id: 12,
    Picture: 'F_honey_ham',
    Name: '蜂蜜火腿',
    enName: 'Honey Ham',
    property: {
      Health: 30,
      Hunger: 75,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['F_honey', 'FC_Meats', 'FC_Meats', '']
    ],
    forbid: [
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '材料好找，回复能力不错，下洞穴可以多带点。食用后10秒增加40温度。'
  },
  {
    id: 13,
    Picture: 'F_kabobs',
    Name: '肉串',
    enName: 'Kabobs Ham',
    property: {
      Health: 3,
      Hunger: 37.5,
      Sanity: 3,
      Perish: 15
    },
    recipe: [
      ['F_twigs', 'FC_Meats', '', '']
    ],
    forbid: [
      { desc: '最多 1', name: 'F_twigs' },
      { desc: '最多 1', name: 'FC_Monster_Meats' }
    ],
    Introduce: '在肉系料理中加入树枝很有可能做成的东西。回复量感人。(仅联机版)食用后15秒增加40温度。'
  },
  {
    id: 14,
    Picture: 'F_mandrake_soup',
    Name: '曼德拉汤',
    enName: 'Mandrake Soup',
    property: {
      Health: 100,
      Hunger: 150,
      Sanity: 5,
      Perish: 6
    },
    recipe: [
      ['F_mandrake', '', '', '']
    ],
    forbid: [],
    Introduce: '超级超级大补！然而曼德拉草的罕见度...'
  },
  {
    id: 15,
    Picture: 'F_monster_lasagna',
    Name: '怪物千层饼',
    enName: 'Monster Lasagna',
    property: {
      Health: -20,
      Hunger: 37.5,
      Sanity: -20,
      Perish: 6
    },
    recipe: [
      ['FC_Monster_Meats', '', '', ''],
      ['F_durian', 'F_durian', '', '']
    ],
    forbid: [
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '如果一不小心放入两块怪物肉或者榴莲基本上就做出这货了。一般不会有人想吃它吧。不过韦伯吃了能回37.5的饥饿。'
  },
  {
    id: 16,
    Picture: 'F_pierogi',
    Name: '饺子',
    enName: 'Pierogi',
    property: {
      Health: 40,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 20
    },
    recipe: [
      ['FC_Eggs', 'FC_Meats', 'FC_Vegetables', '']
    ],
    forbid: [
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '回血能力优秀，蛋类一般都用来做饺子，蔬菜的话有农场也不会缺。'
  },
  {
    id: 17,
    Picture: 'F_powdercake',
    Name: '粉蛋糕',
    enName: 'Powdercake',
    property: {
      Health: -3,
      Hunger: 0,
      Sanity: 0,
      Perish: 18750
    },
    recipe: [
      ['F_corn', 'F_honey', 'F_twigs', '']
    ],
    forbid: [],
    Introduce: '看回复量就知道不是人吃的。一般用来做成火鸡陷阱勾引火鸡吃，这个保质期大概到世界末日都不会坏吧。'
  },
  {
    id: 18,
    Picture: 'F_pumpkin_cookie',
    Name: '南瓜饼干',
    enName: 'Pumpkin Cookies',
    property: {
      Health: 0,
      Hunger: 37.5,
      Sanity: 15,
      Perish: 10
    },
    recipe: [
      ['F_pumpkin', 'FC_Sweetener', 'FC_Sweetener', '']
    ],
    forbid: [],
    Introduce: '蜂蜜有多的话可以做一些，精神回复能力不错。'
  },
  {
    id: 19,
    Picture: 'F_ratatouille',
    Name: '蔬菜杂烩',
    enName: 'Ratatouille',
    property: {
      Health: 3,
      Hunger: 25,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['FC_Vegetables', '', '', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '光吃蔬菜可不好，要注意荤素搭配哦！'
  },
  {
    id: 20,
    Picture: 'F_stuffed_eggplant',
    Name: '茄盒',
    enName: 'Stuffed Eggplant',
    property: {
      Health: 3,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['FC_Vegetables', 'F_eggplant', '', '']
    ],
    forbid: [],
    Introduce: '看起来蛮好吃的，不过为什么不吃回复能力更佳的红烧茄子呢？食用后5秒增加40温度。'
  },
  {
    id: 21,
    Picture: 'F_taffy',
    Name: '太妃糖',
    enName: 'Taffy',
    property: {
      Health: -3,
      Hunger: 25,
      Sanity: 15,
      Perish: 15
    },
    recipe: [
      ['FC_Sweetener', 'FC_Sweetener', 'FC_Sweetener', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Meats' }
    ],
    Introduce: '糖吃多了可是会长蛀牙的！'
  },
  {
    id: 22,
    Picture: 'F_turkey_dinner',
    Name: '火鸡大餐',
    enName: 'Turkey Dinner',
    property: {
      Health: 20,
      Hunger: 75,
      Sanity: 5,
      Perish: 6
    },
    recipe: [
      ['FC_Fruit', 'F_drumstick', 'F_drumstick', 'FC_Meats'],
      ['FC_Vegetables', 'F_drumstick', 'F_drumstick', 'FC_Meats']
    ],
    forbid: [],
    Introduce: '这个生命回复能力对比于肉丸来说还是值得做的。食用后10秒增加40温度。'
  },
  {
    id: 23,
    Picture: 'F_unagi',
    Name: '鳗鱼寿司',
    enName: 'Unagi',
    property: {
      Health: 20,
      Hunger: 18.75,
      Sanity: 5,
      Perish: 10
    },
    recipe: [
      ['F_eel', 'F_lichen', '', '']
    ],
    forbid: [],
    Introduce: '食材需要到洞穴二层(联机版洞穴一层)钓鱼获得，而且食材需求和回复能力与炸鱼条相比实在是小巫见大巫。'
  },
  {
    id: 24,
    Picture: 'F_waffles',
    Name: '华夫饼',
    enName: 'Waffles',
    property: {
      Health: 60,
      Hunger: 37.5,
      Sanity: 5,
      Perish: 6
    },
    recipe: [
      ['F_butter', 'FC_Eggs', 'F_berries', '']
    ],
    forbid: [],
    Introduce: '打蝴蝶出了黄油就做这个吧，回血能力惊人。'
  },
  {
    id: 25,
    Picture: 'F_flower_salad',
    Name: '仙人掌沙拉',
    enName: 'Flower Salad',
    property: {
      Health: 40,
      Hunger: 12.5,
      Sanity: 5,
      Perish: 6
    },
    recipe: [
      ['F_cactus_flower', 'FC_Vegetables', 'FC_Vegetables', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Fruit' },
      { desc: '无', name: 'FC_Eggs' },
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Sweetener' },
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '夏天才有仙人掌花，回血能力不错。'
  },
  {
    id: 26,
    Picture: 'F_guacamole',
    Name: '地鼠鳄梨酱',
    enName: 'Guacamole',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 0,
      Perish: 10
    },
    recipe: [
      ['F_cactus_flesh', 'F_moleworm', '', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Fruit' }
    ],
    Introduce: '食材还算比较容易获得，路过沙漠去采一点仙人掌就行了。有一定的回血能力。'
  },
  {
    id: 27,
    Picture: 'F_ice_cream',
    Name: '冰淇淋',
    enName: 'Ice Cream',
    property: {
      Health: 0,
      Hunger: 25,
      Sanity: 50,
      Perish: 3
    },
    recipe: [
      ['FC_Dairy_product', 'F_ice', 'FC_Sweetener', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Vegetables' },
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Eggs' },
      { desc: '无', name: 'F_twigs' }
    ],
    Introduce: '精神回复神器！美中不足的是需要一个黄油或者电羊奶。食用后15秒降低40温度。'
  },
  {
    id: 28,
    Picture: 'F_melonsicle',
    Name: '西瓜棒冰',
    enName: 'Melonsicle',
    property: {
      Health: 3,
      Hunger: 12.5,
      Sanity: 20,
      Perish: 3
    },
    recipe: [
      ['F_watermelon', 'F_ice', 'F_twigs', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Vegetables' },
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Eggs' }
    ],
    Introduce: '回复中量精神，材料中冰块可以长期保存，西瓜也可以通过农场较容易获得。食用后10秒降低40温度。'
  },
  {
    id: 29,
    Picture: 'F_spicy_chili',
    Name: '辣椒酱',
    enName: 'Spicy Chili',
    property: {
      Health: 20,
      Hunger: 37.5,
      Sanity: 0,
      Perish: 10
    },
    recipe: [
      ['FC_Meats', 'FC_Vegetables', '', '']
    ],
    forbid: [],
    Introduce: '蔬菜和肉都多到用不完的话可以做一些。食用后15秒增加40温度。'
  },
  {
    id: 30,
    Picture: 'F_trail_mix',
    Name: '果味什锦',
    enName: 'Trail Mix',
    property: {
      Health: 30,
      Hunger: 12.5,
      Sanity: 5,
      Perish: 15
    },
    recipe: [
      ['F_roasted_birchnut', 'F_berries', 'FC_Fruit', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Vegetables' },
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Eggs' },
      { desc: '无', name: 'FC_Dairy_product' }
    ],
    Introduce: '在猪王旁建家的话烤桦树果是不会缺的，回复不少血量的神器。'
  },
  {
    id: 31,
    Picture: 'F_jellybeans',
    Name: '软心糖豆',
    enName: 'Jellybeans',
    property: {
      Health: 122,
      Hunger: 0,
      Sanity: 5,
      Perish: 10001
    },
    recipe: [
      ['F_royal_jelly', '', '', '']
    ],
    forbid: [
      { desc: '无', name: 'F_twigs' },
      { desc: '无', name: 'FC_Monster_Meats' }
    ],
    Introduce: '一次性可以做出三个糖豆，食用后立即回复2点生命和5点精神，之后每2秒回复2点生命持续2分钟，总共回复122点生命。'
  },
  {
    id: 32,
    Picture: 'F_wet_goop',
    Name: '粘腻湿糊',
    enName: 'Wet Goop',
    property: {
      Health: 0,
      Hunger: 0,
      Sanity: 0,
      Perish: 6
    },
    recipe: [
      ['', '', '', '']
    ],
    forbid: [],
    Introduce: '你到底放了些什么！'
  },
  {
    id: 33,
    Picture: 'F_banana_pop',
    Name: '香蕉船',
    enName: 'Banana Pop',
    property: {
      Health: 20,
      Hunger: 12,
      Sanity: 33,
      Perish: 3
    },
    recipe: [
      ['F_banana', 'F_ice', 'F_twigs', '']
    ],
    forbid: [
      { desc: '无', name: 'FC_Meats' }
    ],
    Introduce: ''
  },
  {
    id: 34,
    Picture: 'F_bisque',
    Name: '浓汤',
    enName: 'Bisque',
    property: {
      Health: 60,
      Hunger: 18,
      Sanity: 5,
      Perish: 10
    },
    recipe: [
      ['F_limpets', 'F_limpets', 'F_limpets', 'F_ice']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 35,
    Picture: 'F_tropical_bouillabaisse',
    Name: '热带普罗旺斯鱼汤',
    enName: 'Tropical Bouillabaisse',
    property: {
      Health: 20,
      Hunger: 37,
      Sanity: 15,
      Perish: 10
    },
    recipe: [
      ['F_purple_grouper', 'F_neon_quattro', 'F_pierrot_fish', 'FC_Vegetables']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 36,
    Picture: 'F_california_roll',
    Name: '加州卷',
    enName: 'California Roll',
    property: {
      Health: 20,
      Hunger: 37,
      Sanity: 10,
      Perish: 10
    },
    recipe: [
      ['FC_Fishes', 'F_seaweed', 'F_seaweed', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 37,
    Picture: 'F_caviar',
    Name: '鱼子酱',
    enName: 'Caviar',
    property: {
      Health: 3,
      Hunger: 12,
      Sanity: 33,
      Perish: 10
    },
    recipe: [
      ['F_roe', 'FC_Vegetables', '', ''],
      ['F_cooked_roe', 'F_cooked_roe', 'F_cooked_roe', 'FC_Vegetables']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 38,
    Picture: 'F_ceviche',
    Name: '酸橘汁腌鱼',
    enName: 'Ceviche',
    property: {
      Health: 20,
      Hunger: 25,
      Sanity: 5,
      Perish: 10
    },
    recipe: [
      ['FC_Fishes', 'FC_Fishes', 'F_ice', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 39,
    Picture: 'F_coffee',
    Name: '咖啡',
    enName: 'Coffee',
    property: {
      Health: 3,
      Hunger: 9,
      Sanity: -5,
      Perish: 10
    },
    recipe: [
      ['F_roasted_coffee_beans', 'F_roasted_coffee_beans', 'F_roasted_coffee_beans', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 40,
    Picture: 'F_fresh_fruit_crepes',
    Name: '鲜果薄饼',
    enName: 'Fresh Fruit Crepes',
    property: {
      Health: 60,
      Hunger: 150,
      Sanity: 15,
      Perish: 10
    },
    recipe: [
      ['FC_Fruit', 'F_butter', 'F_honey', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 41,
    Picture: 'F_jelly_O_pop',
    Name: '水母冻',
    enName: 'Jelly-O Pop',
    property: {
      Health: 20,
      Hunger: 12,
      Sanity: 0,
      Perish: 3
    },
    recipe: [
      ['F_jellyfish', 'F_ice', 'F_twigs', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 42,
    Picture: 'F_monster_tartare',
    Name: '怪物鞑靼',
    enName: 'Monster Tartare',
    property: {
      Health: -20,
      Hunger: 62,
      Sanity: -20,
      Perish: 10
    },
    recipe: [
      ['FC_Monster_Meats', 'FC_Monster_Meats', 'FC_Vegetables', 'FC_Eggs']
    ],
    forbid: [],
    Introduce: '只有厨师沃利的便携式砂锅可以制作，能够恢复一些生命和理智。'
  },
  {
    id: 43,
    Picture: 'F_sweet_potato_souffle',
    Name: '甘薯蛋奶酥',
    enName: 'Sweet Potato Souffle',
    property: {
      Health: 20,
      Hunger: 37,
      Sanity: 15,
      Perish: 10
    },
    recipe: [
      ['F_sweet_potato', 'F_sweet_potato', 'FC_Eggs', 'FC_Eggs']
    ],
    forbid: [],
    Introduce: '只有厨师沃利的便携式砂锅可以制作。'
  },
  {
    id: 44,
    Picture: 'F_mussel_bouillabaisse',
    Name: '贻贝普罗旺斯鱼汤',
    enName: 'Mussel Bouillabaisse',
    property: {
      Health: 20,
      Hunger: 37,
      Sanity: 15,
      Perish: 10
    },
    recipe: [
      ['F_mussel', 'F_mussel', 'FC_Vegetables', 'FC_Vegetables']
    ],
    forbid: [],
    Introduce: '只有厨师沃利的便携式砂锅可以制作。'
  },
  {
    id: 45,
    Picture: 'F_seafood_gumbo',
    Name: '海鲜浓汤',
    enName: 'Seafood Gumbo',
    property: {
      Health: 40,
      Hunger: 37,
      Sanity: 20,
      Perish: 10
    },
    recipe: [
      ['FC_Fishes', 'FC_Fishes', 'FC_Fishes', '']
    ],
    forbid: [],
    Introduce: '如果放了一根小树枝，可能会变成鱼条哦。'
  },
  {
    id: 46,
    Picture: 'F_shark_fin_soup',
    Name: '鱼翅汤',
    enName: 'Shark Fin Soup',
    property: {
      Health: 40,
      Hunger: 12,
      Sanity: -10,
      Perish: 10
    },
    recipe: [
      ['F_shark_fin', '', '', '']
    ],
    forbid: [
      { desc: '无', name: 'F_wobster' },
      { desc: '无', name: 'F_butter' },
      { desc: '无', name: 'F_ice' },
      { desc: '无', name: 'F_jellyfish' },
      { desc: '无', name: 'F_seaweed' },
      { desc: '无', name: 'FC_Meats' },
      { desc: '无', name: 'FC_Fishes' }
    ],
    Introduce: ''
  },
  {
    id: 47,
    Picture: 'F_surf_n_turf',
    Name: '海鲜牛排套餐',
    enName: 'Surf \'n\' Turf',
    property: {
      Health: 60,
      Hunger: 37,
      Sanity: 33,
      Perish: 10
    },
    recipe: [
      ['FC_Meats', 'FC_Meats', 'FC_Fishes', 'FC_Fishes']
    ],
    forbid: [
      { desc: '无', name: 'F_ice' }
    ],
    Introduce: ''
  },
  {
    id: 48,
    Picture: 'F_wobster_bisque',
    Name: '龙虾浓汤',
    enName: 'Wobster Bisque',
    property: {
      Health: 60,
      Hunger: 25,
      Sanity: 10,
      Perish: 10
    },
    recipe: [
      ['F_wobster', 'F_ice', '', '']
    ],
    forbid: [],
    Introduce: ''
  },
  {
    id: 49,
    Picture: 'F_wobster_dinner',
    Name: '龙虾大餐',
    enName: 'Wobster Dinner',
    property: {
      Health: 60,
      Hunger: 37,
      Sanity: 33,
      Perish: 10
    },
    recipe: [
      ['F_wobster', 'F_butter', '', '']
    ],
    forbid: [
      { desc: '无', name: 'F_twigs' },
      { desc: '无', name: 'F_ice' },
      { desc: '无', name: 'FC_Monster_Meats' }
    ],
    Introduce: ''
  }
]

export default DISHES
