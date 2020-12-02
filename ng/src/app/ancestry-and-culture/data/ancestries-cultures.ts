import { WeightedAncestry, WeightedOption } from '../interfaces/WeightedOption';

export const ancestries: WeightedAncestry[] = [
  { option: 'Dragonborn', weight: 10, match: ['Dragonborn'] },
  { option: 'Dwarf', weight: 12, match: ['Hill Dwarf', 'Deep Dwarf', 'Rock Dwarf', 'Sea Dwarf'] },
  { option: 'Elf', weight: 12, match: ['High Elf', 'Deep Elf', 'Forest Elf'] },
  { option: 'Gnome', weight: 12, match: ['Rock Gnome', 'Dark Gnome', 'Wood Gnome'] },
  { option: 'Halfling', weight: 12, match: ['Lightfoot Halfling', 'Sturdy Halfling', 'Urban Halfling'] },
  { option: 'Human', weight: 15, match: ['Human'] },
  { option: 'Orc', weight: 9, match: ['Orc'] },
  { option: 'Tiefling', weight: 8, match: ['Tiefling'] },
  { option: 'Aquatic Elf', weight: 8, match: ['Deep Aquatic Elf', 'Sea Aquatic Elf', 'Lake Aquatic Elf'] },
  { option: 'Azer', weight: 4, match: ['Azer'] },
  { option: 'Bugbear', weight: 6, match: ['Bugbear'] },
  { option: 'Cat Folk', weight: 8, match: ['Cat Folk'] },
  { option: 'Gnoll', weight: 8, match: ['Gnoll'] },
  { option: 'Goblin', weight: 8, match: ['Goblin'] },
  { option: 'Insect Folk', weight: 1, match: ['Insect Folk'] },
  { option: 'Kobold', weight: 8, match: ['Kobold'] },
  { option: 'Lizardfolk', weight: 8, match: ['Lizardfolk'] },
  { option: 'Medusan', weight: 4, match: ['Medusan'] },
  { option: 'Minotaur', weight: 4, match: ['Minotaur'] },
  { option: 'Octofolk', weight: 3, match: ['Octofolk'] },
  { option: 'Ratfolk', weight: 8, match: ['Ratfolk'] },
  { option: 'Turtlefolk', weight: 8, match: ['Turtlefolk'] },
  { option: 'Gargoyle', weight: 3, match: ['Gargoyle'] },
  { option: 'Hobgoblin', weight: 6, match: ['Hobgoblin'] },
  { option: 'Leonin', weight: 8, match: ['Leonin'] }
];

export const cultures: WeightedOption[] = [
  { option: 'Dragonborn', weight: 10 },
  { option: 'Hill Dwarf', weight: 10 },
  { option: 'High Elf', weight: 10 },
  { option: 'Rock Gnome', weight: 10 },
  { option: 'Lightfoot Halfling', weight: 10 },
  { option: 'Human', weight: 9 },
  { option: 'Orc', weight: 9 },
  { option: 'Tiefling', weight: 8 },
  { option: 'Deep Aquatic Elf', weight: 10 },
  { option: 'Sea Aquatic Elf', weight: 4 },
  { option: 'Lake Aquatic Elf', weight: 4 },
  { option: 'Azer', weight: 1 },
  { option: 'Bugbear', weight: 25 },
  { option: 'Cat Folk', weight: 8 },
  { option: 'Deep Dwarf', weight: 6 },
  { option: 'Rock Dwarf', weight: 10 },
  { option: 'Sea Dwarf', weight: 10 },
  { option: 'Deep Elf', weight: 6 },
  { option: 'Forest Elf', weight: 8 },
  { option: 'Gnoll', weight: 4 },
  { option: 'Dark Gnome', weight: 6 },
  { option: 'Wood Gnome', weight: 10 },
  { option: 'Goblin', weight: 4 },
  { option: 'Sturdy Halfling', weight: 10 },
  { option: 'Urban Halfling', weight: 6 },
  { option: 'Insect Folk', weight: 1 },
  { option: 'Kobold', weight: 6 },
  { option: 'Lizardfolk', weight: 6 },
  { option: 'Medusan', weight: 4 },
  { option: 'Minotaur', weight: 4 },
  { option: 'Octofolk', weight: 3 },
  { option: 'Ratfolk', weight: 6 },
  { option: 'Turtlefolk', weight: 8 },
  { option: 'Gargoyle', weight: 3 },
  { option: 'Hobgoblin', weight: 4 },
  { option: 'Leonin', weight: 6 }
];

export const geographicCultures: WeightedOption[] = [
  { option: 'Arctic', weight: 10 },
  { option: 'Coastal', weight: 10 },
  { option: 'Desert', weight: 10 },
  { option: 'Forest', weight: 10 },
  { option: 'Grassland', weight: 10 },
  { option: 'Mountain', weight: 10 },
  { option: 'Swamp', weight: 10 },
  { option: 'Subterranean', weight: 10 },
  { option: 'Underwater', weight: 10 },
  { option: 'Urban', weight: 10 }
];

export const planarCultures: WeightedOption[] = [
  { option: 'Astral Plane', weight: 10 },
  { option: 'Elemental Plane (Earth)', weight: 10 },
  { option: 'Elemental Plane (Air)', weight: 10 },
  { option: 'Elemental Plane (Fire)', weight: 10 },
  { option: 'Elemental Plane (Water)', weight: 10 },
  { option: 'Ethereal Plane', weight: 10 },
  { option: 'Lower Planes (Abyssal)', weight: 10 },
  { option: 'Lower Planes (Infernal)', weight: 10 },
  { option: 'Outer Realms', weight: 10 },
  { option: 'Plane of Faerie', weight: 10 },
  { option: 'Plane of Shadows', weight: 10 },
  { option: 'Upper Planes', weight: 10 }
];