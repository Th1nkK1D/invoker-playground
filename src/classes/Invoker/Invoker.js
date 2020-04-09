class Invoker {
  constructor(skills) {
    this.activeOrbs = [null, null, null];
    this.skills = skills;
  }

  castOrb(orb) {
    const [, ...leftOrbs] = this.activeOrbs;
    this.activeOrbs = [...leftOrbs, orb];
  }

  invoke() {
    if (this.activeOrbs.some(orb => orb === null)) {
      return null;
    }

    return this.skills.find(skill => skill.isFulFilledWith(this.activeOrbs));
  }
}

export default Invoker;
