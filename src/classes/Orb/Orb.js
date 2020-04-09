class Orb {
  constructor(name, key) {
    this.name = name;
    this.key = key;
  }

  isEqualTo({ key }) {
    return this.key === key;
  }
}

export default Orb;
