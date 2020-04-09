class Skill {
  static sortOrbs(orbs) {
    return orbs.sort((a, b) => a.key.localeCompare(b.key));
  }

  constructor(name, requiredOrbs) {
    this.name = name;
    this.requiredOrbs = Skill.sortOrbs(requiredOrbs);
  }

  isFulFilledWith(orbs) {
    return Skill.sortOrbs(orbs)
      .every((orb, i) => orb.isEqualTo(this.requiredOrbs[i]));
  }
}

export default Skill;
