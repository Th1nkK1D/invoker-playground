class Invoker {
  constructor(spells) {
    this.activeOrbs = [null, null, null];
    this.spells = spells;
  }

  castOrb(orb) {
    const [, ...leftOrbs] = this.activeOrbs;
    this.activeOrbs = [...leftOrbs, orb];
  }

  invoke() {
    if (this.activeOrbs.some(orb => orb === null)) {
      return null;
    }

    return this.spells.find(spell => spell.isFulFilledWith(this.activeOrbs));
  }
}

export default Invoker;
