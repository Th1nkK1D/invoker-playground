class Spell {
  static sortOrbs(orbs) {
    return [...orbs].sort((a, b) => a.key.localeCompare(b.key));
  }

  constructor(name, requiredOrbs, icon = '') {
    this.name = name;
    this.icon = icon;
    this.requiredOrbs = Spell.sortOrbs(requiredOrbs).map(orb => orb);
  }

  isFulFilledWith(orbs) {
    return Spell.sortOrbs(orbs)
      .every((orb, i) => orb.isEqualTo(this.requiredOrbs[i]));
  }

  isEqualTo(spell) {
    return spell && spell.name && spell.name === this.name;
  }
}

export default Spell;
