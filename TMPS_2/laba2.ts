interface ITree {
  create(heigh: number): void;
}

class TreeProxy implements ITree {
  private tree: Tree;

  constructor() {
    this.tree = new Tree();
  }

  create(heigh: number): void {
    console.log('invoke "tree create" method')
    this.tree.create(heigh);
  }
}

class Tree implements ITree {
  create(heigh: number): void {
    console.log(`create tree with heigh ${heigh}m`)
  }
}

class Branch {
  create(quantity: number) {
    let branches = []
    for(let i = 0; i <= quantity; i++) {
      branches.push(i)
    }
    console.log(`${quantity} branches were created`);
    return branches;
  }
}

class Needle {
  create(quantity: number, branches: number) {
    let filledBranches = {}
    for(let i = 0; i <= branches; i++) {
      filledBranches[i] = quantity;
    }
    console.log(`${branches*quantity} needles were added to branches`);
    return filledBranches
  }
}

class PopulateTree {
  private _branch: Branch;
  private _needle: Needle;

  constructor() {
    this._branch = new Branch();
    this._needle = new Needle();
  }

  create(branches, needles) {
    this._branch.create(branches);
    this._needle.create(needles,branches);
  }
}

interface Action {
  hangAToy(toy: Object, branches: number): void;
}

class Toy implements Action {
  private color: string;
  number: number;
  branch = {}
  constructor(set: string, number: number) {
    this.color = set;
    this.number = number;
    console.log(`new toy ${number} with color ${set}`);
  }

  hangAToy(toy: number, branch: number) {
      this.branch[branch] = toy;
      console.log(`${this.branch} was hanged up`)
    return this.branch;
  }
}

class ToyFactory {
  private static groups: { [set: string]: Toy } = {}

  public static getToy(set: string, num: number) {
    let toy = ToyFactory.groups[set];
    if (!toy) {
      toy = new Toy(set, num);
      ToyFactory.groups[set] = toy;
    } else {
      toy.number = num;
      console.log(`shared toy ${toy.number}`);
    }
    return toy;
  }
}

interface EuropeanCharger {
  charge220V(newParam: number): void;
}

class ChargerAdapter implements EuropeanCharger {
  charge220V(newParam: number): void {
    const old = new ChinezeCharger();
    let workInEurope = old.charge130V(130)/130 -1 + newParam;
    console.log(`working everywhere on ${workInEurope}V`)
  };
}

class ChinezeCharger {
  charge130V(oldParam: number){ 
    console.log(`Working on +-${oldParam}V`)
    return oldParam;
  };
}

class Garland {
  constructor(private executeObject: Color,private charger: ChargerAdapter) {
  }
  create(): void {
  }
}

class StarGarland extends Garland {
  create(): void {
    console.log('Creating StarGarland')
    super.create();
  }
}

class RoundGarland extends Garland {
  create(): void {
    console.log('Creating RoundGarland')
    super.create();
  }
}

interface Color {
  color(): void;
}

class White implements Color {
  color(): void {
    console.log('White');
  }
}

class MultiColor implements Color {
  color(): void {
    console.log('Multicolor!!');
  }
}

(function main() {
  const proxy = new TreeProxy();
  proxy.create(2);
  const needles = 50;
  const branches = 15;
  const operation = new PopulateTree();
  operation.create(branches,needles);
  const adapter = new ChargerAdapter();
  adapter.charge220V(220);
  const createStarGarland = new StarGarland(new White(), new ChargerAdapter());
  const createRoundGarland = new RoundGarland(new MultiColor(),new ChargerAdapter());
  createStarGarland.create();
  createRoundGarland.create();
  const start = Math.floor(Date.now());
  for (let i = 0; i < 1000000; i++) {
    ToyFactory.getToy('red', i);
    let toy = new Toy('red', i);
    
    toy.hangAToy(i,5)
  }
  const end = Math.floor(Date.now());
  console.log(end - start);
})();
