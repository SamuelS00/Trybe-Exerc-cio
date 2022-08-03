class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo?: string;
  
  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  };

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  turnOn(): void {
    console.log(`
      ${this._brand} tv and resolution size ${this._size} resolution with 
      connections ${this._connections} connected`
    )
  }
};

const tv1 = new Tv('Samsung', 30, 16, ['HDMI', 'Ethernet', 'Wifi']);

console.log(tv1);