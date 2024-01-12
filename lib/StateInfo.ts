export interface StateInfoIface {
    startIndices: number[];
    endIndices: number[];
  }

class StateInfo implements StateInfoIface {
    public startIndices: number[];
    public endIndices: number[];
    constructor() {
      this.startIndices = []; 
      this.endIndices = []; 
    }
  }

export default StateInfo;