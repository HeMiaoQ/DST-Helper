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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    id: 33,
    Picture: 'F_banaba_pop',
    Name: '香蕉船',
    enName: 'Banaba Pop',
    property: {
      Health: 20,
      Hunger: 12,
      Sanity: 33,
      Perish: 3
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    id: 41,
    Picture: 'F_jelly-O_pop',
    Name: '水母冻',
    enName: 'Jelly-O Pop',
    property: {
      Health: 20,
      Hunger: 12,
      Sanity: 0,
      Perish: 3
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    id: 47,
    Picture: 'F_surf_\'n\'_turf',
    Name: '海鲜牛排套餐',
    enName: 'Surf \'n\' Turf',
    property: {
      Health: 60,
      Hunger: 37,
      Sanity: 33,
      Perish: 10
    }
  }
]

export default DISHES
