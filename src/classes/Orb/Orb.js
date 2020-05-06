class Orb {
  constructor(name, key, color) {
    this.name = name;
    this.key = key;
    this.color = color;
  }

  isEqualTo({ key }) {
    return this.key === key;
  }
}

export default Orb;
